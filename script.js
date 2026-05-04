const symptomRules = {
    fever: { title: "Fever", output: "Possible: Viral infection, seasonal flu, or general infection", severity: "Medium risk", remedies: ["Drink enough water and rest.", "Use a cold compress if temperature feels high.", "Visit a doctor if fever is very high, lasts more than 3 days, or comes with breathing difficulty."] },
    cold: { title: "Cold", output: "Possible: Common cold or seasonal allergy", severity: "Low risk", remedies: ["Drink warm fluids and take rest.", "Steam inhalation may help with congestion.", "Consult a doctor if symptoms worsen or breathing becomes difficult."] },
    headache: { title: "Headache", output: "Possible: Migraine, stress, dehydration, or lack of sleep", severity: "Medium risk", remedies: ["Drink water and rest in a quiet room.", "Avoid long screen time and bright light for some time.", "Seek urgent help if headache is sudden, severe, or after an injury."] },
    cough: { title: "Cough", output: "Possible: Throat infection, allergy, cold, or irritation", severity: "Low risk", remedies: ["Drink warm water and avoid dust or smoke.", "Try salt-water gargle if suitable.", "Consult a doctor if cough lasts more than 2 weeks or includes blood."] },
    stomach: { title: "Stomach Pain", output: "Possible: Indigestion, acidity, food-related issue, or infection", severity: "Medium risk", remedies: ["Drink water and eat light food for some time.", "Avoid spicy or oily food until you feel better.", "Consult a doctor if pain is severe, repeated, or with vomiting/blood."] },
    vomiting: { title: "Vomiting", output: "Possible: Food poisoning, stomach infection, acidity, or dehydration", severity: "Seek doctor", remedies: ["Take small sips of water or oral rehydration solution.", "Avoid heavy food until vomiting reduces.", "Seek medical help if vomiting continues or signs of dehydration appear."] },
    weakness: { title: "Weakness", output: "Possible: Dehydration, low nutrition, poor sleep, or infection", severity: "Medium risk", remedies: ["Rest and drink enough fluids.", "Eat a balanced meal if you can tolerate food.", "Consult a doctor if weakness is sudden, severe, or long-lasting."] },
    allergy: { title: "Allergy", output: "Possible: Dust allergy, food allergy, skin allergy, or seasonal allergy", severity: "Medium risk", remedies: ["Avoid the suspected trigger such as dust, certain food, or strong smell.", "Wash exposed skin and keep the area clean.", "Get urgent care if there is swelling of face/lips or breathing difficulty."] },
    throat: { title: "Sore Throat", output: "Possible: Throat infection, cold, dryness, or irritation", severity: "Low risk", remedies: ["Drink warm fluids.", "Salt-water gargle may help if suitable.", "Consult a doctor if pain is severe, fever is high, or swallowing is difficult."] },
    dizziness: { title: "Dizziness", output: "Possible: Dehydration, low blood pressure, low sugar, or weakness", severity: "Seek doctor", remedies: ["Sit or lie down immediately to avoid falling.", "Drink water and avoid sudden movement.", "Seek medical help if dizziness is repeated, severe, or with chest pain/fainting."] },
    chest: { title: "Chest Pain", output: "Possible serious condition requiring urgent medical attention", severity: "Emergency", remedies: ["Do not ignore chest pain.", "Call emergency services or go to the nearest hospital immediately.", "Avoid self-medication for severe chest pain."] },
    breathing: { title: "Breathing Difficulty", output: "Possible emergency breathing or heart/lung-related condition", severity: "Emergency", remedies: ["Sit upright and stay calm.", "Call emergency services immediately.", "Go to the nearest hospital if breathing is difficult."] }
};

const symptomAliases = {
    fever: ["fever", "temperature", "high temperature", "flu", "viral fever", "body heat"],
    cold: ["cold", "runny nose", "blocked nose", "sneezing", "congestion", "seasonal cold"],
    headache: ["headache", "head pain", "migraine", "forehead pain", "pain in head"],
    cough: ["cough", "dry cough", "wet cough", "coughing"],
    stomach: ["stomach", "stomach pain", "abdominal pain", "belly pain", "gas", "acidity", "indigestion"],
    vomiting: ["vomiting", "vomit", "nausea", "throwing up", "food poisoning"],
    weakness: ["weakness", "tired", "fatigue", "low energy", "body weakness", "exhausted"],
    allergy: ["allergy", "rash", "itching", "hives", "dust allergy", "skin allergy", "food allergy"],
    throat: ["throat", "sore throat", "throat pain", "pain swallowing", "dry throat"],
    dizziness: ["dizziness", "dizzy", "lightheaded", "fainting", "vertigo", "giddiness"],
    chest: ["chest", "chest pain", "heart pain", "tight chest", "chest pressure"],
    breathing: ["breathing", "breathing difficulty", "shortness of breath", "breathless", "wheezing", "cannot breathe"]
};

