import type {
  LiveBroadcastInput,
  LiveBroadcastSession,
} from './types';

import type {
  MediaLiveStatus,
} from '@/lib/content/media';

type CloudflareLiveInput = {
  uid: string;
  created?: string;
  enabled?: boolean;
  meta?: Record<string, unknown>;
  rtmps?: {
    url?: string;
    streamKey?: string;
  };
  webRTC?: {
    url?: string;
  };
  webRTCPlayback?: {
    url?: string;
  };
};

type CloudflareVideo = {
  uid?: string;
  status?: {
    state?: string;
  };
  playback?: {
    hls?: string;
    dash?: string;
  };
};

type CloudflareResponse<T> = {
  success: boolean;
  errors: Array<{
    code: number;
    message: string;
  }>;
  result?: T;
};

function getConfig() {
  const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
  const apiToken = process.env.CLOUDFLARE_API_TOKEN;

  if (!accountId || !apiToken) {
    throw new Error(
      'Cloudflare Stream is not configured. Set CLOUDFLARE_ACCOUNT_ID and CLOUDFLARE_API_TOKEN.',
    );
  }

  return {
    accountId,
    apiToken,
  };
}

function apiUrl(
  accountId: string,
  path: string,
) {
  return `https://api.cloudflare.com/client/v4/accounts/${accountId}/stream${path}`;
}

async function cloudflareRequest<T>(
  path: string,
  init?: RequestInit,
): Promise<T> {
  const { accountId, apiToken } = getConfig();

  const response = await fetch(
    apiUrl(accountId, path),
    {
      ...init,
      headers: {
        Authorization: `Bearer ${apiToken}`,
        'Content-Type': 'application/json',
        ...(init?.headers ?? {}),
      },
      cache: 'no-store',
    },
  );

  let payload: CloudflareResponse<T>;

  try {
    payload =
      (await response.json()) as CloudflareResponse<T>;
  } catch {
    throw new Error(
      `Cloudflare returned an invalid response (${response.status}).`,
    );
  }

  if (!response.ok || !payload.success) {
    const message =
      payload.errors
        ?.map((error) => error.message)
        .join('; ') ||
      `Cloudflare API request failed with status ${response.status}.`;

    throw new Error(message);
  }

  if (payload.result === undefined) {
    throw new Error(
      'Cloudflare API returned no result.',
    );
  }

  return payload.result;
}

function mapStatus(
  input: CloudflareLiveInput,
  videos: CloudflareVideo[],
): MediaLiveStatus {
  const activeVideo = videos.find(
    (video) =>
      video.status?.state === 'live-inprogress',
  );

  if (activeVideo) {
    return 'live';
  }

  if (input.enabled === false) {
    return 'ended';
  }

  return 'upcoming';
}

function getProperty(
  input: CloudflareLiveInput,
): LiveBroadcastSession['property'] {
  const property = input.meta?.property;

  if (
    property === 'nexus-hub-tv' ||
    property === 'nhtv-football' ||
    property === 'nhtv-stories' ||
    property === 'nhtv-voices'
  ) {
    return property;
  }

  return 'nexus-hub-tv';
}

function getVisibility(
  input: CloudflareLiveInput,
): LiveBroadcastSession['visibility'] {
  const visibility = input.meta?.visibility;

  if (
    visibility === 'public' ||
    visibility === 'unlisted' ||
    visibility === 'private'
  ) {
    return visibility;
  }

  return 'public';
}

function getIngestMethod(
  input: CloudflareLiveInput,
): LiveBroadcastInput['ingestMethod'] {
  const ingestMethod =
    input.meta?.ingestMethod;

  if (
    ingestMethod === 'browser' ||
    ingestMethod === 'mobile' ||
    ingestMethod === 'external-encoder'
  ) {
    return ingestMethod;
  }

  return 'external-encoder';
}

