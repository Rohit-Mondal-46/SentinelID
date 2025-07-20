import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import StatsSection from '../components/StatsSection'
import ProblemSolutionSection from '../components/ProblemSolutionSection'
import FeaturesSection from '../components/FeaturesSection'
import TechStackSection from '../components/TechStackSection'
import VideoSection from '../components/VideoSection'
import CTAButtons from '../components/CTAButtons'
import Footer from '../components/Footer'
import IntegrationGuide from '../components/IntegrationGuide'

export default function HomePage({ 
  showIntegration, 
  setShowIntegration,
  onIntegrationClick,
  onDocsClick
}) {
  const navigate = useNavigate()

  const handleBackFromIntegration = () => {
    setShowIntegration(false)
  }

  if (showIntegration) {
    return (
      <IntegrationGuide 
        onBack={handleBackFromIntegration}
        onIntegrationClick={onIntegrationClick}
        onDocsClick={onDocsClick}
      />
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white">
      <Navbar 
        showBackButton={false}
        onBackClick={() => {}}
        onIntegrationClick={onIntegrationClick}
        onDocsClick={onDocsClick}
      />
      
      <main>
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
      </main>

      <Footer 
        setShowIntegration={setShowIntegration} 
        onDocsClick={onDocsClick}
      />
    </div>
  )
}