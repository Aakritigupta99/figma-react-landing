export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 text-sm md:flex-row md:items-center md:justify-between">
        <p className="text-lg font-bold">whitepace</p>
        <nav aria-label="Footer" className="flex flex-wrap gap-6">
          {['Products', 'Solutions', 'Resources', 'Pricing'].map((l) => (
            <a key={l} href="#" className="hover:underline focus-visible:outline-2 focus-visible:outline-accent">
              {l}
            </a>
          ))}
        </nav>
        <p className="text-xs text-blue-100">
          Design: Whitepace SaaS Landing Page (Figma Community). Built with React and Tailwind CSS.
        </p>
      </div>
    </footer>
  )
}