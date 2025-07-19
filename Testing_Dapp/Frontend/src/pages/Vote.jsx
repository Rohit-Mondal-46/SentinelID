import React from 'react'
import { useSentinel } from 'sentinelid-sdk'

export default function Vote() {
  const { riskScore, sessionId } = useSentinel()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 px-4 py-12">
      <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-xl max-w-md w-full space-y-6 ring-1 ring-gray-700">
        <h1 className="text-3xl font-extrabold text-blue-400 text-center">
          🗳️ Vote Verification
        </h1>

        <div className="space-y-2 text-sm font-medium">
          <p className="flex items-center gap-2">
            🧠 <span className="text-gray-300">Session ID:</span>
            <code className="text-green-400 break-all">{sessionId || 'Loading...'}</code>
          </p>
          <p className="flex items-center gap-2">
            📊 <span className="text-gray-300">Risk Score:</span>
            <span className={`font-bold ${riskScore < 50 ? 'text-green-400' : 'text-red-400'}`}>
              {riskScore ?? 'Loading...'}
            </span>
          </p>
        </div>

        {riskScore !== null ? (
          riskScore < 50 ? (
            <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 transition-all rounded-full text-white font-semibold shadow-lg">
              🗳️ Submit Vote
            </button>
          ) : (
            <div className="text-center text-red-400 font-medium mt-4">
              ⚠️ High risk detected. Solve CAPTCHA to vote.
            </div>
          )
        ) : (
          <div className="text-center text-yellow-300 mt-4 animate-pulse">
            ⏳ Evaluating risk...
          </div>
        )}
      </div>
    </div>
  )
}
