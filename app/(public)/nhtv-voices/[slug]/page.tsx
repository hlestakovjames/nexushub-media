import MediaContentPage from '@/components/media/content/MediaContentPage';

import type { MediaProperty } from '@/lib/content/media';

const property: MediaProperty = 'nhtv-voices';

export default async function NhtvVoicesContentPage({
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
