<div align="center">
  <img src="https://via.placeholder.com/150x150?text=VoteVision+Logo" alt="VoteVision Logo" width="150"/>
  <h1>VoteVision</h1>
  <p><b>Your Smart Election Assistant</b></p>
  <p>
    <a href="#features">Features</a> •
    <a href="#tech-stack">Tech Stack</a> •
    <a href="#installation">Installation</a> •
    <a href="#usage">Usage</a>
  </p>
</div>

---

## 🌟 Introduction

**VoteVision** is an AI-powered election assistance platform designed to empower citizens by demystifying the democratic process. From first-time voters to seasoned citizens, VoteVision provides a centralized, intelligent hub to understand the election process, check eligibility, track critical timelines, verify election-related claims, compare local candidates, find polling booths, and safely submit complaints. 

Built with total accessibility in mind, VoteVision seamlessly supports both **English and Hindi**, ensuring that critical democratic information reaches everyone.

---

## ⚠️ Problem Statement

Voters frequently face numerous hurdles that impact democratic participation:
- **Lack of Election Awareness:** Voters often miss critical deadlines for registration and voting phases.
- **Confusion About the Voting Process:** First-time voters struggle with the complex paperwork and steps required to cast a ballot.
- **Fake Election News:** Rampant misinformation and unverified WhatsApp forwards manipulate voter sentiment.
- **Polling Booth Difficulty:** Finding the exact polling booth location and navigating there can be frustrating.
- **Eligibility Confusion:** Uncertainty around age, citizenship, and documentation requirements prevents eligible citizens from registering.

---

## 💡 Solution

**VoteVision solves these problems** by offering an intuitive, unified dashboard that acts as a personal Election Command Center. By leveraging AI (Google Gemini), real-time mapping, and dynamic bilingual translation, VoteVision transforms a confusing bureaucratic process into a smooth, guided, and highly accessible user experience. 

---

## 🚀 Features

VoteVision is packed with high-utility tools:

*   🤖 **AI FAQ Assistant:** Get instant, intelligent answers to any election-related query.
*   📖 **Election Process Guide:** Step-by-step breakdown of how to register and vote.
*   🎓 **First-Time Voter Guide:** Tailored onboarding for new voters.
*   ✅ **Eligibility Checker:** Instantly verify your voting eligibility based on age and citizenship.
*   📅 **Election Timeline:** Track all major election events, deadlines, and phase dates.
*   📍 **Booth Finder:** Locate your designated polling booth and get smart routing.
*   ⚖️ **Candidate Comparison:** Evaluate local leaders side-by-side.
*   🛡️ **Fake News Checker:** Instantly verify suspicious election claims and WhatsApp forwards.
*   📢 **Complaint Assistant:** Securely report malpractices directly to authorities.
*   ♿ **Accessibility Support:** High-contrast modes, text resizing, and Voice Guide (Text-to-Speech).
*   🔔 **Reminders:** Set custom alerts for registration and voting days.
*   🧠 **Quiz Mode:** Test your democratic knowledge and voter rights.
*   🔍 **Myth vs Fact:** Dispel common election rumors.
*   📜 **Voter Rights Guide:** Learn your rights to privacy, information, and complaint.
*   🇮🇳 **Hindi/English Support:** Full app-wide dynamic translation and localized AI responses.
*   🎙️ **Voice Features:** Web Speech API integration for Chatbot dictation and Global Voice Guide (TTS) for accessibility.
*   📊 **Dashboard Analytics & Tracker:** Track your readiness with a dynamic progress bar and Quick Stats.
*   🆘 **Emergency Help:** Quick action hub for critical polling day issues (Name missing, ID lost, etc).
*   🔍 **Quick Search:** Instantly jump to any feature from the navigation bar.
*   💬 **Floating AI Assistant:** One-click global access to the election AI helper.

---

## 💻 Tech Stack

**Frontend:**
*   HTML5 (Semantic & Accessible)
*   CSS3 (Custom Premium SaaS Glassmorphism UI)
*   Vanilla JavaScript (ES6+)

**Backend:**
*   Node.js
*   Express.js

**Database & Authentication:**
*   Supabase (PostgreSQL)
*   Supabase Auth (Secure Email/Password Sessions)

**APIs & Integrations:**
*   **Gemini API:** For the AI FAQ Assistant and Fake News Checker.
*   **Google Maps API:** For the Polling Booth Finder.
*   **Web Speech API:** For Text-to-Speech Accessibility.
*   **Browser Notifications:** For election reminders.

---

## ⚙️ Installation

Follow these steps to set up VoteVision locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/votevision.git
   cd votevision
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Environment Variables:**
   Create a `.env` file in the root directory and add the required variables (see below).

4. **Run the server:**
   ```bash
   npm start
   ```
   *The application will run on `http://localhost:8080` (or your defined PORT).*

---

## 🔐 Environment Variables

Ensure the following variables are defined in your `.env` file:

```env
PORT=8080
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_jwt_secret
GEMINI_API_KEY=your_google_gemini_api_key
GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

---

## 📱 Usage

1. **Register/Login:** Create a new account or log in to access the private dashboard.
2. **Dashboard:** View your Voting Readiness progress, upcoming timeline dates, and quick activity analytics.
3. **Features:** Click on any of the Quick Access cards to open the AI Chatbot, Booth Finder, Eligibility Checker, or Complaint portal.
4. **Accessibility:** Use the bottom-right Floating Action Button (FAB) or the Accessibility page to toggle Hindi translation, read-aloud voice guidance, or dark mode.

---

## ☁️ Deployment

VoteVision's final architecture is fully optimized for a separated frontend/backend deployment.

**Frontend (Vercel):**
1. Push your code to GitHub.
2. Import the repository into Vercel.
3. Vercel will automatically use `vercel.json` to route all traffic to `index.html` (Single Page Application setup).

**Backend (Render):**
1. Import the same GitHub repository into Render as a Web Service.
2. Set the build command to `npm install` and the start command to `npm start` or `node backend/server.js`.
3. Add your Environment Variables (`SUPABASE_URL`, `SUPABASE_ANON_KEY`, `MONGO_URI` if used for legacy data, etc).

---

## 📸 Screenshots

*(Replace placeholder links with actual image paths)*

| Dashboard Overview | AI Chatbot & Fake News | Mobile Responsive View |
|:---:|:---:|:---:|
| <img src="https://via.placeholder.com/300x200?text=Dashboard" alt="Dashboard"/> | <img src="https://via.placeholder.com/300x200?text=AI+Tools" alt="AI Tools"/> | <img src="https://via.placeholder.com/150x250?text=Mobile+App" alt="Mobile View"/> |

---

## 🔮 Future Improvements

*   **Live Queue Tracking:** Real-time crowd tracking at polling booths via community reporting.
*   **WhatsApp Bot Integration:** Allow rural users to check eligibility via a WhatsApp chatbot.
*   **Blockchain Voting Ledger:** A theoretical implementation to verify that a vote was counted.
*   **Multi-Regional Languages:** Expanding support to Bengali, Tamil, Telugu, and Marathi.

---

## 👥 Contributors

*   **Your Name** - *Lead Developer / UI/UX / AI Integration* 
*   *[Add Team Members Here]*

---

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.
