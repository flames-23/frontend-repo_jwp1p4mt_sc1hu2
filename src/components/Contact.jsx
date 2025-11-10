import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    // In a full setup, this would POST to backend or email service.
    setTimeout(() => setStatus('Thanks! We will reach out shortly.'), 800)
  }

  return (
    <section id="contact" className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <p className="text-amber-600 font-semibold tracking-wide">Let’s Build</p>
          <h2 className="mt-2 text-4xl sm:text-5xl font-black tracking-tight">Contact Us</h2>
          <p className="mt-4 text-neutral-700 max-w-xl">Share your requirements for Civil, Mechanical, Road, Pipeline or Mining projects. Our team will get back with a tailored proposal.</p>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-neutral-50 border">
              <p className="text-sm text-neutral-500">Email</p>
              <p className="font-semibold">info@manienterprises.in</p>
            </div>
            <div className="p-5 rounded-2xl bg-neutral-50 border">
              <p className="text-sm text-neutral-500">Phone</p>
              <p className="font-semibold">+91 98765 43210</p>
            </div>
          </div>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="p-6 rounded-3xl border bg-white shadow-lg"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-neutral-600">Name</label>
              <input required type="text" className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" />
            </div>
            <div>
              <label className="text-sm text-neutral-600">Email</label>
              <input required type="email" className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm text-neutral-600">Service</label>
              <select className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500">
                <option>Civil Construction</option>
                <option>Mechanical Engineering Projects</option>
                <option>Road and Highway Works</option>
                <option>Pipeline Installation and Maintenance</option>
                <option>Mining Operations and Infrastructure Support</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm text-neutral-600">Message</label>
              <textarea rows={4} className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="Tell us about your project..." />
            </div>
          </div>
          <div className="mt-6 flex items-center gap-3">
            <button type="submit" className="inline-flex items-center px-5 py-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold shadow hover:opacity-95">Send Inquiry</button>
            <span className="text-sm text-neutral-600">{status}</span>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
