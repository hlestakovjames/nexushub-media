import Link from 'next/link';

import PageHero from '@/components/hero/PageHero';

const principles = [
  {
    number: '01',
    title: 'The Game',
    description:
      'Football remains at the centre, from matches and competitions to tactics, teams, performances, and the moments that define the sport.',
  },
  {
    number: '02',
    title: 'The People',
    description:
      'Players, coaches, supporters, creators, communities, and everyone who contributes to football are part of the story.',
  },
  {
    number: '03',
    title: 'The Conversation',
    description:
      'Football creates debate. We provide space for analysis, perspectives, discussion, and informed conversation around the game.',
  },
  {
    number: '04',
    title: 'The Story',
    description:
      'Beyond results and statistics are journeys, rivalries, cultures, ambitions, and experiences that make football meaningful.',
  },
];

const platformAreas = [
  {
    title: 'Football News',
    description:
      'A dedicated editorial destination for football developments, updates, reports, and stories.',
    href: '/nhtv-football/news',
    label: 'Explore News',
  },
  {
    title: 'Fixtures',
    description:
      'Upcoming matches and scheduled football fixtures organized for easy audience discovery.',
    href: '/nhtv-football/fixtures',
    label: 'View Fixtures',
  },
  {
    title: 'Results',
    description:
      'Completed matches and results presented as part of the football information experience.',
    href: '/nhtv-football/results',
    label: 'View Results',
  },
  {
    title: 'Teams',
    description:
      'A dedicated team directory that can grow into team profiles, competitions, squads, and related information.',
    href: '/nhtv-football/teams',
    label: 'Explore Teams',
  },
  {
    title: 'Videos',
    description:
      'Football interviews, analysis, highlights, clips, features, and other dedicated visual content.',
    href: '/nhtv-football/videos',
    label: 'Browse Videos',
  },
];

