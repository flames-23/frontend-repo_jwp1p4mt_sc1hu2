import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-white text-neutral-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">
            © {new Date().getFullYear()} Mani Enterprises — Building Excellence in Every Project
          </p>
          <div className="text-sm text-neutral-600">Civil • Mechanical • Roads • Pipelines • Mining</div>
        </div>
      </footer>
    </div>
  )
}

export default App
