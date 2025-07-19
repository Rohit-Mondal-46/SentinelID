import React from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import { SentinelProvider, ChallengeModal } from 'sentinelid-sdk'

import Mint from './pages/Mint'
import Vote from './pages/Vote'

export default function App() {
  return (
    <SentinelProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <header className="bg-slate-900 border-b border-slate-700 shadow-lg">
            <div className="container mx-auto flex justify-between items-center px-6 py-4">
              <h1 className="text-2xl font-extrabold tracking-wide text-blue-400">SentinelID dApp</h1>
              <nav className="space-x-8 font-semibold text-lg">
                {['mint', 'vote'].map((page) => (
                  <NavLink
                    key={page}
                    to={`/${page}`}
                    className={({ isActive }) =>
                      isActive
                        ? 'text-blue-400 underline underline-offset-4 decoration-2 rounded-md bg-slate-700 px-3 py-1 transition'
                        : 'hover:text-blue-300 hover:bg-slate-700 rounded-md px-3 py-1 transition'
                    }
                  >
                    {page.charAt(0).toUpperCase() + page.slice(1)}
                  </NavLink>
                ))}
              </nav>
            </div>
          </header>

          <main className="flex justify-center items-start py-16 px-6 sm:px-12 lg:px-24">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-10 max-w-3xl w-full shadow-xl border border-slate-700">
              <Routes>
                <Route path="/mint" element={<Mint />} />
                <Route path="/vote" element={<Vote />} />
                <Route
                  path="*"
                  element={
                    <div className="text-center text-slate-300 text-xl font-medium">
                      Welcome! Please select a page above.
                    </div>
                  }
                />
              </Routes>
            </div>
          </main>

          <ChallengeModal />
        </div>
      </Router>
    </SentinelProvider>
  )
}
