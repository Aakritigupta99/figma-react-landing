import Button from './Button'
import Highlight from './Highlight'

const features = [
  'Sync unlimited devices',
  '10 GB monthly uploads',
  '200 MB max. note size',
  'Customize Home dashboard and access extra widgets',
  'Connect primary Google Calendar account',
  'Add due dates, reminders, and notifications to your tasks',
]

const plans = [
  { name: 'Free', price: '$0', tagline: 'Capture ideas and find them quickly', featured: false },
  { name: 'Personal', price: '$11.99', tagline: 'Keep home and family on track', featured: true },
  { name: 'Organization', price: '$49.99', tagline: 'Capture ideas and find them quickly', featured: false },
]

export default function Pricing() {
  return (
    <section className="bg-white" aria-labelledby="pricing-heading">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <div className="text-center">
          <h2 id="pricing-heading" className="text-3xl font-bold text-ink md:text-4xl">
            Choose Your <Highlight>Plan</Highlight>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-xs leading-relaxed text-ink/80">
            Whether you want to get organized, keep your personal life on track,
            or boost workplace productivity, whitepace has the right plan for you.
          </p>
        </div>

        <div className="mt-12 grid items-center gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={
                plan.featured
                  ? 'rounded-lg bg-navy p-6 text-white shadow-xl md:py-10'
                  : 'rounded-lg border border-accent/60 bg-white p-6 text-ink'
              }
            >
              <h3 className="text-sm font-medium">{plan.name}</h3>
              <p className={`mt-4 text-xl font-bold ${plan.featured ? 'text-accent' : ''}`}>
                {plan.price}
              </p>
              <p className="mt-4 text-xs font-medium">{plan.tagline}</p>

              <ul className="mt-4 space-y-3 text-xs">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span aria-hidden="true" className={plan.featured ? 'text-accent' : 'text-ink'}>✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Button variant={plan.featured ? 'brand' : 'outline'} className="mt-6 !px-4 !py-2 text-xs">
                Get Started
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}