import Link from 'next/link';

import PageHero from '@/components/hero/PageHero';

const newsTypes = [
  {
    number: '01',
    title: 'NHTV Updates',
    description:
      'Announcements and updates about Nexus Hub TV, its platform, programming, productions, and developments.',
  },
  {
    number: '02',
    title: 'Show & Production News',
    description:
      'Editorial updates connected to NHTV shows, new productions, upcoming releases, projects, and production milestones.',
  },
  {
    number: '03',
    title: 'Behind the Content',
    description:
      'Stories and updates that provide audiences with context around how selected NHTV productions and media experiences come together.',
  },
  {
    number: '04',
    title: 'Media Editorial',
    description:
      'Relevant editorial coverage, commentary, and updates connected to subjects explored through the NHTV platform.',
  },
];

const articleStructure = [
  {
    title: 'Headline',
    description:
      'A clear and concise title that communicates the main point of the article.',
  },
  {
    title: 'Summary',
    description:
      'A short introduction that helps readers understand why the story matters.',
  },
  {
    title: 'Content',
    description:
      'The full editorial article, with relevant supporting media and context.',
  },
  {
    title: 'Related Media',
    description:
      'Links to relevant shows, videos, programmes, live broadcasts, and other NHTV content.',
  },
];

export default function NexusHubTVNewsPage() {
  return (
    <main>
      <PageHero
        eyebrow="NHTV News"
        title={
          <>
            What is happening
            <br />
            across Nexus Hub TV.
          </>
        }
        description="NHTV News is the editorial update layer for Nexus Hub TV, bringing together platform announcements, production updates, show news, media developments, and stories connected to the NHTV ecosystem."
        image="/images/hero/hero-team.jpeg"
        primaryAction={{
          label: 'Explore Shows',
          href: '/nexus-hub-tv/shows',
        }}
        secondaryAction={{
          label: 'Browse Videos',
          href: '/nexus-hub-tv/videos',
        }}
        height="large"
      />

      {/* POSITIONING */}
      <section className="bg-white text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Editorial Layer
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                The newsroom around the platform.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-600">
              <p>
                NHTV News gives the television platform a dedicated place to
                communicate what is changing, what is being produced, and what
                audiences should know about the NHTV ecosystem.
              </p>

              <p>
                This is different from the Videos section, which is focused on
                watchable media, and different from Shows, which describes
                recurring productions. News is focused on editorial updates and
                information.
              </p>

              <p>
                It can also provide the connective tissue between NHTV’s
                content and the people following the development of the
                platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED STORY */}
      <section className="bg-slate-50 text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Featured Story
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                A prominent place for the story that matters most.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                The featured story area can highlight an important NHTV
                announcement, production update, editorial feature, or major
                platform development.
              </p>
            </div>

            <span className="inline-flex w-fit rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-500">
              Editorial
            </span>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl bg-[#050A30] shadow-sm">
            <div className="grid min-h-[400px] lg:grid-cols-[1.25fr_0.75fr]">
              <div className="relative flex items-end p-8 sm:p-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(95,201,230,0.20),_transparent_42%)]" />

                <div className="relative">
                  <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
                    Featured NHTV News
                  </span>

                  <h3 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Your featured NHTV story will appear here.
                  </h3>

                  <p className="mt-5 max-w-2xl text-lg leading-8 text-white/60">
                    This feature area is ready for a real editorial article,
                    image, publication date, author, and related content once
                    the news system becomes active.
                  </p>

                  <div className="mt-7">
                    <Link
                      href="/nexus-hub-tv/news"
                      className="inline-flex rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
                    >
                      Read Featured Story
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center border-t border-white/10 bg-white/5 p-8 lg:border-l lg:border-t-0">
                <div className="text-center">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/40">
                    Featured Media
                  </p>

                  <div className="mx-auto mt-5 flex h-28 w-28 items-center justify-center rounded-3xl border border-white/10 bg-white/5">
                    <span className="text-3xl text-[#5FC9E6]">N</span>
                  </div>

                  <p className="mt-5 max-w-xs text-sm leading-6 text-white/50">
                    Article imagery, video, or supporting media can be surfaced
                    here.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEWS CATEGORIES */}
      <section className="bg-white text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              News Categories
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Different updates can live within one editorial system.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The NHTV News layer can support multiple editorial categories
              without losing the identity of the television platform.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {newsTypes.map((type) => (
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

      {/* LATEST NEWS */}
      <section className="bg-slate-50 text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Latest
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Latest from NHTV.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Recent NHTV stories, announcements, production updates, and
                editorial developments can be surfaced here as the publishing
                system becomes active.
              </p>
            </div>

            <span className="text-sm font-semibold text-slate-500">
              News feed ready for CMS integration
            </span>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <article className="rounded-3xl bg-white p-8 shadow-sm">
              <span className="text-sm font-semibold uppercase tracking-[0.14em] text-[#1266B6]">
                Update
              </span>

              <h3 className="mt-4 text-xl font-bold">
                Latest NHTV updates will appear here.
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                A future news card can display the headline, date, category,
                short summary, and link to the full article.
              </p>
            </article>

            <article className="rounded-3xl bg-white p-8 shadow-sm">
              <span className="text-sm font-semibold uppercase tracking-[0.14em] text-[#1266B6]">
                Production
              </span>

              <h3 className="mt-4 text-xl font-bold">
                Production stories can be featured here.
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Production-related news can connect audiences back to shows,
                episodes, videos, and other media assets.
              </p>
            </article>

            <article className="rounded-3xl bg-white p-8 shadow-sm">
              <span className="text-sm font-semibold uppercase tracking-[0.14em] text-[#1266B6]">
                Platform
              </span>

              <h3 className="mt-4 text-xl font-bold">
                Platform developments can be announced here.
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                New features, programming developments, partnerships, and
                other NHTV platform updates can have dedicated coverage.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ARTICLE MODEL */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
                Editorial Content Model
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Every NHTV article should carry enough context to stand alone.
              </h2>

              <p className="mt-5 max-w-xl text-lg leading-8 text-white/65">
                The future content model can support both editorial quality and
                strong connections to the rest of the NHTV platform.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              {articleStructure.map((item) => (
                <article
                  key={item.title}
                  className="border-l border-white/15 pl-6"
                >
                  <h3 className="text-xl font-bold">{item.title}</h3>

                  <p className="mt-3 leading-7 text-white/65">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RELATIONSHIP TO OTHER CONTENT */}
      <section className="bg-white text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Connected Content
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              News should connect the audience to the rest of NHTV.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/nexus-hub-tv/shows"
              className="group rounded-3xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">SHOWS</p>

              <h3 className="mt-3 text-xl font-bold">
                Follow the production.
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Connect production news to the show or series it references.
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                Explore Shows →
              </span>
            </Link>

            <Link
              href="/nexus-hub-tv/programs"
              className="group rounded-3xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">
                PROGRAMS
              </p>

              <h3 className="mt-3 text-xl font-bold">
                Understand the programming.
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Connect news to programme announcements, releases, and
                schedules.
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                Explore Programs →
              </span>
            </Link>

            <Link
              href="/nexus-hub-tv/videos"
              className="group rounded-3xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">VIDEOS</p>

              <h3 className="mt-3 text-xl font-bold">
                Watch the related content.
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Link articles directly to videos, episodes, clips, and
                productions.
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                Browse Videos →
              </span>
            </Link>

            <Link
              href="/nexus-hub-tv/live"
              className="group rounded-3xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">LIVE</p>

              <h3 className="mt-3 text-xl font-bold">
                Follow live developments.
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Connect editorial coverage to current or upcoming live
                broadcasts.
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                Explore Live →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CMS READY */}
      <section className="bg-slate-50 text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="rounded-3xl bg-white p-8 shadow-sm sm:p-10">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                  Built for Publishing
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  Ready for a real NHTV editorial workflow.
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  When the backend and CMS are connected, NHTV News can
                  support drafts, editorial review, publication dates,
                  categories, featured stories, authors, media attachments,
                  related content, metadata, and search.
                </p>
              </div>

              <Link
                href="/nexus-hub-tv/about"
                className="inline-flex w-fit rounded-md bg-[#050A30] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                About NHTV
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
            NHTV News
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Keep the audience connected to what is happening behind the
            screen.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            NHTV News provides the editorial layer that keeps programmes,
            productions, platform developments, and the wider NHTV experience
            connected.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/nexus-hub-tv/videos"
              className="inline-flex rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
            >
              Browse Videos
            </Link>

            <Link
              href="/nexus-hub-tv/shows"
              className="inline-flex rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Explore Shows
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
