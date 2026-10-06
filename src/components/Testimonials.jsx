import Highlight from './Highlight'

const quote =
  'Whitepace is designed as a collaboration tool for businesses that is a full project management solution.'

const cards = [{ dark: false }, { dark: true }, { dark: true }]

export default function Testimonials() {
  return (
    <section className="bg-white" aria-labelledby="clients-heading">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <h2 id="clients-heading" className="text-center text-3xl font-bold text-ink md:text-4xl">
          What Our Clients <Highlight>Says</Highlight>
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <figure
              key={i}
              className={
                c.dark
                  ? 'rounded-lg bg-brand p-6 text-white'
                  : 'rounded-lg bg-white p-6 text-ink shadow-lg'
              }
            >
              <span aria-hidden="true" className={`block text-6xl font-bold leading-none ${c.dark ? 'text-white' : 'text-navy'}`}>
                &ldquo;
              </span>
              <blockquote className="mt-2 text-xs leading-relaxed">{quote}</blockquote>
              <hr className={`mt-6 ${c.dark ? 'border-white/40' : 'border-ink/20'}`} />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}