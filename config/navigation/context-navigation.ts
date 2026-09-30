export type ContextNavigationItem = {
  label: string;
  href: string;
};

export type NavigationContext = {
  id: string;
  label: string;
  routePrefix: string;
  items: ContextNavigationItem[];
};

/*
|--------------------------------------------------------------------------
| Nexus Hub Media Context Navigation
|--------------------------------------------------------------------------
|
| Navigation is resolved by the deepest matching routePrefix.
|
| Examples:
|
| / 
|   -> global Media context
|
| /nexus-hub-tv
|   -> Nexus Hub TV context
|
| /nhtv-football
|   -> Football context
|
| /nhtv-football/teams
|   -> Teams context
|
| /nhtv-football/teams/men
|   -> Men context
|
|--------------------------------------------------------------------------
*/

export const navigationContexts: NavigationContext[] = [
  {
    id: 'global',
    label: 'Nexus Hub Media',
    routePrefix: '/',
    items: [
      {
        label: 'NEXUS HUB TV',
        href: '/nexus-hub-tv',
      },
      {
        label: 'NHTV FOOTBALL',
        href: '/nhtv-football',
      },
      {
        label: 'NHTV STORIES',
        href: '/nhtv-stories',
      },
      {
        label: 'NHTV VOICES',
        href: '/nhtv-voices',
      },
    ],
  },

  {
    id: 'nexus-hub-tv',
    label: 'NHTV',
    routePrefix: '/nexus-hub-tv',
    items: [
      { label: 'HOME', href: '/nexus-hub-tv' },
      { label: 'SHOWS', href: '/nexus-hub-tv/shows' },
      { label: 'PROGRAMS', href: '/nexus-hub-tv/programs' },
      { label: 'LIVE', href: '/nexus-hub-tv/live' },
      { label: 'VIDEOS', href: '/nexus-hub-tv/videos' },
      { label: 'NEWS', href: '/nexus-hub-tv/news' },
      { label: 'ABOUT', href: '/nexus-hub-tv/about' },
    ],
  },

  {
    id: 'nhtv-football',
    label: 'Football',
    routePrefix: '/nhtv-football',
    items: [
      { label: 'HOME', href: '/nhtv-football' },
      { label: 'NEWS', href: '/nhtv-football/news' },
      { label: 'FIXTURES', href: '/nhtv-football/fixtures' },
      { label: 'RESULTS', href: '/nhtv-football/results' },
      { label: 'TEAMS', href: '/nhtv-football/teams' },
      { label: 'VIDEOS', href: '/nhtv-football/videos' },
      { label: 'ABOUT', href: '/nhtv-football/about' },
    ],
  },

  {
    id: 'nhtv-football-teams',
    label: 'Teams',
    routePrefix: '/nhtv-football/teams',
    items: [
      { label: 'HOME', href: '/nhtv-football/teams' },
      { label: 'MEN', href: '/nhtv-football/teams/men' },
      { label: 'WOMEN', href: '/nhtv-football/teams/women' },
      {
        label: 'PLAYERS',
        href: '/nhtv-football/teams/players',
      },
      {
        label: 'COMPETITIONS',
        href: '/nhtv-football/teams/competitions',
      },
    ],
  },

  {
    id: 'nhtv-football-teams-women',
    label: 'Women',
    routePrefix: '/nhtv-football/teams/women',
    items: [
      {
        label: 'HOME',
        href: '/nhtv-football/teams/women',
      },
      {
        label: 'TEAMS',
        href: '/nhtv-football/teams/women/teams',
      },
      {
        label: 'PLAYERS',
        href: '/nhtv-football/teams/women/players',
      },
      {
        label: 'COMPETITIONS',
        href: '/nhtv-football/teams/women/competitions',
      },
      {
        label: 'FIXTURES',
        href: '/nhtv-football/teams/women/fixtures',
      },
      {
        label: 'RESULTS',
        href: '/nhtv-football/teams/women/results',
      },
      {
        label: 'NEWS',
        href: '/nhtv-football/teams/women/news',
      },
      {
        label: 'VIDEOS',
        href: '/nhtv-football/teams/women/videos',
      },
    ],
  },

  {
    id: 'nhtv-football-teams-men',
    label: 'Men',
    routePrefix: '/nhtv-football/teams/men',
    items: [
      {
        label: 'HOME',
        href: '/nhtv-football/teams/men',
      },
      {
        label: 'TEAMS',
        href: '/nhtv-football/teams/men/teams',
      },
      {
        label: 'PLAYERS',
        href: '/nhtv-football/teams/men/players',
      },
      {
        label: 'COMPETITIONS',
        href: '/nhtv-football/teams/men/competitions',
      },
      {
        label: 'FIXTURES',
        href: '/nhtv-football/teams/men/fixtures',
      },
      {
        label: 'RESULTS',
        href: '/nhtv-football/teams/men/results',
      },
      {
        label: 'NEWS',
        href: '/nhtv-football/teams/men/news',
      },
      {
        label: 'VIDEOS',
        href: '/nhtv-football/teams/men/videos',
      },
    ],
  },

  {
    id: 'nhtv-stories',
    label: 'Stories',
    routePrefix: '/nhtv-stories',
    items: [
      { label: 'HOME', href: '/nhtv-stories' },
      {
        label: 'FEATURED',
        href: '/nhtv-stories/featured',
      },
      {
        label: 'PEOPLE',
        href: '/nhtv-stories/people',
      },
      {
        label: 'CULTURE',
        href: '/nhtv-stories/culture',
      },
      {
        label: 'COMMUNITY',
        href: '/nhtv-stories/community',
      },
      {
        label: 'VIDEO',
        href: '/nhtv-stories/video',
      },
      {
        label: 'ABOUT',
        href: '/nhtv-stories/about',
      },
    ],
  },

  {
    id: 'nhtv-voices',
    label: 'Voices',
    routePrefix: '/nhtv-voices',
    items: [
      { label: 'HOME', href: '/nhtv-voices' },
      {
        label: 'PODCASTS',
        href: '/nhtv-voices/podcasts',
      },
      {
        label: 'INTERVIEWS',
        href: '/nhtv-voices/interviews',
      },
      {
        label: 'OPINION',
        href: '/nhtv-voices/opinion',
      },
      {
        label: 'FEATURES',
        href: '/nhtv-voices/features',
      },
      {
        label: 'VIDEO',
        href: '/nhtv-voices/video',
      },
      {
        label: 'ABOUT',
        href: '/nhtv-voices/about',
      },
    ],
  },
];

export function resolveNavigationContext(
  pathname: string,
): NavigationContext {
  const matches = navigationContexts.filter((context) => {
    if (context.routePrefix === '/') {
      return true;
    }

    return (
      pathname === context.routePrefix ||
      pathname.startsWith(`${context.routePrefix}/`)
    );
  });

  return matches.sort(
    (a, b) =>
      b.routePrefix.length - a.routePrefix.length,
  )[0];
}
