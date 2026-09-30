import Link from 'next/link';

const editorialTypes = [
  {
    number: '01',
    title: 'Match Reports',
    description:
      'Editorial coverage of completed Women’s matches, key moments, outcomes, and the stories behind the results.',
  },
  {
    number: '02',
    title: 'Team Updates',
    description:
      'News connected to Women’s teams, squad developments, preparations, and important team developments.',
  },
  {
    number: '03',
    title: 'Competition Coverage',
    description:
      'Stories following Women’s leagues, cups, tournaments, rounds, seasons, and competition developments.',
  },
  {
    number: '04',
    title: 'Features & Analysis',
    description:
      'Long-form storytelling, analysis, profiles, trends, interviews, and context beyond the scoreline.',
  },
];

const connections = [
  {
    label: 'TEAMS',
    title: 'Team-centred coverage',
    description:
      'Articles can connect directly to Women’s team entities and their football histories.',
    href: '/nhtv-football/teams/women/teams',
  },
  {
    label: 'PLAYERS',
    title: 'Player-centred coverage',
    description:
      'Stories can reference individual Women’s player profiles, performances, and developments.',
    href: '/nhtv-football/teams/women/players',
  },
  {
    label: 'COMPETITIONS',
    title: 'Competition coverage',
    description:
      'Editorial stories can remain connected to the competition and season in which events occur.',
    href: '/nhtv-football/teams/women/competitions',
  },
  {
    label: 'RESULTS',
    title: 'Result-driven stories',
    description:
      'Match reports and analysis can connect directly to completed Women’s results.',
    href: '/nhtv-football/teams/women/results',
  },
];

const lifecycle = [
  {
    number: '01',
    title: 'Discover',
    description:
      'A match, team development, player story, or competition moment becomes a potential story.',
  },
  {
    number: '02',
    title: 'Report',
    description:
      'Editorial content is developed with the relevant Women’s football context.',
  },
  {
    number: '03',
    title: 'Publish',
    description:
      'The finished story becomes available through Women’s News and related entity pages.',
  },
  {
    number: '04',
    title: 'Archive',
    description:
      'Published stories remain discoverable as part of the Women’s football editorial history.',
  },
];

export default function NHTVFootballWomenNewsPage() {
  return (
    <main className="bg-white text-[#050A30]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#050A30] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(95,201,230,0.18),_transparent_42%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#5FC9E6]">
              NHTV Football · Teams · Women · News
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Follow the story
              <br />
              beyond the score.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/70 sm:text-xl">
              Women’s football news, match coverage, team developments,
              competition stories, features, and analysis connected to the
              football entities audiences care about.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/nhtv-football/teams/women"
                className="rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30]"
              >
                Women’s Football Home
              </Link>

              <Link
                href="/nhtv-football/teams/women/videos"
                className="rounded-md border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore Videos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Women’s News
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                The editorial layer of Women’s football.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-600">
              <p>
                The Women’s News module is responsible for editorial coverage
                surrounding teams, players, competitions, matches, and major
                developments within the Women’s football environment.
              </p>

              <p>
                It remains separate from Fixtures and Results because those
                modules represent structured football data, while News
                represents the stories, reporting, and analysis built around
                that data.
              </p>

              <p>
                A single story can later connect to multiple football entities
                through the CMS and backend without duplicating the underlying
                records.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NEWS FEED */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Latest Coverage
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                The Women’s news feed will live here.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                This editorial surface is ready for CMS-driven articles,
                categories, authors, publication dates, featured stories, and
                football entity relationships.
              </p>
            </div>

            <span className="inline-flex w-fit rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-500">
              Editorial feed
            </span>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="grid min-h-[400px] place-items-center p-8 sm:p-12">
              <div className="max-w-2xl text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-slate-100">
                  <span className="text-3xl font-bold text-[#1266B6]">N</span>
                </div>

                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#1266B6]">
                  Women’s Football News
                </p>

                <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  Published stories will appear here.
                </h3>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  The future CMS can populate this feed with articles,
                  categories, authors, publication dates, featured imagery,
                  related teams, players, competitions, fixtures, and results.
                </p>

                <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-sm font-semibold text-slate-400">
                  <span className="rounded-full bg-slate-100 px-3 py-1">
                    Articles
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1">
                    Features
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1">
                    Match Reports
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1">
                    Analysis
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1">
                    Team Updates
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EDITORIAL TYPES */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Editorial Types
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Different stories deserve different editorial treatment.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The CMS can organize coverage around distinct editorial purposes
              while maintaining one unified Women’s News destination.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {editorialTypes.map((type) => (
              <article
                key={type.number}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-sm font-semibold text-[#1266B6]">
                  {type.number}
                </span>

                <h3 className="mt-4 text-2xl font-bold">{type.title}</h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {type.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONNECTIONS */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
              Connected Football Content
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Every story can retain the football context behind it.
            </h2>

            <p className="mt-5 text-lg leading-8 text-white/65">
              News becomes more useful when it remains connected to the teams,
              players, competitions, fixtures, and results it discusses.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {connections.map((connection) => (
              <Link
                key={connection.label}
                href={connection.href}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:-translate-y-1 hover:bg-white/10"
              >
                <p className="text-sm font-semibold text-[#5FC9E6]">
                  {connection.label}
                </p>

                <h3 className="mt-3 text-2xl font-bold">
                  {connection.title}
                </h3>

                <p className="mt-4 leading-7 text-white/65">
                  {connection.description}
                </p>

                <span className="mt-7 inline-flex text-sm font-semibold text-[#5FC9E6] transition group-hover:translate-x-1">
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* LIFECYCLE */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Editorial Lifecycle
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              From football moment to published Women’s story.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {lifecycle.map((stage) => (
              <article
                key={stage.number}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-7"
              >
                <span className="text-sm font-semibold text-[#1266B6]">
                  {stage.number}
                </span>

                <h3 className="mt-4 text-xl font-bold">{stage.title}</h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {stage.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EDITORIAL PRINCIPLES */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-6 md:grid-cols-3">
            <article className="rounded-3xl bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold text-[#1266B6]">
                CONTEXT
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Stories should explain.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Editorial coverage should provide context that cannot be
                represented by a score or fixture alone.
              </p>
            </article>

            <article className="rounded-3xl bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold text-[#1266B6]">
                CONNECTION
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Stories should connect.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Articles should reference the relevant Women’s football
                entities rather than becoming isolated content.
              </p>
            </article>

            <article className="rounded-3xl bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold text-[#1266B6]">
                DISCOVERY
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Stories should lead somewhere.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Readers should be able to move naturally from news into teams,
                players, competitions, fixtures, results, and videos.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* VIDEO BRIDGE */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                  News + Video
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  Editorial and visual storytelling should work together.
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Stories can reference interviews, match coverage, features,
                  analysis, and other visual content from the Women’s Videos
                  module.
                </p>
              </div>

              <Link
                href="/nhtv-football/teams/women/videos"
                className="inline-flex w-fit rounded-md bg-[#050A30] px-6 py-3 text-sm font-semibold text-white"
              >
                Explore Videos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
            NHTV Football · Women · News
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Women’s football is more than the final score.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Build the editorial record around the matches, teams, players, and
            competitions that define the Women’s football experience.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/nhtv-football/teams/women"
              className="rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30]"
            >
              Women’s Football Home
            </Link>

            <Link
              href="/nhtv-football/teams/women/teams"
              className="rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white"
            >
              Explore Teams
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
