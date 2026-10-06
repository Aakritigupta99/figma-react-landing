import Button from './Button'
import Highlight from './Highlight'
import circleImg from '../assets/work-together.png'

export default function WorkTogether() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
        <img
          src={circleImg}
          alt="Team members connected around the whitepace logo"
          className="order-2 w-full md:order-1"
        />
        <div className="order-1 md:order-2">
          <h2 className="text-4xl font-bold leading-tight text-ink md:text-6xl">
            Work <Highlight>together</Highlight>
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-ink">
            With whitepace, share your notes with your colleagues and
            collaborate on them. You can also publish a note to the internet
            and share the URL with others.
          </p>
          <Button className="mt-8">
            Try it now <span aria-hidden="true">→</span>
          </Button>
        </div>
      </div>
    </section>
  )
}