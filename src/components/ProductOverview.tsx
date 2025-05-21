

const ProductOverview = () => {
  return (
    <section id="products" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#7928ca] to-[#0cc7b3] text-transparent bg-clip-text">
            Conversational AI That Delivers Results
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Our AI voice agents conduct natural, two-way conversations and automatically transform them into structured, decision-ready data. Choose the solution that fits your needs.
          </p>
        </div>

        {/* Product cards with hover effect */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Jupiter Card */}
          <div className="bg-gradient-to-br from-[#1a2b4e]/50 to-[#1a2b4e]/30 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all hover:shadow-lg hover:shadow-purple-500/10 group">
            <div className="h-16 w-16 rounded-full bg-gradient-to-r from-[#7928ca] to-[#7928ca]/70 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <circle cx="12" cy="12" r="10"/>
                <circle cx="12" cy="12" r="4"/>
                <line x1="21.17" y1="8" x2="12" y2="8"/>
                <line x1="3.95" y1="6.06" x2="8.54" y2="14"/>
                <line x1="10.88" y1="21.94" x2="15.46" y2="14"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors">Jupiter</h3>
            <p className="text-gray-300 mb-4">Web-based AI interviewer for technical recruiting that cuts screening workload from days to hours.</p>
            <a href="#jupiter" className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors">
              Learn more
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>

          {/* Mercury Card */}
          <div className="bg-gradient-to-br from-[#1a2b4e]/50 to-[#1a2b4e]/30 backdrop-blur-sm rounded-xl p-8 border border-teal-500/20 hover:border-teal-500/40 transition-all hover:shadow-lg hover:shadow-teal-500/10 group">
            <div className="h-16 w-16 rounded-full bg-gradient-to-r from-[#0cc7b3] to-[#0cc7b3]/70 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M12 2a10 10 0 0 0-6.88 17.28"/>
                <circle cx="12" cy="12" r="1"/>
                <path d="M12 7v1"/>
                <path d="M12 16v1"/>
                <path d="M7 12h1"/>
                <path d="M16 12h1"/>
                <path d="M16.24 7.76l-.7.7"/>
                <path d="M8.46 15.54l-.7.7"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-teal-300 transition-colors">Mercury</h3>
            <p className="text-gray-300 mb-4">Phone-based AI for large-scale voice surveys that makes data collection possible without field staff.</p>
            <a href="#mercury" className="inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors">
              Learn more
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-teal-500/10 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/2"></div>
    </section>
  )
}

export default ProductOverview
