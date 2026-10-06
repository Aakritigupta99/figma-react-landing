export default function Hero() {
  return (
    <section className="bg-navy text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
        <div>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Get More Done with whitepace
          </h1>
          <p className="mt-4 max-w-md text-sm text-blue-100">
            Project management software that enables your teams to collaborate,
            plan, analyze and manage everyday tasks.
          </p>
          <a href="#" className="mt-8 inline-block rounded bg-brand px-5 py-3 text-sm font-medium">
            Try Whitepace free →
          </a>
        </div>

        {/* Replace this box with the exported hero illustration */}
        <div className="aspect-[4/3] w-full rounded-lg bg-white/10" aria-hidden="true" />
      </div>
    </section>
  )
}