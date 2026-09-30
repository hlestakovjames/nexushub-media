import Link from 'next/link';

import {
  mediaCategories,
  mediaProperties,
} from '@/lib/content/media';

import type { MediaContent } from '@/lib/content/media';

type ContentMetaProps = {
  content: Pick<
    MediaContent,
    | 'property'
    | 'category'
    | 'author'
    | 'publishedAt'
    | 'updatedAt'
    | 'readingTimeMinutes'
  >;
  className?: string;
};

function formatDate(value: string) {
  return new Intl.DateTimeFormat('en-KE', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(new Date(value));
}

export default function ContentMeta({
  content,
  className = '',
}: ContentMetaProps) {
  const property = mediaProperties[content.property];
  const category = mediaCategories[content.category];

  return (
    <div
      className={`flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-[#050A30]/60 ${className}`}
    >
      <Link
        href={property.href}
        className="font-semibold text-[#050A30] transition hover:text-cyan-600"
      >
        {property.label}
      </Link>

      <span aria-hidden="true">•</span>

      <span>{category.label}</span>

      {content.author?.name ? (
        <>
          <span aria-hidden="true">•</span>

          <span>
            By{' '}
            <span className="font-medium text-[#050A30]">
              {content.author.name}
            </span>
          </span>
        </>
      ) : null}

      <span aria-hidden="true">•</span>

      <time dateTime={content.publishedAt}>
        {formatDate(content.publishedAt)}
      </time>

      {content.updatedAt ? (
        <>
          <span aria-hidden="true">•</span>

          <span>Updated {formatDate(content.updatedAt)}</span>
        </>
      ) : null}

      {content.readingTimeMinutes ? (
        <>
          <span aria-hidden="true">•</span>

          <span>{content.readingTimeMinutes} min read</span>
        </>
      ) : null}
    </div>
  );
}
