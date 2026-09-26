import { About } from './components/About'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Projects } from './components/Projects'
import { Sidebar } from './components/Sidebar'
import { Skills } from './components/Skills'

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-paper)] text-[var(--color-ink)]">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="lg:grid lg:grid-cols-[280px_1fr] lg:gap-20 xl:grid-cols-[320px_1fr] xl:gap-24">
          <Sidebar />
          <main>
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Contact />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
