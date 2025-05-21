

const TechnologySection = () => {
  return (
    <section id="technology" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] to-[#1a2b4e]/30 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#7928ca] to-[#0cc7b3] text-transparent bg-clip-text">
            Cutting-Edge Voice AI Technology
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Our proprietary AI engine transforms natural conversations into structured, decision-ready data through advanced language processing and adaptive learning.
          </p>
        </div>
        
        {/* Technology visualization */}
        <div className="relative max-w-5xl mx-auto">
          <div className="bg-[#1a2b4e]/60 backdrop-blur-md rounded-xl p-8 border border-purple-500/10 border-r-teal-500/10 shadow-xl">
            {/* Flow diagram */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {/* Step 1 */}
              <div className="bg-[#0f172a]/80 rounded-lg p-6 relative">
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-r from-[#7928ca] to-[#7928ca]/70 flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">Voice Conversation</h3>
                <p className="text-gray-300 text-sm mb-4">Natural two-way conversations with candidates or survey respondents.</p>
                <div className="h-12 bg-[#1a2b4e] rounded-lg relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-6">
                      <svg viewBox="0 0 100 30" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0,15 Q10,5 20,15 T40,15 T60,15 T80,15 T100,15" fill="none" stroke="#7928ca" strokeWidth="2">
                          <animate attributeName="d" 
                            values="M0,15 Q10,5 20,15 T40,15 T60,15 T80,15 T100,15;
                                   M0,15 Q10,25 20,15 T40,15 T60,15 T80,15 T100,15;
                                   M0,15 Q10,5 20,15 T40,15 T60,15 T80,15 T100,15" 
                            dur="2s" 
                            repeatCount="indefinite" />
                        </path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="bg-[#0f172a]/80 rounded-lg p-6 relative">
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-r from-[#7928ca]/80 to-[#0cc7b3]/80 flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">AI Processing</h3>
                <p className="text-gray-300 text-sm mb-4">Advanced language models analyze context, sentiment, and technical accuracy.</p>
                <div className="h-12 bg-[#1a2b4e] rounded-lg relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="grid grid-cols-5 gap-1 w-full px-3">
                      {[...Array(5)].map((_, i) => (
                        <div 
                          key={i} 
                          className="h-8 bg-gradient-to-t from-purple-500/30 to-teal-500/30 rounded"
                          style={{ 
                            animation: `pulse 1.5s infinite ${i * 0.3}s`,
                            height: `${(i % 3 + 1) * 25}%`
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="bg-[#0f172a]/80 rounded-lg p-6 relative">
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-r from-[#0cc7b3] to-[#0cc7b3]/70 flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">Structured Data</h3>
                <p className="text-gray-300 text-sm mb-4">Conversations transformed into actionable, decision-ready insights.</p>
                <div className="h-12 bg-[#1a2b4e] rounded-lg relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="grid grid-cols-3 gap-1 w-full px-3">
                      <div className="h-6 bg-teal-500/30 rounded"></div>
                      <div className="h-6 bg-teal-500/30 rounded"></div>
                      <div className="h-6 bg-teal-500/30 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Technology features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                    <line x1="12" y1="19" x2="12" y2="22"></line>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Natural Language Processing</h3>
                  <p className="text-gray-300">Advanced algorithms understand context, nuance, and technical terminology across multiple languages.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-400 mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Global Scale Infrastructure</h3>
                  <p className="text-gray-300">Handles thousands of simultaneous conversations with low latency across different regions and languages.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 12a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z"></path>
                    <path d="M3 12h1m8-9v1m8 8h1m-9 8v1M5.6 5.6l.7.7m12.1-.7-.7.7m0 11.4.7.7m-12.1-.7-.7.7"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Adaptive Learning</h3>
                  <p className="text-gray-300">Continuously improves through machine learning to enhance conversation quality and data accuracy.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-400 mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="9" y1="21" x2="9" y2="9"></line>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Data Transformation</h3>
                  <p className="text-gray-300">Converts unstructured conversation data into structured formats ready for analysis and decision-making.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-purple-500/20 blur-xl"></div>
          <div className="absolute -bottom-6 -right-6 w-12 h-12 rounded-full bg-teal-500/20 blur-xl"></div>
        </div>
      </div>
    </section>
  )
}

export default TechnologySection
