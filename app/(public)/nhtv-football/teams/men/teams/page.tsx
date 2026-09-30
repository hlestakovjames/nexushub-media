import Link from 'next/link';

const directoryFeatures = [
  {
    number: '01',
    title: 'Team Directory',
    description:
      'A central catalogue of men’s football teams available within the NHTV Football platform.',
  },
  {
    number: '02',
    title: 'Team Profiles',
    description:
      'Each team can have its own dedicated destination containing identity, squad, matches, competitions, news, and videos.',
  },
  {
    number: '03',
    title: 'Competition Context',
    description:
      'Teams can be discovered through the leagues, cups, tournaments, and other competitions in which they participate.',
  },
  {
    number: '04',
    title: 'Connected Coverage',
    description:
      'Team records can connect directly to fixtures, results, football news, and visual media.',
  },
];

const profileSections = [
  {
    title: 'Overview',
    description:
      'The team’s core identity, description, visual identity, location, and competition context.',
  },
  {
    title: 'Squad',
    description:
      'Players and staff associated with the team, organized into a structured squad view.',
  },
  {
    title: 'Fixtures',
    description:
      'Upcoming matches involving the team, connected to the wider fixtures system.',
  },
  {
    title: 'Results',
    description:
      'Completed matches and outcomes involving the team.',
  },
  {
    title: 'News',
    description:
      'Editorial coverage, updates, analysis, and stories related to the team.',
  },
  {
    title: 'Videos',
    description:
      'Highlights, interviews, features, clips, and other media connected to the team.',
  },
];

export default function NHTVFootballMenTeamsDirectoryPage() {
  return (
    <main className="bg-white text-[#050A30]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#050A30] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(95,201,230,0.18),_transparent_42%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#5FC9E6]">
              NHTV Football · Teams · Men · Teams
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              The Men’s
              <br />
              Team Directory.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/70 sm:text-xl">
              Discover men’s football teams through structured profiles that
              connect identity, squads, competitions, matches, results, news,
              and videos.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/nhtv-football/teams/men"
                className="rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
              >
                Men’s Football Home
              </Link>

              <Link
                href="/nhtv-football/teams"
                className="rounded-md border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Teams
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* POSITIONING */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Team Directory
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Teams are football entities, not just cards.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-600">
              <p>
                The team directory is the entry point into the structured
                football entities represented by NHTV Football.
              </p>

              <p>
                Each team should eventually have a persistent identity that
                can connect it to players, squads, competitions, fixtures,
                results, news, and video content.
              </p>

              <p>
                That means the directory is not simply a visual list. It is a
                navigation layer into a larger football information system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DIRECTORY STATUS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Men’s Teams
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                The live team catalogue will appear here.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                The interface is ready for real football entities. Once the
                data service is connected, teams can be loaded dynamically and
                presented with search, filtering, sorting, and pagination.
              </p>
            </div>

            <span className="inline-flex w-fit rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-500">
              Directory ready
            </span>
          </div>

          <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl bg-slate-50 p-6">
                <p className="text-sm font-semibold text-[#1266B6]">
                  SEARCH
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  Find a team
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Search by team name or supported football identifier.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-6">
                <p className="text-sm font-semibold text-[#1266B6]">
                  FILTER
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  Narrow the list
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Filter teams by competition, country, region, or supported
                  classification.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-6">
                <p className="text-sm font-semibold text-[#1266B6]">
                  DISCOVER
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  Browse teams
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Explore the directory without already knowing which team you
                  are looking for.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-6">
                <p className="text-sm font-semibold text-[#1266B6]">
                  OPEN
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  View profile
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Enter the team’s dedicated profile and explore connected
                  football information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIRECTORY MODEL */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Directory Capabilities
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Designed for real football data.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The directory can remain simple for visitors while exposing
              richer functionality as the football data layer matures.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {directoryFeatures.map((feature) => (
              <article
                key={feature.number}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-sm font-semibold text-[#1266B6]">
                  {feature.number}
                </span>

                <h3 className="mt-4 text-2xl font-bold">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM PROFILE MODEL */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
                Team Profile
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Every team can become its own football hub.
              </h2>

              <p className="mt-5 max-w-xl text-lg leading-8 text-white/65">
                Selecting a team should take the audience into a deeper
                context rather than ending the discovery journey.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              {profileSections.map((section) => (
                <article
                  key={section.title}
                  className="border-l border-white/15 pl-6"
                >
                  <h3 className="text-xl font-bold">{section.title}</h3>

                  <p className="mt-3 leading-7 text-white/65">
                    {section.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ENTITY RELATIONSHIPS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Football Relationships
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              A team connects multiple football entities.
            </h2>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200">
            <div className="grid divide-y divide-slate-200 md:grid-cols-3 md:divide-x md:divide-y-0">
              <div className="p-8">
                <p className="text-sm font-semibold text-[#1266B6]">
                  TEAM → PLAYERS
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  Squad relationship
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  A team connects to the players and staff who form its
                  squad.
                </p>
              </div>

              <div className="p-8">
                <p className="text-sm font-semibold text-[#1266B6]">
                  TEAM → COMPETITIONS
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  Competition relationship
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  A team can participate in one or more football competitions.
                </p>
              </div>

              <div className="p-8">
                <p className="text-sm font-semibold text-[#1266B6]">
                  TEAM → MATCHES
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  Match relationship
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  A team is connected to the fixtures and results in which it
                  participates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONNECTED MODULES */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Men’s Football
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Continue through the Men’s football system.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/nhtv-football/teams/men/players"
              className="group rounded-3xl bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">
                PLAYERS
              </p>

              <h3 className="mt-3 text-xl font-bold">
                Explore player entities.
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Browse players and their football profiles.
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6]">
                Explore Players →
              </span>
            </Link>

            <Link
              href="/nhtv-football/teams/men/competitions"
              className="group rounded-3xl bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">
                COMPETITIONS
              </p>

              <h3 className="mt-3 text-xl font-bold">
                Explore competitions.
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Discover leagues, cups, and tournaments surrounding the teams.
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6]">
                Explore Competitions →
              </span>
            </Link>

            <Link
              href="/nhtv-football/teams/men/fixtures"
              className="group rounded-3xl bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">
                FIXTURES
              </p>

              <h3 className="mt-3 text-xl font-bold">
                View upcoming matches.
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                See the next scheduled matches involving men’s teams.
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6]">
                View Fixtures →
              </span>
            </Link>

            <Link
              href="/nhtv-football/teams/men/results"
              className="group rounded-3xl bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">
                RESULTS
              </p>

              <h3 className="mt-3 text-xl font-bold">
                Review completed matches.
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Follow completed match outcomes across the Men’s module.
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6]">
                View Results →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* FUTURE */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="rounded-3xl border border-slate-200 p-8 sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                  Built for Expansion
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  The directory can grow without changing its foundation.
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Future releases can introduce real team records, individual
                  team routes, competitions, squads, player relationships,
                  statistics, standings, match details, and personalized
                  following without replacing the basic directory architecture.
                </p>
              </div>

              <Link
                href="/nhtv-football/teams/men"
                className="inline-flex w-fit rounded-md bg-[#050A30] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Men’s Football Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
            NHTV Football · Men · Teams
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Start with the team. Discover everything around it.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            The Men’s Team Directory provides the foundation for a connected
            football entity system spanning players, competitions, matches,
            editorial coverage, and media.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/nhtv-football/teams/men"
              className="inline-flex rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
            >
              Men’s Football Home
            </Link>

            <Link
              href="/nhtv-football/news"
              className="inline-flex rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Football News
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
