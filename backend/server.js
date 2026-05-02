const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
// const authRoutes = require("./routes/authRoutes");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Serve Static Frontend Files
app.use(express.static(path.join(__dirname, '../')));

app.get('/api/test', (req, res) => res.json({ message: "Backend working" }));

if (process.env.MONGO_URI) {
  mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log("MongoDB error:", err.message));
} else {
  console.log("MongoDB URI not configured. Running with demo/in-memory fallbacks.");
}

// Deprecated: app.use("/api/auth", authRoutes);
app.use('/api', require('./routes/apiRoutes'));
app.use('/api', require('./routes/fakeNewsRoutes'));
app.use('/api/reminders', require('./routes/reminderRoutes'));
app.use('/api/myths', require('./routes/mythRoutes'));
app.use('/api/quiz', require('./routes/quizRoutes'));
app.use('/api/booths', require('./routes/boothRoutes'));
app.use('/api/eligibility', require('./routes/readinessRoutes'));

app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api/')) {
    return next();
  }

  res.sendFile(path.join(__dirname, '../index.html'));
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
