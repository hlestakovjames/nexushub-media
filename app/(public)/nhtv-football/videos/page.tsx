import Link from 'next/link';

import PageHero from '@/components/hero/PageHero';

const videoCategories = [
  {
    number: '01',
    title: 'Match Highlights',
    description:
      'Visual coverage of completed matches, key moments, goals, performances, and other matchday highlights.',
  },
  {
    number: '02',
    title: 'Interviews',
    description:
      'Conversations with players, coaches, analysts, supporters, creators, and other football voices.',
  },
  {
    number: '03',
    title: 'Analysis',
    description:
      'Tactical breakdowns, match analysis, opinions, previews, reviews, and discussions around the game.',
  },
  {
    number: '04',
    title: 'Features & Stories',
    description:
      'Longer-form football storytelling covering people, communities, journeys, rivalries, culture, and memorable moments.',
  },
];

const videoConnections = [
  {
    title: 'Match',
    description:
      'Connect a video to the fixture or completed match it covers.',
  },
  {
    title: 'Team',
    description:
      'Associate videos with the teams, clubs, or entities featured in the content.',
  },
  {
    title: 'Story',
    description:
      'Connect visual content to the football news or editorial story surrounding it.',
  },
  {
    title: 'Competition',
    description:
      'Relate videos to the league, tournament, cup, or competition context in which they belong.',
  },
];

