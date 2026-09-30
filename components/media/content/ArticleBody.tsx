import Image from 'next/image';

import AudioPlayer from './AudioPlayer';
import VideoPlayer from './VideoPlayer';

import type {
  MediaContentBlock,
  MediaGalleryBlock,
  MediaImageBlock,
  MediaVideoBlock,
  MediaAudioBlock,
} from '@/lib/content/media';

type ArticleBodyProps = {
  blocks?: MediaContentBlock[];
};

function ImageBlock({
  block,
}: {
  block: MediaImageBlock;
}) {
  return (
    <figure>
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-[#050A30]/5">
        <Image
          src={block.image.src}
          alt={block.image.alt}
          fill
          sizes="(max-width: 768px) 100vw, 768px"
          className="object-cover"
        />
      </div>

      {block.caption ? (
        <figcaption className="mt-3 text-sm text-[#050A30]/55">
          {block.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

function GalleryBlock({
  block,
}: {
  block: MediaGalleryBlock;
}) {
  return (
    <figure>
      <div className="grid gap-4 sm:grid-cols-2">
        {block.items.map((item, index) => (
          <figure
            key={`${item.image.src}-${index}`}
            className="overflow-hidden rounded-2xl bg-[#050A30]/5"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={item.image.src}
                alt={item.image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 384px"
                className="object-cover"
              />
            </div>

            {item.caption ? (
              <figcaption className="px-4 py-3 text-sm text-[#050A30]/55">
                {item.caption}
              </figcaption>
            ) : null}
          </figure>
        ))}
      </div>

      {block.caption ? (
        <figcaption className="mt-3 text-sm text-[#050A30]/55">
          {block.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

export default function ArticleBody({
  blocks = [],
}: ArticleBodyProps) {
  if (!blocks.length) {
    return null;
  }

  return (
    <div className="prose prose-lg max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-[#050A30] prose-p:leading-8 prose-p:text-[#050A30]/75 prose-a:text-cyan-700 prose-a:no-underline hover:prose-a:underline prose-strong:text-[#050A30]">
      {blocks.map((block, index) => {
        if (block.type === 'paragraph') {
          return <p key={index}>{block.text}</p>;
        }

        if (block.type === 'heading') {
          if (block.level === 3) {
            return <h3 key={index}>{block.text}</h3>;
          }

          return <h2 key={index}>{block.text}</h2>;
        }

        if (block.type === 'quote') {
          return (
            <blockquote key={index}>
              <p>{block.text}</p>

              {block.attribution ? (
                <cite>{block.attribution}</cite>
              ) : null}
            </blockquote>
          );
        }

        if (block.type === 'image') {
          return <ImageBlock key={index} block={block} />;
        }

        if (block.type === 'video') {
          return (
            <VideoPlayer
              key={index}
              video={block.video}
              caption={block.caption}
            />
          );
        }

        if (block.type === 'audio') {
          return (
            <AudioPlayer
              key={index}
              audio={block.audio}
            />
          );
        }

        if (block.type === 'gallery') {
          return <GalleryBlock key={index} block={block} />;
        }

        return null;
      })}
    </div>
  );
}

