import type { Metadata } from 'next';

import MediaContentPage from '@/components/media/content/MediaContentPage';
import { getMediaContentBySlug } from '@/lib/content/media';

import type { MediaProperty } from '@/lib/content/media';

const property: MediaProperty = 'nhtv-football';

const SITE_URL = 'https://nexushub-media.vercel.app';

function getAbsoluteImageUrl(src?: string) {
  if (!src) {
    return `${SITE_URL}/images/media/hero/media-hero.png`;
  }

  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src;
  }

  return `${SITE_URL}${src.startsWith('/') ? src : `/${src}`}`;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const content = getMediaContentBySlug(property, slug);

  if (!content) {
    return {
      title: 'Content not found',
    };
  }

  const canonicalUrl = `${SITE_URL}/${property}/${content.slug}`;
  const imageUrl = getAbsoluteImageUrl(content.heroImage?.src);

  return {
    title: content.title,
    description: content.excerpt,
    alternates: {
      canonical: canonicalUrl,
    },
    authors: content.author?.name
      ? [{ name: content.author.name }]
      : undefined,
    openGraph: {
      type: 'article',
      url: canonicalUrl,
      title: content.title,
      description: content.excerpt,
      siteName: 'Nexus Hub Media',
      publishedTime: content.publishedAt,
      modifiedTime: content.updatedAt,
      authors: content.author?.name
        ? [content.author.name]
        : undefined,
      images: [
        {
          url: imageUrl,
          alt: content.heroImage?.alt ?? content.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: content.title,
      description: content.excerpt,
      images: [imageUrl],
    },
  };
}

export default async function NhtvFootballContentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <MediaContentPage
      property={property}
      slug={slug}
    />
  );
}
