const demoTimeline = [
    { id: "timeline-1", date: "May 15, 2026", title: "Voter Registration Deadline", color: "saffron", active: false, order: 1 },
    { id: "timeline-2", date: "May 22, 2026", title: "Final Candidate List Published", color: "blue", active: false, order: 2 },
    { id: "timeline-3", date: "May 30, 2026", title: "Phase 1 Voting Day", color: "green", active: true, order: 3 },
    { id: "timeline-4", date: "June 4, 2026", title: "Counting and Results", color: "dark", active: false, order: 4 }
];

const demoCandidates = [
    {
        id: "cand-1",
        name: "Arjun Singh",
        party: "Progressive Party",
        promises: ["Free healthcare expansion", "Stronger digital services", "Youth employment push"],
        color: "saffron"
    },
    {
        id: "cand-2",
        name: "Priya Sharma",
        party: "Green Future Front",
        promises: ["Clean city projects", "Women safety programs", "School modernization"],
        color: "green"
    }
];

const demoBooths = [
    {
        id: "booth-1",
        name: "City Hall Polling Station",
        address: "100 Main St",
        city: "Metropolis",
        zipCode: "10001",
        boothNumber: "B-101",
        pollingTime: "7 AM - 6 PM",
        contact: "1800-111-222",
        crowdLevel: "Low",
        accessibility: { wheelchair: true, seniorCitizen: true, specialAssistance: true },
        location: { lat: 28.6139, lng: 77.209 }
    },
    {
        id: "booth-2",
        name: "Community Center",
        address: "250 Park Ave",
        city: "Metropolis",
        zipCode: "10002",
        boothNumber: "B-102",
        pollingTime: "7 AM - 6 PM",
        contact: "1800-111-333",
        crowdLevel: "Medium",
        accessibility: { wheelchair: true, seniorCitizen: true, specialAssistance: false },
        location: { lat: 28.6145, lng: 77.2167 }
    },
    {
        id: "booth-3",
        name: "Public Library",
        address: "500 Library Way",
        city: "Gotham",
        zipCode: "20001",
        boothNumber: "B-201",
        pollingTime: "8 AM - 5 PM",
        contact: "1800-111-444",
        crowdLevel: "High",
        accessibility: { wheelchair: false, seniorCitizen: true, specialAssistance: true },
        location: { lat: 19.076, lng: 72.8777 }
    }
];

const demoMyths = [
    {
        id: "myth-1",
        myth: "Voting can be done through WhatsApp.",
        fact: "False. Voting must happen only through official election methods at approved polling locations or officially announced channels.",
        category: "Process"
    },
    {
        id: "myth-2",
        myth: "You do not need registration if you have Aadhaar.",
        fact: "False. Aadhaar alone does not replace voter registration on the electoral roll.",
        category: "Eligibility"
    },
    {
        id: "myth-3",
        myth: "Polling booths stay open 24 hours.",
        fact: "False. Booth timings are fixed by the Election Commission.",
        category: "General"
    }
];

