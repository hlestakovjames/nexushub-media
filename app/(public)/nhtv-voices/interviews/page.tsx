import Link from 'next/link';

const interviewTypes = [
  {
    number: '01',
    title: 'One-on-One',
    description:
      'Focused conversations that give a single guest space to discuss their work, experiences, ideas, and perspective.',
  },
  {
    number: '02',
    title: 'In Conversation',
    description:
      'Extended discussions connecting people around a shared subject, experience, profession, community, or area of interest.',
  },
  {
    number: '03',
    title: 'Expert Conversations',
    description:
      'Interviews designed to unpack complex subjects through the knowledge and experience of relevant practitioners and specialists.',
  },
  {
    number: '04',
    title: 'Special Interviews',
    description:
      'Dedicated conversations created around important moments, events, projects, announcements, or editorial themes.',
  },
];

const interviewFocus = [
  'People and their journeys',
  'Ideas and experiences',
  'Professional perspectives',
  'Community voices',
  'Expert insight',
  'Current conversations',
];

export default function NHTVVoicesInterviewsPage() {
  return (
    <main className="bg-white text-[#050A30]">
      {/* HERO */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <Link
              href="/nhtv-voices"
              className="text-sm font-semibold text-[#5FC9E6] transition hover:opacity-80"
            >
              ← NHTV Voices
            </Link>

            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-[#5FC9E6]">
              Interviews
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Ask better
              <br />
              questions.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              Thoughtful conversations that give people, experts, and
              communities the space to share what they know, what they have
              experienced, and how they see the world.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Interviewing
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Give the conversation room to develop.
              </h2>
            </div>

            <div className="space-y-5 text-lg leading-8 text-slate-600">
              <p>
                NHTV Voices Interviews is designed for conversations where
                the value lies not only in the answer, but also in the
                context, follow-up questions, experience, and perspective
                behind it.
              </p>

              <p>
                Interviews can exist as standalone editorial pieces or
                connect to podcasts, written features, video productions,
                and related Voices content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTERVIEW LIBRARY STATE */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Interview Library
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                A home for meaningful conversations.
              </h2>
            </div>

            <span className="text-sm font-medium text-slate-500">
              No published interviews yet
            </span>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              <div className="min-h-96 bg-[#050A30] p-8 text-white sm:p-10 lg:p-12">
                <div className="flex h-full min-h-72 items-center justify-center">
                  <div className="w-full max-w-xl">
                    <div className="grid gap-3">
                      <div className="h-3 w-24 rounded-full bg-[#5FC9E6]/70" />

                      <div className="h-8 max-w-lg rounded-full bg-white/10" />

                      <div className="h-4 max-w-md rounded-full bg-white/10" />

                      <div className="mt-5 h-4 max-w-sm rounded-full bg-white/10" />

                      <div className="h-4 max-w-xl rounded-full bg-white/10" />
                    </div>

                    <div className="mt-8 flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5">
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M8 5.5V18.5L18 12L8 5.5Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-[#5FC9E6]">
                          Interview Library
                        </p>

                        <p className="mt-1 text-sm text-white/55">
                          Built for written, audio, and video
                          conversations.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 sm:p-10 lg:p-12">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1266B6]">
                  Current State
                </p>

                <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <p className="text-sm font-semibold text-[#050A30]">
                    No interviews published yet.
                  </p>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Future interviews can include guest profiles,
                    questions and answers, transcripts, audio, video,
                    images, categories, topics, and publication metadata.
                  </p>
                </div>

                <Link
                  href="/nhtv-voices/podcasts"
                  className="mt-8 inline-flex rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
                >
                  Explore Podcasts
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERVIEW TYPES */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Interview Formats
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Different conversations need different formats.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The Interviews section supports different editorial
              approaches while keeping the underlying interview record
              structured and searchable.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {interviewTypes.map((type) => (
              <article
                key={type.number}
                className="rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-sm font-semibold text-[#1266B6]">
                  {type.number}
                </span>

                <h3 className="mt-4 text-2xl font-bold tracking-tight">
                  {type.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {type.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EDITORIAL FOCUS */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
                Editorial Focus
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Conversations centred on substance.
              </h2>

              <p className="mt-5 leading-7 text-white/65">
                The goal is to create interviews that give guests enough
                space to explain, reflect, challenge, clarify, and
                contribute meaningfully to the conversation.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {interviewFocus.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-white/5 p-5"
                >
                  <p className="text-sm font-semibold text-white">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONNECTED FORMATS */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Connected Voices
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              One conversation can travel across formats.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Interviews can be presented as written conversations,
              audio productions, video conversations, or supporting
              material for broader editorial features.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Link
              href="/nhtv-voices/podcasts"
              className="rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1266B6]">
                Podcasts
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Turn conversations into audio.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Connect interviews to podcast series and individual
                episodes where appropriate.
              </p>
            </Link>

            <Link
              href="/nhtv-voices/features"
              className="rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1266B6]">
                Features
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Put interviews into context.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Build broader editorial stories around people, subjects,
                and conversations.
              </p>
            </Link>

            <Link
              href="/nhtv-voices/video"
              className="rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1266B6]">
                Video
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Bring the conversation to screen.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Present interviews visually through the Voices video
                experience.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* FUTURE WORKFLOW */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Future Editorial Workflow
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Ready for a structured interview system.
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                The frontend establishes the presentation model while the
                future backend can manage guests, questions, transcripts,
                media, publishing, and relationships with other Voices
                content.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                'Guest and contributor records',
                'Interview title and description',
                'Questions and responses',
                'Transcript content',
                'Audio and video assets',
                'Categories and topics',
                'Publication status and dates',
                'Related Voices content',
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-slate-200 bg-white p-5"
                >
                  <p className="text-sm font-semibold text-[#050A30]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
            NHTV Voices
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            The right question can open an entire story.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Explore interviews alongside podcasts, opinion, features, and
            video.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/nhtv-voices"
              className="rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
            >
              Voices Home
            </Link>

            <Link
              href="/nhtv-voices/podcasts"
              className="rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Podcasts
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
