import { useEffect, useRef } from 'react'

const MercurySection = ({ scrollY }: { scrollY: number }) => {
  const sectionRef = useRef<HTMLElement>(null)
  const animationRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    // Parallax and animation effects based on scroll position
    if (sectionRef.current && animationRef.current) {
      const sectionTop = sectionRef.current.offsetTop
      const sectionHeight = sectionRef.current.offsetHeight
      const scrollPosition = scrollY
      
      // Only animate when section is in view
      if (scrollPosition > sectionTop - window.innerHeight && 
          scrollPosition < sectionTop + sectionHeight) {
        const progress = (scrollPosition - (sectionTop - window.innerHeight)) / 
                        (sectionHeight + window.innerHeight)
        
        // Apply animation based on scroll progress
        animationRef.current.style.transform = `translateY(${20 - progress * 40}px)`
        animationRef.current.style.opacity = Math.min(1, progress * 2).toString()
      }
    }
  }, [scrollY])

  return (
    <section 
      id="mercury" 
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] to-[#1a2b4e]/30 z-0"></div>
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0f172a] to-transparent z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Illustration/Demo - Placed first for mobile stacking order */}
          <div 
            ref={animationRef}
            className="relative bg-[#1a2b4e]/60 backdrop-blur-md rounded-xl p-6 border border-teal-500/20 shadow-xl shadow-teal-500/5 order-2 md:order-1"
          >
            {/* Global survey visualization */}
            <div className="rounded-lg overflow-hidden">
              <div className="bg-[#0f172a] px-4 py-3 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-sm text-gray-400">Mercury Survey Dashboard</div>
                <div className="w-4"></div>
              </div>
              
              <div className="bg-[#121e36] p-6">
                {/* World map with call points */}
                <div className="relative h-48 mb-6 bg-[#1a2b4e] rounded-lg overflow-hidden">
                  <div className="absolute inset-0 opacity-30" style={{
                    backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='800' height='400' viewBox='0 0 800 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M169,27c-19,9-19,54,0,63c19,9,90,9,109,0c19-9,19-54,0-63 C259,18,188,18,169,27z M468,63c-19,9-19,54,0,63c19,9,90,9,109,0c19-9,19-54,0-63 C558,54,487,54,468,63z M736,118c-19,9-19,54,0,63c19,9,90,9,109,0c19-9,19-54,0-63 C826,109,755,109,736,118z M317,117c-19,9-19,54,0,63c19,9,90,9,109,0c19-9,19-54,0-63 C407,108,336,108,317,117z M64,117c-19,9-19,54,0,63c19,9,90,9,109,0c19-9,19-54,0-63 C154,108,83,108,64,117z M42,207c-19,9-19,54,0,63c19,9,90,9,109,0c19-9,19-54,0-63 C132,198,61,198,42,207z M177,207c-19,9-19,54,0,63c19,9,90,9,109,0c19-9,19-54,0-63 C267,198,196,198,177,207z M350,207c-19,9-19,54,0,63c19,9,90,9,109,0c19-9,19-54,0-63 C440,198,369,198,350,207z M555,207c-19,9-19,54,0,63c19,9,90,9,109,0c19-9,19-54,0-63 C645,198,574,198,555,207z M736,207c-19,9-19,54,0,63c19,9,90,9,109,0c19-9,19-54,0-63 C826,198,755,198,736,207z M157,297c-19,9-19,54,0,63c19,9,90,9,109,0c19-9,19-54,0-63 C247,288,176,288,157,297z M358,297c-19,9-19,54,0,63c19,9,90,9,109,0c19-9,19-54,0-63 C448,288,377,288,358,297z M555,297c-19,9-19,54,0,63c19,9,90,9,109,0c19-9,19-54,0-63 C645,288,574,288,555,297z' fill='%230cc7b3' fill-opacity='0.2'/%3E%3C/svg%3E\")",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}></div>
                  
                  {/* Active call indicators */}
                  <div className="absolute h-2 w-2 rounded-full bg-teal-400 animate-ping" style={{ top: '30%', left: '20%' }}></div>
                  <div className="absolute h-2 w-2 rounded-full bg-teal-400 animate-ping" style={{ top: '40%', left: '30%', animationDelay: '0.5s' }}></div>
                  <div className="absolute h-2 w-2 rounded-full bg-teal-400 animate-ping" style={{ top: '25%', left: '45%', animationDelay: '1s' }}></div>
                  <div className="absolute h-2 w-2 rounded-full bg-teal-400 animate-ping" style={{ top: '60%', left: '70%', animationDelay: '1.5s' }}></div>
                  <div className="absolute h-2 w-2 rounded-full bg-teal-400 animate-ping" style={{ top: '35%', left: '80%', animationDelay: '2s' }}></div>
                  <div className="absolute h-2 w-2 rounded-full bg-teal-400 animate-ping" style={{ top: '70%', left: '40%', animationDelay: '2.5s' }}></div>
                </div>
                
                {/* Survey stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-[#1a2b4e] rounded-lg p-3 text-center">
                    <p className="text-xs text-gray-400 mb-1">Active Calls</p>
                    <p className="text-xl font-bold text-teal-400">2,547</p>
                  </div>
                  <div className="bg-[#1a2b4e] rounded-lg p-3 text-center">
                    <p className="text-xs text-gray-400 mb-1">Responses</p>
                    <p className="text-xl font-bold text-teal-400">14,892</p>
                  </div>
                  <div className="bg-[#1a2b4e] rounded-lg p-3 text-center">
                    <p className="text-xs text-gray-400 mb-1">Languages</p>
                    <p className="text-xl font-bold text-teal-400">24</p>
                  </div>
                </div>
                
                {/* Live data stream */}
                <div className="bg-[#1a2b4e] rounded-lg p-3">
                  <p className="text-xs text-gray-400 mb-2">Live Data Stream</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-300">+1 (555) 123-4567</span>
                      <span className="text-teal-400">Complete</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-300">+44 20 7946 0958</span>
                      <span className="text-yellow-400">In Progress</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-300">+91 98765 43210</span>
                      <span className="text-purple-400">Scheduled</span>
                    </div>
                    <div className="h-0.5 w-full bg-teal-500/30 relative overflow-hidden">
                      <div className="h-full bg-teal-500 absolute animate-pulse" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Case study */}
            <div className="mt-6 bg-[#0f172a]/80 rounded-lg p-4 border border-teal-500/10">
              <div className="flex items-center mb-2">
                <div className="text-teal-400 font-bold mr-2">Success Metrics</div>
                <div className="h-px flex-grow bg-teal-500/20"></div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-3xl font-bold text-white">94%</p>
                  <p className="text-xs text-gray-400">Completion Rate</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white">78%</p>
                  <p className="text-xs text-gray-400">Cost Reduction</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="order-1 md:order-2">
            <div className="inline-block px-4 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-sm font-medium mb-6">
              Voice Surveys
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-teal-200 text-transparent bg-clip-text">
                Mercury: Voice Surveys at Scale
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Large-scale voice surveys without field staff
            </p>
            
            {/* Feature cards */}
            <div className="space-y-4 mb-8">
              <div className="bg-[#1a2b4e]/50 backdrop-blur-sm rounded-lg p-4 border border-teal-500/10 hover:border-teal-500/30 transition-all">
                <h3 className="text-lg font-semibold mb-2 text-teal-200">Thousands of Simultaneous Calls</h3>
                <p className="text-gray-300">Mercury dials thousands of people on their mobile phones simultaneously.</p>
              </div>
              
              <div className="bg-[#1a2b4e]/50 backdrop-blur-sm rounded-lg p-4 border border-teal-500/10 hover:border-teal-500/30 transition-all">
                <h3 className="text-lg font-semibold mb-2 text-teal-200">Multi-Language Support</h3>
                <p className="text-gray-300">Conducts surveys in respondents' preferred languages for global reach.</p>
              </div>
              
              <div className="bg-[#1a2b4e]/50 backdrop-blur-sm rounded-lg p-4 border border-teal-500/10 hover:border-teal-500/30 transition-all">
                <h3 className="text-lg font-semibold mb-2 text-teal-200">Adaptive Questionnaires</h3>
                <p className="text-gray-300">Dynamically adjusts questions based on previous responses for deeper insights.</p>
              </div>
              
              <div className="bg-[#1a2b4e]/50 backdrop-blur-sm rounded-lg p-4 border border-teal-500/10 hover:border-teal-500/30 transition-all">
                <h3 className="text-lg font-semibold mb-2 text-teal-200">Real-Time Data Streaming</h3>
                <p className="text-gray-300">Streams clean datasets back to campaign managers and researchers in real-time.</p>
              </div>
            </div>
            
            {/* CTA */}
            <button className="bg-gradient-to-r from-[#0cc7b3] to-[#0cc7b3]/80 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-teal-500/30 transition-all">
              Launch Your Survey
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MercurySection
