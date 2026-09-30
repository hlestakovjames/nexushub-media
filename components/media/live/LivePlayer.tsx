import type { LiveBroadcastSession } from '@/lib/live/types';

type LivePlayerProps = {
  stream: LiveBroadcastSession;
  className?: string;
};

export default function LivePlayer({
  stream,
  className = '',
}: LivePlayerProps) {
  const isLive = stream.status === 'live';

  return (
    <section className={className}>
      <div className="relative aspect-video overflow-hidden rounded-2xl bg-[#050A30]">
        {stream.poster ? (
          <img
            src={stream.poster.src}
            alt={stream.poster.alt}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : null}

        <div className="absolute inset-0 flex items-center justify-center bg-[#050A30]/45">
          <div className="text-center text-white">
            <span
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] ${
                isLive
                  ? 'bg-red-500 text-white'
                  : stream.status === 'upcoming'
                    ? 'bg-white/15 text-white backdrop-blur-sm'
                    : 'bg-white/15 text-white/80 backdrop-blur-sm'
              }`}
            >
              <span
                className={`h-2 w-2 rounded-full ${
                  isLive ? 'animate-pulse bg-white' : 'bg-white/60'
                }`}
              />

              {isLive
                ? 'Live'
                : stream.status === 'upcoming'
                  ? 'Upcoming'
                  : 'Replay'}
            </span>

            <h2 className="mt-5 text-2xl font-semibold sm:text-3xl">
              {stream.title}
            </h2>

            {stream.status === 'upcoming' &&
            stream.scheduledStart ? (
              <p className="mt-3 text-sm text-white/70">
                Scheduled for{' '}
                {new Intl.DateTimeFormat('en-KE', {
                  dateStyle: 'medium',
                  timeStyle: 'short',
                }).format(new Date(stream.scheduledStart))}
              </p>
            ) : null}

            {stream.status === 'ended' ? (
              <p className="mt-3 text-sm text-white/70">
                This live broadcast has ended.
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
