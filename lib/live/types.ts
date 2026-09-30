import type {
  MediaImage,
  MediaLiveIngestMethod,
  MediaLiveProvider,
  MediaLiveStatus,
  MediaProperty,
} from '@/lib/content/media';

export type LiveBroadcastVisibility =
  | 'public'
  | 'unlisted'
  | 'private';

export type LiveBroadcastInput = {
  title: string;
  description?: string;

  property: MediaProperty;

  ingestMethod: MediaLiveIngestMethod;

  visibility: LiveBroadcastVisibility;

  scheduledStart?: string;

  poster?: MediaImage;

  featured?: boolean;
};

export type LiveBroadcastSession = {
  id: string;

  property: MediaProperty;

  title: string;
  description?: string;

  ingestMethod: MediaLiveIngestMethod;

  provider: MediaLiveProvider;

  /**
   * Identifier of the corresponding resource
   * owned by the streaming provider.
   *
   * Example:
   * Cloudflare Live Input UID.
   */
  providerResourceId?: string;

  visibility: LiveBroadcastVisibility;

  status: MediaLiveStatus;

  poster?: MediaImage;

  featured?: boolean;

  scheduledStart?: string;
  startedAt?: string;
  endedAt?: string;

  /**
   * Infrastructure-only fields.
   *
   * These must never be exposed through public
   * viewer APIs.
   */
  ingestUrl?: string;
  streamKey?: string;

  playbackUrl?: string;

  replayContentId?: string;

  createdAt?: string;
  updatedAt?: string;
};

export type LiveBroadcastPublicSession = Omit<
  LiveBroadcastSession,
  'ingestUrl' | 'streamKey'
>;

export type LiveBroadcastStudioSession =
  LiveBroadcastSession;

export type LiveBroadcastCapabilities = {
  browserCamera: boolean;
  mobileCamera: boolean;
  externalEncoder: boolean;
};

export const defaultLiveBroadcastCapabilities: LiveBroadcastCapabilities = {
  browserCamera: true,
  mobileCamera: true,
  externalEncoder: true,
};