const resources = [
    { topic: "fever", title: "Fever self-care basics", type: "Fever", description: "Basic guidance for rest, hydration, temperature tracking, and warning signs.", search: "fever self care health education", videoId: "8Z0lPlFFW7k", keywords: ["fever"] },
    { topic: "cold", title: "Cold self-care basics", type: "Cold", description: "Basic awareness for rest, warm fluids, congestion care, and when symptoms need attention.", search: "cold self care health education", videoId: "oQWmagZmogQ", keywords: ["cold"] },
    { topic: "headache", title: "Headache self-care basics", type: "Headache", description: "Simple guidance for hydration, rest, screen breaks, and warning signs.", search: "headache self care health education", videoId: "Z8BiMzJrrvs", keywords: ["headache"] },
    { topic: "cough", title: "Cough self-care basics", type: "Cough", description: "Basic cough care, warm fluids, throat comfort, and when to seek help.", search: "cough self care health education", videoId: "OckRIxGlHZM", keywords: ["cough"] },
    { topic: "stomach", title: "Stomach pain self-care basics", type: "Stomach Pain", description: "Light food, hydration, rest, and warning signs for stomach pain.", search: "stomach pain self care health education", videoId: "VHnMu8oMLdw", keywords: ["stomach", "stomach pain"] },
    { topic: "vomiting", title: "Vomiting self-care basics", type: "Vomiting", description: "Small sips of fluid, dehydration awareness, and when vomiting needs medical care.", search: "vomiting self care health education", videoId: "RkB7OTTcpxA", keywords: ["vomiting"] },
    { topic: "weakness", title: "Weakness self-care basics", type: "Weakness", description: "Rest, fluids, food intake, and warning signs for sudden or repeated weakness.", search: "weakness self care health education", videoId: "VEhU7gIFU6g", keywords: ["weakness"] },
    { topic: "allergy", title: "Allergy self-care basics", type: "Allergy", description: "Trigger avoidance, basic skin care, and urgent warning signs for allergy.", search: "allergy self care health education", videoId: "BotaV6LhgnI", keywords: ["allergy"] },
    { topic: "throat", title: "Sore throat self-care basics", type: "Sore Throat", description: "Warm fluids, throat comfort, and when sore throat needs medical advice.", search: "sore throat self care health education", videoId: "7lLDbDj6oj0", keywords: ["throat", "sore throat"] },
    { topic: "dizziness", title: "Dizziness self-care basics", type: "Dizziness", description: "Sit down safely, drink fluids, avoid sudden movement, and watch warning signs.", search: "dizziness self care health education", videoId: "ZFcFE2O5pWg", keywords: ["dizziness"] },
    { topic: "chest", title: "Chest pain warning signs", type: "Chest Pain", description: "Chest pain can be urgent. Use this only for awareness and seek help quickly.", search: "chest pain emergency health education", videoId: "6Z3N2aEDSLU", keywords: ["chest", "chest pain"] },
    { topic: "breathing", title: "Breathing difficulty warning signs", type: "Breathing Difficulty", description: "Breathing difficulty can be urgent. Learn warning signs and seek emergency care.", search: "breathing difficulty emergency health education", videoId: "T-6P45NZnZo", keywords: ["breathing", "breathing difficulty"] }
];

function mapsSearchUrl(query) { return `https://www.google.com/maps/search/${encodeURIComponent(query)}`; }
function mapsEmbedUrl(query) { return `https://maps.google.com/maps?q=${encodeURIComponent(query)}&output=embed`; }
function updateMapFrame(query) { const frame = document.querySelector("[data-map-frame]"); if (frame) frame.src = mapsEmbedUrl(query); }
function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[char]));
}
function renderMapResult(target, title, message, url, label = "Map search ready") {
    if (!target) return;
    target.innerHTML = `<div class="result-card map-result-card reveal"><span class="kicker">${label}</span><h3>${title}</h3><p>${message}</p><a class="btn" href="${url}" target="_blank" rel="noopener">Open in Google Maps</a></div>`;
    requestAnimationFrame(setupRevealTransitions);
}

