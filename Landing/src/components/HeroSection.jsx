import { Shield, Brain, ChevronRight } from 'lucide-react'

export default function HeroSection({ setShowIntegration, navigate }) {
  return (
    <section className="relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/40 to-cyan-900/30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(120,119,198,0.3)_0%,_transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_rgba(6,182,212,0.2)_0%,_transparent_50%)]"></div>
      
      <div className="absolute inset-0 opacity-20">
        {/* Neural network background elements */}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-900/50 to-cyan-900/50 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-3 mb-8 shadow-2xl">
            <Shield className="w-5 h-5 text-cyan-400" />
            <span className="text-sm font-medium text-purple-200">AI-Powered Web3 Security</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
          
          <h1 className="text-5xl lg:text-8xl font-black mb-8 bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent leading-tight tracking-tight">
            Stop Web3 Attacks
            <br />
            <span className="text-4xl lg:text-6xl bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Before They Happen
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed font-light">
            SentinelID detects bots, wallet drainers, and impersonators in real-time using 
            <span className="text-cyan-400 font-semibold"> behavioral biometrics</span> + 
            <span className="text-purple-400 font-semibold"> zero-trust challenges</span>.
          </p>
          
         <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
  <button 
    onClick={() => navigate('/download')}
    className="group relative bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold px-10 py-5 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 text-lg"
  >
    <span className="relative z-10 flex items-center gap-3">
      Get Early Access
      <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
    </span>
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-50 transition-opacity"></div>
  </button>
  
  <button 
    onClick={() => navigate('/download')}
    className="group border-2 border-gray-600 hover:border-cyan-500 text-gray-300 hover:text-cyan-400 font-bold px-10 py-5 rounded-2xl transition-all duration-300 hover:bg-cyan-500/10 backdrop-blur-sm text-lg"
  >
    <span className="flex items-center gap-3">
      Integrate the SDK
      <Shield className="w-5 h-5 group-hover:rotate-12 transition-transform" />
    </span>
  </button>
</div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-400 mb-16">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>99.9% Uptime</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-300"></div>
              <span>&lt;50ms Response Time</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-700"></div>
              <span>SOC 2 Compliant</span>
            </div>
          </div>

          {/* Shield Visual */}
          <div className="relative">
            <div className="w-40 h-40 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-purple-600/30 rounded-3xl rotate-12 animate-pulse"></div>
              <div className="absolute inset-2 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-2xl">
                <Shield className="w-20 h-20 text-white" />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl blur-xl opacity-20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}