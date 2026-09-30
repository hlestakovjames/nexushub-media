import Link from 'next/link';

const teamSections = [
  {
    number: '01',
    title: 'Men',
    description:
      'Explore the Men’s football environment, including teams, players, competitions, fixtures, results, news, and videos.',
    href: '/nhtv-football/teams/men',
  },
  {
    number: '02',
    title: 'Player Directory',
    description:
      'A centralized player discovery layer connecting individual footballers to teams, statistics, matches, news, and videos.',
    href: '/nhtv-football/teams/men/players',
  },
  {
    number: '03',
    title: 'Competitions',
    description:
      'Explore the competitions in which football teams participate and connect them to standings, fixtures, results, and news.',
    href: '/nhtv-football/teams/men/competitions',
  },
];

const teamProfileModules = [
  {
    number: '01',
    title: 'Overview',
    description:
      'The identity and primary information of the team.',
  },
  {
    number: '02',
    title: 'Squad',
    description:
      'The current squad and its relationship to player records.',
  },
  {
    number: '03',
    title: 'Players',
    description:
      'Individual player relationships and player-level discovery.',
  },
  {
    number: '04',
    title: 'Fixtures',
    description:
      'Upcoming matches involving the team.',
  },
  {
    number: '05',
    title: 'Results',
    description:
      'Completed matches and historical outcomes.',
  },
  {
    number: '06',
    title: 'News',
    description:
      'Editorial coverage specifically connected to the team.',
  },
  {
    number: '07',
    title: 'Videos',
    description:
      'Video content related to the team and its activities.',
  },
];

export default function NHTVFootballTeamsPage() {
  return (
    <main className="bg-white text-[#050A30]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#050A30] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(95,201,230,0.18),_transparent_42%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#5FC9E6]">
              NHTV Football · Teams
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              The home of
              <br />
              football teams.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/70 sm:text-xl">
              Discover teams, squads, players, competitions, fixtures, results,
              news, and videos through a connected football entity system.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/nhtv-football/teams/men"
                className="rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
              >
                Explore Men
              </Link>

              <Link
                href="/nhtv-football"
                className="rounded-md border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Football Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Teams Directory
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Teams are football entities, not just cards.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-600">
              <p>
                The Teams module is the entity foundation for NHTV Football.
                Every team can become a connected destination for its identity,
                squad, players, matches, competition participation, news, and
                video coverage.
              </p>

              <p>
                The directory is therefore intentionally separate from Fixtures,
                Results, News, and Videos. Those modules describe specific types
                of football information, while Teams provides the entity
                context that connects them.
              </p>

              <p>
                This structure is designed so the backend can later maintain a
                single team record and expose its relationships across the
                entire football platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM AREAS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Explore Teams
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Enter the football system through the area you need.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The parent Teams destination provides entry points into its major
              internal modules.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {teamSections.map((section) => (
              <Link
                key={section.number}
                href={section.href}
                className="group rounded-3xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-sm font-semibold text-[#1266B6]">
                  {section.number}
                </span>

                <h3 className="mt-4 text-2xl font-bold">
                  {section.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {section.description}
                </p>

                <span className="mt-7 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* DIRECTORY */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Team Directory
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Registered football teams will appear here.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                This directory is prepared for dynamic team records supplied by
                the future football backend.
              </p>
            </div>

            <span className="inline-flex w-fit rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-500">
              Team registry
            </span>
          </div>

          <div className="mt-12 rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-12">
            <div className="grid min-h-[320px] place-items-center text-center">
              <div className="max-w-2xl">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-white shadow-sm">
                  <span className="text-3xl font-bold text-[#1266B6]">
                    T
                  </span>
                </div>

                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#1266B6]">
                  Team Registry
                </p>

                <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  Team records will populate this directory.
                </h3>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  The future CMS and football service can provide team names,
                  identifiers, logos, competition membership, squad information,
                  status, and links to individual team profiles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM PROFILE */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
                Team Profile
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                One team record. Many connected modules.
              </h2>

              <p className="mt-5 text-lg leading-8 text-white/65">
                An individual team profile becomes the central destination for
                all content and football data associated with that team.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {teamProfileModules.map((module) => (
                <article
                  key={module.number}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <span className="text-sm font-semibold text-[#5FC9E6]">
                    {module.number}
                  </span>

                  <h3 className="mt-3 text-xl font-bold">
                    {module.title}
                  </h3>

                  <p className="mt-3 leading-7 text-white/60">
                    {module.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DATA RELATIONSHIPS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Football Entity Model
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Teams become the connective tissue of the football platform.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              A team can later relate to players, competitions, fixtures,
              results, articles, videos, and seasons without requiring separate
              disconnected records for each destination.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <article className="rounded-3xl bg-white p-7 shadow-sm">
              <p className="text-sm font-semibold text-[#1266B6]">
                TEAM
              </p>

              <h3 className="mt-3 text-xl font-bold">Identity</h3>

              <p className="mt-3 leading-7 text-slate-600">
                The canonical team record and identity information.
              </p>
            </article>

            <article className="rounded-3xl bg-white p-7 shadow-sm">
              <p className="text-sm font-semibold text-[#1266B6]">
                PEOPLE
              </p>

              <h3 className="mt-3 text-xl font-bold">Players</h3>

              <p className="mt-3 leading-7 text-slate-600">
                Relationships between teams and player records.
              </p>
            </article>

            <article className="rounded-3xl bg-white p-7 shadow-sm">
              <p className="text-sm font-semibold text-[#1266B6]">
                MATCHES
              </p>

              <h3 className="mt-3 text-xl font-bold">Fixtures & Results</h3>

              <p className="mt-3 leading-7 text-slate-600">
                Upcoming and completed matches connected to the team.
              </p>
            </article>

            <article className="rounded-3xl bg-white p-7 shadow-sm">
              <p className="text-sm font-semibold text-[#1266B6]">
                MEDIA
              </p>

              <h3 className="mt-3 text-xl font-bold">News & Videos</h3>

              <p className="mt-3 leading-7 text-slate-600">
                Editorial and visual coverage associated with the team.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
            NHTV Football · Teams
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Start with the entity. Explore everything around it.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            The Teams system is the foundation for a deeper football experience
            built around real entities and their relationships.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/nhtv-football/teams/men"
              className="inline-flex rounded-md bg-[#050A30] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Explore Men
            </Link>

            <Link
              href="/nhtv-football"
              className="inline-flex rounded-md border border-slate-200 px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:bg-slate-50"
            >
              Football Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
