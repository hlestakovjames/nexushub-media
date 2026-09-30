import LiveStudioForm from '@/components/media/live/studio/LiveStudioForm';

export default function LiveStudioPage() {
  return (
    <main className="min-h-screen bg-[#F7F9FC]">
      <section className="border-b border-[#050A30]/10 bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
            Nexus Hub Live
          </p>

          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Live Studio
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
            Prepare a live broadcast for Nexus Hub Media using a camera,
            mobile broadcast, or external production encoder.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="rounded-3xl border border-[#050A30]/10 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <LiveStudioForm />
        </div>
      </section>
    </main>
  );
}
