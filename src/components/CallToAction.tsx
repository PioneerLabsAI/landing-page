

const CallToAction = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a2b4e] to-[#0f172a] z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-teal-500/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-[#e2e8f0] to-white text-transparent bg-clip-text">
              Transform Your Conversations into Actionable Data
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Join innovative companies using our AI voice agents to streamline recruiting and scale voice surveys.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-gradient-to-r from-[#7928ca] to-[#0cc7b3] text-white px-8 py-4 rounded-full font-medium text-lg hover:shadow-lg hover:shadow-purple-500/20 transition-all">
              Get Started Today
            </button>
            
            <button className="bg-transparent border border-white/20 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-white/5 transition-all">
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
