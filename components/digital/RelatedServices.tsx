import Link from 'next/link';

export type RelatedService = {
  title: string;
  description: string;
  href: string;
};

type RelatedServicesProps = {
  services: RelatedService[];
};

export default function RelatedServices({
  services,
}: RelatedServicesProps) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Explore More
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Explore more Digital Services.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Discover other capabilities that may help bring your
              digital project together.
            </p>
          </div>

          <Link
            href="/digital/services"
            className="shrink-0 text-sm font-semibold text-[#1266B6] transition hover:translate-x-1"
          >
            View All Services →
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.slice(0, 3).map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:border-[#1266B6]/40 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {service.description}
              </p>

              <span className="mt-7 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                Explore Service →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}