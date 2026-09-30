import {
  createLiveBroadcast,
  validateLiveBroadcastInput,
} from '@/lib/live/service';

import type { LiveBroadcastInput } from '@/lib/live/types';

function hasLiveStudioAccess(
  request: Request,
) {
  if (process.env.NODE_ENV !== 'production') {
    return true;
  }

  const accessKey =
    process.env.LIVE_STUDIO_ACCESS_KEY;

  if (!accessKey) {
    return false;
  }

  return (
    request.headers.get(
      'x-nexus-live-studio',
    ) === accessKey
  );
}

export async function POST(
  request: Request,
) {
  if (!hasLiveStudioAccess(request)) {
    return Response.json(
      {
        error:
          'Live Studio access is required.',
      },
      {
        status: 401,
      },
    );
  }

  try {
    const body =
      (await request.json()) as Partial<LiveBroadcastInput>;

    const input =
      validateLiveBroadcastInput(body);

    const broadcast =
      await createLiveBroadcast(input);

    return Response.json({
      broadcast,
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : 'Unable to create the live broadcast.';

    return Response.json(
      {
        error: message,
      },
      {
        status: 400,
      },
    );
  }
}
