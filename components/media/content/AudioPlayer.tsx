import type { MediaAudio } from '@/lib/content/media';

type AudioPlayerProps = {
  audio: MediaAudio;
  caption?: string;
  className?: string;
};

export default function AudioPlayer({
  audio,
  caption,
  className = '',
}: AudioPlayerProps) {
  if (!audio.src) {
    return null;
  }

  return (
    <figure className={className}>
      <div className="rounded-2xl border border-[#050A30]/10 bg-[#050A30]/[0.03] p-5 sm:p-6">
        {audio.title ? (
          <h3 className="mb-4 text-lg font-semibold text-[#050A30]">
            {audio.title}
          </h3>
        ) : null}

        <audio controls preload="metadata" className="w-full">
          <source src={audio.src} />
          Your browser does not support audio playback.
        </audio>
      </div>

      {caption ? (
        <figcaption className="mt-3 text-sm leading-6 text-[#050A30]/55">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
