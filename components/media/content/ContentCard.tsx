import Image from 'next/image';
import Link from 'next/link';
import {
  Camera,
  Headphones,
  Images,
  Play,
  Radio,
} from 'lucide-react';

import ContentMeta from './ContentMeta';

import type {
  MediaContent,
  MediaContentType,
} from '@/lib/content/media';

type ContentCardProps = {
  content: MediaContent;
  className?: string;
};

const typeLabels: Record<MediaContentType, string> = {
  article: 'Article',
  video: 'Video',
  podcast: 'Podcast',
  gallery: 'Gallery',
  mixed: 'Mixed Media',
};

function ContentTypeIcon({
  type,
}: {
  type: MediaContentType;
}) {
  if (type === 'video') {
    return <Play size={16} fill="currentColor" aria-hidden="true" />;
  }

  if (type === 'podcast') {
    return <Headphones size={16} aria-hidden="true" />;
  }

  if (type === 'gallery') {
    return <Images size={16} aria-hidden="true" />;
  }

  if (type === 'mixed') {
    return <Radio size={16} aria-hidden="true" />;
  }

  return <Camera size={16} aria-hidden="true" />;
}

export default function ContentCard({
  content,
  className = '',
}: ContentCardProps) {
  const contentHref = `/${content.property}/${content.slug}`;

  return (
    <article
      className={`group overflow-hidden rounded-2xl border border-[#050A30]/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl ${className}`}
    >
      <Link
        href={contentHref}
        className="block focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-inset"
        aria-label={`Read ${content.title}`}
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-[#050A30]">
          {content.heroImage ? (
            <Image
              src={content.heroImage.src}
              alt={content.heroImage.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-[#050A30] text-white/60">
              <Camera
                size={36}
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-[#050A30]/75 via-transparent to-transparent" />

          <div className="absolute left-4 top-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-[#050A30] shadow-sm">
              <ContentTypeIcon type={content.type} />
              {typeLabels[content.type]}
            </span>
          </div>

          {content.featured ? (
            <span className="absolute bottom-4 left-4 rounded-full bg-cyan-400 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-[#050A30]">
              Featured
            </span>
          ) : null}
        </div>
      </Link>

      <div className="p-5 sm:p-6">
        <ContentMeta
          content={content}
          className="mb-4 text-xs"
        />

        <Link
          href={contentHref}
          className="block rounded-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
        >
          <h3 className="text-xl font-semibold leading-tight tracking-tight text-[#050A30] transition group-hover:text-cyan-700 sm:text-2xl">
            {content.title}
          </h3>

          <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#050A30]/65 sm:text-base">
            {content.excerpt}
          </p>
        </Link>

        {content.tags?.length ? (
          <div className="mt-5 flex flex-wrap gap-2">
            {content.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[#050A30]/5 px-2.5 py-1 text-xs font-medium text-[#050A30]/65"
              >
                #{tag}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}
