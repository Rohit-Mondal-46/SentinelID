import { ChevronRight, Shield } from "lucide-react";

export default function CTAButtons({ setShowIntegration, navigate }) {
  return (
    <section className="py-24 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-gray-900">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Ready to Secure Your dApp?
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Join the next generation of Web3 security. Protect your users with
          AI-powered behavioral analysis.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button
            onClick={() => navigate("/download")}
            className="group relative bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold px-12 py-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 text-xl"
          >
            <span className="relative z-10 flex items-center gap-3">
              Start Free Trial
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-50 transition-opacity"></div>
          </button>

          <button
            onClick={() => navigate("/download")}
            className="group border-2 border-gray-600 hover:border-cyan-500 text-gray-300 hover:text-cyan-400 font-bold px-12 py-6 rounded-2xl transition-all duration-300 hover:bg-cyan-500/10 backdrop-blur-sm text-xl"
          >
            <span className="flex items-center gap-3">
              View Integration Guide
              <Shield className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
