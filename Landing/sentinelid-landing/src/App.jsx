import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DownloadPage from './pages/DownloadPage'

function App() {
  const [showIntegration, setShowIntegration] = useState(false)

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <HomePage 
              showIntegration={showIntegration} 
              setShowIntegration={setShowIntegration} 
            />
          } 
        />
        <Route path="/download" element={<DownloadPage />} />
      </Routes>
    </Router>
  )
}

export default App