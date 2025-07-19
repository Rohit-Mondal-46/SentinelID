import React from 'react'
import { useSentinel } from 'sentinelid-sdk'

export default function Vote() {
  const { riskScore, sessionId } = useSentinel()

  return (
    <div className="text-center space-y-4">
      <h1 className="text-2xl font-bold text-blue-300">🗳️ Vote Page</h1>

      <div className="bg-slate-800 text-white p-4 rounded-lg shadow-md">
        <p className="text-sm">🧠 <span className="font-semibold">Session ID:</span> <code>{sessionId || 'Loading...'}</code></p>
        <p className="text-sm">📊 <span className="font-semibold">Risk Score:</span> {riskScore ?? 'Loading...'}</p>
      </div>

      {riskScore !== null ? (
        riskScore < 50 ? (
          <button className="mt-4 px-6 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full transition">
            🗳️ Submit Vote
          </button>
        ) : (
          <div className="mt-4 text-red-400 font-medium">
            ⚠️ High risk detected. Solve CAPTCHA to vote.
          </div>
        )
      ) : (
        <div className="mt-4 text-yellow-300">⏳ Evaluating risk...</div>
      )}
    </div>
  )
}
