import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DownloadPage from './pages/DownloadPage'
import DocsPage from './components/DocsPage' // Make sure to import DocsPage
import IntegrationGuide from './components/IntegrationGuide'

// Create a separate component that can use navigation hooks
function AppRoutes() {
  const [showIntegration, setShowIntegration] = useState(false)
  const navigate = useNavigate()

  const handleBackFromIntegration = () => {
    setShowIntegration(false)
    navigate(-1) // Go back to previous page
  }

  const handleIntegrationClick = () => {
    setShowIntegration(true)
    navigate('/integrate') // Navigate to integration route
  }

  const handleDocsClick = () => {
    navigate('/docs') // Navigate to docs page
  }

  return (
    <Routes>
      <Route 
        path="/" 
        element={
          <HomePage 
            showIntegration={showIntegration} 
            setShowIntegration={setShowIntegration} 
            onIntegrationClick={handleIntegrationClick}
            onDocsClick={handleDocsClick}
          />
        } 
      />
      <Route path="/download" element={<DownloadPage />} />
      <Route path="/docs" element={<DocsPage />} /> {/* Added docs route */}
      <Route 
        path="/integrate" 
        element={
          <IntegrationGuide 
            onBack={handleBackFromIntegration}
            onIntegrationClick={handleIntegrationClick}
            onDocsClick={handleDocsClick}
          />
        } 
      />
    </Routes>
  )
}

// Main App component with Router
function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  )
}

export default App