function buildSession(
  input: CloudflareLiveInput,
  videos: CloudflareVideo[],
): LiveBroadcastSession {
  const status = mapStatus(
    input,
    videos,
  );

  const activeVideo = videos.find(
    (video) =>
      video.status?.state ===
      'live-inprogress',
  );

  const replayVideo = videos.find(
    (video) =>
      video.status?.state === 'ready',
  );

  const ingestMethod =
    getIngestMethod(input);

  return {
    id: input.uid,
    property: getProperty(input),
    title:
      typeof input.meta?.name === 'string'
        ? input.meta.name
        : 'Nexus Hub Live',
    description:
      typeof input.meta?.description === 'string'
        ? input.meta.description
        : undefined,
    ingestMethod,
    provider: 'cloudflare',
    visibility: getVisibility(input),
    status,
    scheduledStart:
      typeof input.meta?.scheduledStart ===
      'string'
        ? input.meta.scheduledStart
        : undefined,
    ingestUrl:
      ingestMethod === 'external-encoder'
        ? input.rtmps?.url
        : input.webRTC?.url,
    /*
     * Stream keys are intentionally not returned
     * from ordinary provider reads.
     *
     * They are only exposed during broadcast
     * creation for the Studio workflow.
     */
    playbackUrl:
      activeVideo?.playback?.hls ??
      input.webRTCPlayback?.url,
    replayContentId:
      replayVideo?.uid,
  };
}

export class CloudflareLiveProvider {
  async createBroadcast(
    input: LiveBroadcastInput,
  ): Promise<LiveBroadcastSession> {
    const result =
      await cloudflareRequest<CloudflareLiveInput>(
        '/live_inputs',
        {
          method: 'POST',
          headers: {
            'Idempotency-Key': crypto.randomUUID(),
          },
          body: JSON.stringify({
            enabled: true,
            meta: {
              name: input.title,
              description: input.description,
              property: input.property,
              visibility: input.visibility,
              ingestMethod: input.ingestMethod,
              scheduledStart:
                input.scheduledStart,
            },
            preferLowLatency: true,
            recording: {
              mode: 'automatic',
              requireSignedURLs: false,
              timeoutSeconds: 0,
            },
          }),
        },
      );

    const ingestUrl =
      input.ingestMethod === 'browser' ||
      input.ingestMethod === 'mobile'
        ? result.webRTC?.url
        : result.rtmps?.url;

    const streamKey =
      input.ingestMethod ===
      'external-encoder'
        ? result.rtmps?.streamKey
        : undefined;

    return {
      id: result.uid,
      property: input.property,
      title: input.title,
      description: input.description,
      ingestMethod: input.ingestMethod,
      provider: 'cloudflare',
      visibility: input.visibility,
      status: 'upcoming',
      scheduledStart:
        input.scheduledStart,
      ingestUrl,
      streamKey,
      playbackUrl:
        result.webRTCPlayback?.url,
    };
  }

  async startBroadcast(
    sessionId: string,
  ): Promise<LiveBroadcastSession> {
    /*
     * Cloudflare Live Inputs begin receiving a live
     * broadcast when the broadcaster connects to the
     * configured ingest endpoint.
     *
     * There is therefore no separate "start" API
     * operation here. We read the current provider
     * state after the broadcaster has connected.
     */
    const session =
      await this.getBroadcast(sessionId);

    if (!session) {
      throw new Error(
        `Live broadcast "${sessionId}" was not found.`,
      );
    }

    return session;
  }

  async endBroadcast(
    sessionId: string,
  ): Promise<LiveBroadcastSession> {
    await cloudflareRequest<CloudflareLiveInput>(
      `/live_inputs/${sessionId}`,
      {
        method: 'PUT',
        body: JSON.stringify({
          enabled: false,
        }),
      },
    );

    const session =
      await this.getBroadcast(sessionId);

    if (!session) {
      throw new Error(
        `Live broadcast "${sessionId}" was not found after ending.`,
      );
    }

    return session;
  }

  async getBroadcast(
    sessionId: string,
  ): Promise<LiveBroadcastSession | null> {
    try {
      const input =
        await cloudflareRequest<CloudflareLiveInput>(
          `/live_inputs/${sessionId}`,
          {
            method: 'GET',
          },
        );

      const videos =
        await cloudflareRequest<CloudflareVideo[]>(
          `/live_inputs/${sessionId}/videos`,
          {
            method: 'GET',
          },
        );

      return buildSession(
        input,
        videos,
      );
    } catch (error) {
      if (
        error instanceof Error &&
        (
          error.message
            .toLowerCase()
            .includes('not found') ||
          error.message
            .toLowerCase()
            .includes('does not exist')
        )
      ) {
        return null;
      }

      throw error;
    }
  }
}

export const cloudflareLiveProvider =
  new CloudflareLiveProvider();
