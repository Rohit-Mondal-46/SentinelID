const express = require("express");
const cors = require("cors");
const evaluateRoute = require("./routes/evaluate");

const app = express();
app.use(cors());
app.use(express.json());

// Route mounting
app.use("/evaluate", evaluateRoute);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
console.log("🧠 Backend server running on http:localhost:${PORT}");
});