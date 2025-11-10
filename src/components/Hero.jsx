import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjI2OTY2NDJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-transparent" />
        <div className="absolute -top-10 -left-10 h-72 w-72 rounded-full bg-amber-500/20 blur-3xl" />
        <div className="absolute -bottom-10 -right-10 h-72 w-72 rounded-full bg-orange-600/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 text-white/90 px-3 py-1 text-xs ring-1 ring-white/20 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" /> Trusted Contractors & Engineers
          </span>
          <h1 className="mt-6 text-5xl sm:text-6xl font-black leading-[1.05] text-white">
            Mani Enterprises
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-300"> Building Excellence</span>
            <span className="text-white"> in Every Project</span>
          </h1>
          <p className="mt-6 text-lg text-white/85 max-w-xl">
            A multidisciplinary firm delivering Civil, Mechanical, Road, Pipeline and Mining projects with uncompromising quality and on-time execution across Uttar Pradesh and beyond.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#services" className="inline-flex items-center px-5 py-3 rounded-full bg-white text-black font-semibold shadow hover:shadow-lg transition">Explore Services</a>
            <a href="#contact" className="inline-flex items-center px-5 py-3 rounded-full bg-transparent ring-2 ring-white/60 text-white font-semibold hover:bg-white/10 transition">Get a Quote</a>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
