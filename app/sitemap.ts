import type { MetadataRoute } from 'next';

const baseUrl = 'https://nexushubgroup.vercel.app';

const routes = [
  '/',
  '/about',
  '/about/our-story',
  '/about/mission-vision',
  '/about/approach',
  '/about/leadership',
  '/about/team',
  '/about/careers',

  '/media',
  '/media/nexus-hub-tv',
  '/media/nhtv-football',
  '/media/nhtv-stories',
  '/media/nhtv-voices',

  '/digital',
  '/digital/services',
  '/digital/services/software-development',
  '/digital/services/web-development',
  '/digital/services/mobile-app-development',
  '/digital/services/digital-platforms',
  '/digital/services/digital-transformation',
  '/digital/services/ecommerce',
  '/digital/services/systems-integration',
  '/digital/services/technical-consulting',
  '/digital/services/ui-ux-design',

  '/business',
  '/business/services',
  '/business/solutions',
  '/business/partnerships',

  '/projects',
  '/blog',
  '/news',

  '/events-activities',
  '/events-activities/events',
  '/events-activities/events/upcoming',
  '/events-activities/events/ongoing',
  '/events-activities/events/past',
  '/events-activities/events/categories',
  '/events-activities/events/venues',
  '/events-activities/activities',
  '/events-activities/activities/upcoming',
  '/events-activities/activities/ongoing',
  '/events-activities/activities/past',
  '/events-activities/activities/programmes',
  '/events-activities/activities/participation',
  '/events-activities/calendar',

  '/resources',
  '/resources/downloads',
  '/resources/guides',
  '/resources/documents',

  '/platforms',
  '/contact',
  '/privacy',
  '/terms',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority:
      route === '/'
        ? 1
        : [
            '/about',
            '/media',
            '/digital',
            '/business',
            '/projects',
            '/blog',
            '/news',
            '/events-activities',
            '/resources',
            '/platforms',
            '/contact',
          ].includes(route)
          ? 0.8
          : 0.6,
  }));
}
