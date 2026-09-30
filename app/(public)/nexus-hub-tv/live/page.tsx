import Link from 'next/link';

import {
  ArrowRight,
  Radio,
  Settings2,
} from 'lucide-react';

import PageHero from '@/components/hero/PageHero';

const liveStates = [
  {
    number: '01',
    title: 'Live Now',
    description:
      'The primary destination for an active Nexus Hub TV broadcast or live streaming experience.',
  },
  {
    number: '02',
    title: 'Upcoming',
    description:
      'A clear view of scheduled live broadcasts so audiences know what is coming next.',
  },
  {
    number: '03',
    title: 'Recently Live',
    description:
      'Previous broadcasts can remain discoverable through recordings, highlights, clips, or full replay experiences.',
  },
];

const liveFeatures = [
  {
    title: 'Live Player',
    description:
      'A dedicated viewing area for the active Nexus Hub TV stream when a live broadcast is running.',
  },
  {
    title: 'Broadcast Information',
    description:
      'Present the title, description, start time, programme context, and other essential information around a live event.',
  },
  {
    title: 'Upcoming Schedule',
    description:
      'Give audiences advance visibility into planned live broadcasts and special streaming experiences.',
  },
  {
    title: 'Replay',
    description:
      'Turn completed live broadcasts into reusable media assets that can flow into the wider NHTV video library.',
  },
];

