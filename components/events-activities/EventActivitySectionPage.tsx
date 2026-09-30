import Link from 'next/link';

type EventActivitySectionPageProps = {
  type: 'Events' | 'Activities';
  eyebrow: string;
  title: string;
  description: string;
  parentHref: string;
  coverageAreas: string[];
};

const backendFields = [
  'Title and summary',
  'Category',
  'Start and end date',
  'Venue or location',
  'Organiser',
  'Registration details',
  'Media assets',
  'Status',
  'Related items',
];

export default function EventActivitySectionPage({
  type,
  eyebrow,
  title,
  description,
  parentHref,
  coverageAreas,
}: EventActivitySectionPageProps) {
  return (
    <main className="bg-white text-[#050A30]">
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <Link
            href={parentHref}
            className="text-sm font-semibold text-[#5FC9E6] transition hover:opacity-80"
          >
            ← {type}
          </Link>

          <div className="mt-10 max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
              {eyebrow}
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              {title}
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/70 sm:text-xl">
              {description}
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1266B6]">
                {type} Feed
              </p>

              <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
                Published {type.toLowerCase()} will appear here.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                This page establishes the dedicated {type.toLowerCase()}{' '}
                experience. Real records can later be loaded from the events
                and activities management backend.
              </p>

              <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-white p-6">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#1266B6]">
                  No Published {type} Yet
                </p>

                <p className="mt-3 leading-7 text-slate-600">
                  The frontend intentionally contains no fabricated records.
                  Dates, venues, organisers, registration information, media,
                  and status data can be connected when the backend is ready.
                </p>
              </div>
            </div>

            <aside className="rounded-3xl bg-[#050A30] p-8 text-white sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#5FC9E6]">
                Coverage
              </p>

              <h2 className="mt-5 text-2xl font-bold tracking-tight">
                What belongs in this section?
              </h2>

              <div className="mt-7 space-y-3">
                {coverageAreas.map((area) => (
                  <div
                    key={area}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70"
                  >
                    {area}
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Architecture
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              A dedicated {type.toLowerCase()} publishing layer.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              {type} remain distinct from one another while sharing the wider
              Events & Activities ecosystem, calendar, and management backend.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {coverageAreas.map((area) => (
              <div
                key={area}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <p className="text-sm font-semibold text-[#050A30]">
                  {area}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Backend Ready
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Structured for future publishing and management.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                The frontend can later consume structured records from the
                Events & Activities system without changing the public
                information architecture.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {backendFields.map((field) => (
                <div
                  key={field}
                  className="rounded-xl border border-slate-200 bg-white p-5"
                >
                  <p className="text-sm font-semibold text-[#050A30]">
                    {field}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
                Events & Activities
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight">
                Continue exploring.
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/events-activities"
                className="rounded-md bg-[#5FC9E6] px-5 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
              >
                Events & Activities
              </Link>

              <Link
                href="/events-activities/calendar"
                className="rounded-md border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
              >
                Calendar
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
