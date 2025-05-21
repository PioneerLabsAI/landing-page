

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a2b4e]/30 to-[#0f172a] z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#7928ca] to-[#0cc7b3] text-transparent bg-clip-text">
            Transform Your Conversations
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Our AI voice agents deliver measurable benefits across technical recruiting and large-scale surveys.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Business Benefits */}
          <div className="bg-[#1a2b4e]/40 backdrop-blur-sm rounded-xl p-8 border border-purple-500/10 hover:border-purple-500/20 transition-all">
            <h3 className="text-2xl font-bold mb-6 text-white">Business Benefits</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-white">Reduced Time-to-Hire</h4>
                  <p className="text-gray-300">Cut screening time by up to 80% with automated technical interviews that scale instantly.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-white">Cost Efficiency</h4>
                  <p className="text-gray-300">Reduce recruiting and survey costs by 60-75% while increasing data quality and coverage.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-white">Improved Candidate Experience</h4>
                  <p className="text-gray-300">Provide consistent, bias-free interviews available 24/7 to accommodate candidate schedules.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.29 7 12 12 20.71 7"></polyline>
                    <line x1="12" y1="22" x2="12" y2="12"></line>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-white">Global Scale</h4>
                  <p className="text-gray-300">Conduct thousands of simultaneous interviews or surveys across multiple languages and regions.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Technical Benefits */}
          <div className="bg-[#1a2b4e]/40 backdrop-blur-sm rounded-xl p-8 border border-teal-500/10 hover:border-teal-500/20 transition-all">
            <h3 className="text-2xl font-bold mb-6 text-white">Technical Benefits</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-400 mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <path d="M8 13h2"></path>
                    <path d="M8 17h2"></path>
                    <path d="M14 13h2"></path>
                    <path d="M14 17h2"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-white">Structured Data Output</h4>
                  <p className="text-gray-300">Automatically convert conversations into structured, decision-ready data formats.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-400 mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-white">Enterprise Security</h4>
                  <p className="text-gray-300">SOC 2 compliant with end-to-end encryption and robust data protection measures.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-400 mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-white">Customizable Workflows</h4>
                  <p className="text-gray-300">Tailor interview questions and survey flows to your specific requirements.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-400 mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-white">Seamless Integration</h4>
                  <p className="text-gray-300">Connect with your existing ATS, CRM, or data analysis tools through our robust API.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection
