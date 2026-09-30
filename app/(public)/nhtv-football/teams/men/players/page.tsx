import Link from 'next/link';

const playerViews = [
  {
    number: '01',
    title: 'Player Directory',
    description:
      'A structured catalogue of men’s football players available within the NHTV Football platform.',
  },
  {
    number: '02',
    title: 'Player Profiles',
    description:
      'Each player can eventually have a dedicated profile connecting identity, team, statistics, matches, news, and videos.',
  },
  {
    number: '03',
    title: 'By Team',
    description:
      'Discover players through the teams and squads to which they are connected.',
  },
  {
    number: '04',
    title: 'By Competition',
    description:
      'Explore players through the competitions in which their teams participate.',
  },
];

const profileLayers = [
  {
    label: 'IDENTITY',
    title: 'Player Profile',
    description:
      'Name, image, position, nationality, team relationship, and other supported player information.',
  },
  {
    label: 'PERFORMANCE',
    title: 'Statistics',
    description:
      'Relevant player statistics and performance information provided by the football data source.',
  },
  {
    label: 'MATCHES',
    title: 'Player Matches',
    description:
      'Matches connected to the player through appearances, participation, or other supported relationships.',
  },
  {
    label: 'MEDIA',
    title: 'News & Videos',
    description:
      'Editorial stories, interviews, highlights, features, and other media connected to the player.',
  },
];

const directoryCapabilities = [
  {
    title: 'Search',
    description:
      'Find players directly by name or supported football identifier.',
  },
  {
    title: 'Filter',
    description:
      'Narrow the player directory using team, position, competition, country, or other supported classifications.',
  },
  {
    title: 'Browse',
    description:
      'Explore players through team and competition relationships without requiring a specific name.',
  },
  {
    title: 'Profile',
    description:
      'Move from the directory into an individual player experience with connected football information.',
  },
];

export default function NHTVFootballMenPlayersPage() {
  return (
    <main className="bg-white text-[#050A30]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#050A30] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(95,201,230,0.18),_transparent_42%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#5FC9E6]">
              NHTV Football · Teams · Men · Players
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              The Players
              <br />
              Behind the Game.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/70 sm:text-xl">
              A structured player directory connecting football identities,
              teams, performances, matches, news, and video.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/nhtv-football/teams/men"
                className="rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
              >
                Men’s Football Home
              </Link>

              <Link
                href="/nhtv-football/teams/men/teams"
                className="rounded-md border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore Teams
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
                Player Entities
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Players are entities within the football system.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-600">
              <p>
                The Players module gives individual footballers a structured
                identity within the NHTV Football ecosystem.
              </p>

              <p>
                A player can be connected to one or more teams over time,
                matches, competitions, statistics, editorial coverage, and
                media.
              </p>

              <p>
                This makes the player directory an important bridge between the
                team system and the broader football information model.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DIRECTORY */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Player Directory
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Your live player catalogue will appear here.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                This interface is ready for real player records once the
                football data service is connected.
              </p>
            </div>

            <span className="inline-flex w-fit rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-500">
              Player directory
            </span>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="flex min-h-[360px] items-center justify-center p-8 sm:p-12">
              <div className="max-w-2xl text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-slate-100">
                  <span className="text-3xl font-bold text-[#1266B6]">
                    P
                  </span>
                </div>

                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#1266B6]">
                  Men’s Players
                </p>

                <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  Player records will appear here when the data layer is
                  connected.
                </h3>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  The directory can support search, team filters, position
                  filters, competition context, pagination, sorting, and
                  direct links to individual player profiles.
                </p>

                <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-sm font-semibold text-slate-400">
                  <span className="rounded-full bg-slate-100 px-3 py-1">
                    Search
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1">
                    Team
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1">
                    Position
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1">
                    Competition
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DISCOVERY */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Player Discovery
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Find players through different paths.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The player directory should work for audiences who already know
              the player they want as well as those discovering players through
              teams and competitions.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {directoryCapabilities.map((capability) => (
              <article
                key={capability.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-xl font-bold">
                  {capability.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {capability.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROFILE */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
                Player Profile
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                An individual player can become a football content hub.
              </h2>

              <p className="mt-5 max-w-xl text-lg leading-8 text-white/65">
                Selecting a player should lead to a deeper experience where
                football data and editorial media meet.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              {profileLayers.map((layer) => (
                <article
                  key={layer.title}
                  className="border-l border-white/15 pl-6"
                >
                  <p className="text-sm font-semibold text-[#5FC9E6]">
                    {layer.label}
                  </p>

                  <h3 className="mt-3 text-xl font-bold">
                    {layer.title}
                  </h3>

                  <p className="mt-3 leading-7 text-white/65">
                    {layer.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PLAYER / TEAM RELATIONSHIP */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Team Relationship
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Teams and players should remain tightly connected.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              A player can be discovered through a team, while the team profile
              can expose the players who belong to its squad.
            </p>
          </div>

          <div className="mt-12 rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-10">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-2xl bg-white p-6">
                <p className="text-sm font-semibold text-[#1266B6]">
                  TEAM
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  Squad
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  The team profile can expose its current or relevant squad
                  members.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6">
                <p className="text-sm font-semibold text-[#1266B6]">
                  PLAYER
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  Player profile
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  The player profile can identify current and relevant team
                  relationships.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6">
                <p className="text-sm font-semibold text-[#1266B6]">
                  MATCH
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  Participation
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Match records can later connect teams, players, and
                  competition context.
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
              href="/nhtv-football/teams/men/teams"
              className="group rounded-3xl bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">TEAMS</p>

              <h3 className="mt-3 text-xl font-bold">
                Explore team entities.
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Discover the teams to which players are connected.
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6]">
                Explore Teams →
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
                Discover the competitions in which teams and players
                participate.
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
                See upcoming matches.
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Follow the upcoming match schedule involving men’s teams.
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
                Explore the outcomes surrounding men’s football.
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6]">
                View Results →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* FUTURE DATA */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="rounded-3xl border border-slate-200 p-8 sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                  Built for Football Data
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  Ready for a real player information service.
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  The future player system can support player identifiers,
                  profiles, positions, team relationships, competition
                  relationships, statistics, match appearances, editorial
                  coverage, media, and individual player routes.
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
            NHTV Football · Men · Players
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Follow the players who shape the game.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Explore player identities and connect them to teams, competitions,
            matches, news, statistics, and media.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/nhtv-football/teams/men/teams"
              className="inline-flex rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
            >
              Explore Teams
            </Link>

            <Link
              href="/nhtv-football/teams/men/competitions"
              className="inline-flex rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Explore Competitions
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
