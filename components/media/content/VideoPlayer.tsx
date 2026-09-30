import type { MediaVideo } from '@/lib/content/media';

type VideoPlayerProps = {
  video: MediaVideo;
  caption?: string;
  className?: string;
};

export default function VideoPlayer({
  video,
  caption,
  className = '',
}: VideoPlayerProps) {
  let player = null;

  if (video.provider === 'youtube' && video.videoId) {
    player = (
      <iframe
        src={`https://www.youtube.com/embed/${video.videoId}`}
        title={video.title ?? 'Embedded video'}
        className="absolute inset-0 h-full w-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    );
  } else if (video.provider === 'vimeo' && video.videoId) {
    player = (
      <iframe
        src={`https://player.vimeo.com/video/${video.videoId}`}
        title={video.title ?? 'Embedded video'}
        className="absolute inset-0 h-full w-full"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      />
    );
  } else if (video.src) {
    player = (
      <video
        controls
        preload="metadata"
        poster={video.poster}
        className="h-full w-full object-contain"
      >
        <source src={video.src} />
        Your browser does not support video playback.
      </video>
    );
  }

  if (!player) {
    return null;
  }

  return (
    <figure className={className}>
      <div className="relative aspect-video overflow-hidden rounded-2xl bg-[#050A30]">
        {player}
      </div>

      {caption ? (
        <figcaption className="mt-3 text-sm leading-6 text-[#050A30]/55">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
