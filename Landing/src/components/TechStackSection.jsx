export default function TechStackSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-800/40 to-slate-800/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold mb-4 text-white">Built on Industry Standards</h3>
          <p className="text-gray-400">Trusted by leading Web3 protocols and enterprises</p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-16">
          <div className="group flex items-center gap-4 hover:scale-110 transition-transform">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-2xl">Ξ</span>
            </div>
            <span className="text-gray-300 font-semibold text-lg">Ethereum</span>
          </div>
          
          <div className="group flex items-center gap-4 hover:scale-110 transition-transform">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-2xl">◊</span>
            </div>
            <span className="text-gray-300 font-semibold text-lg">Polygon</span>
          </div>
          
          <div className="group flex items-center gap-4 hover:scale-110 transition-transform">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-2xl">Z</span>
            </div>
            <span className="text-gray-300 font-semibold text-lg">zkSync</span>
          </div>
          
          <div className="group flex items-center gap-4 hover:scale-110 transition-transform">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-2xl">◎</span>
            </div>
            <span className="text-gray-300 font-semibold text-lg">IPFS</span>
          </div>
          
          <div className="group flex items-center gap-4 hover:scale-110 transition-transform">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-2xl">T</span>
            </div>
            <span className="text-gray-300 font-semibold text-lg">TensorFlow</span>
          </div>
        </div>
      </div>
    </section>
  )
}