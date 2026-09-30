import Link from 'next/link';

const videoTypes = [
  {
    number: '01',
    title: 'Match Coverage',
    description:
      'Highlights, matchday coverage, reactions, and visual storytelling connected to completed Women’s matches.',
  },
  {
    number: '02',
    title: 'Team Features',
    description:
      'Profiles, interviews, training features, behind-the-scenes stories, and other team-centred productions.',
  },
  {
    number: '03',
    title: 'Player Features',
    description:
      'Interviews, profiles, analysis, and visual stories connected to individual Women’s players.',
  },
  {
    number: '04',
    title: 'Analysis & Features',
    description:
      'Long-form football analysis, tactical discussion, documentaries, features, and broader storytelling.',
  },
];

const connections = [
  {
    label: 'TEAMS',
    title: 'Team video libraries',
    description:
      'Videos can be connected directly to Women’s team entities and surfaced from team profiles.',
    href: '/nhtv-football/teams/women/teams',
  },
  {
    label: 'PLAYERS',
    title: 'Player video coverage',
    description:
      'Individual player profiles can surface interviews, features, highlights, and related visual content.',
    href: '/nhtv-football/teams/women/players',
  },
  {
    label: 'FIXTURES',
    title: 'Matchday video',
    description:
      'Upcoming fixtures can connect to previews, while completed fixtures can connect to match coverage.',
    href: '/nhtv-football/teams/women/fixtures',
  },
  {
    label: 'RESULTS',
    title: 'Post-match video',
    description:
      'Completed results can lead audiences into highlights, reactions, analysis, and other visual coverage.',
    href: '/nhtv-football/teams/women/results',
  },
];

const lifecycle = [
  {
    number: '01',
    title: 'Produce',
    description:
      'A match, team event, player story, or football subject becomes a video production opportunity.',
  },
  {
    number: '02',
    title: 'Process',
    description:
      'The production receives its title, description, thumbnail, metadata, category, and football relationships.',
  },
  {
    number: '03',
    title: 'Publish',
    description:
      'The finished video becomes available through Women’s Videos and connected entity pages.',
  },
  {
    number: '04',
    title: 'Discover',
    description:
      'Audiences can reach videos through teams, players, fixtures, results, news, and the wider football ecosystem.',
  },
];

export default function NHTVFootballWomenVideosPage() {
  return (
    <main className="bg-white text-[#050A30]">
      <section className="relative overflow-hidden bg-[#050A30] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(95,201,230,0.18),_transparent_42%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#5FC9E6]">
              NHTV Football · Teams · Women · Videos
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Watch the Women’s
              <br />
              game from another angle.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/70 sm:text-xl">
              Women’s football video coverage bringing matches, teams, players,
              analysis, interviews, features, and football stories together in
              one visual destination.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/nhtv-football/teams/women"
                className="rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30]"
              >
                Women’s Football Home
              </Link>

              <Link
                href="/nhtv-football/teams/women/news"
                className="rounded-md border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore News
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
                Women’s Videos
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                The visual media layer of Women’s football.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-600">
              <p>
                The Women’s Videos module provides a permanent home for visual
                football content connected to the teams, players, matches, and
                competitions represented in the Women subsystem.
              </p>

              <p>
                It remains distinct from News. News is the editorial publishing
                layer, while Videos is the watchable media library that can
                stand alone or reinforce an article, team, player, fixture, or
                result.
              </p>

              <p>
                The same content model can later support individual video pages,
                related content, categories, and football entity relationships
                without duplicating the underlying records.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Video Library
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                The Women’s video library will live here.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                This surface is ready for CMS-driven videos, thumbnails,
                categories, descriptions, publication metadata, and football
                entity relationships.
              </p>
            </div>

            <span className="inline-flex w-fit rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-500">
              Women’s video library
            </span>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="flex min-h-[420px] items-center justify-center p-8 sm:p-12">
              <div className="max-w-2xl text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-slate-100">
                  <span className="ml-1 text-3xl font-bold text-[#1266B6]">
                    ▶
                  </span>
                </div>

                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#1266B6]">
                  Women’s Football Video
                </p>

                <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  Published videos will appear here.
                </h3>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  The future media service can populate this library with
                  playable media, thumbnails, duration, categories,
                  publication dates, descriptions, and relationships to teams,
                  players, fixtures, results, competitions, and news.
                </p>

                <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-sm font-semibold text-slate-400">
                  <span className="rounded-full bg-slate-100 px-3 py-1">
                    Highlights
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1">
                    Interviews
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1">
                    Features
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1">
                    Analysis
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1">
                    Match Coverage
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Content Types
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              One video destination can support multiple formats.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The CMS can organize the library without fragmenting the Women’s
              audience across unnecessary destinations.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {videoTypes.map((type) => (
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

      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
              Connected Football Content
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Videos should remain connected to the football entities behind
              them.
            </h2>

            <p className="mt-5 text-lg leading-8 text-white/65">
              The strongest experience comes when a video can be discovered
              through the teams, players, fixtures, results, and competitions
              it belongs to.
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

                <span className="mt-7 inline-flex text-sm font-semibold text-[#5FC9E6]">
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Video Lifecycle
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              From Women’s football moment to permanent media.
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

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-6 md:grid-cols-3">
            <article className="rounded-3xl bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold text-[#1266B6]">
                DISCOVERY
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Find the right video.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Categories, related entities, search, and editorial links can
                help audiences reach the content they need quickly.
              </p>
            </article>

            <article className="rounded-3xl bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold text-[#1266B6]">
                PLAYBACK
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Watch without distraction.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Individual video experiences can support responsive playback,
                metadata, descriptions, and related content.
              </p>
            </article>

            <article className="rounded-3xl bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold text-[#1266B6]">
                CONTINUATION
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Keep exploring.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Related teams, players, news, results, fixtures, competitions,
                and additional videos can keep audiences inside the Women’s
                football ecosystem.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                  Video + News
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  Editorial and visual storytelling should reinforce each
                  other.
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Articles can reference videos while videos can lead audiences
                  back to the stories, results, fixtures, teams, players, and
                  competitions behind the coverage.
                </p>
              </div>

              <Link
                href="/nhtv-football/teams/women/news"
                className="inline-flex w-fit rounded-md bg-[#050A30] px-6 py-3 text-sm font-semibold text-white"
              >
                Explore News
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
            NHTV Football · Women · Videos
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            See the Women’s game through more than one lens.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Build a visual football library that remains connected to the teams,
            players, fixtures, results, competitions, and stories that define
            it.
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
