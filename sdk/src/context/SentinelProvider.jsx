// // sdk/src/context/SentinelProvider.js
// import React, { createContext, useState, useEffect } from 'react';
// import { trackBehavior } from '../tracking/behaviorTracker';
// import { sendBehavior } from '../api/sendBehavior';

// export const SentinelContext = createContext();

// export const SentinelProvider = ({ children }) => {
//   const [riskScore, setRiskScore] = useState(null);
//   const [sessionId] = useState(() => crypto.randomUUID());
//   const [challengeVisible, setChallengeVisible] = useState(false);

//   useEffect(() => {
//     const behaviorData = trackBehavior();
//     const interval = setInterval(async () => {
//       const score = await sendBehavior({ sessionId, ...behaviorData });
//       setRiskScore(score);
//       if (score > 60) setChallengeVisible(true);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [sessionId]);

//   return (
//     <SentinelContext.Provider value={{ riskScore, sessionId, challengeVisible, setChallengeVisible }}>
//       {children}
//     </SentinelContext.Provider>
//   );
// };



import React, { createContext, useState, useEffect, useRef } from 'react';
import { initBehaviorTracking, flushBehaviorData } from '../tracking/behaviorTracker';
import { sendBehavior } from '../api/sendBehavior';

export const SentinelContext = createContext();

export const SentinelProvider = ({ children }) => {
  const [riskScore, setRiskScore] = useState(null);
  const [challengeVisible, setChallengeVisible] = useState(false);
  const [sessionId] = useState(() => crypto.randomUUID());
  const intervalRef = useRef();

  useEffect(() => {
    const stopTracking = initBehaviorTracking();

    intervalRef.current = setInterval(async () => {
      const behavior = flushBehaviorData();

      // Simulate score without backend
      let score = await sendBehavior({ sessionId, ...behavior });
      if (score == null) score = Math.floor(Math.random() * 100); // fallback

      setRiskScore(score);
      if (score >= 60) setChallengeVisible(true);
    }, 5000);

    return () => {
      clearInterval(intervalRef.current);
      stopTracking();
    };
  }, [sessionId]);

  return (
    <SentinelContext.Provider
      value={{ riskScore, sessionId, challengeVisible, setChallengeVisible }}
    >
      {children}
    </SentinelContext.Provider>
  );
};
