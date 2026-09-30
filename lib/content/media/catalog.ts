import type {
  MediaCategory,
  MediaProperty,
} from './types';

export const mediaProperties: Record<
  MediaProperty,
  {
    label: string;
    shortLabel: string;
    description: string;
    href: string;
  }
> = {
  'nexus-hub-tv': {
    label: 'Nexus Hub TV',
    shortLabel: 'NHTV',
    description:
      'Television, programmes, shows, videos, news, and live experiences.',
    href: '/nexus-hub-tv',
  },

  'nhtv-football': {
    label: 'NHTV Football',
    shortLabel: 'Football',
    description:
      'Football coverage across teams, players, fixtures, results, competitions, and video.',
    href: '/nhtv-football',
  },

  'nhtv-stories': {
    label: 'NHTV Stories',
    shortLabel: 'Stories',
    description:
      'People, culture, community, and experiences told through meaningful stories.',
    href: '/nhtv-stories',
  },

  'nhtv-voices': {
    label: 'NHTV Voices',
    shortLabel: 'Voices',
    description:
      'Podcasts, interviews, opinions, features, and conversations.',
    href: '/nhtv-voices',
  },
};

export const mediaCategories: Record<
  MediaCategory,
  {
    label: string;
  }
> = {
  news: {
    label: 'News',
  },

  opinion: {
    label: 'Opinion',
  },

  feature: {
    label: 'Features',
  },

  interview: {
    label: 'Interviews',
  },

  football: {
    label: 'Football',
  },

  technology: {
    label: 'Technology',
  },

  business: {
    label: 'Business',
  },

  culture: {
    label: 'Culture',
  },

  community: {
    label: 'Community',
  },

  lifestyle: {
    label: 'Lifestyle',
  },

  entertainment: {
    label: 'Entertainment',
  },

  sport: {
    label: 'Sport',
  },

  education: {
    label: 'Education',
  },

  other: {
    label: 'Other',
  },
};
