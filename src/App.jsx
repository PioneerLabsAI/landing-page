import React from "react";
import { Bot, Rocket, Phone } from "lucide-react";
import { motion } from "framer-motion";


export default function App() {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen w-full bg-gradient-to-tr from-gray-950 via-slate-950 to-black text-white font-sans overflow-x-hidden">
      {/* Header */}
      <header className="flex items-center justify-between px-6 md:px-16 py-4">
        <div className="text-2xl font-bold tracking-tight flex items-center gap-2">
          <Rocket className="w-6 h-6 text-pink-500" /> PioneerLabs
        </div>
        <nav className="hidden md:flex gap-10 text-sm font-medium">
          <a href="#product" className="hover:text-pink-400 transition-colors">Product</a>
          <a href="#upcoming" className="hover:text-pink-400 transition-colors">Upcoming</a>
          <a href="#contact" className="hover:text-pink-400 transition-colors">Contact</a>
        </nav>
        <button className="rounded-2xl bg-pink-600 hover:bg-pink-500 px-4 py-2 text-sm shadow-lg transition-colors">
          Get Early Access
        </button>
      </header>

      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col-reverse md:flex-row items-center gap-12 px-8 md:px-16 py-24"
      >
        <div className="max-w-xl">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
            Conversational AI, Redefined.
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            At PioneerLabs, we build AI agents that talk like humans and think like experts. Our
            flagship product <span className="font-semibold text-white">Jupiter</span> revolutionizes
            technical interviews — faster, fairer, and available 24×7.
          </p>
          <button className="rounded-2xl bg-pink-600 hover:bg-pink-500 px-6 py-3 text-base font-medium shadow-xl transition-colors">
            Request a Demo
          </button>
        </div>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-md"
        >
          {/* Simple 3‑D orb illustration */}
          <div className="relative aspect-square rounded-full bg-gradient-to-br from-pink-600 via-purple-600 to-indigo-600 shadow-2xl animate-pulse" />
        </motion.div>
      </motion.section>

      {/* Product – Jupiter */}
      <section id="product" className="px-8 md:px-16 py-24">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 flex items-center gap-2">
          <Bot className="w-8 h-8 text-pink-500" /> Meet Jupiter — Your AI Recruiter
        </h2>
        <p className="text-gray-300 max-w-3xl mb-10">
          Jupiter conducts in‑depth technical interviews, analyzes candidate responses in real time,
          and provides structured feedback for your hiring team. Integrate seamlessly with your ATS
          and scale interviews globally without scheduling headaches.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Always‑On",
              desc: "Interview candidates 24×7 across time zones without human interviewers.",
            },
            {
              title: "Unbiased Scoring",
              desc: "LLM‑powered rubric grading ensures objective, repeatable evaluations.",
            },
            {
              title: "Plug & Play",
              desc: "Drop Jupiter into any hiring workflow via our REST & WebRTC APIs.",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="p-8 rounded-3xl bg-gray-900/50 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-shadow"
            >
              <h3 className="text-xl font-medium mb-2 text-white">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming offerings */}
      <section id="upcoming" className="px-8 md:px-16 py-24 bg-gradient-to-br from-gray-900 via-gray-950 to-black">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 flex items-center gap-2">
          <Phone className="w-8 h-8 text-pink-500" /> What’s Next?
        </h2>
        <p className="text-gray-300 max-w-3xl mb-10">
          We’re building multilingual survey agents that conduct phone surveys in local languages,
          unlocking authentic customer and voter insights at scale.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-gray-900/50 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-shadow">
            <h3 className="text-xl font-medium mb-2 text-white">Survey Agents</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Hyper‑local conversations that capture sentiment in any dialect — no forms, no scripts.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-gray-900/50 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-shadow">
            <h3 className="text-xl font-medium mb-2 text-white">More AI Assistants</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              From onboarding to customer support, our pipeline of agents will transform every touchpoint.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="px-8 md:px-16 py-10 bg-gray-900 text-center text-gray-400 text-sm">
        © {year} PioneerLabs. All rights reserved.
      </footer>
    </div>
  );
}
