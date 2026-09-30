import MediaContentPage from '@/components/media/content/MediaContentPage';

import type { MediaProperty } from '@/lib/content/media';

const property: MediaProperty = 'nhtv-stories';

export default async function NhtvStoriesContentPage({
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
