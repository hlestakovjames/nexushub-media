import Link from 'next/link';

type WomenTeamProfileProps = {
  params: Promise<{
    slug: string;
  }>;
};

const modules = [
  {
    number: '01',
    title: 'Overview',
    description:
      'Team identity, profile information, and core football context.',
  },
  {
    number: '02',
    title: 'Squad',
    description:
      'Current squad membership and associated player records.',
  },
  {
    number: '03',
    title: 'Players',
    description:
      'Individual player relationships connected to the team.',
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
      'Editorial coverage specifically related to the team.',
  },
  {
    number: '07',
    title: 'Videos',
    description:
      'Visual coverage, interviews, highlights, and features.',
  },
];

export default async function NHTVFootballWomenTeamProfilePage({
  params,
}: WomenTeamProfileProps) {
  const { slug } = await params;

  const displayName = slug
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');

  return (
    <main className="bg-white text-[#050A30]">
      <section className="relative overflow-hidden bg-[#050A30] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(95,201,230,0.18),_transparent_42%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <Link
              href="/nhtv-football/teams/women/teams"
              className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]"
            >
              ← Women’s Teams
            </Link>

            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
              NHTV Football · Teams · Women · Team Profile
            </p>

            <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              {displayName || 'Women’s Team'}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
              An entity-level destination for a Women’s football team,
              connecting its squad, players, matches, competitions, news,
              and video coverage.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/nhtv-football/teams/women/fixtures"
                className="rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30]"
              >
                View Fixtures
              </Link>

              <Link
                href="/nhtv-football/teams/women/results"
                className="rounded-md border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View Results
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Women’s Team Entity
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                One canonical team record connects everything around it.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-600">
              <p>
                This route represents an individual team inside the Women’s
                football subsystem.
              </p>

              <p>
                Team identity, squad, player relationships, fixtures, results,
                news, and videos can all reference the same canonical team.
              </p>

              <p>
                Once the backend is connected, the route slug can resolve to
                the actual team identifier and dynamically load its complete
                football profile.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Team Modules
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Everything connected to this Women’s team.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The profile is the central destination for the team’s football
              identity and related content.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {modules.map((module) => (
              <article
                key={module.number}
                className="rounded-3xl border border-slate-200 bg-white p-8"
              >
                <span className="text-sm font-semibold text-[#1266B6]">
                  {module.number}
                </span>

                <h3 className="mt-4 text-xl font-bold">
                  {module.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {module.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
              Connected Match Data
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Fixtures and results belong to the same team history.
            </h2>

            <p className="mt-5 text-lg leading-8 text-white/65">
              Upcoming matches belong in Fixtures, completed matches belong in
              Results, and both remain connected to this team profile.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/nhtv-football/teams/women/fixtures"
                className="rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30]"
              >
                Fixtures
              </Link>

              <Link
                href="/nhtv-football/teams/women/results"
                className="rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white"
              >
                Results
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-6 md:grid-cols-3">
            <Link
              href="/nhtv-football/teams/women/players"
              className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">PLAYERS</p>

              <h3 className="mt-3 text-2xl font-bold">
                Explore the squad network.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Connect the team to the wider Women’s player system.
              </p>
            </Link>

            <Link
              href="/nhtv-football/teams/women/competitions"
              className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">
                COMPETITIONS
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Explore competition context.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                See the competitions and seasons connected to the team.
              </p>
            </Link>

            <Link
              href="/nhtv-football/teams/women/news"
              className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">NEWS</p>

              <h3 className="mt-3 text-2xl font-bold">
                Follow the team story.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Discover editorial coverage related to the Women’s team.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
            Women’s Team Profile
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            One team. One connected football destination.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            The profile brings identity, squad, matches, competitions, news,
            and videos together around the same team entity.
          </p>

          <div className="mt-8">
            <Link
              href="/nhtv-football/teams/women/teams"
              className="inline-flex rounded-md bg-[#050A30] px-6 py-3 text-sm font-semibold text-white"
            >
              Back to Women’s Teams
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
