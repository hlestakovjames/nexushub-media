import Link from 'next/link';

const playerAreas = [
  {
    number: '01',
    title: 'Player Directory',
    description:
      'A central discovery point for football players represented across the Teams system.',
  },
  {
    number: '02',
    title: 'Player Profiles',
    description:
      'Individual player destinations containing identity, statistics, matches, news, and videos.',
  },
  {
    number: '03',
    title: 'Team Relationships',
    description:
      'Connect players to the teams and squads they belong to across the football system.',
  },
];

const profileModules = [
  {
    number: '01',
    title: 'Overview',
    description:
      'Core player identity and football profile information.',
  },
  {
    number: '02',
    title: 'Statistics',
    description:
      'Structured player performance data supplied by the football system.',
  },
  {
    number: '03',
    title: 'Matches',
    description:
      'Fixtures and completed matches associated with the player.',
  },
  {
    number: '04',
    title: 'News',
    description:
      'Editorial coverage connected to the player.',
  },
  {
    number: '05',
    title: 'Videos',
    description:
      'Video content, interviews, features, and coverage involving the player.',
  },
];

export default function NHTVFootballPlayersPage() {
  return (
    <main className="bg-white text-[#050A30]">
      <section className="relative overflow-hidden bg-[#050A30] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(95,201,230,0.18),_transparent_42%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <Link
              href="/nhtv-football/teams"
              className="text-sm font-semibold uppercase tracking-[0.25em] text-[#5FC9E6]"
            >
              ← Teams
            </Link>

            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-[#5FC9E6]">
              NHTV Football · Teams · Players
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              The players
              <br />
              behind the teams.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/70 sm:text-xl">
              A connected player directory linking footballers to teams,
              squads, matches, statistics, news, and video coverage.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/nhtv-football/teams/men/players"
                className="rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
              >
                Explore Men’s Players
              </Link>

              <Link
                href="/nhtv-football/teams"
                className="rounded-md border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Teams Directory
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Player Directory
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Players are entities in their own right.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-600">
              <p>
                The Player Directory gives the football platform a centralized
                way to discover individual players rather than forcing users to
                find them only through team pages.
              </p>

              <p>
                Each player can have a canonical record that connects the
                player to teams, squads, matches, statistics, editorial content,
                and videos.
              </p>

              <p>
                This also gives the backend a clean entity relationship model:
                one player record can participate in many football experiences
                without duplicated profile data.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Player Areas
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Build player discovery around the football entity.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {playerAreas.map((area) => (
              <article
                key={area.number}
                className="rounded-3xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-sm font-semibold text-[#1266B6]">
                  {area.number}
                </span>

                <h3 className="mt-4 text-2xl font-bold">
                  {area.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {area.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Player Registry
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Registered players will populate this directory.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                The frontend is prepared for dynamic player records from the
                football backend.
              </p>
            </div>

            <span className="inline-flex w-fit rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-500">
              Player registry
            </span>
          </div>

          <div className="mt-12 rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-12">
            <div className="grid min-h-[320px] place-items-center text-center">
              <div className="max-w-2xl">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-white shadow-sm">
                  <span className="text-3xl font-bold text-[#1266B6]">
                    P
                  </span>
                </div>

                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#1266B6]">
                  Player Directory
                </p>

                <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  Player records will appear here.
                </h3>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  The future player service can provide names, identifiers,
                  positions, team relationships, squad membership,
                  statistics, and links to individual player profiles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
                Player Profile
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                One player. Multiple connected experiences.
              </h2>

              <p className="mt-5 text-lg leading-8 text-white/65">
                Every individual player profile can act as a destination for
                football data and related media.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {profileModules.map((module) => (
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

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-6 md:grid-cols-4">
            <article className="rounded-3xl bg-white p-7 shadow-sm">
              <p className="text-sm font-semibold text-[#1266B6]">PLAYER</p>
              <h3 className="mt-3 text-xl font-bold">Identity</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Canonical player information and identity.
              </p>
            </article>

            <article className="rounded-3xl bg-white p-7 shadow-sm">
              <p className="text-sm font-semibold text-[#1266B6]">TEAM</p>
              <h3 className="mt-3 text-xl font-bold">Membership</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Relationships between players and teams.
              </p>
            </article>

            <article className="rounded-3xl bg-white p-7 shadow-sm">
              <p className="text-sm font-semibold text-[#1266B6]">MATCH</p>
              <h3 className="mt-3 text-xl font-bold">Performance</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Match participation and statistics.
              </p>
            </article>

            <article className="rounded-3xl bg-white p-7 shadow-sm">
              <p className="text-sm font-semibold text-[#1266B6]">MEDIA</p>
              <h3 className="mt-3 text-xl font-bold">Coverage</h3>
              <p className="mt-3 leading-7 text-slate-600">
                News and videos connected to the player.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
            NHTV Football · Players
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Discover the people who make the teams.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            A connected player system gives every footballer a place within the
            wider NHTV Football data and media ecosystem.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/nhtv-football/teams/men/players"
              className="rounded-md bg-[#050A30] px-6 py-3 text-sm font-semibold text-white"
            >
              Men’s Players
            </Link>

            <Link
              href="/nhtv-football/teams"
              className="rounded-md border border-slate-200 px-6 py-3 text-sm font-semibold text-[#050A30]"
            >
              Teams Directory
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
