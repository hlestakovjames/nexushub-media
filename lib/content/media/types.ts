export type MediaProperty =
  | 'nexus-hub-tv'
  | 'nhtv-football'
  | 'nhtv-stories'
  | 'nhtv-voices';

export type MediaContentType =
  | 'article'
  | 'video'
  | 'podcast'
  | 'gallery'
  | 'mixed';

export type MediaCategory =
  | 'news'
  | 'opinion'
  | 'feature'
  | 'interview'
  | 'football'
  | 'technology'
  | 'business'
  | 'culture'
  | 'community'
  | 'lifestyle'
  | 'entertainment'
  | 'sport'
  | 'education'
  | 'other';

export type MediaAuthor = {
  name: string;
  role?: string;
  image?: string;
};

export type MediaImage = {
  src: string;
  alt: string;
  credit?: string;
};

export type MediaVideoProvider =
  | 'youtube'
  | 'vimeo'
  | 'self-hosted'
  | 'other';

export type MediaVideo = {
  src?: string;
  poster?: string;
  provider?: MediaVideoProvider;
  videoId?: string;
  title?: string;
};

export type MediaAudioProvider =
  | 'spotify'
  | 'soundcloud'
  | 'apple-podcasts'
  | 'self-hosted'
  | 'other';

export type MediaAudio = {
  src?: string;
  provider?: MediaAudioProvider;
  episodeId?: string;
  title?: string;
};

export type MediaGalleryItem = {
  image: MediaImage;
  caption?: string;
};

export type MediaTextBlock = {
  type: 'paragraph' | 'heading' | 'quote';
  text: string;
  level?: 2 | 3;
  attribution?: string;
};

export type MediaImageBlock = {
  type: 'image';
  image: MediaImage;
  caption?: string;
};

export type MediaVideoBlock = {
  type: 'video';
  video: MediaVideo;
  caption?: string;
};

export type MediaAudioBlock = {
  type: 'audio';
  audio: MediaAudio;
};

export type MediaGalleryBlock = {
  type: 'gallery';
  items: MediaGalleryItem[];
  caption?: string;
};

export type MediaContentBlock =
  | MediaTextBlock
  | MediaImageBlock
  | MediaVideoBlock
  | MediaAudioBlock
  | MediaGalleryBlock;

export type MediaContent = {
  id: string;
  slug: string;

  type: MediaContentType;
  property: MediaProperty;
  category: MediaCategory;

  title: string;
  excerpt: string;

  heroImage?: MediaImage;

  author?: MediaAuthor;

  publishedAt: string;
  updatedAt?: string;

  readingTimeMinutes?: number;

  video?: MediaVideo;
  audio?: MediaAudio;
  gallery?: MediaGalleryItem[];

  content?: MediaContentBlock[];

  featured?: boolean;

  tags?: string[];

  relatedContentIds?: string[];
};

export type MediaLiveStatus =
  | 'upcoming'
  | 'live'
  | 'ended';

export type MediaLiveProvider =
  | 'cloudflare'
  | 'youtube'
  | 'vimeo'
  | 'self-hosted'
  | 'other';

export type MediaLiveIngestMethod =
  | 'browser'
  | 'mobile'
  | 'external-encoder';


