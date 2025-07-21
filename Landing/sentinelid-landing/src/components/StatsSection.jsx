export default function StatsSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-800/50 to-slate-800/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="group">
            <div className="text-4xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform">$4B+</div>
            <div className="text-gray-300">Lost to Web3 attacks in 2023</div>
          </div>
          <div className="group">
            <div className="text-4xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform">300%</div>
            <div className="text-gray-300">Increase in wallet drainers</div>
          </div>
          <div className="group">
            <div className="text-4xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform">100+</div>
            <div className="text-gray-300">Behavioral signals analyzed</div>
          </div>
          <div className="group">
            <div className="text-4xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform">&lt;50ms</div>
            <div className="text-gray-300">Real-time threat detection</div>
          </div>
        </div>
      </div>
    </section>
  )
}