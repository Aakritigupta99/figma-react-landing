import { useState } from 'react'

const links = ['Products', 'Solutions', 'Resources', 'Pricing']

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-navy text-white">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5"
      >
        <a href="#" className="text-lg font-bold">whitepace</a>

        <ul className="hidden items-center gap-8 text-sm md:flex">
          {links.map((l) => (
            <li key={l}>
              <a href="#" className="hover:underline focus-visible:outline-2 focus-visible:outline-accent">
                {l}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a href="#" className="rounded bg-accent px-4 py-2 text-sm font-medium text-ink">Login</a>
          <a href="#" className="rounded bg-brand px-4 py-2 text-sm font-medium text-white">
            Try Whitepace free →
          </a>
        </div>

        <button
          className="md:hidden text-2xl"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="flex flex-col gap-4 px-6 pb-6 md:hidden">
          {links.map((l) => (
            <a key={l} href="#" className="text-sm">{l}</a>
          ))}
          <a href="#" className="w-fit rounded bg-accent px-4 py-2 text-sm font-medium text-ink">Login</a>
          <a href="#" className="w-fit rounded bg-brand px-4 py-2 text-sm font-medium">Try Whitepace free →</a>
        </div>
      )}
    </header>
  )
}