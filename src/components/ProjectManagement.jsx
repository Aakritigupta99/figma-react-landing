import Button from './Button'
import Highlight from './Highlight'
import teamImg from '../assets/project-management.png'

export default function ProjectManagement() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
        <div>
          <h2 className="text-4xl font-bold leading-tight text-ink md:text-6xl">
            <span className="block">Project</span>
            <Highlight>Management</Highlight>
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-ink">
            Images, videos, PDFs and audio files are supported. Create math
            expressions and diagrams directly from the app. Take photos with
            the mobile app and save them to a note.
          </p>
          <Button className="mt-8">
            Get Started <span aria-hidden="true">→</span>
          </Button>
        </div>
        <img
          src={teamImg}
          alt="Team collaborating around a table with a project board"
          className="w-full"
        />
      </div>
    </section>
  )
}