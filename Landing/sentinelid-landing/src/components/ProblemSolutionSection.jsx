import { AlertTriangle, Brain } from 'lucide-react'

export default function ProblemSolutionSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-800/30 to-slate-800/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-3xl blur-xl"></div>
            <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-red-500/20 rounded-3xl p-8">
              <div className="inline-flex items-center gap-2 bg-red-900/40 border border-red-500/30 rounded-full px-4 py-2 mb-6">
                <AlertTriangle className="w-4 h-4 text-red-400" />
                <span className="text-sm font-medium text-red-200">Critical Web3 Problem</span>
              </div>
              
              <h2 className="text-4xl font-bold mb-6 text-white">
                Web3's anonymity enables devastating attacks
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Social engineering, phishing, and bot raids are costing users <span className="text-red-400 font-bold text-2xl">$4B+ in 2023</span>. 
                Traditional security measures fail in decentralized environments.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-red-900/20 rounded-lg">
                  <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                  <span className="text-gray-300">Wallet drainer attacks increasing 300% yearly</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-red-900/20 rounded-lg">
                  <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse delay-200"></div>
                  <span className="text-gray-300">Bot swarms manipulating DeFi protocols</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-red-900/20 rounded-lg">
                  <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse delay-400"></div>
                  <span className="text-gray-300">Social engineering targeting high-value wallets</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-3xl blur-xl"></div>
            <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-cyan-500/20 rounded-3xl p-8">
              <div className="inline-flex items-center gap-2 bg-cyan-900/40 border border-cyan-500/30 rounded-full px-4 py-2 mb-6">
                <Brain className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-medium text-cyan-200">AI-Powered Solution</span>
              </div>
              
              <h2 className="text-4xl font-bold mb-6 text-white">
                Dynamic identity layer with behavioral intelligence
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                SentinelID's ML models analyze <span className="text-cyan-400 font-bold text-2xl">100+ behavioral signals</span> to 
                block threats before transactions are signed.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-cyan-900/20 rounded-lg">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                  <span className="text-gray-300">Real-time behavioral analysis</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-cyan-900/20 rounded-lg">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse delay-200"></div>
                  <span className="text-gray-300">Zero-knowledge proof challenges</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-cyan-900/20 rounded-lg">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse delay-400"></div>
                  <span className="text-gray-300">Cross-dApp reputation scoring</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}