function findNearestHospital(options = {}) {
    const { resultTarget = null, openMaps = true, scrollToMap = false, button = null } = options;
    const fallbackQuery = "hospitals near me";
    const fallbackUrl = mapsSearchUrl(fallbackQuery);
    const originalButtonText = button?.textContent;

    if (button) {
        button.disabled = true;
        button.textContent = "Locating...";
    }

    if (resultTarget) {
        resultTarget.innerHTML = `<div class="result-card map-result-card location-loading"><span class="kicker">Location request</span><h3>Allow location access</h3><p>Your browser will ask permission. After you allow it, hospitals near your location will appear on the map.</p></div>`;
    }

    const finish = () => {
        if (button) {
            button.disabled = false;
            button.textContent = originalButtonText || "Use my location";
        }
    };

    const showFallback = (message) => {
        updateMapFrame(fallbackQuery);
        renderMapResult(resultTarget, "Hospitals near me", message, fallbackUrl, "Fallback search");
        if (openMaps) window.open(fallbackUrl, "_blank");
        finish();
    };

    if (!navigator.geolocation) {
        showFallback("Your browser does not support location access, so the map is showing a general nearby hospital search.");
        return;
    }

    navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        const query = `hospitals near ${latitude},${longitude}`;
        const url = `https://www.google.com/maps/search/hospitals/@${latitude},${longitude},14z`;
        updateMapFrame(query);
        renderMapResult(resultTarget, "Hospitals near your location", "Permission received. The map preview now shows hospitals around your current location.", url);
        if (scrollToMap) document.querySelector(".map-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
        if (openMaps) window.open(url, "_blank");
        finish();
    }, () => {
        showFallback("Location permission was not allowed or could not be detected. The map is showing a general nearby hospital search instead.");
    }, { enableHighAccuracy: true, timeout: 10000, maximumAge: 300000 });
}
function analyzeSymptoms(value) {
    const query = normalizeSearchTerm(value);
    const matchKey = Object.keys(symptomAliases).find((key) => symptomAliases[key].some((alias) => {
        const normalizedAlias = normalizeSearchTerm(alias);
        return query === normalizedAlias || query.includes(normalizedAlias) || normalizedAlias.includes(query);
    }));
    return matchKey ? symptomRules[matchKey] : null;
}
function severityClass(severity) { return severity.toLowerCase().replace(/\s+/g, "-"); }
function renderSymptomResult(target, result, query) {
    if (!target) return;
    if (!query.trim()) { target.innerHTML = ""; return; }
    const safetyNotice = `<div class="medical-alert" role="note"><strong>Medical safety notice</strong><p>This result is educational guidance only. It cannot diagnose illness or replace a qualified doctor. If symptoms are severe, unusual, repeated, or getting worse, seek medical care.</p></div>`;
    if (!result) {
        target.innerHTML = `<div class="result-card result-card-enhanced result-empty"><div class="result-topline"><span class="severity medium-risk">No match</span><span class="result-meta">Try another symptom</span></div><h3>No direct match found</h3><p class="result-summary">Try fever, cold, headache, cough, stomach pain, vomiting, weakness, allergy, sore throat, dizziness, chest pain, or breathing difficulty. You can also try words like flu, migraine, nausea, throat pain, or shortness of breath.</p>${safetyNotice}<div class="result-actions"><a class="btn secondary" href="self-care.html">Open self-care resources</a><button type="button" onclick="findNearestHospital()">Find nearby hospitals</button></div></div>`;
        return;
    }
    const isEmergency = result.severity === "Emergency";
    const emergencyNote = isEmergency ? `<div class="emergency-warning"><strong>Emergency priority</strong><p>This symptom may need urgent medical attention. Contact emergency services or go to the nearest hospital immediately.</p><a class="btn danger" href="contact.html">View emergency contacts</a></div>` : "";
    target.innerHTML = `<div class="result-card result-card-enhanced ${isEmergency ? "emergency-result" : ""}"><div class="result-topline"><span class="severity ${severityClass(result.severity)}">${result.severity}</span><span class="result-meta">Guidance only</span></div><div class="result-heading"><span class="result-label">Symptom match</span><h3>${result.title}</h3></div><p class="result-summary"><strong>${result.output}</strong></p>${emergencyNote}<div class="remedy-box"><h4>Basic remedies</h4><ul class="remedy-list">${result.remedies.map((item) => `<li><span></span>${item}</li>`).join("")}</ul></div>${safetyNotice}<div class="result-actions"><button type="button" onclick="findNearestHospital()">Find nearby hospitals</button><a class="btn secondary" href="self-care.html">Open self-care resources</a></div></div>`;
}
function setupSymptomChecker() {
    const form = document.querySelector("[data-symptom-form]"); const input = document.querySelector("[data-symptom-input]"); const output = document.querySelector("[data-symptom-output]");
    if (!form || !input || !output) return;
    form.addEventListener("submit", (event) => { event.preventDefault(); renderSymptomResult(output, analyzeSymptoms(input.value), input.value); });
    const search = new URLSearchParams(window.location.search).get("search"); if (search) { input.value = search; renderSymptomResult(output, analyzeSymptoms(search), search); }
}
function normalizeSearchTerm(value) {
    return value.toLowerCase().replace(/[^a-z0-9\s-]/g, " ").replace(/\s+/g, " ").trim();
}

