import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProjectManagement from './components/ProjectManagement'
import WorkTogether from './components/WorkTogether'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProjectManagement />
        <WorkTogether />
        <Pricing />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}