import Link from 'next/link';

type TeamPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const teamModules = [
  {
    title: 'OVERVIEW',
    description: 'Identity, profile information, and team context.',
  },
  {
    title: 'SQUAD',
    description: 'Current squad membership and player relationships.',
  },
  {
    title: 'PLAYERS',
    description: 'Individual player records connected to the team.',
  },
  {
    title: 'FIXTURES',
    description: 'Upcoming matches involving the team.',
  },
  {
    title: 'RESULTS',
    description: 'Completed matches and historical outcomes.',
  },
  {
    title: 'NEWS',
    description: 'Editorial coverage related to the team.',
  },
  {
    title: 'VIDEOS',
    description: 'Visual coverage connected to the team.',
  },
];

export default async function NHTVFootballTeamProfilePage({
  params,
}: TeamPageProps) {
  const { slug } = await params;

  const displayName = slug
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');

  return (
    <main className="bg-white text-[#050A30]">
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <Link
              href="/nhtv-football/teams"
              className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]"
            >
              ← Teams Directory
            </Link>

            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
              Team Profile
            </p>

            <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl">
              {displayName || 'Team'}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              This is the entity-level destination for a football team. Real
              team information will be supplied by the football backend and CMS.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Team Modules
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Everything connected to the team.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The team profile acts as the central hub for the team's football
              data and media relationships.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {teamModules.map((module, index) => (
              <article
                key={module.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-8"
              >
                <span className="text-sm font-semibold text-[#1266B6]">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <h3 className="mt-4 text-xl font-bold">{module.title}</h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {module.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 lg:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Backend Ready
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              This route is designed around a real team entity.
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              The slug currently determines the route identity. Once the
              football backend is connected, this page can load the canonical
              team record, squad, competitions, match history, editorial
              coverage, and video relationships from the database and APIs.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/nhtv-football/teams"
                className="rounded-md bg-[#050A30] px-6 py-3 text-sm font-semibold text-white"
              >
                Teams Directory
              </Link>

              <Link
                href="/nhtv-football"
                className="rounded-md border border-slate-200 px-6 py-3 text-sm font-semibold text-[#050A30]"
              >
                Football Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
