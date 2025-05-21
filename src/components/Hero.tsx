import { useEffect, useRef } from 'react'

const Hero = ({ scrollY }: { scrollY: number }) => {
  const waveformRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    // Parallax effect for waveform animation
    if (waveformRef.current) {
      const translateY = scrollY * 0.2
      waveformRef.current.style.transform = `translateY(${translateY}px)`
    }
  }, [scrollY])

  return (
    <section className="relative min-h-screen pt-24 pb-16 flex items-center overflow-hidden">
      {/* Background gradient with subtle animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a2b4e] via-[#0f172a] to-[#1e293b] z-0">
        <div className="absolute inset-0 opacity-20">
          {/* Animated grid pattern */}
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)', 
            backgroundSize: '30px 30px',
            transform: `translateY(${scrollY * 0.05}px)`
          }}></div>
        </div>
      </div>

      {/* Content container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main headline with gradient text */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-[#e2e8f0] to-white text-transparent bg-clip-text">
              AI Voice Agents for Intelligent Conversations
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
            Turn conversations into structured, decision-ready data
          </p>

          {/* Animated waveform visualization */}
          <div 
            ref={waveformRef} 
            className="w-full h-32 mb-12 opacity-70"
            style={{ 
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3ClinearGradient id=\'grad\' x1=\'0%25\' y1=\'0%25\' x2=\'100%25\' y2=\'0%25\'%3E%3Cstop offset=\'0%25\' style=\'stop-color:%237928ca;stop-opacity:1\' /%3E%3Cstop offset=\'100%25\' style=\'stop-color:%230cc7b3;stop-opacity:1\' /%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d=\'M0,50 Q25,30 50,50 T100,50 T150,50 T200,50 T250,50 T300,50 T350,50 T400,50\' stroke=\'url(%23grad)\' stroke-width=\'2\' fill=\'none\' stroke-linecap=\'round\'/%3E%3C/svg%3E")',
              backgroundRepeat: 'repeat-x',
              backgroundSize: 'auto 100%',
              animation: 'waveAnimation 10s linear infinite'
            }}
          ></div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-gradient-to-r from-[#7928ca] to-[#7928ca]/80 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all">
              Explore Jupiter
            </button>
            <button className="bg-gradient-to-r from-[#0cc7b3] to-[#0cc7b3]/80 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-teal-500/30 transition-all">
              Discover Mercury
            </button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0f172a] to-transparent z-10"></div>
    </section>
  )
}

export default Hero