const demoQuiz = [
    {
        "question": "Sample Question 1 about Registration process?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "answer": "Option A",
        "explanation": "This explains the correct answer for question 1."
    },
    {
        "question": "Sample Question 2 about Polling booth rules?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "answer": "Option A",
        "explanation": "This explains the correct answer for question 2."
    },
    {
        "question": "Sample Question 3 about Voter rights?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "answer": "Option A",
        "explanation": "This explains the correct answer for question 3."
    },
    {
        "question": "Sample Question 4 about Fake news awareness?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "answer": "Option A",
        "explanation": "This explains the correct answer for question 4."
    },
    {
        "question": "Sample Question 5 about Election timeline?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "answer": "Option A",
        "explanation": "This explains the correct answer for question 5."
    },
    {
        "question": "Sample Question 6 about Complaint process?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "answer": "Option A",
        "explanation": "This explains the correct answer for question 6."
    },
    {
        "question": "Sample Question 7 about Voting eligibility?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "answer": "Option A",
        "explanation": "This explains the correct answer for question 7."
    },
    {
        "question": "Sample Question 8 about Registration process?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "answer": "Option A",
        "explanation": "This explains the correct answer for question 8."
    },
    {
        "question": "Sample Question 9 about Polling booth rules?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "answer": "Option A",
        "explanation": "This explains the correct answer for question 9."
    },
    {
        "question": "Sample Question 10 about Voter rights?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "answer": "Option A",
        "explanation": "This explains the correct answer for question 10."
    },
    {
        "question": "Sample Question 11 about Fake news awareness?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "answer": "Option A",
        "explanation": "This explains the correct answer for question 11."
    },
    {
        "question": "Sample Question 12 about Election timeline?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "answer": "Option A",
        "explanation": "This explains the correct answer for question 12."
    },
    {
        "question": "Sample Question 13 about Complaint process?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "answer": "Option A",
        "explanation": "This explains the correct answer for question 13."
    },
    {
        "question": "Sample Question 14 about Voting eligibility?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "answer": "Option A",
        "explanation": "This explains the correct answer for question 14."
    },
    {
        "question": "Sample Question 15 about Registration process?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "answer": "Option A",
        "explanation": "This explains the correct answer for question 15."
    },
    {
        "question": "Sample Question 16 about Polling booth rules?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "answer": "Option A",
        "explanation": "This explains the correct answer for question 16."
    },
    {
        "question": "Sample Question 17 about Voter rights?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "answer": "Option A",
        "explanation": "This explains the correct answer for question 17."
    },
    {
        "question": "Sample Question 18 about Fake news awareness?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "answer": "Option A",
        "explanation": "This explains the correct answer for question 18."
    },
    {
        "question": "Sample Question 19 about Election timeline?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "answer": "Option A",
        "explanation": "This explains the correct answer for question 19."
    },
    {
        "question": "Sample Question 20 about Complaint process?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "answer": "Option A",
        "explanation": "This explains the correct answer for question 20."
    },
    {
        "question": "Sample Question 21 about Voting eligibility?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "answer": "Option A",
        "explanation": "This explains the correct answer for question 21."
    },
    {
        "question": "Sample Question 22 about Registration process?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "answer": "Option A",
        "explanation": "This explains the correct answer for question 22."
    },
    {
        "question": "Sample Question 23 about Polling booth rules?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "answer": "Option A",
        "explanation": "This explains the correct answer for question 23."
    },
    {
        "question": "Sample Question 24 about Voter rights?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "answer": "Option A",
        "explanation": "This explains the correct answer for question 24."
    },
    {
        "question": "Sample Question 25 about Fake news awareness?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "answer": "Option A",
        "explanation": "This explains the correct answer for question 25."
    },
    {
        "question": "Sample Question 26 about Election timeline?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "answer": "Option A",
        "explanation": "This explains the correct answer for question 26."
    },
    {
        "question": "Sample Question 27 about Complaint process?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "answer": "Option A",
        "explanation": "This explains the correct answer for question 27."
    },
    {
        "question": "Sample Question 28 about Voting eligibility?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "answer": "Option A",
        "explanation": "This explains the correct answer for question 28."
    },
    {
        "question": "Sample Question 29 about Registration process?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "answer": "Option A",
        "explanation": "This explains the correct answer for question 29."
    },
    {
        "question": "Sample Question 30 about Polling booth rules?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "answer": "Option A",
        "explanation": "This explains the correct answer for question 30."
    }
];

const demoNotifications = [
    {
        id: "notif-1",
        title: "Registration deadline approaching",
        message: "Verify your registration before May 15, 2026.",
        type: "Alert",
        date: new Date("2026-05-10T09:00:00Z")
    },
    {
        id: "notif-2",
        title: "Voting day reminder",
        message: "Keep a valid ID ready before heading to your polling booth.",
        type: "Reminder",
        date: new Date("2026-05-29T09:00:00Z")
    }
];

const store = {
    remindersByUser: new Map(),
    complaintsByUser: new Map(),
    chatHistoryByUser: new Map(),
    checklistByUser: new Map(),
    readinessByUser: new Map()
};

function clone(data) {
    return JSON.parse(JSON.stringify(data));
}

module.exports = {
    demoTimeline,
    demoCandidates,
    demoBooths,
    demoMyths,
    demoQuiz,
    demoNotifications,
    store,
    clone
};
