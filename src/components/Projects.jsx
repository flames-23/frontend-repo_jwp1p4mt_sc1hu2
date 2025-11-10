import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Industrial RCC Facility',
    img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Highway Pavement & Bridge',
    img: 'https://images.unsplash.com/photo-1444419988131-046ed4e5ffd6?q=80&w=2074&auto=format&fit=crop',
  },
  {
    title: 'Pipeline Network Commissioning',
    img: 'https://images.unsplash.com/photo-1567954970774-58d6aa6c50dc?q=80&w=2069&auto=format&fit=crop',
  },
  {
    title: 'Open Cast Mining Support',
    img: 'https://images.unsplash.com/photo-1579389083078-4e7018379f7f?q=80&w=2069&auto=format&fit=crop',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-amber-600 font-semibold tracking-wide">Featured Work</p>
          <h2 className="mt-2 text-4xl sm:text-5xl font-black tracking-tight">Recent Projects</h2>
          <p className="mt-4 text-neutral-600">A glimpse into our capability across sectors and scales.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.05 * i }}
              className="group relative overflow-hidden rounded-2xl border bg-white shadow"
            >
              <div className="h-52 w-full bg-neutral-200 overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">{p.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
