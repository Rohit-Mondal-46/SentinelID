const express = require("express");
const axios = require("axios");

const router = express.Router();

// POST /evaluate
router.post("/", async (req, res) => {
try {
const { features } = req.body;

kotlin
Copy
Edit
if (!features || !Array.isArray(features) || features.length !== 7) {
  return res.status(400).json({ error: "Invalid input: Expected 7 features." });
}

// Send request to Flask model server
const flaskResponse = await axios.post("http://localhost:5000/predict", {
  features,
});

const { prediction, probability } = flaskResponse.data;

return res.json({
  label: prediction === 1 ? "human" : "bot",
  confidence: probability,
});
} catch (error) {
console.error("Error evaluating:", error.message);
return res.status(500).json({ error: "Failed to evaluate behavior." });
}
});