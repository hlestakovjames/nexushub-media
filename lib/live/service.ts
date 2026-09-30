import {
  cloudflareLiveProvider,
} from './cloudflare';

import type {
  LiveBroadcastInput,
  LiveBroadcastPublicSession,
  LiveBroadcastSession,
  LiveBroadcastStudioSession,
} from './types';

import type {
  MediaLiveIngestMethod,
  MediaProperty,
} from '@/lib/content/media';

function getProvider() {
  return cloudflareLiveProvider;
}

export function toPublicLiveBroadcast(
  broadcast: LiveBroadcastSession,
): LiveBroadcastPublicSession {
  const {
    streamKey: _streamKey,
    ingestUrl: _ingestUrl,
    ...publicBroadcast
  } = broadcast;

  return publicBroadcast;
}

export function validateLiveBroadcastInput(
  input: Partial<LiveBroadcastInput>,
): LiveBroadcastInput {
  const title =
    typeof input.title === 'string'
      ? input.title.trim()
      : '';

  if (!title) {
    throw new Error(
      'Broadcast title is required.',
    );
  }

  if (title.length > 160) {
    throw new Error(
      'Broadcast title must be 160 characters or fewer.',
    );
  }

  const property =
    input.property;

  if (
    property !== 'nexus-hub-tv' &&
    property !== 'nhtv-football' &&
    property !== 'nhtv-stories' &&
    property !== 'nhtv-voices'
  ) {
    throw new Error(
      'A valid Media channel is required.',
    );
  }

  const ingestMethod =
    input.ingestMethod;

  if (
    ingestMethod !== 'browser' &&
    ingestMethod !== 'mobile' &&
    ingestMethod !== 'external-encoder'
  ) {
    throw new Error(
      'A valid broadcast method is required.',
    );
  }

  const visibility =
    input.visibility;

  if (
    visibility !== 'public' &&
    visibility !== 'unlisted' &&
    visibility !== 'private'
  ) {
    throw new Error(
      'A valid broadcast visibility is required.',
    );
  }

  const description =
    typeof input.description === 'string'
      ? input.description.trim()
      : undefined;

  if (
    description &&
    description.length > 5000
  ) {
    throw new Error(
      'Broadcast description must be 5000 characters or fewer.',
    );
  }

  const scheduledStart =
    typeof input.scheduledStart === 'string' &&
    input.scheduledStart.trim()
      ? input.scheduledStart.trim()
      : undefined;

  if (scheduledStart) {
    const parsedDate =
      new Date(scheduledStart);

    if (
      Number.isNaN(
        parsedDate.getTime(),
      )
    ) {
      throw new Error(
        'Scheduled start must be a valid date and time.',
      );
    }
  }

  return {
    title,
    description,
    property:
      property as MediaProperty,
    ingestMethod:
      ingestMethod as MediaLiveIngestMethod,
    visibility,
    scheduledStart,
  };
}

export async function createLiveBroadcast(
  input: LiveBroadcastInput,
): Promise<LiveBroadcastStudioSession> {
  return getProvider().createBroadcast(
    input,
  );
}

export async function getLiveBroadcast(
  id: string,
): Promise<LiveBroadcastStudioSession | null> {
  if (!id.trim()) {
    return null;
  }

  return getProvider().getBroadcast(
    id.trim(),
  );
}

export async function startLiveBroadcast(
  id: string,
): Promise<LiveBroadcastStudioSession> {
  if (!id.trim()) {
    throw new Error(
      'Broadcast ID is required.',
    );
  }

  return getProvider().startBroadcast(
    id.trim(),
  );
}

export async function endLiveBroadcast(
  id: string,
): Promise<LiveBroadcastStudioSession> {
  if (!id.trim()) {
    throw new Error(
      'Broadcast ID is required.',
    );
  }

  return getProvider().endBroadcast(
    id.trim(),
  );
}