export default function NexusHubTVLivePage() {
  return (
    <main>
      <PageHero
        eyebrow="NHTV Live"
        title={
          <>
            Be there
            <br />
            when it happens.
          </>
        }
        description="NHTV Live is the live-broadcast destination for Nexus Hub TV, providing a dedicated experience for live programming, scheduled broadcasts, special events, and future streaming experiences."
        image="/images/hero/hero-team.jpeg"
        primaryAction={{
          label: 'Explore Programs',
          href: '/nexus-hub-tv/programs',
        }}
        secondaryAction={{
          label: 'Browse Videos',
          href: '/nexus-hub-tv/videos',
        }}
        height="large"
      />

      {/* LIVE STATUS */}
      <section className="bg-white text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Live Experience
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                A dedicated home for live NHTV.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-600">
              <p>
                Live gives Nexus Hub TV a dedicated destination for broadcasts
                that audiences are expected to experience in real time.
              </p>

              <p>
                Rather than mixing live broadcasts with the permanent video
                library, the Live section can focus on what is happening now,
                what is coming next, and what has recently been broadcast.
              </p>

              <p>
                The experience can later connect directly to the NHTV
                streaming infrastructure, programme schedule, notifications,
                and post-broadcast video archive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LIVE NOW */}
      <section className="bg-slate-50 text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Live Now
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Your live broadcast destination.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                When an active broadcast is available, this section becomes
                the primary viewing area for the current NHTV live stream.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/nexus-hub-tv/live/studio"
                className="inline-flex items-center gap-2 rounded-full bg-[#050A30] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1266B6] focus:outline-none focus:ring-2 focus:ring-[#1266B6] focus:ring-offset-2"
              >
                <Radio size={16} aria-hidden="true" />
                Live Studio
              </Link>

              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-500">
                <span className="h-2 w-2 rounded-full bg-slate-400" />
                No active broadcast
              </span>
            </div>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl bg-[#050A30] shadow-sm">
            <div className="flex min-h-[380px] items-center justify-center p-8 sm:min-h-[460px] sm:p-12">
              <div className="max-w-2xl text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-white/15 bg-white/5">
                  <span className="text-2xl text-[#5FC9E6]">▶</span>
                </div>

                <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
                  NHTV Live
                </p>

                <h3 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Live streaming will appear here when a broadcast is active.
                </h3>

                <p className="mt-5 text-lg leading-8 text-white/60">
                  The live player area is intentionally structured so a future
                  streaming service can be integrated without changing the
                  overall page experience.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-cyan-500/15 bg-cyan-50 p-5 sm:p-6">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400 text-[#050A30]">
                  <Settings2
                    size={19}
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <p className="font-semibold text-[#050A30]">
                    Ready to prepare a broadcast?
                  </p>

                  <p className="mt-1 text-sm leading-6 text-[#050A30]/60">
                    Create a live session and choose how you want to broadcast:
                    browser camera, phone camera, or an external encoder.
                  </p>
                </div>
              </div>

              <Link
                href="/nexus-hub-tv/live/studio"
                className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[#1266B6] transition hover:translate-x-1"
              >
                Open Live Studio
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* LIVE STATES */}
      <section className="bg-white text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Broadcast States
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Live content has a lifecycle.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The Live experience should change naturally depending on whether
              a broadcast is active, scheduled, or complete.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {liveStates.map((state) => (
              <article
                key={state.number}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-sm font-semibold text-[#1266B6]">
                  {state.number}
                </span>

                <h3 className="mt-4 text-2xl font-bold">
                  {state.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {state.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* UPCOMING */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
                Upcoming Live
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Know what is coming next.
              </h2>

              <p className="mt-5 max-w-xl text-lg leading-8 text-white/65">
                Future broadcasts can be surfaced here with clear dates,
                times, programme information, and reminders or notifications
                once the live scheduling system is connected.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <span className="text-sm font-semibold uppercase tracking-[0.16em] text-[#5FC9E6]">
                    Upcoming
                  </span>

                  <h3 className="mt-3 text-2xl font-bold">
                    Scheduled broadcasts will appear here.
                  </h3>
                </div>

                <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-white/50">
                  Schedule
                </span>
              </div>

              <p className="mt-5 leading-7 text-white/60">
                This area is ready to become a dynamic upcoming-broadcast
                component once programme and scheduling data are available.
              </p>

              <div className="mt-8 border-t border-white/10 pt-6">
                <Link
                  href="/nexus-hub-tv/programs"
                  className="inline-flex text-sm font-semibold text-[#5FC9E6] transition hover:translate-x-1"
                >
                  View Programs →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Live Platform
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              More than a video player.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The future NHTV Live experience can combine streaming with the
              information and discovery tools audiences need around a live
              broadcast.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {liveFeatures.map((feature) => (
              <article
                key={feature.title}
                className="rounded-3xl border border-slate-200 p-8"
              >
                <h3 className="text-2xl font-bold">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LIVE FLOW */}
      <section className="bg-slate-50 text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Broadcast Flow
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              From scheduled programme to permanent media asset.
            </h2>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white">
            <div className="grid divide-y divide-slate-200 md:grid-cols-4 md:divide-x md:divide-y-0">
              <div className="p-7">
                <p className="text-sm font-semibold text-[#1266B6]">
                  01 · PLAN
                </p>

                <h3 className="mt-3 text-xl font-bold">Schedule</h3>

                <p className="mt-3 leading-7 text-slate-600">
                  A live broadcast is prepared and placed within the NHTV
                  programme structure.
                </p>
              </div>

              <div className="p-7">
                <p className="text-sm font-semibold text-[#1266B6]">
                  02 · BROADCAST
                </p>

                <h3 className="mt-3 text-xl font-bold">Go Live</h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Audiences access the dedicated live viewing experience.
                </p>
              </div>

              <div className="p-7">
                <p className="text-sm font-semibold text-[#1266B6]">
                  03 · CAPTURE
                </p>

                <h3 className="mt-3 text-xl font-bold">Record</h3>

                <p className="mt-3 leading-7 text-slate-600">
                  The completed broadcast can become a permanent media asset.
                </p>
              </div>

              <div className="p-7">
                <p className="text-sm font-semibold text-[#1266B6]">
                  04 · REUSE
                </p>

                <h3 className="mt-3 text-xl font-bold">Publish</h3>

                <p className="mt-3 leading-7 text-slate-600">
                  The recording can flow into the Videos, News, Shows, or
                  other relevant NHTV surfaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="bg-white text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Continue Exploring
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Connect Live with the wider NHTV platform.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Link
              href="/nexus-hub-tv/programs"
              className="group rounded-3xl border border-slate-200 p-8 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">
                PROGRAMS
              </p>

              <h3 className="mt-3 text-xl font-bold">
                Discover the programming structure.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                See how broadcasts and other content can fit into the wider
                NHTV programming experience.
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                Explore Programs →
              </span>
            </Link>

            <Link
              href="/nexus-hub-tv/videos"
              className="group rounded-3xl border border-slate-200 p-8 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">
                VIDEOS
              </p>

              <h3 className="mt-3 text-xl font-bold">
                Watch completed content.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Move from a live broadcast into the permanent video library.
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                Browse Videos →
              </span>
            </Link>

            <Link
              href="/nexus-hub-tv/news"
              className="group rounded-3xl border border-slate-200 p-8 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">
                NEWS
              </p>

              <h3 className="mt-3 text-xl font-bold">
                Follow NHTV updates.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Discover announcements and editorial updates surrounding the
                NHTV platform.
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                Explore News →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
            NHTV Live
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            When the moment is live, the audience should be there.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            NHTV Live provides the dedicated foundation for real-time
            broadcasts, future streaming experiences, and the content created
            from them.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/nexus-hub-tv/programs"
              className="inline-flex rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
            >
              Explore Programs
            </Link>

            <Link
              href="/nexus-hub-tv/live/studio"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <Radio size={16} aria-hidden="true" />
              Open Live Studio
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
