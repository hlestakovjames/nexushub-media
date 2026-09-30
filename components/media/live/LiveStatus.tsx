import type { MediaLiveStatus } from '@/lib/content/media';

type LiveStatusProps = {
  status: MediaLiveStatus;
  className?: string;
};

const statusLabels: Record<MediaLiveStatus, string> = {
  live: 'Live now',
  upcoming: 'Upcoming',
  ended: 'Ended',
};

export default function LiveStatus({
  status,
  className = '',
}: LiveStatusProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] ${
        status === 'live'
          ? 'bg-red-500 text-white'
          : status === 'upcoming'
            ? 'bg-cyan-100 text-cyan-800'
            : 'bg-[#050A30]/10 text-[#050A30]/65'
      } ${className}`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          status === 'live'
            ? 'animate-pulse bg-white'
            : status === 'upcoming'
              ? 'bg-cyan-600'
              : 'bg-[#050A30]/40'
        }`}
      />

      {statusLabels[status]}
    </span>
  );
}
