// // sdk/src/tracking/behaviorTracker.js
// export const trackBehavior = () => {
//   const behaviorData = {
//     mouseMovements: [],
//     keystrokes: [],
//     clicks: []
//   };

//   document.addEventListener('mousemove', (e) => {
//     behaviorData.mouseMovements.push({ x: e.clientX, y: e.clientY, t: Date.now() });
//   });

//   document.addEventListener('keydown', (e) => {
//     behaviorData.keystrokes.push({ key: e.key, t: Date.now() });
//   });

//   document.addEventListener('click', (e) => {
//     behaviorData.clicks.push({ x: e.clientX, y: e.clientY, t: Date.now() });
//   });

//   return behaviorData;
// };



let mouseMovements = [];
let keystrokes = [];
let clicks = [];

const handleMouseMove = (e) =>
  mouseMovements.push({ x: e.clientX, y: e.clientY, t: Date.now() });

const handleKeyDown = (e) =>
  keystrokes.push({ key: e.key, t: Date.now() });

const handleClick = (e) =>
  clicks.push({ x: e.clientX, y: e.clientY, t: Date.now() });

export const initBehaviorTracking = () => {
  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('keydown', handleKeyDown);
  window.addEventListener('click', handleClick);

  return () => {
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('keydown', handleKeyDown);
    window.removeEventListener('click', handleClick);
  };
};

export const flushBehaviorData = () => {
  const snapshot = {
    mouseMovements: [...mouseMovements],
    keystrokes: [...keystrokes],
    clicks: [...clicks],
  };
  mouseMovements = [];
  keystrokes = [];
  clicks = [];
  return snapshot;
};
