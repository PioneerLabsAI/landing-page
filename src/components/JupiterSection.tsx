import { useEffect, useRef } from 'react'

const JupiterSection = ({ scrollY }: { scrollY: number }) => {
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
      id="jupiter" 
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a2b4e]/30 to-[#0f172a] z-0"></div>
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0f172a] to-transparent z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-block px-4 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium mb-6">
              Technical Recruiting
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-purple-200 text-transparent bg-clip-text">
                Jupiter: AI Interviewer for Technical Recruiting
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Cut screening workload from days to hours
            </p>
            
            {/* Feature cards */}
            <div className="space-y-4 mb-8">
              <div className="bg-[#1a2b4e]/50 backdrop-blur-sm rounded-lg p-4 border border-purple-500/10 hover:border-purple-500/30 transition-all">
                <h3 className="text-lg font-semibold mb-2 text-purple-200">Natural Two-Way Conversations</h3>
                <p className="text-gray-300">Jupiter joins candidates in the browser and conducts natural, engaging technical interviews.</p>
              </div>
              
              <div className="bg-[#1a2b4e]/50 backdrop-blur-sm rounded-lg p-4 border border-purple-500/10 hover:border-purple-500/30 transition-all">
                <h3 className="text-lg font-semibold mb-2 text-purple-200">Technical & HR Questions</h3>
                <p className="text-gray-300">Asks relevant technical questions and assesses soft skills in the same interview.</p>
              </div>
              
              <div className="bg-[#1a2b4e]/50 backdrop-blur-sm rounded-lg p-4 border border-purple-500/10 hover:border-purple-500/30 transition-all">
                <h3 className="text-lg font-semibold mb-2 text-purple-200">Adaptive Follow-Ups</h3>
                <p className="text-gray-300">Probes deeper with intelligent follow-up questions based on candidate responses.</p>
              </div>
              
              <div className="bg-[#1a2b4e]/50 backdrop-blur-sm rounded-lg p-4 border border-purple-500/10 hover:border-purple-500/30 transition-all">
                <h3 className="text-lg font-semibold mb-2 text-purple-200">Structured Reports</h3>
                <p className="text-gray-300">Prepares detailed reports with final scores and decision-ready insights.</p>
              </div>
            </div>
            
            {/* CTA */}
            <button className="bg-gradient-to-r from-[#7928ca] to-[#7928ca]/80 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all">
              Streamline Your Recruiting
            </button>
          </div>
          
          {/* Illustration/Demo */}
          <div 
            ref={animationRef}
            className="relative bg-[#1a2b4e]/60 backdrop-blur-md rounded-xl p-6 border border-purple-500/20 shadow-xl shadow-purple-500/5"
          >
            {/* Mock interview interface */}
            <div className="rounded-lg overflow-hidden">
              <div className="bg-[#0f172a] px-4 py-3 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-sm text-gray-400">Jupiter Technical Interview</div>
                <div className="w-4"></div>
              </div>
              
              <div className="bg-[#121e36] p-6">
                <div className="flex items-start mb-6">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#7928ca] to-[#0cc7b3] flex items-center justify-center text-white font-bold text-sm mr-3 flex-shrink-0">
                    AI
                  </div>
                  <div className="bg-[#1a2b4e] rounded-lg rounded-tl-none p-4 text-gray-300">
                    <p className="mb-2">Can you explain how you would implement a binary search tree in JavaScript?</p>
                  </div>
                </div>
                
                <div className="flex items-start mb-6 justify-end">
                  <div className="bg-[#2d3c5e] rounded-lg rounded-tr-none p-4 text-gray-200">
                    <p className="mb-2">I'd start by creating a Node class with value, left, and right properties. Then implement a BST class with insert, search, and delete methods...</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white font-bold text-sm ml-3 flex-shrink-0">
                    C
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#7928ca] to-[#0cc7b3] flex items-center justify-center text-white font-bold text-sm mr-3 flex-shrink-0">
                    AI
                  </div>
                  <div className="bg-[#1a2b4e] rounded-lg rounded-tl-none p-4 text-gray-300">
                    <p className="mb-2">Great start. How would you handle duplicate values in your BST implementation?</p>
                  </div>
                </div>
                
                <div className="mt-6 relative">
                  <div className="h-10 bg-[#1a2b4e] rounded-lg w-full"></div>
                  <div className="absolute bottom-0 left-0 h-0.5 w-1/3 bg-purple-500 animate-pulse"></div>
                </div>
              </div>
            </div>
            
            {/* Testimonial */}
            <div className="mt-6 bg-[#0f172a]/80 rounded-lg p-4 border border-purple-500/10">
              <p className="text-gray-300 italic mb-3">"Jupiter cut our initial screening time by 78% while improving candidate quality in our pipeline."</p>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-700 mr-2"></div>
                <div>
                  <p className="text-sm font-medium text-white">Sarah Chen</p>
                  <p className="text-xs text-gray-400">Engineering Manager, TechCorp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JupiterSection
