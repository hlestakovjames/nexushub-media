import {
  startLiveBroadcast,
} from '@/lib/live/service';

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
  {
    params,
  }: {
    params: Promise<{
      id: string;
    }>;
  },
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
    const { id } = await params;

    const broadcast =
      await startLiveBroadcast(id);

    return Response.json({
      broadcast,
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : 'Unable to start the live broadcast.';

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
