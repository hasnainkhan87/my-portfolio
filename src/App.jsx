import Navbar from './components/ui/Navbar'
import Hero from './components/sections/Hero'
import Journey from './components/sections/Journey'
import Leadership from './components/sections/Leadership'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import Achievements from './components/sections/Achievements'
import Contact from './components/sections/Contact'
import Footer from './components/ui/Footer'

export default function App() {
  return (
    <div className="bg-ivory min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Journey />
        <Leadership />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
