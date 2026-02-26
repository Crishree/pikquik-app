import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <section className="mx-auto max-w-6xl px-4 py-20">
        <p className="mb-4 text-sm uppercase tracking-[0.16em] text-zinc-500">Pikquik for food outlets</p>
        <h1 className="max-w-3xl text-5xl font-semibold leading-tight sm:text-6xl">
          Pre-orders that feel instant.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-300">
          Let customers order and pay ahead, keep prep queues clean, and verify pickup in seconds.
        </p>
        <div className="mt-8 flex gap-3">
          <Link href="/demo" className="rounded-2xl bg-amber-400 px-6 py-3 font-semibold text-zinc-950">Book a demo</Link>
          <Link href="/features" className="rounded-2xl border border-zinc-300 px-6 py-3 font-semibold dark:border-zinc-700">See how it works</Link>
        </div>
      </section>
    </main>
  );
}
