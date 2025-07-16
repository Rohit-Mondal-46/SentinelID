// // sdk/src/challenge/ChallengeModal.js
// import React, { useState } from 'react';
// import { useSentinel } from '../context/useSentinel';

// const ChallengeModal = () => {
//   const { challengeVisible, setChallengeVisible } = useSentinel();
//   const [captchaInput, setCaptchaInput] = useState('');
//   const [verified, setVerified] = useState(false);

//   const zkChallenge = async () => {
//     const proof = `proof-for-${captchaInput}`; // Placeholder
//     const res = await fetch('http://localhost:4000/api/verifyZK', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ proof, publicSignals: [captchaInput] })
//     });
//     const data = await res.json();
//     if (data.verified) {
//       setVerified(true);
//       setChallengeVisible(false);
//     } else {
//       alert('ZK Verification Failed. Try Again.');
//     }
//   };

//   if (!challengeVisible || verified) return null;

//   return (
//     <div style={{ position: 'fixed', top: 0, left: 0, background: '#0008', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//       <div style={{ background: '#fff', padding: 20, borderRadius: 10 }}>
//         <h3>Solve the ZK CAPTCHA</h3>
//         <p>Enter any secret phrase to simulate ZK proof:</p>
//         <input type="text" value={captchaInput} onChange={e => setCaptchaInput(e.target.value)} />
//         <button onClick={zkChallenge}>Submit Proof</button>
//       </div>
//     </div>
//   );
// };

// export default ChallengeModal;



import React, { useState } from 'react';
import { useSentinel } from '../context/useSentinel';

const ChallengeModal = () => {
  const { challengeVisible, setChallengeVisible } = useSentinel();
  const [captchaInput, setCaptchaInput] = useState('');
  const [verified, setVerified] = useState(false);

  const zkChallenge = async () => {
    // Simulate proof verification
    if (captchaInput.trim() !== '') {
      setVerified(true);
      setTimeout(() => setChallengeVisible(false), 800);
    } else {
      alert('Invalid CAPTCHA. Try again.');
    }
  };

  if (!challengeVisible || verified) return null;

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, background: '#0008', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ background: '#fff', padding: 20, borderRadius: 10 }}>
        <h3>Solve the ZK CAPTCHA</h3>
        <p>Type any phrase to simulate proof:</p>
        <input type="text" value={captchaInput} onChange={e => setCaptchaInput(e.target.value)} />
        <button onClick={zkChallenge}>Submit</button>
      </div>
    </div>
  );
};

export default ChallengeModal;
