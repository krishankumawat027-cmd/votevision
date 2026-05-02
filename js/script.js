document.addEventListener("DOMContentLoaded", async () => {
    const API_URL = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1" 
        ? "http://localhost:8080" 
        : "https://votevision-backend.onrender.com";

    const SUPABASE_URL = "https://cnfscdacqfkxrwcebhji.supabase.co";
    const SUPABASE_ANON_KEY = "sb_publishable_ufREQ5Zc_0ZX7Gc5QtR46w_-Dy1eJxd";
    const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

    const DEMO_TIMELINE = [
        { date: "May 15, 2026", title: "Voter Registration Deadline", color: "saffron", active: false, order: 1 },
        { date: "May 22, 2026", title: "Final Candidate List Published", color: "blue", active: false, order: 2 },
        { date: "May 30, 2026", title: "Phase 1 Voting Day", color: "green", active: true, order: 3 },
        { date: "June 4, 2026", title: "Counting and Results", color: "dark", active: false, order: 4 }
    ];
    const DEMO_CANDIDATES = [
        {
            name: "Arjun Singh",
            party: "Progressive Party",
            color: "saffron",
            promises: ["Free healthcare expansion", "Stronger digital services", "Youth employment push"]
        },
        {
            name: "Priya Sharma",
            party: "Green Future Front",
            color: "green",
            promises: ["Clean city projects", "Women safety programs", "School modernization"]
        }
    ];
    const DEMO_BOOTHS = [
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
            accessibility: { wheelchair: true, seniorCitizen: true, specialAssistance: true }
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
            accessibility: { wheelchair: true, seniorCitizen: true, specialAssistance: false }
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
            accessibility: { wheelchair: false, seniorCitizen: true, specialAssistance: true }
        }
    ];
    const DEMO_MYTHS = [
        {
            myth: "Voting can be done through WhatsApp.",
            fact: "False. Voting happens only through official election channels and approved polling processes.",
            category: "Process"
        },
        {
            myth: "You do not need registration if you have Aadhaar.",
            fact: "False. Your name must still be on the electoral roll.",
            category: "Eligibility"
        },
        {
            myth: "Polling booths stay open 24 hours.",
            fact: "False. Booth timings are fixed by the Election Commission.",
            category: "General"
        }
    ];
    const DEMO_QUIZ = [
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
    const DEMO_NOTIFICATIONS = [
        {
            title: "Registration deadline approaching",
            message: "Verify your registration before May 15, 2026.",
            type: "Alert",
            date: "2026-05-10T09:00:00Z"
        },
        {
            title: "Voting day reminder",
            message: "Keep a valid ID ready before heading to your polling booth.",
            type: "Reminder",
            date: "2026-05-29T09:00:00Z"
        }
    ];

    const state = {
        authToken: null,
        currentUser: null,
        currentLang: localStorage.getItem("language") || "en",
        reminders: [],
        complaints: [],
        myths: [],
        quizQuestions: [],
        quizIndex: 0,
        quizScore: 0,
        quizTimerValue: 30,
        quizTimerId: null,
        chatHistory: [],
        savedChecklistItems: []
    };

    const loginModal = document.getElementById("loginModal");
    const signupModal = document.getElementById("signupModal");
    const openLoginBtn = document.getElementById("openLoginBtn");
    const openSignupBtn = document.getElementById("openSignupBtn");
    const switchToSignup = document.getElementById("switchToSignup");
    const switchToLogin = document.getElementById("switchToLogin");
    const navAuthBtn = document.getElementById("nav-auth-btn");
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");
    const logoutBtn = document.getElementById("logout-btn");
    const logoBtn = document.getElementById("logo-btn");
    const profileDropdown = document.getElementById("profile-dropdown");
    const profileBtn = document.getElementById("nav-profile-btn");
    const pages = document.querySelectorAll(".page");
    const navLinks = document.querySelectorAll(".nav-item[data-target]");
    const navMenu = document.getElementById("nav-menu");
    const hamburgerBtn = document.getElementById("hamburger-menu");
    const pageIds = new Set(Array.from(pages, (page) => page.id));
    const PAGE_ALIASES = {
        "home-page": "landing-page",
        "about-page": "landing-page",
        "booth-page": "smart-finder-page"
    };
    const PUBLIC_PAGES = new Set(["landing-page"]);
    const DEFAULT_PUBLIC_PAGE = "landing-page";
    const DEFAULT_PRIVATE_PAGE = "dashboard-page";

    function clone(data) {
        return JSON.parse(JSON.stringify(data));
    }

    function showLogin() {
        signupModal?.classList.add("hidden");
        loginModal?.classList.remove("hidden");
    }

    function showSignup() {
        loginModal?.classList.add("hidden");
        signupModal?.classList.remove("hidden");
    }

    function closeModals() {
        loginModal?.classList.add("hidden");
        signupModal?.classList.add("hidden");
    }

    function normalizePageId(pageId) {
        if (!pageId) return null;
        const normalizedPageId = PAGE_ALIASES[pageId] || pageId;
        return pageIds.has(normalizedPageId) ? normalizedPageId : null;
    }

    function getPageIdFromHash() {
        return normalizePageId(window.location.hash.replace(/^#/, ""));
    }

    function getDefaultPageId() {
        return state.authToken ? DEFAULT_PRIVATE_PAGE : DEFAULT_PUBLIC_PAGE;
    }

    function showToast(message, type = "info") {
        let container = document.getElementById("toast-container");
        if (!container) {
            container = document.createElement("div");
            container.id = "toast-container";
            container.style.cssText = "position:fixed;bottom:20px;right:20px;z-index:9999;display:flex;flex-direction:column;gap:10px;";
            document.body.appendChild(container);
        }
        const toast = document.createElement("div");
        const colors = { success: "#4caf50", error: "#f44336", warning: "#ff9800", info: "#2196f3" };
        toast.style.cssText = `background:${colors[type] || colors.info};color:#fff;padding:12px 20px;border-radius:4px;box-shadow:0 4px 6px rgba(0,0,0,0.1);opacity:0;transition:opacity 0.3s;max-width:300px;font-size:14px;`;
        toast.textContent = message;
        container.appendChild(toast);
        setTimeout(() => toast.style.opacity = "1", 10);
        setTimeout(() => {
            toast.style.opacity = "0";
            setTimeout(() => toast.remove(), 300);
        }, 4000);
    }

    function getAuthHeaders() {
        return state.authToken ? { Authorization: `Bearer ${state.authToken}` } : {};
    }

    async function requestJson(path, options = {}, fallbackFactory = null) {
        const headers = {
            ...(options.body ? { "Content-Type": "application/json" } : {}),
            ...getAuthHeaders(),
            ...(options.headers || {})
        };

        try {
            const response = await fetch(`${API_URL}${path}`, {
                ...options,
                headers
            });

            let payload = null;
            try {
                payload = await response.json();
            } catch {
                payload = null;
            }

            if (!response.ok) {
                throw new Error(payload?.msg || payload?.message || `Request failed for ${path}`);
            }

            return { data: payload, fallback: false };
        } catch (error) {
            if (fallbackFactory) {
                const fallbackData = typeof fallbackFactory === "function" ? fallbackFactory(error) : clone(fallbackFactory);
                return { data: fallbackData, fallback: true, error };
            }

            throw error;
        }
    }

    function updateNavbar() {
        document.querySelectorAll(".public-only").forEach((el) => {
            el.classList.toggle("hidden", Boolean(state.authToken));
        });

        document.querySelectorAll(".private-only").forEach((el) => {
            el.classList.toggle("hidden", !state.authToken);
        });

        const welcomeName = document.getElementById("welcome-name");
        const profileName = document.getElementById("view-profile-name");
        const profileEmail = document.getElementById("view-profile-email");
        const editName = document.getElementById("edit-name");
        const editEmail = document.getElementById("edit-email");

        if (welcomeName) {
            welcomeName.textContent = state.currentUser?.fullName || "User";
        }
        if (profileName) {
            profileName.textContent = state.currentUser?.fullName || "User";
        }
        if (profileEmail) {
            profileEmail.textContent = state.currentUser?.email || "";
        }
        if (editName) {
            editName.value = state.currentUser?.fullName || "";
        }
        if (editEmail) {
            editEmail.value = state.currentUser?.email || "";
        }
    }

    function renderPage(pageId) {
        pages.forEach((page) => page.classList.remove("active"));
        document.getElementById(pageId)?.classList.add("active");

        navLinks.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("data-target") === pageId);
        });

        navMenu?.classList.remove("active");
        profileDropdown?.classList.add("hidden");
        handlePageActivation(pageId);
    }

    function navigateTo(pageId, options = {}) {
        const normalizedPageId = normalizePageId(pageId) || getDefaultPageId();
        const { replace = false, fromHistory = false } = options;

        if (!state.authToken && !PUBLIC_PAGES.has(normalizedPageId)) {
            showLogin();
            navigateTo(DEFAULT_PUBLIC_PAGE, { replace: true });
            return;
        }

        renderPage(normalizedPageId);

        if (fromHistory) return;

        const nextHash = `#${normalizedPageId}`;
        if (window.location.hash === nextHash) {
            history.replaceState({ pageId: normalizedPageId }, "", nextHash);
            return;
        }

        history[replace ? "replaceState" : "pushState"]({ pageId: normalizedPageId }, "", nextHash);
    }

    function requireAuth() {
        if (state.authToken) return true;
        showLogin();
        return false;
    }

    window.navigateTo = navigateTo;

    function applyTranslations(lang) {
        state.currentLang = lang;
        localStorage.setItem("language", lang);

        const primaryLanguageSelect = document.getElementById("language-select");
        const accessibilityLanguageSelect = document.getElementById("accessibility-language-select");
        if (primaryLanguageSelect) primaryLanguageSelect.value = lang;
        if (accessibilityLanguageSelect) accessibilityLanguageSelect.value = lang;
    }

    function getFakeNewsFallback(claim) {
        const lowerClaim = String(claim || "").toLowerCase();
        if (
            lowerClaim.includes("voting can be done through whatsapp") ||
            lowerClaim.includes("vote through whatsapp") ||
            lowerClaim.includes("whatsapp vote")
        ) {
            return {
                status: "False",
                trustScore: 5,
                reason: "Voting cannot be done through WhatsApp. Only official election methods are valid."
            };
        }

        return {
            status: "Unverified",
            trustScore: 50,
            reason: "Demo mode could not confirm this claim. Verify it with official Election Commission guidance."
        };
    }

    function getChatFallbackReply(message) {
        const lowerMessage = String(message || "").toLowerCase();
        if (lowerMessage.includes("register")) {
            return "Make sure your name is on the electoral roll before election day. Keep a valid ID ready and use the timeline page to track important deadlines.";
        }
        if (lowerMessage.includes("whatsapp")) {
            return "Voting cannot be done through WhatsApp. Always rely on official election channels and your assigned polling booth.";
        }
        if (lowerMessage.includes("booth")) {
            return "Use the Booth Finder to search by city, area, or pin code. Carry one valid ID and check the booth timing before you travel.";
        }
        return "To vote successfully, confirm your registration, carry one valid ID, reach your polling booth during official hours, and follow the instructions given there.";
    }

    function computeEligibility(dob, citizen) {
        const birthDate = new Date(dob);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age -= 1;
        }

        return {
            eligible: citizen === "yes" && age >= 18,
            message:
                citizen === "yes" && age >= 18
                    ? "You are eligible to vote if your name is on the electoral roll."
                    : "You must be an Indian citizen aged 18 or above and registered to vote."
        };
    }

    function computeReadiness(formData) {
        const missing = [];
        let score = "Ready to Vote";

        if (formData.nationality !== "Indian") {
            score = "Not Ready Yet";
            missing.push("Only Indian citizens are eligible to vote.");
        }
        if (Number(formData.age) < 18) {
            score = "Not Ready Yet";
            missing.push("You must be at least 18 years old to vote.");
        }
        if (formData.registered === "No") {
            if (score !== "Not Ready Yet") {
                score = "Almost Ready";
            }
            missing.push("Register your name on the electoral roll before voting.");
        }

        return { score, missing };
    }

    function getSelectedChecklistItems() {
        return Array.from(document.querySelectorAll(".doc-check:checked")).map((checkbox) =>
            checkbox.parentElement.textContent.trim()
        );
    }

    function applySavedChecklist(items) {
        const itemSet = new Set(items || []);
        document.querySelectorAll(".doc-check").forEach((checkbox) => {
            const labelText = checkbox.parentElement.textContent.trim();
            checkbox.checked = itemSet.has(labelText);
        });
    }

    async function loadTimeline() {
        const container = document.querySelector("#timeline-page .timeline-ui");
        if (!container) return;
        container.innerHTML = `<p class="text-secondary text-center">Loading timeline...</p>`;

        const { data } = await requestJson("/api/timeline", {}, () => clone(DEMO_TIMELINE));
        container.innerHTML = data
            .sort((a, b) => (a.order || 0) - (b.order || 0))
            .map((item) => `
                <div class="timeline-item">
                    <div class="timeline-marker" style="background-color: var(--${item.color || "blue"});"></div>
                    <div class="timeline-content card">
                        <strong>${item.date}</strong>
                        <p class="mt-2">${item.title}</p>
                    </div>
                </div>
            `)
            .join("");
    }

    async function loadCandidates() {
        const grid = document.querySelector("#candidate-page .comparison-grid");
        if (!grid) return;
        grid.innerHTML = `<p class="text-secondary text-center">Loading candidates...</p>`;

        const { data } = await requestJson("/api/candidates", {}, () => clone(DEMO_CANDIDATES));
        grid.innerHTML = data
            .map((candidate) => `
                <div class="card border-${candidate.color || "blue"}">
                    <div class="cand-avatar mb-3"><i class="fa-solid fa-user-tie"></i></div>
                    <h3>${candidate.name}</h3>
                    <p class="text-secondary">${candidate.party}</p>
                    <ul class="mt-3" style="padding-left: 20px; line-height: 1.8;">
                        ${(candidate.promises || []).map((promise) => `<li>${promise}</li>`).join("")}
                    </ul>
                </div>
            `)
            .join("");
    }

    function renderFakeNewsResult(data) {
        const resultCard = document.querySelector(".trust-result-card");
        if (!resultCard) return;
        resultCard.classList.remove("hidden");
        resultCard.innerHTML = `
            <h3>${data.status || "Unverified"}</h3>
            <p>${data.reason || "No explanation available."}</p>
            <strong>Trust Score: ${data.trustScore || 50}/100</strong>
        `;
    }

    async function loadReminders() {
        const list = document.getElementById("reminders-list");
        if (!list) return;
        if (!requireAuth()) return;

        list.innerHTML = `<p class="text-secondary text-center">Loading reminders...</p>`;
        const { data } = await requestJson("/api/reminders", {}, () => {
            if (state.reminders.length === 0) {
                state.reminders = [{ id: "demo-rem-1", title: "Carry your voter ID", date: "2026-05-29", type: "Voting" }];
            }
            return clone(state.reminders);
        });

        state.reminders = clone(data);
        list.innerHTML = state.reminders.length
            ? state.reminders
                  .map((reminder) => `
                    <div class="card mb-3 border-saffron">
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <h4>${reminder.title}</h4>
                                <p class="text-secondary text-sm">${reminder.type || "General"} on ${reminder.date}</p>
                            </div>
                            <i class="fa-solid fa-bell saffron"></i>
                        </div>
                    </div>
                `)
                  .join("")
            : `<p class="text-secondary text-center">No reminders yet.</p>`;
    }

    async function loadMyths() {
        const container = document.getElementById("myth-container");
        if (!container) return;
        container.innerHTML = `<p class="text-secondary text-center" style="grid-column: span 2;">Loading myths...</p>`;

        const { data } = await requestJson("/api/myths", {}, () => clone(DEMO_MYTHS));
        state.myths = clone(data);
        filterMyths(document.getElementById("myth-search")?.value || "");
    }

    function filterMyths(searchText) {
        const container = document.getElementById("myth-container");
        if (!container) return;

        const normalized = searchText.trim().toLowerCase();
        const filteredMyths = state.myths.filter((item) =>
            !normalized ||
            item.myth.toLowerCase().includes(normalized) ||
            item.fact.toLowerCase().includes(normalized) ||
            String(item.category || "").toLowerCase().includes(normalized)
        );

        container.innerHTML = filteredMyths.length
            ? filteredMyths
                  .map((item) => `
                    <div class="card border-dark">
                        <span class="text-sm text-secondary">${item.category || "General"}</span>
                        <h4 class="mt-2 text-danger"><i class="fa-solid fa-xmark"></i> ${item.myth}</h4>
                        <p class="mt-3"><strong>Fact:</strong> ${item.fact}</p>
                    </div>
                `)
                  .join("")
            : `<p class="text-secondary text-center" style="grid-column: span 2;">No myths matched your search.</p>`;
    }

    async function loadQuizQuestions() {
        const { data } = await requestJson("/api/quiz", {}, () => clone(DEMO_QUIZ));
        state.allQuizQuestions = clone(data);
    }

    function resetQuiz() {
        if (state.allQuizQuestions && state.allQuizQuestions.length > 0) {
            state.quizQuestions = clone(state.allQuizQuestions)
                .sort(() => Math.random() - 0.5)
                .slice(0, 10);
        } else {
            state.quizQuestions = [];
        }

        state.quizIndex = 0;
        state.quizScore = 0;
        clearInterval(state.quizTimerId);
        state.quizTimerId = null;
        state.quizTimerValue = 30;

        document.getElementById("quiz-intro")?.classList.remove("hidden");
        document.getElementById("quiz-active")?.classList.add("hidden");
        document.getElementById("quiz-result")?.classList.add("hidden");
        
        const bestScore = localStorage.getItem("quizBestScore") || 0;
        const total = document.getElementById("quiz-total-q");
        if (total) total.textContent = `10 (Best Score: ${bestScore})`;

        const feedback = document.getElementById("quiz-feedback");
        if (feedback) {
            feedback.classList.add("hidden");
            feedback.innerHTML = "";
        }
        document.getElementById("quiz-next-btn")?.classList.add("hidden");
    }

    function startQuizTimer() {
        clearInterval(state.quizTimerId);
        state.quizTimerValue = 30;
        document.getElementById("quiz-timer").textContent = String(state.quizTimerValue);

        state.quizTimerId = window.setInterval(() => {
            state.quizTimerValue -= 1;
            document.getElementById("quiz-timer").textContent = String(state.quizTimerValue);
            if (state.quizTimerValue <= 0) {
                clearInterval(state.quizTimerId);
                handleQuizAnswer(null);
            }
        }, 1000);
    }

    function renderQuizQuestion() {
        const question = state.quizQuestions[state.quizIndex];
        if (!question) {
            finishQuiz();
            return;
        }

        document.getElementById("quiz-current-q").textContent = String(state.quizIndex + 1);
        document.getElementById("quiz-question-text").textContent = question.question;
        const optionsContainer = document.getElementById("quiz-options");
        const feedback = document.getElementById("quiz-feedback");
        const nextBtn = document.getElementById("quiz-next-btn");

        if (feedback) {
            feedback.classList.add("hidden");
            feedback.innerHTML = "";
        }
        nextBtn?.classList.add("hidden");

        optionsContainer.innerHTML = question.options
            .map(
                (option) => `
                <button class="btn btn-secondary quiz-option-btn" data-option="${option}" type="button">
                    ${option}
                </button>
            `
            )
            .join("");

        document.querySelectorAll(".quiz-option-btn").forEach((button) => {
            button.addEventListener("click", () => {
                handleQuizAnswer(button.getAttribute("data-option"));
            });
        });

        startQuizTimer();
    }

    function handleQuizAnswer(selectedOption) {
        const question = state.quizQuestions[state.quizIndex];
        if (!question) return;

        clearInterval(state.quizTimerId);
        state.quizTimerId = null;

        const isCorrect = selectedOption === question.answer;
        if (isCorrect) {
            state.quizScore += 1;
        }

        document.querySelectorAll(".quiz-option-btn").forEach((button) => {
            button.disabled = true;
            const option = button.getAttribute("data-option");
            if (option === question.answer) {
                button.classList.remove("btn-secondary");
                button.classList.add("btn-primary");
            } else if (option === selectedOption) {
                button.classList.remove("btn-secondary");
                button.classList.add("btn-danger");
            }
        });

        const feedback = document.getElementById("quiz-feedback");
        if (feedback) {
            feedback.classList.remove("hidden");
            feedback.innerHTML = `
                <strong>${isCorrect ? "Correct!" : "Not quite."}</strong>
                <p class="mt-2">${question.explanation || "Keep learning and try the next one."}</p>
            `;
        }

        document.getElementById("quiz-next-btn")?.classList.remove("hidden");
    }

    function finishQuiz() {
        clearInterval(state.quizTimerId);
        state.quizTimerId = null;
        document.getElementById("quiz-active")?.classList.add("hidden");
        document.getElementById("quiz-result")?.classList.remove("hidden");
        document.getElementById("quiz-final-score").textContent = String(state.quizScore);
        document.getElementById("quiz-max-score").textContent = String(state.quizQuestions.length);

        const currentBest = parseInt(localStorage.getItem("quizBestScore") || "0", 10);
        if (state.quizScore > currentBest) {
            localStorage.setItem("quizBestScore", String(state.quizScore));
            showToast(`New best score: ${state.quizScore}!`, "success");
        }
    }

    function renderBooths(booths) {
        const container = document.getElementById("booth-results-container");
        const mapContainer = document.getElementById("google-map-container");
        if (!container) return;

        container.classList.remove("hidden");
        if (mapContainer) {
            mapContainer.classList.remove("hidden");
            mapContainer.innerHTML = `
                <div class="p-4 text-center">
                    <i class="fa-solid fa-map-location-dot fa-2x blue"></i>
                    <p class="mt-2">Demo map preview for ${booths.length} booth${booths.length === 1 ? "" : "s"}.</p>
                </div>
            `;
        }

        container.innerHTML = booths.length
            ? booths
                  .map((booth) => `
                    <div class="card border-blue">
                        <h4>${booth.name}</h4>
                        <p class="text-secondary text-sm mt-2">${booth.address || ""}${booth.city ? `, ${booth.city}` : ""} ${booth.zipCode || ""}</p>
                        <p class="mt-2"><strong>Booth:</strong> ${booth.boothNumber || "Assigned at center"}</p>
                        <p><strong>Timing:</strong> ${booth.pollingTime || "7 AM - 6 PM"}</p>
                        <p><strong>Crowd:</strong> ${booth.crowdLevel || "Low"}</p>
                        <div class="d-flex mt-3" style="gap:10px;">
                            <button class="btn btn-primary w-100 booth-route-btn" data-name="${booth.name}" type="button">Route</button>
                            <button class="btn btn-secondary w-100 booth-save-btn" data-id="${booth.id || booth._id || booth.name}" type="button">Save</button>
                        </div>
                    </div>
                `)
                  .join("")
            : `<p class="text-secondary text-center" style="grid-column: span 2;">No booths matched your search.</p>`;

        document.querySelectorAll(".booth-route-btn").forEach((button) => {
            button.addEventListener("click", () => {
                const panel = document.getElementById("route-guidance-panel");
                if (!panel) return;
                panel.classList.remove("hidden");
                document.getElementById("route-destination-text").textContent = `Destination: ${button.getAttribute("data-name")}`;
                document.getElementById("route-time").textContent = "18 min";
                document.getElementById("route-distance").textContent = "4.2 km";
            });
        });

        document.querySelectorAll(".booth-save-btn").forEach((button) => {
            button.addEventListener("click", async () => {
                if (!requireAuth()) return;

                await requestJson(
                    "/api/booths/save",
                    {
                        method: "POST",
                        body: JSON.stringify({ boothId: button.getAttribute("data-id") })
                    },
                    () => ({ msg: "Booth saved successfully." })
                );
                showToast("Booth saved successfully.");
            });
        });
    }

    async function loadComplaintHistory() {
        const container = document.getElementById("complaint-history-container");
        if (!container) return;
        if (!requireAuth()) return;

        container.innerHTML = `<p class="text-secondary text-center">Loading history...</p>`;
        const { data } = await requestJson("/api/complaints/my", {}, () => clone(state.complaints));
        state.complaints = clone(data);
        container.innerHTML = state.complaints.length
            ? state.complaints
                  .map((complaint) => `
                    <div class="card mb-3 border-danger">
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <h4>${complaint.type}</h4>
                                <p class="text-secondary text-sm mt-2">${complaint.description}</p>
                                <p class="text-secondary text-sm">${new Date(complaint.date).toLocaleString()}</p>
                            </div>
                            <span class="bg-saffron text-white text-sm" style="padding: 5px 10px; border-radius: 20px;">${complaint.status || "Submitted"}</span>
                        </div>
                    </div>
                `)
                  .join("")
            : `<p class="text-secondary text-center">No complaints submitted yet.</p>`;
    }

    async function loadNotifications() {
        const container = document.getElementById("notifications-container");
        if (!container) return;
        if (!requireAuth()) return;

        container.innerHTML = `<p class="text-secondary text-center">Loading notifications...</p>`;
        const { data } = await requestJson("/api/notifications", {}, () => clone(DEMO_NOTIFICATIONS));
        container.innerHTML = data.length
            ? data
                  .map((item) => `
                    <div class="card mb-3 border-blue">
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <h4>${item.title}</h4>
                                <p class="text-secondary text-sm mt-2">${item.message}</p>
                            </div>
                            <span class="text-sm">${new Date(item.date).toLocaleDateString()}</span>
                        </div>
                    </div>
                `)
                  .join("")
            : `<p class="text-secondary text-center">No notifications right now.</p>`;
    }

    async function loadChecklist() {
        if (!requireAuth()) return;

        const { data } = await requestJson("/api/readiness/checklist", {}, () => ({
            items: clone(state.savedChecklistItems),
            completed: state.savedChecklistItems.length > 0
        }));
        state.savedChecklistItems = clone(data.items || []);
        applySavedChecklist(state.savedChecklistItems);
    }

    function handlePageActivation(pageId) {
        if (pageId === "timeline-page") {
            loadTimeline();
        }
        if (pageId === "chatbot-page") {
            loadChatHistory();
        }
        if (pageId === "candidate-page") {
            loadCandidates();
        }
        if (pageId === "reminders-page") {
            loadReminders();
        }
        if (pageId === "myth-facts-page") {
            loadMyths();
        }
        if (pageId === "notifications-page") {
            loadNotifications();
        }
        if (pageId === "help-center-page" || pageId === "complaint-page") {
            loadComplaintHistory();
        }
        if (pageId === "readiness-page") {
            loadChecklist();
        }
        if (pageId === "edit-profile-page") {
            updateNavbar();
        }
    }

    async function loadSession() {
        const { data } = await supabaseClient.auth.getSession();
        const session = data.session;

        if (!session) {
            state.authToken = null;
            state.currentUser = null;
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            updateNavbar();
            return;
        }

        state.authToken = session.access_token;
        state.currentUser = {
            id: session.user.id,
            fullName: session.user.user_metadata?.full_name || session.user.email,
            email: session.user.email
        };

        localStorage.setItem("token", state.authToken);
        localStorage.setItem("user", JSON.stringify(state.currentUser));
        updateNavbar();
    }

    async function loadPrivateData() {
        if (!state.authToken) return;

        await Promise.all([
            loadTimeline(),
            loadCandidates(),
            loadReminders(),
            loadMyths(),
            loadQuizQuestions(),
            loadComplaintHistory(),
            loadNotifications(),
            loadChecklist()
        ]);
    }

    openLoginBtn?.addEventListener("click", showLogin);
    navAuthBtn?.addEventListener("click", showLogin);
    openSignupBtn?.addEventListener("click", showSignup);

    switchToSignup?.addEventListener("click", (event) => {
        event.preventDefault();
        showSignup();
    });

    switchToLogin?.addEventListener("click", (event) => {
        event.preventDefault();
        showLogin();
    });

    window.addEventListener("click", (event) => {
        if (event.target === loginModal || event.target === signupModal) {
            closeModals();
        }

        if (profileDropdown && profileBtn && !profileBtn.contains(event.target) && !profileDropdown.contains(event.target)) {
            profileDropdown.classList.add("hidden");
        }
    });

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            const target = link.getAttribute("data-target");
            if (target) {
                navigateTo(target);
            }
        });
    });

    document.querySelectorAll("[data-dashboard-link]").forEach((card) => {
        card.addEventListener("click", (event) => {
            const clickedButton = event.target.closest("button");
            if (clickedButton) return;
            navigateTo(card.getAttribute("data-dashboard-link"));
        });
    });

    profileBtn?.addEventListener("click", () => {
        profileDropdown?.classList.toggle("hidden");
    });

    logoBtn?.addEventListener("click", () => {
        navigateTo(getDefaultPageId());
    });

    hamburgerBtn?.addEventListener("click", () => {
        navMenu?.classList.toggle("active");
    });

    window.addEventListener("popstate", (event) => {
        const targetPageId = normalizePageId(event.state?.pageId) || getPageIdFromHash() || getDefaultPageId();
        navigateTo(targetPageId, { fromHistory: true });
    });

    window.addEventListener("hashchange", () => {
        const targetPageId = getPageIdFromHash() || getDefaultPageId();
        navigateTo(targetPageId, { fromHistory: true });
    });

    const primaryLanguageSelect = document.getElementById("language-select");
    const accessibilityLanguageSelect = document.getElementById("accessibility-language-select");
    primaryLanguageSelect?.addEventListener("change", (event) => applyTranslations(event.target.value));
    accessibilityLanguageSelect?.addEventListener("change", (event) => applyTranslations(event.target.value));
    applyTranslations(state.currentLang);

    loginForm?.addEventListener("submit", async (event) => {
        event.preventDefault();

        const email = document.getElementById("login-email")?.value.trim();
        const password = document.getElementById("login-password")?.value.trim();
        if (!email || !password) {
            showToast("Please enter email and password.");
            return;
        }

        const submitButton = loginForm.querySelector("button");
        submitButton.disabled = true;
        submitButton.textContent = "Loading...";

        const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
        submitButton.disabled = false;
        submitButton.textContent = "Login";

        if (error) {
            showToast(error.message);
            return;
        }

        state.authToken = data.session.access_token;
        state.currentUser = {
            id: data.user.id,
            fullName: data.user.user_metadata?.full_name || data.user.email,
            email: data.user.email
        };

        localStorage.setItem("token", state.authToken);
        localStorage.setItem("user", JSON.stringify(state.currentUser));
        closeModals();
        updateNavbar();
        await loadPrivateData();
        navigateTo("dashboard-page");
    });

    signupForm?.addEventListener("submit", async (event) => {
        event.preventDefault();

        const fullName = document.getElementById("signup-fullName")?.value.trim();
        const email = document.getElementById("signup-email")?.value.trim();
        const password = document.getElementById("signup-password")?.value.trim();
        const confirmPassword = document.getElementById("signup-confirm-password")?.value.trim();

        if (!fullName || !email || !password || !confirmPassword) {
            showToast("Please fill all fields.");
            return;
        }
        if (password !== confirmPassword) {
            showToast("Passwords do not match.");
            return;
        }

        const submitButton = signupForm.querySelector("button");
        submitButton.disabled = true;
        submitButton.textContent = "Loading...";

        const { data, error } = await supabaseClient.auth.signUp({
            email,
            password,
            options: {
                data: {
                    full_name: fullName
                }
            }
        });

        submitButton.disabled = false;
        submitButton.textContent = "Sign Up";

        if (error) {
            showToast(error.message);
            return;
        }

        if (data.session) {
            state.authToken = data.session.access_token;
            state.currentUser = {
                id: data.user.id,
                fullName,
                email
            };
            localStorage.setItem("token", state.authToken);
            localStorage.setItem("user", JSON.stringify(state.currentUser));
            closeModals();
            updateNavbar();
            await loadPrivateData();
            navigateTo("dashboard-page");
            return;
        }

        closeModals();
        showToast("Signup successful. Please log in to continue.");
        showLogin();
    });

    logoutBtn?.addEventListener("click", async () => {
        await supabaseClient.auth.signOut();
        state.authToken = null;
        state.currentUser = null;
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        updateNavbar();
        navigateTo("landing-page");
    });

    supabaseClient.auth.onAuthStateChange(async (event, session) => {
        if (event === "SIGNED_OUT") {
            state.authToken = null;
            state.currentUser = null;
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            updateNavbar();
            navigateTo("landing-page", { replace: true });
            return;
        }

        if (event === "SIGNED_IN" && session) {
            state.authToken = session.access_token;
            state.currentUser = {
                id: session.user.id,
                fullName: session.user.user_metadata?.full_name || session.user.email,
                email: session.user.email
            };
            localStorage.setItem("token", state.authToken);
            localStorage.setItem("user", JSON.stringify(state.currentUser));
            updateNavbar();
        }
    });

    const chatInput = document.getElementById("chat-input");
    const sendBtn = document.querySelector(".send-btn");
    const chatHistory = document.getElementById("chat-history");

    function addMessage(text, isUser = false) {
        if (!chatHistory) return;
        const div = document.createElement("div");
        div.className = `message ${isUser ? "user-message ms-auto" : "ai-message"}`;
        div.innerHTML = `<div class="msg-bubble">${text}</div>`;
        chatHistory.appendChild(div);
        chatHistory.scrollTop = chatHistory.scrollHeight;
    }

    function resetChatHistory() {
        if (chatHistory) {
            chatHistory.innerHTML = "";
        }
    }

    async function loadChatHistory() {
        if (!chatHistory) return;
        if (!requireAuth()) return;

        const { data } = await requestJson("/api/chat", {}, () => []);
        resetChatHistory();

        if (!Array.isArray(data) || data.length === 0) {
            addMessage("Ask any election question and I’ll help with registration, booth lookup, documents, and voting basics.");
            return;
        }

        data.forEach((item) => {
            addMessage(item.message, Boolean(item.isUser));
        });
    }

    async function sendChatMessage(message, options = {}) {
        if (!requireAuth()) return null;
        if (!message.trim()) return null;

        if (!options.silentUser) {
            addMessage(message, true);
        }

        const { data } = await requestJson(
            "/api/chat",
            {
                method: "POST",
                body: JSON.stringify({ message })
            },
            () => ({ reply: getChatFallbackReply(message) })
        );

        if (!options.silentReply) {
            addMessage(data.reply || "Demo reply unavailable.");
        }
        return data.reply;
    }

    const voiceInputBtn = document.getElementById("voice-input-btn");
    if (voiceInputBtn && (window.SpeechRecognition || window.webkitSpeechRecognition)) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;

        voiceInputBtn.addEventListener("click", () => {
            recognition.lang = state.currentLang === "hi" ? "hi-IN" : "en-IN";
            showToast("Listening...", "info");
            voiceInputBtn.innerHTML = '<i class="fa-solid fa-microphone-lines fa-fade"></i>';
            recognition.start();
        });

        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            if (chatInput) chatInput.value = transcript;
            showToast("Voice captured.", "success");
            sendBtn?.click();
        };

        recognition.onerror = () => {
            showToast("Voice recognition failed. Please try again.", "error");
        };

        recognition.onend = () => {
            voiceInputBtn.innerHTML = '<i class="fa-solid fa-microphone"></i>';
        };
    } else if (voiceInputBtn) {
        voiceInputBtn.addEventListener("click", () => showToast("Voice input is not supported in your browser.", "error"));
    }

    sendBtn?.addEventListener("click", async () => {
        const message = chatInput?.value.trim() || "";
        if (!message) return;
        chatInput.value = "";
        await sendChatMessage(message);
    });

    chatInput?.addEventListener("keypress", async (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            sendBtn?.click();
        }
    });

    const fakeNewsButton = document.querySelector("#fakenews-page .btn-primary");
    const fakeNewsInput = document.querySelector("#fakenews-page textarea");
    fakeNewsButton?.addEventListener("click", async () => {
        const claim = fakeNewsInput?.value.trim() || "";
        if (!claim) return;

        fakeNewsButton.disabled = true;
        fakeNewsButton.textContent = "Verifying...";

        const { data } = await requestJson(
            "/api/fake-news",
            {
                method: "POST",
                body: JSON.stringify({ claim })
            },
            () => getFakeNewsFallback(claim)
        );
        renderFakeNewsResult(data);

        fakeNewsButton.disabled = false;
        fakeNewsButton.innerHTML = `<i class="fa-solid fa-magnifying-glass"></i> Verify Claim`;
    });

    const eligibilityForm = document.getElementById("eligibility-form");
    eligibilityForm?.addEventListener("submit", async (event) => {
        event.preventDefault();

        const dob = document.getElementById("dob-input")?.value;
        const citizen = eligibilityForm.querySelector("select")?.value;
        const resultCard = document.getElementById("eligibility-result");
        if (!resultCard) return;

        const { data } = await requestJson(
            "/api/eligibility",
            {
                method: "POST",
                body: JSON.stringify({ dob, citizen })
            },
            () => computeEligibility(dob, citizen)
        );

        resultCard.classList.remove("hidden");
        resultCard.innerHTML = `
            <h3>${data.eligible ? "Eligible to Vote" : "Not Eligible"}</h3>
            <p>${data.message}</p>
        `;
    });

    async function submitComplaint(payload) {
        if (!requireAuth()) return;

        const { data } = await requestJson(
            "/api/complaints",
            {
                method: "POST",
                body: JSON.stringify(payload)
            },
            () => ({
                msg: "Complaint registered successfully.",
                complaint: {
                    id: `complaint-${Date.now()}`,
                    type: payload.type,
                    description: payload.description,
                    status: "Submitted",
                    date: new Date().toISOString()
                }
            })
        );

        if (data.complaint) {
            state.complaints.unshift(data.complaint);
        }
        await loadComplaintHistory();
        showToast(data.msg || "Complaint submitted successfully.");
    }

    const complaintForm = document.querySelector("#complaint-page form");
    complaintForm?.addEventListener("submit", async (event) => {
        event.preventDefault();
        const type = complaintForm.querySelector("select")?.value;
        const description = complaintForm.querySelector("textarea")?.value.trim();
        if (!type || !description) {
            showToast("Please complete the complaint form.");
            return;
        }

        await submitComplaint({ type, description });
        complaintForm.reset();
    });

    const complaintCenterForm = document.getElementById("complaint-center-form");
    complaintCenterForm?.addEventListener("submit", async (event) => {
        event.preventDefault();

        const fullName = document.getElementById("comp-name")?.value.trim();
        const email = document.getElementById("comp-email")?.value.trim();
        const type = document.getElementById("comp-category")?.value;
        const description = document.getElementById("comp-desc")?.value.trim();
        const location = document.getElementById("comp-location")?.value.trim();
        const proofUrl = document.getElementById("comp-proof")?.value.trim();

        if (!fullName || !email || !type || !description) {
            showToast("Please complete the complaint form.");
            return;
        }

        await submitComplaint({ fullName, email, type, description, location, proofUrl });
        complaintCenterForm.reset();
    });

    const reminderForm = document.getElementById("reminder-form");
    reminderForm?.addEventListener("submit", async (event) => {
        event.preventDefault();
        if (!requireAuth()) return;

        const title = document.getElementById("reminder-title")?.value.trim();
        const date = document.getElementById("reminder-date")?.value;
        const type = document.getElementById("reminder-type")?.value;
        if (!title || !date) {
            showToast("Please add a title and date.");
            return;
        }

        const { data } = await requestJson(
            "/api/reminders",
            {
                method: "POST",
                body: JSON.stringify({ title, date, type })
            },
            () => ({
                id: `reminder-${Date.now()}`,
                title,
                date,
                type
            })
        );

        state.reminders.push(data);
        reminderForm.reset();
        await loadReminders();
        showToast("Reminder saved successfully.");
    });

    const boothSearchForm = document.getElementById("booth-search-form");
    boothSearchForm?.addEventListener("submit", async (event) => {
        event.preventDefault();

        const query = document.getElementById("booth-search-input")?.value.trim() || "";
        const { data } = await requestJson(
            `/api/booths/search?query=${encodeURIComponent(query)}`,
            {},
            () => {
                const normalized = query.toLowerCase();
                return clone(DEMO_BOOTHS).filter((booth) =>
                    [booth.name, booth.address, booth.city, booth.zipCode].some((value) =>
                        String(value).toLowerCase().includes(normalized)
                    )
                );
            }
        );
        renderBooths(data);
    });

    document.getElementById("find-nearby-btn")?.addEventListener("click", async () => {
        const { data } = await requestJson("/api/booths/nearby", {}, () => clone(DEMO_BOOTHS));
        renderBooths(data);
    });

    const readinessForm = document.getElementById("readiness-form");
    readinessForm?.addEventListener("submit", async (event) => {
        event.preventDefault();
        if (!requireAuth()) return;

        const formData = {
            nationality: document.getElementById("read-nationality")?.value,
            age: document.getElementById("read-age")?.value,
            registered: document.getElementById("read-registered")?.value,
            state: document.getElementById("read-state")?.value.trim(),
            firstTime: document.getElementById("read-first-time")?.value
        };

        const { data } = await requestJson(
            "/api/readiness",
            {
                method: "POST",
                body: JSON.stringify(formData)
            },
            () => computeReadiness(formData)
        );

        document.getElementById("readiness-result-container")?.classList.remove("hidden");
        document.getElementById("readiness-score-text").textContent = data.score;
        document.getElementById("readiness-score-desc").textContent =
            data.score === "Ready to Vote"
                ? "You have met the main readiness checks."
                : "Complete the steps below before election day.";

        const missingContainer = document.getElementById("missing-steps-container");
        const missingList = document.getElementById("missing-steps-list");
        if ((data.missing || []).length > 0) {
            missingContainer?.classList.remove("hidden");
            missingList.innerHTML = data.missing.map((item) => `<li>${item}</li>`).join("");
        } else {
            missingContainer?.classList.add("hidden");
            missingList.innerHTML = "";
        }
    });

    document.getElementById("save-checklist-btn")?.addEventListener("click", async (event) => {
        event.preventDefault();
        if (!requireAuth()) return;

        const items = getSelectedChecklistItems();
        const completed = items.length > 0;
        await requestJson(
            "/api/readiness/checklist",
            {
                method: "POST",
                body: JSON.stringify({ items, completed })
            },
            () => ({ msg: "Checklist saved.", items, completed })
        );
        state.savedChecklistItems = clone(items);
        showToast("Checklist saved.");
    });

    document.getElementById("print-checklist-btn")?.addEventListener("click", (event) => {
        event.preventDefault();
        window.print();
    });

    document.getElementById("myth-search")?.addEventListener("input", (event) => {
        filterMyths(event.target.value);
    });

    document.getElementById("start-quiz-btn")?.addEventListener("click", async () => {
        if (state.quizQuestions.length === 0) {
            await loadQuizQuestions();
        }
        resetQuiz();
        document.getElementById("quiz-intro")?.classList.add("hidden");
        document.getElementById("quiz-active")?.classList.remove("hidden");
        renderQuizQuestion();
    });

    document.getElementById("quiz-next-btn")?.addEventListener("click", () => {
        state.quizIndex += 1;
        if (state.quizIndex >= state.quizQuestions.length) {
            finishQuiz();
            return;
        }
        renderQuizQuestion();
    });

    document.getElementById("quiz-retry-btn")?.addEventListener("click", () => {
        resetQuiz();
    });

    document.getElementById("edit-profile-form")?.addEventListener("submit", async (event) => {
        event.preventDefault();
        if (!requireAuth()) return;

        const fullName = document.getElementById("edit-name")?.value.trim();
        const email = document.getElementById("edit-email")?.value.trim();
        const password = document.getElementById("edit-password")?.value.trim();

        if (!fullName || !email) {
            showToast("Please complete the profile form.");
            return;
        }

        const updatePayload = {
            email,
            data: {
                full_name: fullName
            }
        };
        if (password) {
            updatePayload.password = password;
        }

        const { error } = await supabaseClient.auth.updateUser(updatePayload);
        if (error) {
            state.currentUser = {
                ...state.currentUser,
                fullName,
                email
            };
            localStorage.setItem("user", JSON.stringify(state.currentUser));
            updateNavbar();
            showToast("Profile saved locally in demo mode.");
            navigateTo("profile-page");
            return;
        }

        state.currentUser = {
            ...state.currentUser,
            fullName,
            email
        };
        localStorage.setItem("user", JSON.stringify(state.currentUser));
        updateNavbar();
        document.getElementById("edit-password").value = "";
        showToast("Profile updated successfully.");
        navigateTo("profile-page");
    });

    document.getElementById("ai-help-btn")?.addEventListener("click", async (event) => {
        event.preventDefault();
        const input = document.getElementById("ai-help-input");
        const responseBox = document.getElementById("ai-help-response");
        const message = input?.value.trim() || "";
        if (!message) return;

        const reply = await sendChatMessage(message, { silentUser: true, silentReply: true });
        if (responseBox) {
            responseBox.classList.remove("hidden");
            responseBox.textContent = reply || getChatFallbackReply(message);
        }
    });

    let isSpeaking = false;
    function readPageInstructions(pageElement = document.querySelector(".page.active")) {
        if (!window.speechSynthesis) {
            showToast("Voice guide is not supported in your browser.", "error");
            return;
        }
        if (isSpeaking) {
            window.speechSynthesis.cancel();
            isSpeaking = false;
            updateGlobalListenBtn();
            return;
        }
        if (!pageElement) return;

        const headings = Array.from(pageElement.querySelectorAll("h1, h2, h3, p")).map(el => el.innerText).join(". ");
        if (!headings.trim()) {
            showToast("No content to read on this page.", "warning");
            return;
        }
        
        const utterance = new SpeechSynthesisUtterance(headings.slice(0, 1500));
        utterance.lang = state.currentLang === "hi" ? "hi-IN" : "en-IN";
        utterance.onend = () => { isSpeaking = false; updateGlobalListenBtn(); };
        isSpeaking = true;
        window.speechSynthesis.speak(utterance);
        updateGlobalListenBtn();
    }

    const globalListenBtn = document.createElement("button");
    globalListenBtn.className = "btn btn-primary shadow-lg";
    globalListenBtn.style.cssText = "position:fixed;bottom:80px;right:20px;z-index:9998;width:50px;height:50px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:20px;";
    globalListenBtn.title = "Listen to page instructions";
    document.body.appendChild(globalListenBtn);

    function updateGlobalListenBtn() {
        globalListenBtn.innerHTML = isSpeaking ? '<i class="fa-solid fa-volume-xmark"></i>' : '<i class="fa-solid fa-volume-high"></i>';
    }
    updateGlobalListenBtn();

    globalListenBtn.addEventListener("click", () => readPageInstructions());

    document.getElementById("voice-guide-btn")?.addEventListener("click", () => readPageInstructions());

    document.getElementById("text-size-toggle")?.addEventListener("change", (event) => {
        document.body.classList.toggle("large-text-mode", event.target.checked);
    });

    document.getElementById("simple-ui-toggle")?.addEventListener("change", (event) => {
        document.body.classList.toggle("simple-ui-mode", event.target.checked);
    });

    const themeToggle = document.getElementById("theme-toggle");
    const pageThemeToggle = document.getElementById("page-theme-toggle");
    function toggleTheme(forceDark = null) {
        const isDark = forceDark !== null ? forceDark : document.body.getAttribute("data-theme") !== "dark";
        if (isDark) {
            document.body.setAttribute("data-theme", "dark");
        } else {
            document.body.removeAttribute("data-theme");
        }
        if (pageThemeToggle) {
            pageThemeToggle.checked = isDark;
        }
    }

    themeToggle?.addEventListener("click", () => {
        toggleTheme();
    });

    pageThemeToggle?.addEventListener("change", (event) => {
        toggleTheme(event.target.checked);
    });

    await loadSession();
    if (state.authToken) {
        await loadPrivateData();
    } else {
        await loadTimeline();
        await loadCandidates();
        await loadMyths();
        await loadQuizQuestions();
    }

    resetChatHistory();
    resetQuiz();
    navigateTo(getPageIdFromHash() || getDefaultPageId(), { replace: true });
    updateNavbar();
});
