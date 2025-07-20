import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import StatsSection from '../components/StatsSection'
import ProblemSolutionSection from '../components/ProblemSolutionSection'
import FeaturesSection from '../components/FeaturesSection'
import TechStackSection from '../components/TechStackSection'
import VideoSection from '../components/VideoSection'
import CTAButtons from '../components/CTAButtons'
import Footer from '../components/Footer'
import IntegrationGuide from '../components/IntegrationGuide'

export default function HomePage({ showIntegration, setShowIntegration }) {
  const navigate = useNavigate()

  if (showIntegration) {
    return <IntegrationGuide onBack={() => setShowIntegration(false)} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white">
      <HeroSection 
        setShowIntegration={setShowIntegration} 
        navigate={navigate} 
      />
      <StatsSection />
      <ProblemSolutionSection />
      <FeaturesSection />
      <TechStackSection />
      <VideoSection />
      <CTAButtons 
        setShowIntegration={setShowIntegration} 
        navigate={navigate} 
      />
      <Footer setShowIntegration={setShowIntegration} />
    </div>
  )
}