// // sdk/src/api/sendBehavior.js
// export const sendBehavior = async (payload) => {
//   try {
//     const res = await fetch('http://localhost:4000/api/evaluate', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(payload)
//     });
//     const data = await res.json();
//     return data.riskScore;
//   } catch (err) {
//     console.error('Error sending behavior:', err);
//     return null;
//   }
// };


export const sendBehavior = async (payload) => {
  try {
    // simulate no backend
    return null;

    // If backend exists, uncomment:
    /*
    const res = await fetch('http://localhost:4000/api/evaluate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    return data.riskScore;
    */
  } catch (err) {
    console.error('Behavior API failed:', err);
    return null;
  }
};