function youtubeSearchEmbed(query) {
    return `https://www.youtube.com/embed?listType=search&list=${encodeURIComponent(query)}`;
}

function youtubeSearchUrl(query) {
    return `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
}

function youtubeVideoUrl(videoId) {
    return `https://www.youtube.com/watch?v=${encodeURIComponent(videoId)}`;
}

function youtubeVideoThumbnail(videoId) {
    return `https://img.youtube.com/vi/${encodeURIComponent(videoId)}/hqdefault.jpg`;
}

function renderVideoPreview(item, query) {
    if (!item.videoId) {
        return `<iframe src="${youtubeSearchEmbed(query)}" title="${item.title}" allowfullscreen loading="lazy"></iframe>`;
    }

    return `<a class="youtube-preview" href="${youtubeVideoUrl(item.videoId)}" target="_blank" rel="noopener" aria-label="Open ${item.title} on YouTube"><img src="${youtubeVideoThumbnail(item.videoId)}" alt="${item.title} video thumbnail" loading="lazy"><span class="youtube-play">Play on YouTube</span></a>`;
}

function resourceMatches(item, term) {
    if (!term) return true;
    const allowed = [item.topic, item.type.toLowerCase(), ...(item.keywords || [])].map(normalizeSearchTerm);
    return allowed.some((keyword) => keyword === term || keyword.includes(term) || term.includes(keyword));
}

function setupResourceSearch() {
    const input = document.querySelector("[data-resource-input]");
    const output = document.querySelector("[data-resource-output]");
    const status = document.querySelector("[data-resource-status]");
    const buttons = document.querySelectorAll("[data-resource-topic]");
    if (!input || !output) return;

    const render = (topic) => {
        const term = normalizeSearchTerm(topic);
        const list = resources.filter((item) => resourceMatches(item, term));

        if (term && !list.length) {
            output.innerHTML = `<article class="resource-empty-state reveal"><span class="kicker">No resources found</span><h3>No related symptom or disease resource found.</h3><p>Try only the listed symptoms: fever, cold, headache, cough, stomach pain, vomiting, weakness, allergy, sore throat, dizziness, chest pain, or breathing difficulty.</p></article>`;
            requestAnimationFrame(setupRevealTransitions);
            return;
        }

        if (status) status.textContent = term ? `Showing resources for ${list[0]?.type || topic}.` : "Showing all listed symptom resources.";
        output.innerHTML = list.map((item, index) => {
            const query = term ? `${term} health education doctor advice` : item.search;
            const videoUrl = item.videoId ? youtubeVideoUrl(item.videoId) : youtubeSearchUrl(query);
            const linkText = item.videoId ? "Watch on YouTube" : "Watch more on YouTube";
            const heading = term ? `Videos related to ${escapeHTML(term)}` : item.title;
            return `<article class="resource-card selfcare-resource-card reveal" style="--reveal-delay: ${Math.min(index, 3) * 90}ms"><div class="resource-media"><span>${item.type}</span><div class="video-embed">${renderVideoPreview(item, query)}</div></div><div class="resource-card-body"><h3>${heading}</h3><p>${item.description}</p><a class="resource-link" href="${videoUrl}" target="_blank" rel="noopener">${linkText}</a></div></article>`;
        }).join("");
        requestAnimationFrame(setupRevealTransitions);
    };

    input.addEventListener("input", () => {
        buttons.forEach((button) => button.classList.remove("active"));
        render(input.value);
    });
    buttons.forEach((button) => button.addEventListener("click", () => {
        input.value = button.dataset.resourceTopic;
        buttons.forEach((item) => item.classList.toggle("active", item === button));
        render(input.value);
    }));
    render("");
}
function setupHospitalSearch() {
    const form = document.querySelector("[data-hospital-form]"); const input = document.querySelector("[data-hospital-input]"); const results = document.querySelector("[data-hospital-results]"); const locationButton = document.querySelector("[data-location-button]"); const careType = document.querySelector("[data-care-type]"); const openNow = document.querySelector("[data-open-now]");
    if (locationButton) locationButton.addEventListener("click", () => findNearestHospital({ resultTarget: results, openMaps: false, scrollToMap: true, button: locationButton })); if (!form || !input || !results) return;
    form.addEventListener("submit", (event) => { event.preventDefault(); const location = input.value.trim() || "near me"; const type = careType?.value || "hospitals clinics"; const availability = openNow?.checked ? " open now" : ""; const query = `${type}${availability} near ${location}`; const url = mapsSearchUrl(query); updateMapFrame(query); renderMapResult(results, location, `The map preview is updated for <strong>${type}${availability || ""}</strong>.`, url); });
}
function setupHomeSearch() { const form = document.querySelector("[data-home-search]"); const input = document.querySelector("[data-home-search-input]"); if (!form || !input) return; form.addEventListener("submit", (event) => { event.preventDefault(); const query = encodeURIComponent(input.value.trim()); if (query) window.location.href = `find-care.html?search=${query}`; }); }
const THEME_STORAGE_KEY = "healthconnect-theme";

