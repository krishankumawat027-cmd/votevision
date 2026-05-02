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
        "question": "What is the minimum age to vote in India?",
        "options": [
            "16",
            "18",
            "21",
            "25"
        ],
        "answer": "18",
        "explanation": "The 61st Amendment Act of 1988 lowered the voting age from 21 to 18.",
        "category": "Voting eligibility"
    },
    {
        "question": "Which document is NOT accepted as identity proof at polling booths?",
        "options": [
            "Aadhaar Card",
            "PAN Card",
            "Ration Card without photo",
            "Driving License"
        ],
        "answer": "Ration Card without photo",
        "explanation": "Only photo ID cards approved by the ECI are valid. A non-photo Ration Card is not accepted.",
        "category": "Voter ID/documents"
    },
    {
        "question": "What does NOTA stand for?",
        "options": [
            "None of the Above",
            "Notice of Transfer Action",
            "New Option To Apply",
            "National Officer Tracking App"
        ],
        "answer": "None of the Above",
        "explanation": "NOTA allows voters to officially reject all contesting candidates.",
        "category": "Voter rights"
    },
    {
        "question": "Who appoints the Chief Election Commissioner of India?",
        "options": [
            "Prime Minister",
            "President of India",
            "Chief Justice",
            "Parliament"
        ],
        "answer": "President of India",
        "explanation": "The President appoints the CEC based on the recommendation of a selection committee.",
        "category": "Election process"
    },
    {
        "question": "What is VVPAT?",
        "options": [
            "Voter Verified Paper Audit Trail",
            "Voting Verification Process Action Team",
            "Valid Voter Process Authorization Ticket",
            "None of these"
        ],
        "answer": "Voter Verified Paper Audit Trail",
        "explanation": "VVPAT provides a printed slip for voters to verify that their vote was cast correctly.",
        "category": "Polling booth rules"
    },
    {
        "question": "Can you vote online in India?",
        "options": [
            "Yes, via the ECI website",
            "Yes, using Aadhaar OTP",
            "No, voting requires physical presence or postal ballot",
            "Yes, through an app"
        ],
        "answer": "No, voting requires physical presence or postal ballot",
        "explanation": "Currently, India does not allow online voting. E-voting is only for specific service voters via Postal Ballots.",
        "category": "Fake news awareness"
    },
    {
        "question": "Which form is used for new voter registration?",
        "options": [
            "Form 6",
            "Form 7",
            "Form 8",
            "Form 6A"
        ],
        "answer": "Form 6",
        "explanation": "Form 6 is the application form for new voters to get enrolled in the electoral roll.",
        "category": "Voter registration"
    },
    {
        "question": "When is National Voters Day celebrated?",
        "options": [
            "January 25",
            "August 15",
            "October 2",
            "November 26"
        ],
        "answer": "January 25",
        "explanation": "National Voters Day is celebrated on January 25 to mark the foundation of the Election Commission in 1950.",
        "category": "Election process"
    },
    {
        "question": "What is the maximum limit of candidates an EVM can cater to?",
        "options": [
            "16",
            "32",
            "64",
            "384"
        ],
        "answer": "384",
        "explanation": "One ballot unit accommodates 16 candidates. Up to 24 units can be connected to support 384 candidates including NOTA.",
        "category": "Polling booth rules"
    },
    {
        "question": "Is possessing a Voter ID enough to vote?",
        "options": [
            "Yes",
            "No",
            "Only for State Elections",
            "Only for National Elections"
        ],
        "answer": "No",
        "explanation": "Your name MUST be on the electoral roll. Having an ID card is not enough if your name is missing.",
        "category": "Voter ID/documents"
    },
    {
        "question": "Which body conducts elections for Municipal Corporations?",
        "options": [
            "Election Commission of India",
            "State Election Commission",
            "Parliament",
            "Local District Magistrate"
        ],
        "answer": "State Election Commission",
        "explanation": "Local body elections (Panchayats and Municipalities) are conducted by the respective State Election Commissions.",
        "category": "Election process"
    },
    {
        "question": "Can a non-resident Indian (NRI) vote?",
        "options": [
            "Yes",
            "No",
            "Only if they pay tax",
            "Only online"
        ],
        "answer": "Yes",
        "explanation": "NRIs can vote if they register as an overseas elector using Form 6A and cast their vote in person.",
        "category": "Voting eligibility"
    },
    {
        "question": "How many days before polling does campaigning stop?",
        "options": [
            "24 hours",
            "48 hours",
            "72 hours",
            "12 hours"
        ],
        "answer": "48 hours",
        "explanation": "Public campaigning must stop 48 hours before the conclusion of the poll.",
        "category": "Election process"
    },
    {
        "question": "What is the Model Code of Conduct?",
        "options": [
            "A set of guidelines for candidates and parties",
            "A law passed by Parliament",
            "A penal code for voters",
            "A manual for EVM operation"
        ],
        "answer": "A set of guidelines for candidates and parties",
        "explanation": "The MCC regulates the conduct of political parties and candidates during elections.",
        "category": "Election process"
    },
    {
        "question": "Can prisoners vote in India?",
        "options": [
            "Yes",
            "No",
            "Only undertrials",
            "Only those in civil prison"
        ],
        "answer": "No",
        "explanation": "Under Section 62(5) of the RPA, persons confined in a prison or in police custody cannot vote.",
        "category": "Voting eligibility"
    },
    {
        "question": "Which ink is used to mark the voter\u2019s finger?",
        "options": [
            "Silver Nitrate",
            "Potassium Permanganate",
            "Sodium Chloride",
            "Lead Oxide"
        ],
        "answer": "Silver Nitrate",
        "explanation": "Indelible ink contains silver nitrate which stains the skin and prevents multiple voting.",
        "category": "Polling booth rules"
    },
    {
        "question": "What form is used to correct details on the Voter ID?",
        "options": [
            "Form 6",
            "Form 7",
            "Form 8",
            "Form 6B"
        ],
        "answer": "Form 8",
        "explanation": "Form 8 is used for correction of particulars, shifting of residence, or replacement of EPIC.",
        "category": "Voter registration"
    },
    {
        "question": "What is the tenure of the Chief Election Commissioner?",
        "options": [
            "5 years",
            "6 years or up to age 65",
            "4 years",
            "Until the President decides"
        ],
        "answer": "6 years or up to age 65",
        "explanation": "The CEC serves a term of 6 years or until the age of 65, whichever is earlier.",
        "category": "Election process"
    },
    {
        "question": "Who was the first Chief Election Commissioner of India?",
        "options": [
            "T.N. Seshan",
            "Sukumar Sen",
            "Sunil Arora",
            "V.S. Ramadevi"
        ],
        "answer": "Sukumar Sen",
        "explanation": "Sukumar Sen was the first CEC, serving from 1950 to 1958.",
        "category": "Election process"
    },
    {
        "question": "Can a candidate contest from more than two constituencies?",
        "options": [
            "Yes",
            "No",
            "Only with special permission",
            "Only in State Assembly"
        ],
        "answer": "No",
        "explanation": "According to the Representation of the People Act, a candidate can contest from a maximum of two constituencies.",
        "category": "Election process"
    },
    {
        "question": "Are political parties allowed to provide free transport to voters?",
        "options": [
            "Yes",
            "No",
            "Only for elderly voters",
            "Only in rural areas"
        ],
        "answer": "No",
        "explanation": "Providing free transport to voters is considered a corrupt practice under election laws.",
        "category": "Polling booth rules"
    },
    {
        "question": "What is the role of an Election Observer?",
        "options": [
            "To arrest violators",
            "To count the votes",
            "To monitor the election process independently",
            "To distribute voter slips"
        ],
        "answer": "To monitor the election process independently",
        "explanation": "Observers are appointed by the ECI to ensure free and fair elections.",
        "category": "Complaint process"
    },
    {
        "question": "What is the maximum election expenditure limit for a Lok Sabha constituency (as of 2024)?",
        "options": [
            "40 Lakhs",
            "70 Lakhs",
            "95 Lakhs",
            "1.5 Crores"
        ],
        "answer": "95 Lakhs",
        "explanation": "The limit for larger states was raised to Rs 95 lakhs for Lok Sabha elections.",
        "category": "Election process"
    },
    {
        "question": "What happens if there is a tie between two candidates?",
        "options": [
            "Re-election is held",
            "The older candidate wins",
            "A lottery/draw of lots decides the winner",
            "The President decides"
        ],
        "answer": "A lottery/draw of lots decides the winner",
        "explanation": "If votes are equal, the Returning Officer decides the winner by a draw of lots.",
        "category": "Election process"
    },
    {
        "question": "What is cVIGIL?",
        "options": [
            "A news app",
            "An app to report MCC violations",
            "An EVM tracking system",
            "A candidate registration portal"
        ],
        "answer": "An app to report MCC violations",
        "explanation": "cVIGIL allows citizens to report violations of the Model Code of Conduct directly to the ECI.",
        "category": "Complaint process"
    },
    {
        "question": "How can an illiterate voter cast their vote?",
        "options": [
            "They cannot vote",
            "By identifying the party symbol",
            "The Returning Officer votes for them",
            "They must bring a literate relative"
        ],
        "answer": "By identifying the party symbol",
        "explanation": "EVMs have party symbols and Braille to assist illiterate or visually impaired voters.",
        "category": "Voter rights"
    },
    {
        "question": "Is EVM connected to the Internet?",
        "options": [
            "Yes, via WiFi",
            "Yes, via Bluetooth",
            "No, it is a standalone machine",
            "Yes, via satellite"
        ],
        "answer": "No, it is a standalone machine",
        "explanation": "EVMs do not have any communication interface and cannot be connected to any network.",
        "category": "Fake news awareness"
    },
    {
        "question": "What is Form 7 used for?",
        "options": [
            "New registration",
            "Deletion of name from the electoral roll",
            "Correction of name",
            "Aadhaar linkage"
        ],
        "answer": "Deletion of name from the electoral roll",
        "explanation": "Form 7 is used to object to an inclusion or seek deletion of a name.",
        "category": "Voter registration"
    },
    {
        "question": "Can you vote if you lose your Voter ID (EPIC)?",
        "options": [
            "No",
            "Yes, using an alternative approved photo ID",
            "Yes, but only in the last hour",
            "Only with an FIR copy"
        ],
        "answer": "Yes, using an alternative approved photo ID",
        "explanation": "As long as your name is on the roll, you can use other IDs like Aadhaar, Passport, or PAN card.",
        "category": "Voter ID/documents"
    },
    {
        "question": "What is the purpose of the Control Unit in an EVM?",
        "options": [
            "To display candidates",
            "To print the VVPAT slip",
            "To control the Ballot Unit and store votes",
            "To scan IDs"
        ],
        "answer": "To control the Ballot Unit and store votes",
        "explanation": "The Control Unit is kept with the Presiding Officer and it releases the ballot for the voter.",
        "category": "Polling booth rules"
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
