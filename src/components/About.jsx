import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="order-2 lg:order-1"
        >
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight">About Us</h2>
          <p className="mt-6 text-neutral-700 leading-relaxed">
            Mani Enterprises is a multidisciplinary contracting and engineering firm specializing in Civil, Mechanical, Road Works, Pipeline Works, and Mining Projects. We deliver reliable infrastructure and industrial solutions with an unwavering commitment to quality, innovation and on-time delivery.
          </p>
          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-white border">
              <p className="text-3xl font-black text-amber-600">12+</p>
              <p className="text-sm text-neutral-600">Years Experience</p>
            </div>
            <div className="p-5 rounded-2xl bg-white border">
              <p className="text-3xl font-black text-amber-600">150+</p>
              <p className="text-sm text-neutral-600">Projects Delivered</p>
            </div>
            <div className="p-5 rounded-2xl bg-white border">
              <p className="text-3xl font-black text-amber-600">30+</p>
              <p className="text-sm text-neutral-600">Happy Clients</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="order-1 lg:order-2 relative"
        >
          <div className="relative rounded-3xl overflow-hidden border shadow-lg">
            <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2070&auto=format&fit=crop" alt="About Mani Enterprises" className="w-full h-[420px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