export default function NHTVFootballAboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About NHTV Football"
        title={
          <>
            Football stories,
            <br />
            beyond the scoreline.
          </>
        }
        description="NHTV Football is the dedicated football media property within Nexus Hub Media, combining football information, editorial coverage, analysis, stories, video, and audience conversation."
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
                The Football Platform
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                A dedicated football experience within NHTV.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-600">
              <p>
                NHTV Football gives football its own environment inside the
                broader Nexus Hub media ecosystem. It brings together the
                information, stories, discussion, and visual content that
                surround the game.
              </p>

              <p>
                The platform is designed to serve audiences who want more than
                a single match result. They can follow news, explore fixtures,
                check results, discover teams, watch videos, and engage with
                the wider football conversation.
              </p>

              <p>
                As the property develops, its information and editorial
                systems can become more deeply connected, creating a richer
                football destination for audiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PLATFORM AREAS */}
      <section className="bg-slate-50 text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Football Platform
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Everything around the game has a place.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              NHTV Football separates different audience needs while keeping
              them connected through one football-focused platform.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {platformAreas.map((area) => (
              <Link
                key={area.title}
                href={area.href}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-2xl font-bold">{area.title}</h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {area.description}
                </p>

                <span className="mt-7 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                  {area.label} →
                </span>
              </Link>
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
                Editorial Principles
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Football is more than numbers.
              </h2>

              <p className="mt-5 max-w-xl text-lg leading-8 text-white/65">
                The NHTV Football identity is built around the idea that the
                game can be covered as both a sport and a human story.
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

      {/* COVERAGE MODEL */}
      <section className="bg-white text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Coverage Model
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              From match information to the bigger story.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The platform can combine fast information with deeper editorial
              content without forcing every part of football coverage into the
              same format.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200">
            <div className="grid divide-y divide-slate-200 md:grid-cols-4 md:divide-x md:divide-y-0">
              <div className="p-7">
                <p className="text-sm font-semibold text-[#1266B6]">
                  INFORMATION
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  Fixtures & Results
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Give audiences reliable match information and competition
                  context.
                </p>
              </div>

              <div className="p-7">
                <p className="text-sm font-semibold text-[#1266B6]">
                  EDITORIAL
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  News & Analysis
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Add reporting, perspectives, commentary, and football
                  analysis.
                </p>
              </div>

              <div className="p-7">
                <p className="text-sm font-semibold text-[#1266B6]">
                  DISCOVERY
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  Teams & Competitions
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Help audiences explore the teams, leagues, competitions, and
                  football structures they follow.
                </p>
              </div>

              <div className="p-7">
                <p className="text-sm font-semibold text-[#1266B6]">
                  MEDIA
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  Videos & Stories
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Bring visual storytelling and video into the broader football
                  experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM ECOSYSTEM */}
      <section className="bg-slate-50 text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Teams
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Teams deserve their own football identity.
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                The Teams section is intentionally separated from general
                football news and match information. Over time it can become a
                structured directory where audiences discover individual
                teams, their profiles, competitions, related matches, results,
                and media.
              </p>

              <Link
                href="/nhtv-football/teams"
                className="mt-8 inline-flex rounded-md bg-[#050A30] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Explore Teams
              </Link>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1266B6]">
                Future Team Experience
              </p>

              <div className="mt-7 space-y-6">
                <div className="border-b border-slate-100 pb-5">
                  <h3 className="font-bold">Team Profile</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Identity, description, competition context, and related
                    information.
                  </p>
                </div>

                <div className="border-b border-slate-100 pb-5">
                  <h3 className="font-bold">Matches</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Fixtures and results connected to the team.
                  </p>
                </div>

                <div className="border-b border-slate-100 pb-5">
                  <h3 className="font-bold">Coverage</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    News, videos, and stories associated with the team.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold">Related Competitions</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Competition and football context surrounding the team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NHTV CONNECTION */}
      <section className="bg-white text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Part of NHTV
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Football has a place within the wider Nexus Hub TV network.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              NHTV Football is a specialist property, but it remains connected
              to the wider NHTV ecosystem of shows, programmes, videos, live
              experiences, and storytelling.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Link
              href="/nexus-hub-tv"
              className="group rounded-3xl border border-slate-200 p-8 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">
                NEXUS HUB TV
              </p>

              <h3 className="mt-3 text-xl font-bold">
                Return to the flagship platform.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Explore the wider NHTV experience beyond football.
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                Explore NHTV →
              </span>
            </Link>

            <Link
              href="/nhtv-stories"
              className="group rounded-3xl border border-slate-200 p-8 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">
                NHTV STORIES
              </p>

              <h3 className="mt-3 text-xl font-bold">
                Explore storytelling beyond football.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Discover the wider human-centred storytelling experience
                within NHTV.
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                Explore Stories →
              </span>
            </Link>

            <Link
              href="/nhtv-voices"
              className="group rounded-3xl border border-slate-200 p-8 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">
                NHTV VOICES
              </p>

              <h3 className="mt-3 text-xl font-bold">
                Join the wider conversation.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Explore perspectives, interviews, and conversations across the
                NHTV network.
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                Explore Voices →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* FUTURE */}
      <section className="bg-slate-50 text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="rounded-3xl bg-white p-8 shadow-sm sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                  Looking Ahead
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  A football platform designed to grow.
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  NHTV Football can evolve from a content destination into a
                  connected football information and media platform with
                  richer team data, competition coverage, match information,
                  editorial publishing, video, and audience experiences.
                </p>
              </div>

              <Link
                href="/nhtv-football/news"
                className="inline-flex w-fit rounded-md bg-[#050A30] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Explore Football News
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
            NHTV Football
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Follow the game from every angle.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Explore football news, fixtures, results, teams, videos, and the
            stories that make the game bigger than the scoreline.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/nhtv-football/news"
              className="inline-flex rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
            >
              Football News
            </Link>

            <Link
              href="/nhtv-football/fixtures"
              className="inline-flex rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View Fixtures
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
