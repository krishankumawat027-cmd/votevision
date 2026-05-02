document.addEventListener("DOMContentLoaded", () => {
    // 1. Dashboard Quick Stats & Progress Tracker
    function renderDashboardEnhancements() {
        const dashboardPage = document.getElementById("dashboard-page");
        if (!dashboardPage) return;

        // Progress Tracker
        let progressContainer = document.getElementById("progress-tracker");
        if (!progressContainer) {
            const grid = dashboardPage.querySelector(".grid");
            if (grid) {
                progressContainer = document.createElement("div");
                progressContainer.id = "progress-tracker";
                progressContainer.className = "card border-blue mb-4";
                progressContainer.style.gridColumn = "1 / -1";
                grid.prepend(progressContainer);
            }
        }
        if (progressContainer) {
            const checklistItems = document.querySelectorAll('.doc-check:checked').length;
            const totalItems = document.querySelectorAll('.doc-check').length || 5;
            const progress = Math.min(100, Math.round((checklistItems / totalItems) * 100));
            progressContainer.innerHTML = `
                <h4>Voter Readiness Progress</h4>
                <div style="background: #e0e0e0; border-radius: 10px; height: 20px; width: 100%; margin-top: 10px; overflow: hidden;">
                    <div style="background: #2196f3; height: 100%; width: ${progress}%; transition: width 0.5s;"></div>
                </div>
                <p class="text-sm text-secondary mt-2">${progress}% Complete - Keep checking off your Readiness Checklist!</p>
            `;
        }

        // Quick Stats
        let statsContainer = document.getElementById("quick-stats");
        if (!statsContainer) {
            const grid = dashboardPage.querySelector(".grid");
            if (grid) {
                statsContainer = document.createElement("div");
                statsContainer.id = "quick-stats";
                statsContainer.className = "grid grid-cols-2 md:grid-cols-4 gap-4 mb-4";
                statsContainer.style.gridColumn = "1 / -1";
                if (progressContainer && progressContainer.nextSibling) {
                    grid.insertBefore(statsContainer, progressContainer.nextSibling);
                } else {
                    grid.prepend(statsContainer);
                }
            }
        }
        if (statsContainer) {
            const bestScore = localStorage.getItem("quizBestScore") || 0;
            const chatCount = document.querySelectorAll('#chat-history .message.user-message').length || 0;
            const complaintCount = document.querySelectorAll('#complaint-history-container .card').length || 0;
            
            statsContainer.innerHTML = `
                <div class="card text-center border-saffron"><h2 style="margin:0">${chatCount}</h2><span class="text-sm text-secondary">AI Queries</span></div>
                <div class="card text-center border-green"><h2 style="margin:0">${bestScore}</h2><span class="text-sm text-secondary">Quiz Score</span></div>
                <div class="card text-center border-danger"><h2 style="margin:0">${complaintCount}</h2><span class="text-sm text-secondary">Complaints</span></div>
                <div class="card text-center border-blue"><h2 style="margin:0"><i class="fa-solid fa-check"></i></h2><span class="text-sm text-secondary">Ready</span></div>
            `;
        }
    }

    // Floating AI Help
    function createFloatingAI() {
        if (document.getElementById("floating-ai-btn")) return;
        const aiBtn = document.createElement("button");
        aiBtn.id = "floating-ai-btn";
        aiBtn.className = "btn btn-primary shadow-lg";
        aiBtn.style.cssText = "position:fixed;bottom:20px;right:20px;z-index:9998;width:60px;height:60px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:24px;";
        aiBtn.innerHTML = '<i class="fa-solid fa-robot"></i>';
        aiBtn.addEventListener("click", () => {
            if (window.navigateTo) window.navigateTo("chatbot-page");
        });
        document.body.appendChild(aiBtn);
        
        // Move volume button up so they don't overlap
        const listenBtn = document.querySelector("button[title='Listen to page instructions']");
        if (listenBtn) listenBtn.style.bottom = "90px";
    }

    // Quick Search Bar
    function enhanceNavbar() {
        const navRight = document.querySelector(".nav-right");
        if (!navRight || document.getElementById("quick-search-input")) return;
        
        const searchDiv = document.createElement("div");
        searchDiv.className = "d-flex align-items-center ms-3";
        searchDiv.innerHTML = `
            <div style="position:relative">
                <i class="fa-solid fa-magnifying-glass" style="position:absolute;left:10px;top:50%;transform:translateY(-50%);color:#888;"></i>
                <input type="text" id="quick-search-input" placeholder="Search Booths, FAQs..." class="form-control" style="padding-left:35px;border-radius:20px;width:200px;font-size:14px;">
            </div>
        `;
        navRight.insertBefore(searchDiv, navRight.firstChild);

        const searchInput = document.getElementById("quick-search-input");
        searchInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                const q = searchInput.value.toLowerCase();
                if (q.includes("booth")) window.navigateTo("booth-page");
                else if (q.includes("myth") || q.includes("fake")) window.navigateTo("fakenews-page");
                else if (q.includes("quiz")) window.navigateTo("quiz-page");
                else window.navigateTo("chatbot-page");
            }
        });
    }

    // Add spinner to fetch calls by overriding window.fetch temporarily or handling click events
    function attachSpinnersToForms() {
        document.querySelectorAll("form").forEach(form => {
            form.addEventListener("submit", () => {
                const btn = form.querySelector("button[type='submit']");
                if (btn && !btn.querySelector(".fa-spinner")) {
                    const originalHtml = btn.innerHTML;
                    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Processing...';
                    setTimeout(() => btn.innerHTML = originalHtml, 1500); // Reset after typical request
                }
            });
        });
    }

    // Run enhancements on hash change (page navigation)
    window.addEventListener("hashchange", () => {
        setTimeout(renderDashboardEnhancements, 300);
    });

    // Initial setup
    setTimeout(() => {
        renderDashboardEnhancements();
        createFloatingAI();
        enhanceNavbar();
        attachSpinnersToForms();
    }, 1000);
});