function readThemeMode() {
    try {
        return localStorage.getItem(THEME_STORAGE_KEY);
    } catch (error) {
        return null;
    }
}

function saveThemeMode(mode) {
    try {
        localStorage.setItem(THEME_STORAGE_KEY, mode);
    } catch (error) {
        return;
    }
}

function applyThemeMode(mode) {
    const isDark = mode === "dark";
    document.body.classList.toggle("dark-mode", isDark);
    document.querySelectorAll("[data-theme-toggle]").forEach((toggle) => {
        toggle.textContent = isDark ? "\u263E" : "\u2600";
        toggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
        toggle.setAttribute("title", isDark ? "Switch to light mode" : "Switch to dark mode");
    });
}

function setupThemeToggle() {
    applyThemeMode(readThemeMode() === "dark" ? "dark" : "light");
    document.querySelectorAll("[data-theme-toggle]").forEach((toggle) => {
        toggle.addEventListener("click", () => {
            const nextMode = document.body.classList.contains("dark-mode") ? "light" : "dark";
            applyThemeMode(nextMode);
            saveThemeMode(nextMode);
        });
    });
}
function setupDemoForms() {
    document.querySelectorAll("[data-demo-form]").forEach((form) => {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const response = form.querySelector("[data-form-response]");
            if (!form.checkValidity()) {
                form.reportValidity();
                if (response) {
                    response.classList.remove("success");
                    response.classList.add("error");
                    response.textContent = "Please complete the highlighted fields with valid details.";
                }
                return;
            }
            if (response) {
                response.classList.remove("error");
                response.classList.add("success");
                response.textContent = "Request saved for preview. Connect this form to a secure backend before real use.";
            }
        });
    });
}

function setupAccessibleEnhancements() {
    document.querySelectorAll(".emergency-float").forEach((link) => {
        link.setAttribute("aria-label", "Open emergency contacts");
        link.setAttribute("title", "Emergency contacts");
    });
}
function setupRevealTransitions() {
    const motionTargets = [
        ".site-header",
        ".nav-shell > *",
        ".hero-shell > *",
        ".section-header",
        ".page-hero-inner",
        ".section > *",
        ".page-grid > *",
        ".page-section > *",
        ".grid-2 > *",
        ".grid-3 > *",
        ".features-grid > *",
        ".cards-grid > *",
        ".map-frame",
        ".map-copy",
        ".care-workspace > *",
        ".selfcare-hub > *",
        ".resource-grid > *",
        ".form-stack > *",
        ".contact-card",
        ".panel",
        ".footer-inner > *",
        ".notice-line"
    ];

    document.querySelectorAll(motionTargets.join(",")).forEach((item, index) => {
        if (!item.classList.contains("reveal")) item.classList.add("reveal");
        if (!item.style.getPropertyValue("--reveal-delay")) {
            item.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 80}ms`);
        }
    });

    const items = document.querySelectorAll(".reveal:not(.is-visible)");
    if (!items.length) return;
    if (!("IntersectionObserver" in window)) {
        items.forEach((item) => item.classList.add("is-visible"));
        return;
    }
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.14, rootMargin: "0px 0px -48px 0px" });
    items.forEach((item) => observer.observe(item));
}

document.addEventListener("DOMContentLoaded", () => { setupHomeSearch(); setupSymptomChecker(); setupResourceSearch(); setupHospitalSearch(); setupThemeToggle(); setupDemoForms(); setupAccessibleEnhancements(); setupRevealTransitions(); });



