import Link from 'next/link';

type PlayerProfilePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const modules = [
  {
    number: '01',
    title: 'Overview',
    description:
      'Player identity, primary profile information, and Women’s football context.',
  },
  {
    number: '02',
    title: 'Statistics',
    description:
      'Structured performance statistics supplied by the football service.',
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
      'Editorial stories connected to the player.',
  },
  {
    number: '05',
    title: 'Videos',
    description:
      'Interviews, highlights, features, analysis, and other visual content.',
  },
];

export default async function NHTVFootballWomenPlayerProfilePage({
  params,
}: PlayerProfilePageProps) {
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
              href="/nhtv-football/teams/women/players"
              className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]"
            >
              ← Women’s Players
            </Link>

            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
              NHTV Football · Teams · Women · Player Profile
            </p>

            <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl">
              {displayName || 'Player'}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
              An entity-level destination for an individual Women’s football
              player, connecting identity, team membership, matches,
              statistics, news, and videos.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Player Modules
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Everything connected to the player.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The individual player profile is designed to become the central
              destination for player-level football data and media.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {modules.map((module) => (
              <article
                key={module.number}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-8"
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

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 lg:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Entity Ready
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Ready for structured Women’s football data.
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              The slug currently identifies the player route. Once the backend
              is connected, this page can resolve the canonical player record,
              current team, squad membership, statistics, match participation,
              news, and video relationships.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/nhtv-football/teams/women/players"
                className="rounded-md bg-[#050A30] px-6 py-3 text-sm font-semibold text-white"
              >
                Women’s Players
              </Link>

              <Link
                href="/nhtv-football/teams/women/teams"
                className="rounded-md border border-slate-200 px-6 py-3 text-sm font-semibold text-[#050A30]"
              >
                Women’s Teams
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
