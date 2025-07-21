import { Shield, FileText, Github, Users } from 'lucide-react'

export default function Footer({ setShowIntegration }) {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 border-t border-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16">
          <div className="mb-12 lg:mb-0">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <span className="text-3xl font-bold text-white">SentinelID</span>
            </div>
            <p className="text-gray-400 mb-6 text-lg max-w-md">AI-Powered Web3 Security Platform protecting the future of decentralized applications.</p>
            <div className="flex items-center gap-3 bg-gradient-to-r from-purple-900/30 to-cyan-900/30 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-purple-200">Backed by Web3 Foundation</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="font-bold text-white mb-4 text-lg">Product</h4>
              <div className="space-y-3">
                <a href="#" className="block text-gray-400 hover:text-cyan-400 transition-colors">Features</a>
                <a href="#" className="block text-gray-400 hover:text-cyan-400 transition-colors">Pricing</a>
                <a href="#" className="block text-gray-400 hover:text-cyan-400 transition-colors">API</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4 text-lg">Developers</h4>
              <div className="space-y-3">
                <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors">
                  <FileText className="w-4 h-4" />
                  <span>Documentation</span>
                </a>
                <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors">
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <button 
                  onClick={() => setShowIntegration(true)}
                  className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <Shield className="w-4 h-4" />
                  <span>Integration Guide</span>
                </button>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4 text-lg">Company</h4>
              <div className="space-y-3">
                <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors">
                  <Users className="w-4 h-4" />
                  <span>About</span>
                </a>
                <a href="#" className="block text-gray-400 hover:text-cyan-400 transition-colors">Privacy Policy</a>
                <a href="#" className="block text-gray-400 hover:text-cyan-400 transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500">© 2025 SentinelID. All rights reserved. Securing the future of Web3.</p>
        </div>
      </div>
    </footer>
  )
}