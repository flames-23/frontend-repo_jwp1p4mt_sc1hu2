import { motion } from 'framer-motion'
import { Hammer, Wrench, Map, Layers, Truck } from 'lucide-react'

const services = [
  {
    icon: Hammer,
    title: 'Civil Construction',
    desc: 'End-to-end civil works including industrial buildings, foundations, RCC structures and turnkey infrastructure.',
    img: 'https://images.unsplash.com/photo-1600566753190-17f0baa2c7f7?q=80&w=2069&auto=format&fit=crop'
  },
  {
    icon: Wrench,
    title: 'Mechanical Engineering Projects',
    desc: 'Fabrication, erection and commissioning of heavy equipment, plants and industrial systems.',
    img: 'https://images.unsplash.com/photo-1529956151058-4a4e1facc0f4?q=80&w=2069&auto=format&fit=crop'
  },
  {
    icon: Map,
    title: 'Road and Highway Works',
    desc: 'Construction and maintenance of roads, highways, bridges and urban mobility projects.',
    img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2070&auto=format&fit=crop'
  },
  {
    icon: Layers,
    title: 'Pipeline Installation and Maintenance',
    desc: 'Laying, testing and maintenance of water, gas and industrial pipelines with safety-first execution.',
    img: 'https://images.unsplash.com/photo-1500281781950-6cd80847ebcd?q=80&w=2070&auto=format&fit=crop'
  },
  {
    icon: Truck,
    title: 'Mining Operations and Infrastructure Support',
    desc: 'Overburden removal, haul roads, crushing plants, compliance and end-to-end mining support.',
    img: 'https://images.unsplash.com/photo-1581092332908-39d170fe12cf?q=80&w=2069&auto=format&fit=crop'
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-amber-600 font-semibold tracking-wide">Our Capabilities</p>
          <h2 className="mt-2 text-4xl sm:text-5xl font-black tracking-tight">Services</h2>
          <p className="mt-4 text-neutral-600">From complex industrial plants to nationwide infrastructure, we deliver with precision, safety and speed.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.05 * i }}
              className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow hover:shadow-xl"
            >
              <div className="h-44 w-full bg-neutral-200 overflow-hidden">
                <img src={s.img} alt={s.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                    <s.icon size={20} />
                  </div>
                  <h3 className="font-bold text-lg">{s.title}</h3>
                </div>
                <p className="mt-3 text-sm text-neutral-600">{s.desc}</p>
                <a href="#contact" className="mt-5 inline-block text-sm font-semibold text-amber-700 hover:text-amber-800">Get a quote →</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute -bottom-10 left-0 right-0 h-24 bg-gradient-to-t from-neutral-50 to-transparent" />
    </section>
  )
}
