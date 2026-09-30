import Image from 'next/image';
import Link from 'next/link';

import LiveStatus from './LiveStatus';

import type { LiveBroadcastSession } from '@/lib/live/types';

type LiveBroadcastCardProps = {
  stream: LiveBroadcastSession;
  href?: string;
};

export default function LiveBroadcastCard({
  stream,
  href = '/nexus-hub-tv/live',
}: LiveBroadcastCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-[#050A30]/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Link href={href} className="block">
        <div className="relative aspect-video overflow-hidden bg-[#050A30]">
          {stream.poster ? (
            <Image
              src={stream.poster.src}
              alt={stream.poster.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          ) : null}

          <div className="absolute inset-0 bg-gradient-to-t from-[#050A30]/75 via-transparent to-transparent" />

          <div className="absolute left-4 top-4">
            <LiveStatus status={stream.status} />
          </div>

          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-xl font-semibold leading-tight text-white">
              {stream.title}
            </h3>
          </div>
        </div>

        {stream.description ? (
          <div className="p-5">
            <p className="line-clamp-3 text-sm leading-6 text-[#050A30]/65">
              {stream.description}
            </p>
          </div>
        ) : null}
      </Link>
    </article>
  );
}
