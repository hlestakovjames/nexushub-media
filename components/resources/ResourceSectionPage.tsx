import Link from 'next/link';

type ResourceSectionPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  parentLabel: string;
  parentHref: string;
  resourceType: string;
  coverageAreas: string[];
};

const backendFields = [
  'Title and description',
  'Resource type',
  'Category and tags',
  'Version information',
  'Publication date',
  'File or content asset',
  'Access permissions',
  'Download or view status',
];

export default function ResourceSectionPage({
  eyebrow,
  title,
  description,
  parentLabel,
  parentHref,
  resourceType,
  coverageAreas,
}: ResourceSectionPageProps) {
  return (
    <main className="bg-white text-[#050A30]">
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <Link
            href={parentHref}
            className="text-sm font-semibold text-[#5FC9E6] transition hover:opacity-80"
          >
            ← {parentLabel}
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
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1266B6]">
                {resourceType}
              </p>

              <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
                Resources in this section will appear here.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                This page establishes a dedicated destination for this type of
                resource. Real resources can later be loaded from the Resources
                management and publishing backend.
              </p>

              <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-white p-6">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#1266B6]">
                  No Resources Published Yet
                </p>

                <p className="mt-3 leading-7 text-slate-600">
                  The frontend intentionally contains no fabricated documents,
                  files, reports, guides, or templates. Published resources can
                  be connected when the backend is available.
                </p>
              </div>
            </div>

            <aside className="rounded-3xl bg-[#050A30] p-8 text-white sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#5FC9E6]">
                Coverage
              </p>

              <h2 className="mt-5 text-2xl font-bold tracking-tight">
                What belongs here?
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
              Resource Structure
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              A focused resource destination.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              This section keeps related resources together while remaining part
              of the wider Nexus Hub Resources property.
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
                Prepared for resource management.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                The eventual Resources backend can control publication,
                categorisation, file assets, versions, permissions, and public
                discovery without changing this public architecture.
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
                Nexus Hub Resources
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight">
                Continue exploring resources.
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/resources"
                className="rounded-md bg-[#5FC9E6] px-5 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
              >
                Resources Overview
              </Link>

              <Link
                href={parentHref}
                className="rounded-md border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
              >
                {parentLabel}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