export default function NHTVFootballVideosPage() {
  return (
    <main>
      <PageHero
        eyebrow="NHTV Football Videos"
        title={
          <>
            See the game
            <br />
            from every angle.
          </>
        }
        description="NHTV Football Videos is the dedicated football video library for highlights, interviews, analysis, features, clips, and other visual content connected to the game."
        image="/images/hero/hero-team.jpeg"
        primaryAction={{
          label: 'Explore Football News',
          href: '/nhtv-football/news',
        }}
        secondaryAction={{
          label: 'Explore Teams',
          href: '/nhtv-football/teams',
        }}
        height="large"
      />

      {/* INTRO */}
      <section className="bg-white text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Football Video
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                A visual home for football coverage.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-600">
              <p>
                NHTV Football Videos provides the permanent watchable-content
                layer of the football platform. It brings together individual
                video releases while preserving their connection to the
                broader football story.
              </p>

              <p>
                A video may originate from a match, a team, an interview, an
                analysis segment, a feature story, or a special production.
                The library should make those relationships discoverable.
              </p>

              <p>
                As the platform develops, this section can evolve into a
                searchable football video library with categories, filters,
                playlists, featured releases, related content, and individual
                video pages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED VIDEO */}
      <section className="bg-slate-50 text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Featured Video
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Put the biggest football story on screen.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                A primary feature area can highlight a major match,
                interview, analysis piece, football story, or special
                production selected by the editorial team.
              </p>
            </div>

            <span className="inline-flex w-fit rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-500">
              Football video
            </span>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl bg-[#050A30] shadow-sm">
            <div className="grid min-h-[430px] lg:grid-cols-[1.25fr_0.75fr]">
              <div className="relative flex items-end p-8 sm:p-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(95,201,230,0.20),_transparent_42%)]" />

                <div className="relative">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
                    Featured Football Video
                  </p>

                  <h3 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Your featured football production will appear here.
                  </h3>

                  <p className="mt-5 max-w-2xl text-lg leading-8 text-white/60">
                    This feature is prepared for a real video thumbnail, player,
                    title, summary, publication information, and links to the
                    associated match, team, or editorial story.
                  </p>

                  <Link
                    href="/nhtv-football/videos"
                    className="mt-7 inline-flex rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
                  >
                    Watch Featured Video
                  </Link>
                </div>
              </div>

              <div className="flex items-center justify-center border-t border-white/10 bg-white/5 p-8 lg:border-l lg:border-t-0">
                <div className="text-center">
                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-white/5">
                    <span className="ml-1 text-3xl text-[#5FC9E6]">
                      ▶
                    </span>
                  </div>

                  <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-white/40">
                    Video Player
                  </p>

                  <p className="mt-2 max-w-xs text-sm leading-6 text-white/50">
                    Player integration can be connected here when published
                    football video is available.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="bg-white text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Video Categories
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Different ways to experience the game.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Football video can serve very different audience needs, from
              quick highlights to longer-form analysis and storytelling.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {videoCategories.map((category) => (
              <article
                key={category.number}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-sm font-semibold text-[#1266B6]">
                  {category.number}
                </span>

                <h3 className="mt-4 text-2xl font-bold">
                  {category.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {category.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LATEST */}
      <section className="bg-slate-50 text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Latest Videos
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                The latest football content.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Recently published football videos can be surfaced here so
                audiences immediately see what is new.
              </p>
            </div>

            <span className="text-sm font-semibold text-slate-500">
              Video feed ready for CMS integration
            </span>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <article className="rounded-3xl bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#1266B6]">
                MATCHDAY
              </p>

              <h3 className="mt-4 text-xl font-bold">
                Match highlights will appear here.
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Recent match content can be presented with links to the
                corresponding fixture and result.
              </p>
            </article>

            <article className="rounded-3xl bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#1266B6]">
                INTERVIEW
              </p>

              <h3 className="mt-4 text-xl font-bold">
                Football conversations can appear here.
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Interviews can connect directly to the people, teams, and
                stories being discussed.
              </p>
            </article>

            <article className="rounded-3xl bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#1266B6]">
                ANALYSIS
              </p>

              <h3 className="mt-4 text-xl font-bold">
                Deeper analysis can be featured here.
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Tactical breakdowns and football discussions can complement the
                fast-moving match content.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CONTENT RELATIONSHIPS */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
                Connected Video
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Every football video should know where it belongs.
              </h2>

              <p className="mt-5 max-w-xl text-lg leading-8 text-white/65">
                Relationships make the video library more useful. A viewer
                should be able to move from a video to the match, team,
                competition, or story connected to it.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              {videoConnections.map((connection) => (
                <article
                  key={connection.title}
                  className="border-l border-white/15 pl-6"
                >
                  <h3 className="text-xl font-bold">{connection.title}</h3>

                  <p className="mt-3 leading-7 text-white/65">
                    {connection.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DISCOVERY */}
      <section className="bg-white text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Video Discovery
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Built for browsing as well as watching.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              As the library grows, audiences should be able to discover
              football content by what happened, who was involved, and what
              kind of content they want to watch.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <article className="rounded-3xl border border-slate-200 p-7">
              <p className="text-sm font-semibold text-[#1266B6]">
                RECENT
              </p>

              <h3 className="mt-3 text-xl font-bold">
                Latest releases
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Quickly find the newest published football videos.
              </p>
            </article>

            <article className="rounded-3xl border border-slate-200 p-7">
              <p className="text-sm font-semibold text-[#1266B6]">
                TEAMS
              </p>

              <h3 className="mt-3 text-xl font-bold">
                Team coverage
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Find videos associated with a particular team.
              </p>
            </article>

            <article className="rounded-3xl border border-slate-200 p-7">
              <p className="text-sm font-semibold text-[#1266B6]">
                MATCHES
              </p>

              <h3 className="mt-3 text-xl font-bold">
                Match coverage
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Find highlights and analysis connected to specific matches.
              </p>
            </article>

            <article className="rounded-3xl border border-slate-200 p-7">
              <p className="text-sm font-semibold text-[#1266B6]">
                TOPICS
              </p>

              <h3 className="mt-3 text-xl font-bold">
                Editorial collections
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Discover videos grouped around themes, competitions, or
                football stories.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* RELATIONSHIPS */}
      <section className="bg-slate-50 text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Connected Football Platform
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Videos connect naturally to the rest of NHTV Football.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/nhtv-football/fixtures"
              className="group rounded-3xl bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">
                FIXTURES
              </p>

              <h3 className="mt-3 text-xl font-bold">
                Watch the build-up.
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Connect previews and matchday video to upcoming fixtures.
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                View Fixtures →
              </span>
            </Link>

            <Link
              href="/nhtv-football/results"
              className="group rounded-3xl bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">
                RESULTS
              </p>

              <h3 className="mt-3 text-xl font-bold">
                Relive the outcome.
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Connect highlights and post-match content to completed
                matches.
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                View Results →
              </span>
            </Link>

            <Link
              href="/nhtv-football/teams"
              className="group rounded-3xl bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">TEAMS</p>

              <h3 className="mt-3 text-xl font-bold">
                Follow the people involved.
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Connect videos to the teams and football entities they
                feature.
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                Explore Teams →
              </span>
            </Link>

            <Link
              href="/nhtv-football/news"
              className="group rounded-3xl bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">NEWS</p>

              <h3 className="mt-3 text-xl font-bold">
                Read the story.
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Connect videos with the football stories and editorial
                reporting around them.
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                Read News →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* FUTURE VIDEO SYSTEM */}
      <section className="bg-white text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="rounded-3xl border border-slate-200 p-8 sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                  Built for a Real Video Platform
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  Ready for publishing, search, and player integration.
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  When the backend is connected, the football video system can
                  support publishing workflows, thumbnails, video providers,
                  duration, categories, tags, related teams, related matches,
                  playlists, featured content, individual video pages, and
                  search.
                </p>
              </div>

              <Link
                href="/nhtv-football/about"
                className="inline-flex w-fit rounded-md bg-[#050A30] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                About NHTV Football
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
            NHTV Football Videos
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Football is better when you can see the story.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Browse highlights, interviews, analysis, and football stories
            through the dedicated NHTV Football video experience.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/nhtv-football/news"
              className="inline-flex rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
            >
              Football News
            </Link>

            <Link
              href="/nhtv-football/teams"
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
