import { Play } from 'lucide-react'

export default function VideoSection() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 via-transparent to-purple-900/10"></div>
      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-5xl lg:text-6xl font-bold mb-8 text-white">
          See SentinelID in Action
        </h2>
        <p className="text-xl text-gray-300 mb-16 max-w-2xl mx-auto">
          Watch how our AI detects and blocks threats in real-time
        </p>
        
        <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-3xl overflow-hidden shadow-2xl">
          <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-600/10"></div>
            <button className="group relative w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25">
              <Play className="w-10 h-10 text-white ml-1" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity"></div>
            </button>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-transparent flex items-end">
            <div className="p-8 text-left w-full">
              <h3 className="text-2xl font-bold text-white mb-3">Live Threat Detection Demo</h3>
              <p className="text-gray-300 text-lg">30-second demonstration of behavioral analysis and real-time protection</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}