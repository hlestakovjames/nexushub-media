import Link from 'next/link';

const videoTypes = [
  {
    number: '01',
    title: 'Match Coverage',
    description:
      'Visual coverage connected to completed matches, matchday moments, highlights, and post-match discussion.',
  },
  {
    number: '02',
    title: 'Team Features',
    description:
      'Stories, profiles, interviews, training features, and behind-the-scenes coverage centred on men’s teams.',
  },
  {
    number: '03',
    title: 'Player Features',
    description:
      'Interviews, profiles, analysis, and other video content connected to individual players.',
  },
  {
    number: '04',
    title: 'Analysis & Features',
    description:
      'Longer-form football analysis, tactical discussion, documentaries, features, and broader storytelling.',
  },
];

const contentConnections = [
  {
    label: 'TEAMS',
    title: 'Team video libraries',
    description:
      'Videos can be linked to specific men’s teams so a team profile becomes a complete content destination.',
    href: '/nhtv-football/teams/men/teams',
  },
  {
    label: 'PLAYERS',
    title: 'Player video coverage',
    description:
      'Player profiles can surface interviews, features, match coverage, and other relevant visual content.',
    href: '/nhtv-football/teams/men/players',
  },
  {
    label: 'FIXTURES',
    title: 'Matchday video',
    description:
      'Upcoming fixtures can later connect to previews, while completed fixtures can connect to match coverage.',
    href: '/nhtv-football/teams/men/fixtures',
  },
  {
    label: 'RESULTS',
    title: 'Post-match video',
    description:
      'Completed results can become gateways into highlights, reactions, analysis, and other visual coverage.',
    href: '/nhtv-football/teams/men/results',
  },
];

const videoLifecycle = [
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
      'The video is prepared with its title, description, thumbnail, metadata, category, and football relationships.',
  },
  {
    number: '03',
    title: 'Publish',
    description:
      'The completed video becomes available through the Men’s Videos destination and relevant entity pages.',
  },
  {
    number: '04',
    title: 'Discover',
    description:
      'Audiences can reach videos through teams, players, fixtures, results, news, and the wider football ecosystem.',
  },
];

export default function NHTVFootballMenVideosPage() {
  return (
    <main className="bg-white text-[#050A30]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#050A30] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(95,201,230,0.18),_transparent_42%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#5FC9E6]">
              NHTV Football · Teams · Men · Videos
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Watch the game
              <br />
              from another angle.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/70 sm:text-xl">
              Men’s football video coverage bringing matches, teams, players,
              analysis, interviews, features, and football stories together in
              one visual destination.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/nhtv-football/teams/men"
                className="rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
              >
                Men’s Football Home
              </Link>

              <Link
                href="/nhtv-football/teams/men/news"
                className="rounded-md border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore News
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
                Men’s Videos
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                The visual media layer of Men’s football.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-600">
              <p>
                The Men’s Videos module provides a permanent home for visual
                football content connected to the teams, players, matches, and
                competitions represented in the Men subsystem.
              </p>

              <p>
                It is intentionally different from News. News is editorial
                publishing, while Videos is the watchable media library that
                can stand alone or reinforce an article, team, player, fixture,
                or result.
              </p>

              <p>
                The same content model can later support both individual video
                pages and related-video discovery without duplicating the
                underlying football relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO LIBRARY */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Video Library
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                The Men’s video library will live here.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                This surface is prepared for CMS-driven videos, thumbnails,
                categories, descriptions, publishing metadata, and connections
                to the football data model.
              </p>
            </div>

            <span className="inline-flex w-fit rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-500">
              Video library
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
                  Men’s Football Video
                </p>

                <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  Published videos will appear here.
                </h3>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  The future video system can populate this library with
                  playable media, thumbnails, duration, categories, publication
                  dates, descriptions, related teams, players, fixtures,
                  results, and news.
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

      {/* VIDEO TYPES */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Content Types
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              A single video destination can support different formats.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The CMS can organize the library without forcing audiences into
              separate destinations for every kind of football video.
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

      {/* CONTENT CONNECTIONS */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
              Connected Football Content
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Videos should never become isolated media records.
            </h2>

            <p className="mt-5 text-lg leading-8 text-white/65">
              The strongest experience comes when a video can be discovered
              from the football entities and events it belongs to.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {contentConnections.map((connection) => (
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

      {/* VIDEO LIFECYCLE */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Video Lifecycle
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              From football moment to permanent media.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {videoLifecycle.map((stage) => (
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

      {/* VIDEO EXPERIENCE */}
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
                Search, categories, related football entities, and editorial
                links can help audiences reach the content they need quickly.
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
                Individual video experiences can later support embedded media,
                metadata, descriptions, related content, and responsive
                playback.
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
                Related teams, players, news, results, fixtures, and additional
                videos can keep the audience inside the football ecosystem.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* NEWS BRIDGE */}
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
                  Articles can reference videos, while videos can lead audiences
                  back to the stories, match records, teams, players, and
                  competitions behind the coverage.
                </p>
              </div>

              <Link
                href="/nhtv-football/teams/men/news"
                className="inline-flex w-fit rounded-md bg-[#050A30] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Explore News
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* DATA / CMS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                  Built for Media + CMS
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  Ready for structured Men’s video content.
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  The future media service can manage video titles, descriptions,
                  thumbnails, media sources, durations, categories, publication
                  state, authors, tags, and relationships to teams, players,
                  competitions, fixtures, results, and news.
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
            NHTV Football · Men · Videos
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            See the Men’s game through more than one lens.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Build a visual football library that remains connected to the teams,
            players, fixtures, results, competitions, and stories that define
            it.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/nhtv-football/teams/men"
              className="inline-flex rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
            >
              Men’s Football Home
            </Link>

            <Link
              href="/nhtv-football/teams/men/teams"
              className="inline-flex rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Explore Teams
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
