import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-4 backdrop-blur-xl rounded-2xl border border-white/20 bg-white/60 dark:bg-black/40 shadow-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="flex items-center gap-3" onClick={(e)=>scrollTo(e,'#home')}>
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 shadow-inner" />
              <div>
                <p className="text-xl font-black tracking-tight">Mani Enterprises</p>
                <p className="text-xs text-neutral-600">Building Excellence in Every Project</p>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e)=>scrollTo(e,item.href)}
                  className="px-4 py-2 text-sm rounded-full hover:bg-black/5 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a href="#contact" onClick={(e)=>scrollTo(e,'#contact')} className="ml-2 inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white text-sm font-semibold shadow hover:opacity-95">
                Get a Quote
              </a>
            </nav>

            <button className="md:hidden p-2 rounded-lg bg-black/5" onClick={()=>setOpen(!open)} aria-label="Toggle Menu">
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          <AnimatePresence>
            {open && (
              <motion.nav
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="md:hidden overflow-hidden"
              >
                <div className="px-4 pb-4 grid gap-2">
                  {navItems.map((item, i) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      onClick={(e)=>scrollTo(e,item.href)}
                      className="px-3 py-3 rounded-xl bg-white/70 hover:bg-white shadow-sm"
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.02 * i }}
                    >
                      {item.label}
                    </motion.a>
                  ))}
                  <a href="#contact" onClick={(e)=>scrollTo(e,'#contact')} className="px-3 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-white text-center font-semibold shadow">
                    Get a Quote
                  </a>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  )
}
