import type {
  LiveBroadcastInput,
  LiveBroadcastSession,
} from './types';

export interface LiveBroadcastProvider {
  createBroadcast(
    input: LiveBroadcastInput,
  ): Promise<LiveBroadcastSession>;

  startBroadcast(
    sessionId: string,
  ): Promise<LiveBroadcastSession>;

  endBroadcast(
    sessionId: string,
  ): Promise<LiveBroadcastSession>;

  getBroadcast(
    sessionId: string,
  ): Promise<LiveBroadcastSession | null>;
}
