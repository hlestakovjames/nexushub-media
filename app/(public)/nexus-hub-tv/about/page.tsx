import Link from 'next/link';

import PageHero from '@/components/hero/PageHero';

const principles = [
  {
    number: '01',
    title: 'People',
    description:
      'We create space for people, experiences, expertise, and perspectives to be represented with purpose.',
  },
  {
    number: '02',
    title: 'Ideas',
    description:
      'We use media to explore ideas, ask useful questions, share knowledge, and encourage meaningful conversation.',
  },
  {
    number: '03',
    title: 'Storytelling',
    description:
      'We value clear, engaging storytelling across interviews, features, programmes, conversations, and video formats.',
  },
  {
    number: '04',
    title: 'Connection',
    description:
      'We connect audiences with content and connect different parts of the Nexus Hub ecosystem through media.',
  },
];

const platformRoles = [
  {
    title: 'Original Programming',
    description:
      'A home for original productions and recurring formats developed for the Nexus Hub audience.',
  },
  {
    title: 'Video & Broadcast',
    description:
      'A platform for published videos, live experiences, productions, interviews, and future broadcast opportunities.',
  },
  {
    title: 'Editorial Storytelling',
    description:
      'A space for stories, features, conversations, and perspectives that deserve thoughtful presentation.',
  },
  {
    title: 'Media Network',
    description:
      'The flagship platform connecting NHTV Football, NHTV Stories, and NHTV Voices within the wider media ecosystem.',
  },
];

export default function NexusHubTVAboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About Nexus Hub TV"
        title={
          <>
            Building a media platform
            <br />
            around people and ideas.
          </>
        }
        description="Nexus Hub TV is the flagship television and video platform of Nexus Hub Media, designed to bring original programming, storytelling, conversations, and visual media together."
        image="/images/hero/hero-team.jpeg"
        primaryAction={{
          label: 'Explore NHTV Shows',
          href: '/nexus-hub-tv/shows',
        }}
        secondaryAction={{
          label: 'Explore NHTV Videos',
          href: '/nexus-hub-tv/videos',
        }}
        height="large"
      />

      {/* INTRODUCTION */}
      <section className="bg-white text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Who We Are
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                A platform built to tell, show, and connect.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-600">
              <p>
                Nexus Hub TV exists to give Nexus Hub Media a dedicated home
                for television, video, original programming, interviews,
                stories, and conversations.
              </p>

              <p>
                Rather than treating every piece of content as the same,
                NHTV provides a platform where different formats can have
                their own identity while remaining part of one connected
                media ecosystem.
              </p>

              <p>
                The platform is designed to evolve. Its programming, content
                library, live experiences, editorial products, and specialist
                media properties can grow alongside the wider Nexus Hub
                ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ROLE OF NHTV */}
      <section className="bg-slate-50 text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              The Platform
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              What Nexus Hub TV is built to do.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              NHTV provides the central platform from which Nexus Hub can
              develop, publish, organize, and distribute media experiences.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {platformRoles.map((role) => (
              <article
                key={role.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-2xl font-bold">{role.title}</h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {role.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
                Our Principles
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Media with purpose.
              </h2>

              <p className="mt-5 max-w-xl text-lg leading-8 text-white/65">
                The NHTV platform is designed around principles that help
                guide the way content is created, presented, and connected to
                the wider ecosystem.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              {principles.map((principle) => (
                <article
                  key={principle.number}
                  className="border-l border-white/15 pl-6"
                >
                  <span className="text-sm font-semibold text-[#5FC9E6]">
                    {principle.number}
                  </span>

                  <h3 className="mt-3 text-xl font-bold">
                    {principle.title}
                  </h3>

                  <p className="mt-3 leading-7 text-white/65">
                    {principle.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT MODEL */}
      <section className="bg-white text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              How NHTV Works
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Different content. One connected platform.
            </h2>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200">
            <div className="grid divide-y divide-slate-200 md:grid-cols-4 md:divide-x md:divide-y-0">
              <div className="p-7">
                <p className="text-sm font-semibold text-[#1266B6]">
                  CREATE
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  Develop
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Ideas become programmes, stories, interviews, features,
                  videos, and special productions.
                </p>
              </div>

              <div className="p-7">
                <p className="text-sm font-semibold text-[#1266B6]">
                  PRODUCE
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  Produce
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Content is prepared in formats appropriate to its audience,
                  purpose, and distribution channel.
                </p>
              </div>

              <div className="p-7">
                <p className="text-sm font-semibold text-[#1266B6]">
                  PUBLISH
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  Publish
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Published content can flow into the appropriate NHTV
                  sections, collections, programmes, and editorial surfaces.
                </p>
              </div>

              <div className="p-7">
                <p className="text-sm font-semibold text-[#1266B6]">
                  CONNECT
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  Connect
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Audiences can move between NHTV content and the wider Nexus
                  Hub Media network.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NETWORK */}
      <section className="bg-slate-50 text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              NHTV Network
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              A flagship platform with specialist properties.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Nexus Hub TV provides the central platform while specialist
              NHTV properties focus on distinct content areas and audience
              experiences.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Link
              href="/nhtv-football"
              className="group rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">
                NHTV Football
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Football-focused media.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                A dedicated environment for football coverage, discussion,
                fixtures, results, teams, and related video content.
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                Explore Football →
              </span>
            </Link>

            <Link
              href="/nhtv-stories"
              className="group rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">
                NHTV Stories
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Human-centred storytelling.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                A space for features, experiences, people, communities, and
                stories that deserve deeper attention.
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                Explore Stories →
              </span>
            </Link>

            <Link
              href="/nhtv-voices"
              className="group rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">
                NHTV Voices
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Perspectives and conversations.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                A dedicated environment for interviews, discussions, opinions,
                perspectives, and meaningful conversations.
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                Explore Voices →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* FUTURE */}
      <section className="bg-white text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Looking Ahead
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                A platform designed to grow.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                NHTV can evolve from a publishing platform into a broader
                digital television ecosystem supporting programmes, episodes,
                live experiences, video libraries, editorial collections,
                audience discovery, and future media products.
              </p>
            </div>

            <Link
              href="/nexus-hub-tv/shows"
              className="inline-flex w-fit rounded-md bg-[#050A30] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Explore Shows
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
            Nexus Hub TV
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            The platform starts with the story.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Explore the different sides of Nexus Hub TV and discover how its
            programming, content, and specialist properties fit together.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/nexus-hub-tv/shows"
              className="inline-flex rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
            >
              Explore Shows
            </Link>

            <Link
              href="/nexus-hub-tv/videos"
              className="inline-flex rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Browse Videos
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
