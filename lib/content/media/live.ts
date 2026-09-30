import type {
  MediaLiveStatus,
  MediaProperty,
} from './types';

import type { LiveBroadcastSession } from '@/lib/live/types';

const liveBroadcasts: LiveBroadcastSession[] = [];

export function getAllLiveBroadcasts() {
  return liveBroadcasts;
}

export function getLiveBroadcastsByProperty(
  property: MediaProperty,
) {
  return liveBroadcasts.filter(
    (broadcast) => broadcast.property === property,
  );
}

export function getLiveBroadcastById(
  id: string,
) {
  return liveBroadcasts.find(
    (broadcast) => broadcast.id === id,
  );
}

export function getLiveBroadcastsByStatus(
  status: MediaLiveStatus,
) {
  return liveBroadcasts.filter(
    (broadcast) => broadcast.status === status,
  );
}

export function getCurrentLiveBroadcasts() {
  return getLiveBroadcastsByStatus('live');
}

export function getUpcomingLiveBroadcasts() {
  return getLiveBroadcastsByStatus('upcoming');
}
