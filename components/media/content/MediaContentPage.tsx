import Link from 'next/link';
import { notFound } from 'next/navigation';

import ArticleBody from './ArticleBody';
import ArticleHero from './ArticleHero';
import ShareContent from './ShareContent';

import {
  getMediaContentBySlug,
  mediaProperties,
} from '@/lib/content/media';

import type { MediaProperty } from '@/lib/content/media';

type MediaContentPageProps = {
  property: MediaProperty;
  slug: string;
};

const SITE_URL = 'https://nexushub-media.vercel.app';

export default function MediaContentPage({
  property,
  slug,
}: MediaContentPageProps) {
  const content = getMediaContentBySlug(property, slug);

  if (!content) {
    notFound();
  }

  const canonicalUrl = `${SITE_URL}/${property}/${content.slug}`;

  return (
    <>
      <ArticleHero content={content} />

      <main className="bg-white">
        <div className="mx-auto max-w-7xl px-6 pb-20 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-16">
            <article className="min-w-0">
              <ArticleBody blocks={content.content} />
            </article>

            <aside className="lg:pt-2">
              <div className="sticky top-28 rounded-2xl border border-[#050A30]/10 bg-[#050A30]/[0.025] p-5 sm:p-6">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#050A30]/50">
                  Share
                </p>

                <ShareContent
                  title={content.title}
                  url={canonicalUrl}
                  className="mt-4"
                />

                <div className="mt-6 border-t border-[#050A30]/10 pt-6">
                  <p className="text-sm font-semibold text-[#050A30]">
                    {mediaProperties[property].label}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-[#050A30]/60">
                    Explore more content from this media channel.
                  </p>

                  <Link
                    href={mediaProperties[property].href}
                    className="mt-4 inline-flex text-sm font-semibold text-cyan-700 transition hover:text-[#050A30]"
                  >
                    Explore channel →
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
