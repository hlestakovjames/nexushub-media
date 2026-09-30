import Image from 'next/image';
import Link from 'next/link';

import ContentMeta from './ContentMeta';

import type { MediaContent } from '@/lib/content/media';

type ArticleHeroProps = {
  content: Pick<
    MediaContent,
    | 'property'
    | 'category'
    | 'title'
    | 'excerpt'
    | 'heroImage'
    | 'author'
    | 'publishedAt'
    | 'updatedAt'
    | 'readingTimeMinutes'
  >;
};

export default function ArticleHero({
  content,
}: ArticleHeroProps) {
  return (
    <header className="bg-white">
      <div className="mx-auto max-w-7xl px-6 pb-10 pt-12 sm:px-8 sm:pb-14 sm:pt-16 lg:px-12 lg:pt-20">
        <div className="max-w-4xl">
          <Link
            href={`/${content.property}`}
            className="inline-flex items-center text-sm font-semibold text-cyan-700 transition hover:text-[#050A30]"
          >
            ← Back to {content.property === 'nexus-hub-tv'
              ? 'Nexus Hub TV'
              : content.property === 'nhtv-football'
                ? 'NHTV Football'
                : content.property === 'nhtv-stories'
                  ? 'NHTV Stories'
                  : 'NHTV Voices'}
          </Link>

          <div className="mt-8">
            <ContentMeta content={content} />
          </div>

          <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-[#050A30] sm:text-5xl lg:text-6xl">
            {content.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#050A30]/65 sm:text-xl sm:leading-9">
            {content.excerpt}
          </p>
        </div>
      </div>

      {content.heroImage ? (
        <div className="mx-auto max-w-7xl px-6 pb-12 sm:px-8 sm:pb-16 lg:px-12">
          <figure className="relative aspect-[16/8] overflow-hidden rounded-3xl bg-[#050A30]">
            <Image
              src={content.heroImage.src}
              alt={content.heroImage.alt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1280px"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#050A30]/30 via-transparent to-transparent" />
          </figure>

          {content.heroImage.credit ? (
            <p className="mt-3 text-xs text-[#050A30]/45">
              Image: {content.heroImage.credit}
            </p>
          ) : null}
        </div>
      ) : null}
    </header>
  );
}
