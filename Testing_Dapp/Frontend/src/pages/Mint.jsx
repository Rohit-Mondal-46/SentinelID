// // dapp/src/pages/Mint.jsx
// import React from 'react'
// import { useSentinel } from 'sentinelid-sdk'

// export default function Mint() {
//   const { riskScore, sessionId } = useSentinel()

//   return (
//     <div className="min-h-screen bg-gray-950 flex items-center justify-center p-6">
//       <div className="w-full max-w-md bg-gray-900 text-white rounded-2xl shadow-2xl p-8 space-y-6 animate-fade-in">

//         <h1 className="text-3xl font-extrabold text-center text-blue-400">
//           🪙 Mint Your Asset
//         </h1>

//         <div className="space-y-2 text-sm bg-gray-800 rounded-xl p-4 border border-gray-700">
//           <div>
//             <span className="font-semibold">🧠 Session ID:</span>{' '}
//             <code className="break-all text-blue-300">{sessionId || 'Loading...'}</code>
//           </div>
//           <div>
//             <span className="font-semibold">📊 Risk Score:</span>{' '}
//             <span className={`${riskScore < 50 ? 'text-green-400' : 'text-red-400'}`}>
//               {riskScore ?? 'Loading...'}
//             </span>
//           </div>
//         </div>

//         {riskScore !== null ? (
//           riskScore < 50 ? (
//             <button className="w-full mt-4 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full shadow-lg transition duration-300">
//               ✅ Proceed to Mint
//             </button>
//           ) : (
//             <div className="mt-4 text-center text-red-400 font-medium">
//               ⚠️ High risk detected. Please complete CAPTCHA to proceed.
//             </div>
//           )
//         ) : (
//           <div className="mt-4 text-center text-yellow-300 animate-pulse">
//             ⏳ Evaluating risk...
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

// dapp/src/pages/Mint.jsx
import React, { useRef, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { useSentinel } from 'sentinelid-sdk'

export default function Mint() {
  const { riskScore, sessionId } = useSentinel()
  const captchaRef = useRef(null)
  const [captchaVerified, setCaptchaVerified] = useState(false)

  const handleCaptchaChange = (value) => {
    setCaptchaVerified(!!value)
  }

  const handleMint = () => {
    if (riskScore >= 50 && !captchaVerified) {
      alert("Please solve the CAPTCHA first.")
      return
    }
    // 🚀 Call mint function here
    console.log("Minting NFT...")
  }

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-gray-900 text-white rounded-2xl shadow-2xl p-8 space-y-6 animate-fade-in">
        <h1 className="text-3xl font-extrabold text-center text-blue-400">🪙 Mint Your Asset</h1>

        <div className="space-y-2 text-sm bg-gray-800 rounded-xl p-4 border border-gray-700">
          <p><span className="font-semibold">🧠 Session ID:</span> <code>{sessionId || 'Loading...'}</code></p>
          <p><span className="font-semibold">📊 Risk Score:</span> {riskScore ?? 'Loading...'}</p>
        </div>

        {riskScore !== null ? (
          riskScore < 50 ? (
            <button
              onClick={handleMint}
              className="w-full mt-4 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full shadow-lg transition duration-300"
            >
              ✅ Proceed to Mint
            </button>
          ) : (
            <div className="mt-4 space-y-4 text-center">
              <div className="text-red-400 font-medium">
                ⚠️ High risk detected. Solve CAPTCHA to proceed.
              </div>
              <ReCAPTCHA
                sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                ref={captchaRef}
                onChange={handleCaptchaChange}
              />
              <button
                onClick={handleMint}
                disabled={!captchaVerified}
                className={`w-full py-3 rounded-full font-semibold shadow-lg transition duration-300 ${
                  captchaVerified
                    ? 'bg-green-500 hover:bg-green-600 text-white'
                    : 'bg-gray-600 text-gray-300 cursor-not-allowed'
                }`}
              >
                ✅ Verify & Mint
              </button>
            </div>
          )
        ) : (
          <div className="mt-4 text-center text-yellow-300 animate-pulse">
            ⏳ Evaluating risk...
          </div>
        )}
      </div>
    </div>
  )
}
