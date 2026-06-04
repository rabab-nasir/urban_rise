/* UrbanRise Realty Pune - Premium Real Estate SPA Engine */

// --- GLOBAL APPLICATION STATE ---
const appState = {
  properties: [
    {
      id: 1,
      name: "Luxury 3 BHK Apartment",
      type: "Apartments",
      location: "Baner, Pune",
      locationShort: "Baner",
      priceNum: 12500000, // ₹1.25 Cr
      price: "₹1.25 Cr",
      bedrooms: 3,
      bathrooms: 3,
      area: "1,850 sq ft",
      description: "Sleek contemporary high-rise apartment in Baner. Features premium designer marble flooring, modular kitchen fittings, automated HVAC units, and private balcony views overlooking the Baner hills.",
      image: "assets/penthouse_nyc.png",
      featured: true,
      coords: { x: 35, y: 40 },
      features: ["MahaRERA Approved", "Smart Automation", "24/7 Security", "Private Balcony", "Clubhouse Access", "Electric Car Charger"]
    },
    {
      id: 2,
      name: "Premium Villa",
      type: "Luxury Villas",
      location: "Wakad, Pune",
      locationShort: "Wakad",
      priceNum: 28000000, // ₹2.8 Cr
      price: "₹2.8 Cr",
      bedrooms: 5,
      bathrooms: 6,
      area: "4,500 sq ft",
      description: "Superb independent 5 BHK luxury villa in Wakad. Features private landscaped gardens, glass facade elevation, swimming pool deck, customized bar cabinet, and full security perimeter patrols.",
      image: "assets/villa_palm.png",
      featured: true,
      coords: { x: 25, y: 30 },
      features: ["Private Garden", "Swimming Pool", "DG Power Backup", "Solar Water Heating", "Home Theatre Room", "Gated Security"]
    },
    {
      id: 3,
      name: "Commercial Office Space",
      type: "Commercial Spaces",
      location: "Hinjawadi, Pune",
      locationShort: "Hinjawadi",
      priceNum: 9500000, // ₹95 Lakh
      price: "₹95 Lakh",
      bedrooms: 0,
      bathrooms: 2,
      area: "2,200 sq ft",
      description: "Premium ready-to-move-in corporate office layout in Hinjawadi IT Hub Phase 1. Features 24 workstation capacity, high-speed fiber internet routing, dual conference halls, and central air-con units.",
      image: "assets/beachfront_miami.png",
      featured: true,
      coords: { x: 18, y: 22 },
      features: ["High-speed Elevators", "Central AC", "IT Hub Zone", "Server Room", "Car Parking Slips", "Rooftop Café Access"]
    },
    {
      id: 4,
      name: "Modern 2 BHK Apartment",
      type: "Apartments",
      location: "Kharadi, Pune",
      locationShort: "Kharadi",
      priceNum: 7800000, // ₹78 Lakh
      price: "₹78 Lakh",
      bedrooms: 2,
      bathrooms: 2,
      area: "1,150 sq ft",
      description: "Sleek urban 2 BHK flat near World Trade Center, Kharadi. Features double balcony openings, premium Vitrified tiles, high-speed lift, gas pipeline supply, and modular bathroom specifications.",
      image: "assets/villa_hero.png",
      featured: true,
      coords: { x: 80, y: 45 },
      features: ["WTC Proximity", "Double Balcony", "Gas Pipeline", "Kids Play Zone", "Piped Water Supply", "Low Maintenance"]
    },
    {
      id: 5,
      name: "Executive Penthouse",
      type: "Investment Properties",
      location: "Viman Nagar, Pune",
      locationShort: "Viman Nagar",
      priceNum: 19000000, // ₹1.9 Cr
      price: "₹1.9 Cr",
      bedrooms: 4,
      bathrooms: 4,
      area: "3,200 sq ft",
      description: "Breathtaking top-floor luxury penthouse showing panoramic Viman Nagar views. Fully customized false ceiling details, smart security entrance panel, private elevator key, and double-height lobby entry.",
      image: "assets/beachfront_miami.png",
      featured: false,
      coords: { x: 74, y: 35 },
      features: ["Private Elevator Access", "Double Height Ceiling", "Rooftop Deck", "Video Door Phone", "Modular Pantry"]
    },
    {
      id: 6,
      name: "Residential Development Plot",
      type: "Residential Plots",
      location: "Kothrud, Pune",
      locationShort: "Kothrud",
      priceNum: 32000000, // ₹3.2 Cr
      price: "₹3.2 Cr",
      bedrooms: 0,
      bathrooms: 0,
      area: "5,000 sq ft",
      description: "Clear title residential N.A. plot in premium Kothrud location. Collector sanctioned layout, completely demarcated boundary fencing, broad tar access roads, and ready electricity meters connected.",
      image: "assets/chalet_zermatt.png",
      featured: false,
      coords: { x: 42, y: 70 },
      features: ["N.A. Collector Sanctioned", "Clear Property Title", "Water Line Setup", "Concrete Road Access", "Premium Residential Zone"]
    }
  ],
  agents: [
    {
      id: 1,
      name: "Neha Deshmukh",
      title: "Director of Residential Sales",
      speciality: "Luxury Apartments & Wakad Villas",
      phone: "+91 98765 43210",
      email: "neha.deshmukh@urbanriserealty.in",
      image: "assets/agent_elena.png",
      stats: { sales: "₹45 Cr+", listings: 12 }
    },
    {
      id: 2,
      name: "Rohan Joshi",
      title: "Managing Partner & Consultant",
      speciality: "Commercial Spaces & NA Plots",
      phone: "+91 98765 43211",
      email: "rohan.joshi@urbanriserealty.in",
      image: "assets/agent_marcus.png",
      stats: { sales: "₹85 Cr+", listings: 8 }
    }
  ],
  currentUser: null, // null, or { email: '...', name: '...', role: 'user' | 'admin' }
  favorites: [1, 2], // Pre-populate with two properties
  compareList: [], // Property IDs for comparison (max 3)
  visits: [
    { id: 101, propertyId: 1, propertyName: "Luxury 3 BHK Apartment", date: "2026-06-15", time: "14:00 - 15:30", status: "Approved" },
    { id: 102, propertyId: 2, propertyName: "Premium Villa", date: "2026-06-22", time: "11:00 - 12:30", status: "Pending Approval" }
  ],
  inquiries: [
    { id: 201, name: "Vikram Malhotra", email: "vikram@malhotragroup.in", phone: "+91 90123 45678", type: "General inquiry", property: "Commercial Office Space", message: "Looking for ready commercial layout in Hinjawadi with good parking specs.", date: "2026-06-03", status: "Pending" },
    { id: 202, name: "Ananya Deshpande", email: "ananya.d@techcorp.com", phone: "+91 98321 09876", type: "Schedule visit", property: "Luxury 3 BHK Apartment", message: "Interested in visiting the high-rise on Baner Road this weekend.", date: "2026-06-02", status: "In Contact" }
  ],
  newsletters: ["investor.pune@capfunds.in"]
};

// --- CURRENCY FORMATTER HELPERS ---
function formatIndianPrice(priceNum) {
  if (priceNum >= 10000000) {
    return `₹${(priceNum / 10000000).toFixed(2).replace(/\.00$/, "")} Cr`;
  } else if (priceNum >= 100000) {
    return `₹${(priceNum / 100000).toFixed(0)} Lakh`;
  }
  return `₹${priceNum.toLocaleString("en-IN")}`;
}

// --- INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
  initApp();
});

function initApp() {
  // Setup router hash change handler
  window.addEventListener("hashchange", handleRouting);
  
  // Header scroll appearance changer
  window.addEventListener("scroll", () => {
    const header = document.getElementById("main-header");
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Handle mobile nav toggle
  const mobileToggle = document.getElementById("btn-mobile-toggle");
  const navLinks = document.getElementById("nav-links");
  if (mobileToggle) {
    mobileToggle.addEventListener("click", () => {
      navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
      if (navLinks.style.display === "flex") {
        navLinks.style.flexDirection = "column";
        navLinks.style.position = "absolute";
        navLinks.style.top = "var(--header-height)";
        navLinks.style.left = "0";
        navLinks.style.width = "100%";
        navLinks.style.background = "var(--bg-primary)";
        navLinks.style.padding = "2rem";
        navLinks.style.borderBottom = "1px solid var(--border-color)";
      }
    });
  }

  // Set up click events on auth triggers and modals
  document.getElementById("btn-login-trigger").addEventListener("click", () => openAuthModal());
  document.getElementById("btn-close-auth-modal").addEventListener("click", closeAuthModal);
  document.getElementById("auth-form").addEventListener("submit", handleAuthSubmit);
  document.getElementById("btn-demo-user").addEventListener("click", () => autofillDemoUser("user"));
  document.getElementById("btn-demo-admin").addEventListener("click", () => autofillDemoUser("admin"));
  
  // Register vs Login toggle inside auth modal
  document.getElementById("link-switch-to-register").addEventListener("click", toggleAuthRegisterLogin);

  // Comparison triggers
  document.getElementById("btn-close-compare-drawer").addEventListener("click", () => {
    document.getElementById("compare-drawer").classList.remove("active");
  });
  document.getElementById("btn-clear-compare").addEventListener("click", clearCompareList);
  document.getElementById("btn-trigger-comparison").addEventListener("click", openCompareMatrixModal);
  document.getElementById("btn-close-compare-matrix").addEventListener("click", closeCompareMatrixModal);

  // Newsletter form submission
  document.getElementById("newsletter-form").addEventListener("submit", handleNewsletterSubmit);

  // Run router immediately on load
  handleRouting();
}

// --- ROUTER & ROUTING CONTROLLER ---
function handleRouting() {
  let hash = window.location.hash || "#/home";
  
  // Update header active links
  const links = document.querySelectorAll(".nav-link");
  links.forEach(link => {
    const route = link.getAttribute("data-route");
    if (hash.startsWith(`#/${route}`)) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Parse path & params
  const parts = hash.split("?");
  const routePath = parts[0];
  const queryParams = parseQueryParams(parts[1] || "");

  const appView = document.getElementById("app-view");
  appView.classList.remove("animate-fade");
  void appView.offsetWidth; 
  appView.classList.add("animate-fade");

  // Router matching
  if (routePath === "#/home") {
    renderHomeView();
  } else if (routePath === "#/properties") {
    renderPropertiesView(queryParams);
  } else if (routePath === "#/locations") {
    renderLocationsView(queryParams);
  } else if (routePath.startsWith("#/property/")) {
    const id = parseInt(routePath.replace("#/property/", ""));
    renderPropertyDetailsView(id);
  } else if (routePath === "#/about") {
    renderAboutView();
  } else if (routePath === "#/contact") {
    renderContactView();
  } else if (routePath === "#/dashboard") {
    if (!checkAuthRole("user")) return;
    renderUserDashboardView();
  } else if (routePath === "#/admin") {
    if (!checkAuthRole("admin")) return;
    renderAdminDashboardView();
  } else {
    window.location.hash = "#/home";
  }

  // Recalculate icon nodes from Lucide CDN
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
  
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function parseQueryParams(queryString) {
  const params = {};
  if (!queryString) return params;
  const pairs = queryString.split("&");
  for (const pair of pairs) {
    const [key, value] = pair.split("=");
    params[decodeURIComponent(key)] = decodeURIComponent(value || "");
  }
  return params;
}

// --- AUTH STATE CONTROLLERS ---
function checkAuthRole(requiredRole) {
  if (!appState.currentUser) {
    showToast("Authorization Required. Please sign in to access panel.", "error");
    openAuthModal();
    window.location.hash = "#/home";
    return false;
  }
  if (appState.currentUser.role !== requiredRole) {
    showToast(`Access Denied. Required role: ${requiredRole}`, "error");
    window.location.hash = "#/home";
    return false;
  }
  return true;
}

function openAuthModal() {
  document.getElementById("auth-modal").classList.add("active");
}

function closeAuthModal() {
  document.getElementById("auth-modal").classList.remove("active");
}

function toggleAuthRegisterLogin(e) {
  e.preventDefault();
  const title = document.getElementById("auth-modal-title");
  const switchText = document.getElementById("modal-switch-text");
  
  if (title.textContent === "Sign In") {
    title.textContent = "Create Account";
    switchText.innerHTML = `Already have an account? <a href="#" id="link-switch-to-register">Sign In</a>`;
  } else {
    title.textContent = "Sign In";
    switchText.innerHTML = `Don't have an account? <a href="#" id="link-switch-to-register">Create Account</a>`;
  }
  
  document.getElementById("link-switch-to-register").addEventListener("click", toggleAuthRegisterLogin);
}

function handleAuthSubmit(e) {
  e.preventDefault();
  const email = document.getElementById("auth-email").value.trim();
  
  let role = "user";
  let name = "Pune Buyer Member";
  
  if (email.toLowerCase().includes("admin")) {
    role = "admin";
    name = "RERA Registrar Manager";
  }

  appState.currentUser = { email, name, role };
  closeAuthModal();
  updateHeaderAuthSection();
  
  showToast(`Welcome back, ${name}! Session initialized.`, "success");
  
  if (role === "admin") {
    window.location.hash = "#/admin";
  } else {
    window.location.hash = "#/dashboard";
  }
}

function autofillDemoUser(role) {
  if (role === "admin") {
    document.getElementById("auth-email").value = "admin@urbanrise.in";
    document.getElementById("auth-password").value = "adminpass123";
  } else {
    document.getElementById("auth-email").value = "buyer@urbanrise.in";
    document.getElementById("auth-password").value = "buyerpass123";
  }
  const form = document.getElementById("auth-form");
  const submitEvent = new Event("submit", { cancelable: true });
  form.dispatchEvent(submitEvent);
}

function logoutSession() {
  appState.currentUser = null;
  updateHeaderAuthSection();
  showToast("Session terminated successfully.", "info");
  window.location.hash = "#/home";
}

function updateHeaderAuthSection() {
  const container = document.getElementById("header-auth-section");
  if (!container) return;

  if (appState.currentUser) {
    const isUser = appState.currentUser.role === "user";
    const initials = appState.currentUser.name.split(" ").map(n => n[0]).join("");
    
    container.innerHTML = `
      <div style="display: flex; align-items: center; gap: 1rem;">
        <div class="user-badge" onclick="window.location.hash = '${isUser ? "#/dashboard" : "#/admin"}'">
          <div class="user-avatar flex-center">${initials}</div>
          <span style="font-size: 0.85rem; font-weight:600;">${appState.currentUser.name}</span>
        </div>
        <button class="btn-icon" id="btn-logout" title="Log Out">
          <i data-lucide="log-out" style="width: 16px; height: 16px;"></i>
        </button>
      </div>
    `;
    
    document.getElementById("btn-logout").addEventListener("click", logoutSession);
  } else {
    container.innerHTML = `
      <button class="btn btn-outline btn-sm" id="btn-login-trigger" style="padding: 0.5rem 1.5rem; font-size: 0.85rem;">
        <i data-lucide="user" style="width: 16px; height: 16px;"></i> Consultation Access
      </button>
    `;
    document.getElementById("btn-login-trigger").addEventListener("click", () => openAuthModal());
  }
  
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
}

// --- GLOBAL FAVORITES SYSTEM ---
function toggleFavorite(id) {
  const idx = appState.favorites.indexOf(id);
  if (idx > -1) {
    appState.favorites.splice(idx, 1);
    showToast("Property removed from Favorites.", "info");
  } else {
    appState.favorites.push(id);
    showToast("Property saved to Favorites.", "success");
  }
  handleRouting();
}

// --- GLOBAL COMPARISON BOARD SYSTEM ---
function toggleCompare(id) {
  const idx = appState.compareList.indexOf(id);
  if (idx > -1) {
    appState.compareList.splice(idx, 1);
    showToast("Removed from comparison drawer.", "info");
  } else {
    if (appState.compareList.length >= 3) {
      showToast("Comparison limit reached (max 3 properties).", "error");
      return;
    }
    appState.compareList.push(id);
    showToast("Added to comparison drawer.", "success");
  }
  updateCompareDrawer();
}

function updateCompareDrawer() {
  const drawer = document.getElementById("compare-drawer");
  const countSpan = document.getElementById("compare-count");
  const triggerBtn = document.getElementById("btn-trigger-comparison");
  
  const count = appState.compareList.length;
  countSpan.textContent = `(${count}/3)`;
  
  if (count > 0) {
    drawer.classList.add("active");
  } else {
    drawer.classList.remove("active");
  }

  triggerBtn.disabled = count < 2;

  const slotsContainer = document.getElementById("compare-slots-container");
  slotsContainer.innerHTML = "";

  for (let i = 0; i < 3; i++) {
    if (i < count) {
      const propId = appState.compareList[i];
      const prop = appState.properties.find(p => p.id === propId);
      slotsContainer.innerHTML += `
        <div class="compare-slot occupied">
          <img src="${prop.image}" class="slot-img">
          <div class="slot-info">
            <span class="slot-title">${prop.name}</span>
            <span class="slot-price">${prop.price}</span>
          </div>
          <button class="btn-remove-slot" onclick="toggleCompare(${prop.id})">
            <i data-lucide="x" style="width: 14px; height: 14px;"></i>
          </button>
        </div>
      `;
    } else {
      slotsContainer.innerHTML += `
        <div class="compare-slot">
          <span>+ Add property to compare</span>
        </div>
      `;
    }
  }

  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
}

function clearCompareList() {
  appState.compareList = [];
  updateCompareDrawer();
}

function openCompareMatrixModal() {
  const modal = document.getElementById("compare-modal");
  const wrapper = document.getElementById("compare-matrix-wrapper");
  
  const items = appState.compareList.map(id => appState.properties.find(p => p.id === id));
  
  let headerHtml = `<th>Specification</th>`;
  let imageHtml = `<td></td>`;
  let nameHtml = `<td>Title</td>`;
  let priceHtml = `<td>Market Price</td>`;
  let typeHtml = `<td>Property Type</td>`;
  let locationHtml = `<td>Location</td>`;
  let bedsHtml = `<td>Bedrooms</td>`;
  let bathsHtml = `<td>Bathrooms</td>`;
  let areaHtml = `<td>Square Footage</td>`;
  let ReraHtml = `<td>MahaRERA Status</td>`;
  let backupHtml = `<td>Power Backup</td>`;
  let securityHtml = `<td>24/7 Security</td>`;

  items.forEach(item => {
    headerHtml += `<th>${item.name}</th>`;
    imageHtml += `<td><img src="${item.image}" class="compare-matrix-img"></td>`;
    nameHtml += `<td style="font-weight:600; color:var(--text-primary);">${item.name}</td>`;
    priceHtml += `<td style="color:var(--accent); font-weight:600;">${item.price}</td>`;
    typeHtml += `<td>${item.type}</td>`;
    locationHtml += `<td>${item.location}</td>`;
    bedsHtml += `<td>${item.bedrooms > 0 ? item.bedrooms + " BHK" : "Commercial Office"}</td>`;
    bathsHtml += `<td>${item.bathrooms} Bathrooms</td>`;
    areaHtml += `<td>${item.area}</td>`;
    
    // Feature checks
    const hasRera = item.features.some(f => f.toLowerCase().includes("rera"));
    const hasBackup = item.features.some(f => f.toLowerCase().includes("backup") || f.toLowerCase().includes("solar"));
    const hasSecurity = item.features.some(f => f.toLowerCase().includes("security") || f.toLowerCase().includes("patrol"));

    ReraHtml += hasRera ? `<td class="feature-yes"><i data-lucide="check"></i> Approved</td>` : `<td class="feature-yes" style="color:var(--accent);"><i data-lucide="info"></i> Standard N.A.</td>`;
    backupHtml += hasBackup ? `<td class="feature-yes"><i data-lucide="check"></i> Available</td>` : `<td class="feature-no"><i data-lucide="x"></i> Standard Grid</td>`;
    securityHtml += hasSecurity ? `<td class="feature-yes"><i data-lucide="check"></i> Covered</td>` : `<td class="feature-no"><i data-lucide="x"></i> Basic Guards</td>`;
  });

  wrapper.innerHTML = `
    <table class="compare-matrix-table">
      <thead>
        <tr>${headerHtml}</tr>
      </thead>
      <tbody>
        <tr>${imageHtml}</tr>
        <tr>${nameHtml}</tr>
        <tr>${priceHtml}</tr>
        <tr>${typeHtml}</tr>
        <tr>${locationHtml}</tr>
        <tr>${bedsHtml}</tr>
        <tr>${bathsHtml}</tr>
        <tr>${areaHtml}</tr>
        <tr>${ReraHtml}</tr>
        <tr>${backupHtml}</tr>
        <tr>${securityHtml}</tr>
      </tbody>
    </table>
  `;

  modal.classList.add("active");
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
}

function closeCompareMatrixModal() {
  document.getElementById("compare-modal").classList.remove("active");
}

// --- TOAST NOTIFICATION HELPERS ---
function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  
  let iconName = "check-circle";
  if (type === "error") iconName = "alert-triangle";
  if (type === "info") iconName = "info";

  toast.innerHTML = `
    <i data-lucide="${iconName}"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }

  setTimeout(() => {
    toast.style.animation = "slideUp 0.3s cubic-bezier(0.25, 1, 0.5, 1) reverse forwards";
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

function handleNewsletterSubmit(e) {
  e.preventDefault();
  const input = e.target.querySelector("input");
  const email = input.value.trim();
  
  if (appState.newsletters.includes(email)) {
    showToast("Email address already registered.", "info");
  } else {
    appState.newsletters.push(email);
    showToast("Success! Subscribed to Pune real estate investment desk.", "success");
  }
  input.value = "";
}

// --- VIEW RENDERERS ---

// 1. HOME VIEW
function renderHomeView() {
  const container = document.getElementById("app-view");
  
  const heroHtml = `
    <section class="hero animate-fade" style="background-image: url('assets/villa_hero.png');">
      <div class="hero-overlay"></div>
      <div class="container">
        <div class="hero-content">
          <span class="hero-tagline animate-slide-up">Finding Your Perfect Space</span>
          <h1 class="hero-title animate-slide-up" style="animation-delay: 0.1s;">Find Your Dream <span>Property in Pune</span></h1>
          <p class="hero-desc animate-slide-up" style="animation-delay: 0.2s;">
            Explore premium apartments, villas, commercial spaces, and investment properties across Pune's most desirable locations.
          </p>
          <div class="hero-buttons animate-slide-up" style="animation-delay: 0.3s;">
            <a href="#/properties" class="btn btn-primary">View Properties</a>
            <a href="#/contact" class="btn btn-outline">Schedule Consultation</a>
          </div>
        </div>
      </div>
    </section>
  `;

  const searchHtml = `
    <div class="container" style="margin-bottom: 5rem;">
      <div class="quick-search glassmorphism-gold animate-slide-up" style="animation-delay: 0.4s;">
        <div class="search-tabs">
          <button class="search-tab active">Buy Premium</button>
          <button class="search-tab" onclick="showToast('Rental desk services available for members only.', 'info')">Rent Out</button>
        </div>
        <form class="search-fields" id="home-search-form">
          <div class="search-field">
            <label>Pune Locality</label>
            <select id="search-location">
              <option value="">All Localities</option>
              <option value="Baner">Baner</option>
              <option value="Wakad">Wakad</option>
              <option value="Hinjawadi">Hinjawadi</option>
              <option value="Kharadi">Kharadi</option>
              <option value="Kothrud">Kothrud</option>
              <option value="Viman Nagar">Viman Nagar</option>
            </select>
          </div>
          <div class="search-field">
            <label>Typology</label>
            <select id="search-type">
              <option value="">All Categories</option>
              <option value="Apartments">Apartments</option>
              <option value="Luxury Villas">Luxury Villas</option>
              <option value="Commercial Spaces">Commercial Spaces</option>
              <option value="Residential Plots">Residential Plots</option>
            </select>
          </div>
          <div class="search-field">
            <label>Min BHK Layout</label>
            <select id="search-beds">
              <option value="">Any Layout</option>
              <option value="2">2 BHK or larger</option>
              <option value="3">3 BHK or larger</option>
              <option value="5">5 BHK Villa</option>
            </select>
          </div>
          <div class="search-field">
            <label>Max Budget</label>
            <select id="search-price">
              <option value="">Any Budget</option>
              <option value="10000000">Under ₹1.0 Cr</option>
              <option value="20000000">Under ₹2.0 Cr</option>
              <option value="30000000">Under ₹3.0 Cr</option>
            </select>
          </div>
          <button type="submit" class="btn btn-primary" style="padding: 0.9rem 2.8rem;">
            <i data-lucide="search"></i> Find Space
          </button>
        </form>
      </div>
    </div>
  `;

  // Featured Properties (Filter for featured)
  const featured = appState.properties.filter(p => p.featured);
  let featuredHtml = `
    <section class="section-padding bg-secondary">
      <div class="container">
        <span class="section-subtitle">Handpicked Selections</span>
        <h2 class="section-title">Featured <span>Properties</span></h2>
        
        <div class="properties-grid" style="margin-top: 3.5rem;">
  `;

  featured.forEach(prop => {
    const isFav = appState.favorites.includes(prop.id);
    const isComp = appState.compareList.includes(prop.id);
    featuredHtml += `
      <div class="property-card glassmorphism">
        <div class="card-img-wrapper">
          <img src="${prop.image}" alt="${prop.name}">
          <div class="card-badges">
            <span class="badge-tag">${prop.type}</span>
            <div class="card-actions">
              <button class="btn-card-action ${isFav ? "active" : ""}" onclick="toggleFavorite(${prop.id})" title="Favorite">
                <i data-lucide="heart" style="fill: ${isFav ? "var(--accent)" : "none"};"></i>
              </button>
              <button class="btn-card-action ${isComp ? "active" : ""}" onclick="toggleCompare(${prop.id})" title="Compare">
                <i data-lucide="git-compare"></i>
              </button>
            </div>
          </div>
          <span class="card-price-tag">${prop.price}</span>
        </div>
        <div class="card-content">
          <div class="card-location"><i data-lucide="map-pin" style="width:12px; height:12px;"></i> ${prop.location}</div>
          <h3 class="card-title"><a href="#/property/${prop.id}">${prop.name}</a></h3>
          <p class="card-desc">${prop.description}</p>
          <div class="card-specs">
            <div class="spec-item"><i data-lucide="bed-double"></i> <span>${prop.bedrooms > 0 ? prop.bedrooms + " BHK" : "Office"}</span></div>
            <div class="spec-item"><i data-lucide="bath"></i> <span>${prop.bathrooms} Baths</span></div>
            <div class="spec-item"><i data-lucide="maximize-2"></i> <span>${prop.area}</span></div>
          </div>
        </div>
      </div>
    `;
  });

  featuredHtml += `
        </div>
        <div class="flex-center" style="margin-top: 4rem;">
          <a href="#/properties" class="btn btn-outline">Browse All Listings</a>
        </div>
      </div>
    </section>
  `;

  // Pune Categories
  const categoriesHtml = `
    <section class="section-padding">
      <div class="container">
        <span class="section-subtitle">Real Estate Classifications</span>
        <h2 class="section-title">Property <span>Categories</span></h2>
        
        <div class="categories-grid" style="margin-top: 3.5rem;">
          <div class="category-card" onclick="window.location.hash = '#/properties?type=Apartments'">
            <img src="assets/penthouse_nyc.png" alt="Apartments">
            <div class="category-overlay">
              <h3 class="cat-title">Premium Apartments</h3>
              <span class="cat-count">Verified Flats</span>
            </div>
          </div>
          
          <div class="category-card" onclick="window.location.hash = '#/properties?type=Luxury Villas'">
            <img src="assets/villa_palm.png" alt="Villas">
            <div class="category-overlay">
              <h3 class="cat-title">Luxury Villas</h3>
              <span class="cat-count">Gated Residences</span>
            </div>
          </div>
          
          <div class="category-card" onclick="window.location.hash = '#/properties?type=Commercial Spaces'">
            <img src="assets/beachfront_miami.png" alt="Commercial">
            <div class="category-overlay">
              <h3 class="cat-title">Commercial Offices</h3>
              <span class="cat-count">Ready IT Suites</span>
            </div>
          </div>
          
          <div class="category-card" onclick="window.location.hash = '#/properties?type=Residential Plots'">
            <img src="assets/chalet_zermatt.png" alt="Plots">
            <div class="category-overlay">
              <h3 class="cat-title">Residential Plots</h3>
              <span class="cat-count">NA Collector Sanctioned</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  // Why choose us
  const statsHtml = `
    <section class="section-padding bg-secondary">
      <div class="container">
        <div class="why-container">
          <div class="why-left-content">
            <span class="section-subtitle" style="text-align: left; margin-bottom: 1rem;">Client Guarantees</span>
            <h2>Why Buy via <span>UrbanRise Realty</span></h2>
            <p class="why-desc">
              We provide professional support throughout Pune's buying, selling, and investment cycles. Operating with strict RERA compliance, we double-check titles and specifications before showcasing any estate.
            </p>
            <div class="stats-grid">
              <div class="stat-item">
                <div class="stat-number">100%</div>
                <div class="stat-label">Verified Listings</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">₹130 Cr+</div>
                <div class="stat-label">Transactions Guided</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">250+</div>
                <div class="stat-label">Happy Families</div>
              </div>
            </div>
          </div>
          <div class="benefits-grid">
            <div class="benefit-card glassmorphism">
              <div class="benefit-icon"><i data-lucide="shield-check"></i></div>
              <div>
                <h3 class="benefit-title">Verified Property Listings</h3>
                <p class="benefit-desc">We screen property papers, municipal compliance details, and RERA approvals to keep transactions secure.</p>
              </div>
            </div>
            <div class="benefit-card glassmorphism">
              <div class="benefit-icon"><i data-lucide="check-square"></i></div>
              <div>
                <h3 class="benefit-title">Transparent Transactions</h3>
                <p class="benefit-desc">No hidden charges, dual price markings, or builder-favored clauses. Clean contracts for homeowners.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  // Pune Locations Spotlight
  const locationsHtml = `
    <section class="section-padding">
      <div class="container">
        <span class="section-subtitle">Micro Markets</span>
        <h2 class="section-title">Popular <span>Locations</span></h2>
        
        <div class="categories-grid" style="margin-top: 3.5rem;">
          <div class="category-card" onclick="window.location.hash = '#/properties?location=Baner'">
            <img src="assets/penthouse_nyc.png" alt="Baner">
            <div class="category-overlay">
              <h3 class="cat-title">Baner</h3>
              <span class="cat-count">Explore Listings</span>
            </div>
          </div>
          
          <div class="category-card" onclick="window.location.hash = '#/properties?location=Wakad'">
            <img src="assets/villa_palm.png" alt="Wakad">
            <div class="category-overlay">
              <h3 class="cat-title">Wakad</h3>
              <span class="cat-count">Explore Listings</span>
            </div>
          </div>
          
          <div class="category-card" onclick="window.location.hash = '#/properties?location=Hinjawadi'">
            <img src="assets/beachfront_miami.png" alt="Hinjawadi">
            <div class="category-overlay">
              <h3 class="cat-title">Hinjawadi</h3>
              <span class="cat-count">Explore Listings</span>
            </div>
          </div>
          
          <div class="category-card" onclick="window.location.hash = '#/properties?location=Kharadi'">
            <img src="assets/villa_hero.png" alt="Kharadi">
            <div class="category-overlay">
              <h3 class="cat-title">Kharadi</h3>
              <span class="cat-count">Explore Listings</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  // Testimonials (Pune local names)
  const testimonialsHtml = `
    <section class="section-padding bg-secondary">
      <div class="container">
        <span class="section-subtitle">Authentic Trust</span>
        <h2 class="section-title">Client <span>Testimonials</span></h2>
        
        <div class="testimonials-slider">
          <div class="testimonial-card glassmorphism">
            <span class="quote-icon">“</span>
            <div class="stars">
              <i data-lucide="star" style="fill: var(--accent);"></i>
              <i data-lucide="star" style="fill: var(--accent);"></i>
              <i data-lucide="star" style="fill: var(--accent);"></i>
              <i data-lucide="star" style="fill: var(--accent);"></i>
              <i data-lucide="star" style="fill: var(--accent);"></i>
            </div>
            <p class="testimonial-text">
              "We purchased our luxury 3 BHK in Baner under UrbanRise's advisory. The entire RERA checking and paperwork process was completely transparent."
            </p>
            <div class="client-profile">
              <div class="client-avatar">
                <img src="assets/agent_elena.png" alt="Priya Sharma" style="filter: brightness(0.85);">
              </div>
              <div>
                <h4 class="client-name">Priya Sharma</h4>
                <span class="client-title">Baner, Pune</span>
              </div>
            </div>
          </div>

          <div class="testimonial-card glassmorphism">
            <span class="quote-icon">“</span>
            <div class="stars">
              <i data-lucide="star" style="fill: var(--accent);"></i>
              <i data-lucide="star" style="fill: var(--accent);"></i>
              <i data-lucide="star" style="fill: var(--accent);"></i>
              <i data-lucide="star" style="fill: var(--accent);"></i>
              <i data-lucide="star" style="fill: var(--accent);"></i>
            </div>
            <p class="testimonial-text">
              "Identifying collector sanctioned NA plots in Kothrud is a tough task. UrbanRise verified the titles before we transacted. Excellent service."
            </p>
            <div class="client-profile">
              <div class="client-avatar">
                <img src="assets/agent_marcus.png" alt="Rahul Patil" style="filter: brightness(0.85);">
              </div>
              <div>
                <h4 class="client-name">Rahul Patil</h4>
                <span class="client-title">Kothrud, Pune</span>
              </div>
            </div>
          </div>

          <div class="testimonial-card glassmorphism">
            <span class="quote-icon">“</span>
            <div class="stars">
              <i data-lucide="star" style="fill: var(--accent);"></i>
              <i data-lucide="star" style="fill: var(--accent);"></i>
              <i data-lucide="star" style="fill: var(--accent);"></i>
              <i data-lucide="star" style="fill: var(--accent);"></i>
              <i data-lucide="star" style="fill: var(--accent);"></i>
            </div>
            <p class="testimonial-text">
              "Negotiated our office space leasing in Hinjawadi IT zone through their commercial advisor Rohan. He got us excellent parking allocations."
            </p>
            <div class="client-profile">
              <div class="client-avatar">
                <img src="assets/agent_elena.png" alt="Neha Joshi" style="filter: brightness(0.85); transform: scaleX(-1);">
              </div>
              <div>
                <h4 class="client-name">Neha Joshi</h4>
                <span class="client-title">Wakad, Pune</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  // CTA Section
  const ctaHtml = `
    <section class="cta-section" style="background-image: url('assets/villa_hero.png');">
      <div class="cta-overlay"></div>
      <div class="container">
        <h2 class="cta-title">Looking for an Off-Market <span>Opportunity?</span></h2>
        <p class="cta-desc">Over 40% of premium villas and plots are transacted privately without public marketing lists. Get pre-launch pricing updates.</p>
        <div class="cta-buttons">
          <a href="#/contact" class="btn btn-primary">Schedule Consultation</a>
          <button class="btn btn-outline" onclick="openAuthModal()">Member Login</button>
        </div>
      </div>
    </section>
  `;

  container.innerHTML = heroHtml + searchHtml + featuredHtml + categoriesHtml + statsHtml + locationsHtml + testimonialsHtml + ctaHtml;

  // Search Submit Listener
  const searchForm = document.getElementById("home-search-form");
  if (searchForm) {
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const loc = document.getElementById("search-location").value;
      const typ = document.getElementById("search-type").value;
      const beds = document.getElementById("search-beds").value;
      const price = document.getElementById("search-price").value;

      let targetHash = `#/properties?`;
      if (loc) targetHash += `location=${loc}&`;
      if (typ) targetHash += `type=${typ}&`;
      if (beds) targetHash += `bedrooms=${beds}&`;
      if (price) targetHash += `priceMax=${price}&`;

      window.location.hash = targetHash.replace(/&$/, "");
    });
  }

  updateHeaderAuthSection();
}

// 2. PROPERTIES VIEW (SEARCH & FILTER GRID WITH MAP)
let propertiesViewFilterState = {
  location: "",
  type: "",
  bedrooms: "",
  priceMax: 40000000, // Max ₹4 Cr
  search: "",
  viewMode: "grid"
};

function renderPropertiesView(queryParams) {
  const container = document.getElementById("app-view");

  if (queryParams.location !== undefined) propertiesViewFilterState.location = queryParams.location;
  if (queryParams.type !== undefined) propertiesViewFilterState.type = queryParams.type;
  if (queryParams.bedrooms !== undefined) propertiesViewFilterState.bedrooms = queryParams.bedrooms;
  if (queryParams.priceMax !== undefined) propertiesViewFilterState.priceMax = parseInt(queryParams.priceMax);

  const filteredProperties = appState.properties.filter(p => {
    if (propertiesViewFilterState.location && p.location.indexOf(propertiesViewFilterState.location) === -1) return false;
    if (propertiesViewFilterState.type && p.type !== propertiesViewFilterState.type) return false;
    if (propertiesViewFilterState.bedrooms && p.bedrooms < parseInt(propertiesViewFilterState.bedrooms)) return false;
    if (p.priceNum > propertiesViewFilterState.priceMax) return false;
    if (propertiesViewFilterState.search) {
      const q = propertiesViewFilterState.search.toLowerCase();
      const nameMatch = p.name.toLowerCase().includes(q);
      const descMatch = p.description.toLowerCase().includes(q);
      const locMatch = p.location.toLowerCase().includes(q);
      if (!nameMatch && !descMatch && !locMatch) return false;
    }
    return true;
  });

  let filterHeaderHtml = `
    <div class="properties-page animate-fade">
      <div class="container">
        <div class="properties-hero">
          <span class="section-subtitle">Real Estate Portfolio</span>
          <h1 class="section-title">Pune Premium <span>Estates</span></h1>
        </div>

        <!-- Filter Row -->
        <div class="filter-bar glassmorphism">
          <div class="filter-row">
            <div class="filter-group">
              <label>Search Keyword</label>
              <div class="filter-input-wrap">
                <i data-lucide="search"></i>
                <input type="text" id="filter-search-box" value="${propertiesViewFilterState.search}" placeholder="Apartment, villa, NA plot...">
              </div>
            </div>
            <div class="filter-group">
              <label>Pune Locality</label>
              <div class="filter-input-wrap">
                <i data-lucide="map-pin"></i>
                <select id="filter-location-select">
                  <option value="">All Localities</option>
                  <option value="Baner" ${propertiesViewFilterState.location === "Baner" ? "selected" : ""}>Baner</option>
                  <option value="Wakad" ${propertiesViewFilterState.location === "Wakad" ? "selected" : ""}>Wakad</option>
                  <option value="Hinjawadi" ${propertiesViewFilterState.location === "Hinjawadi" ? "selected" : ""}>Hinjawadi</option>
                  <option value="Kharadi" ${propertiesViewFilterState.location === "Kharadi" ? "selected" : ""}>Kharadi</option>
                  <option value="Kothrud" ${propertiesViewFilterState.location === "Kothrud" ? "selected" : ""}>Kothrud</option>
                  <option value="Viman Nagar" ${propertiesViewFilterState.location === "Viman Nagar" ? "selected" : ""}>Viman Nagar</option>
                </select>
              </div>
            </div>
            <div class="filter-group">
              <label>Property Category</label>
              <div class="filter-input-wrap">
                <i data-lucide="home"></i>
                <select id="filter-type-select">
                  <option value="">All Categories</option>
                  <option value="Apartments" ${propertiesViewFilterState.type === "Apartments" ? "selected" : ""}>Apartments</option>
                  <option value="Luxury Villas" ${propertiesViewFilterState.type === "Luxury Villas" ? "selected" : ""}>Luxury Villas</option>
                  <option value="Commercial Spaces" ${propertiesViewFilterState.type === "Commercial Spaces" ? "selected" : ""}>Commercial Spaces</option>
                  <option value="Residential Plots" ${propertiesViewFilterState.type === "Residential Plots" ? "selected" : ""}>Residential Plots</option>
                </select>
              </div>
            </div>
            <div class="filter-group">
              <label>BHK Layout</label>
              <div class="filter-input-wrap">
                <i data-lucide="bed-double"></i>
                <select id="filter-beds-select">
                  <option value="">Any Layout</option>
                  <option value="2" ${propertiesViewFilterState.bedrooms === "2" ? "selected" : ""}>2+ BHK</option>
                  <option value="3" ${propertiesViewFilterState.bedrooms === "3" ? "selected" : ""}>3+ BHK</option>
                  <option value="5" ${propertiesViewFilterState.bedrooms === "5" ? "selected" : ""}>5 BHK Villa</option>
                </select>
              </div>
            </div>
          </div>

          <div class="filter-actions-row">
            <div class="price-range-slider" style="width: 340px;">
              <div class="price-labels">
                <label>Budget Limit</label>
                <span>Up to ${formatIndianPrice(propertiesViewFilterState.priceMax)}</span>
              </div>
              <input type="range" class="slider-input" id="filter-price-slider" min="5000000" max="40000000" step="1000000" value="${propertiesViewFilterState.priceMax}">
            </div>

            <div class="results-count">
              Showing <span>${filteredProperties.length}</span> verified results
            </div>

            <div class="filter-buttons">
              <button class="btn btn-secondary btn-sm" id="btn-reset-filters" style="font-size: 0.8rem; padding: 0.5rem 1.2rem;">Reset</button>
              <div class="layout-toggle">
                <button class="btn-icon ${propertiesViewFilterState.viewMode === "grid" ? "active" : ""}" id="btn-view-grid" title="Grid View">
                  <i data-lucide="layout-grid" style="width: 16px; height: 16px;"></i>
                </button>
                <button class="btn-icon ${propertiesViewFilterState.viewMode === "split" ? "active" : ""}" id="btn-view-split" title="Split Map View">
                  <i data-lucide="map" style="width: 16px; height: 16px;"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
  `;

  let bodyHtml = "";
  if (propertiesViewFilterState.viewMode === "grid") {
    bodyHtml += `<div class="properties-grid" style="margin-bottom: 6rem;">`;
    if (filteredProperties.length === 0) {
      bodyHtml += renderNoPropertiesFound();
    } else {
      filteredProperties.forEach(prop => {
        bodyHtml += renderPropertyCard(prop);
      });
    }
    bodyHtml += `</div>`;
  } else {
    // Split map representation
    bodyHtml += `
      <div class="properties-layout-container">
        <div class="properties-list-col">
          <div class="properties-grid" style="grid-template-columns: 1fr 1fr; gap: 1.5rem;">
    `;
    
    if (filteredProperties.length === 0) {
      bodyHtml += renderNoPropertiesFound();
    } else {
      filteredProperties.forEach(prop => {
        bodyHtml += renderPropertyCard(prop);
      });
    }

    bodyHtml += `
          </div>
        </div>
        <div class="properties-map-col">
          <div class="mock-map">
    `;

    filteredProperties.forEach(prop => {
      bodyHtml += `
        <div class="map-pin" style="left: ${prop.coords.x}%; top: ${prop.coords.y}%;" 
             onmouseover="highlightCard(${prop.id})" onmouseout="unhighlightCard(${prop.id})" 
             onclick="window.location.hash='#/property/${prop.id}'">
          ${prop.price}
        </div>
      `;
    });

    bodyHtml += `
          </div>
        </div>
      </div>
    `;
  }

  bodyHtml += `</div></div>`;

  container.innerHTML = filterHeaderHtml + bodyHtml;

  // Add event listeners to filters
  document.getElementById("filter-search-box").addEventListener("input", (e) => {
    propertiesViewFilterState.search = e.target.value;
    debounceFilterChange();
  });
  document.getElementById("filter-location-select").addEventListener("change", (e) => {
    propertiesViewFilterState.location = e.target.value;
    applyFilters();
  });
  document.getElementById("filter-type-select").addEventListener("change", (e) => {
    propertiesViewFilterState.type = e.target.value;
    applyFilters();
  });
  document.getElementById("filter-beds-select").addEventListener("change", (e) => {
    propertiesViewFilterState.bedrooms = e.target.value;
    applyFilters();
  });
  document.getElementById("filter-price-slider").addEventListener("input", (e) => {
    propertiesViewFilterState.priceMax = parseInt(e.target.value);
    applyFilters();
  });
  document.getElementById("btn-reset-filters").addEventListener("click", () => {
    propertiesViewFilterState = {
      location: "",
      type: "",
      bedrooms: "",
      priceMax: 40000000,
      search: "",
      viewMode: propertiesViewFilterState.viewMode
    };
    applyFilters();
  });

  document.getElementById("btn-view-grid").addEventListener("click", () => {
    propertiesViewFilterState.viewMode = "grid";
    applyFilters();
  });
  document.getElementById("btn-view-split").addEventListener("click", () => {
    propertiesViewFilterState.viewMode = "split";
    applyFilters();
  });
}

function renderNoPropertiesFound() {
  return `
    <div class="flex-center grid-span-full" style="grid-column: span 12; padding: 5rem 0; flex-direction: column; gap: 1.5rem; border: 1px dashed var(--border-color); border-radius: var(--radius-lg); width:100%;">
      <i data-lucide="search" style="width: 48px; height: 48px; color: var(--accent);"></i>
      <div style="text-align: center;">
        <h4 style="font-family: var(--font-serif); font-size: 1.5rem; margin-bottom: 0.5rem;">No Properties Found</h4>
        <p style="color: var(--text-muted); font-size: 0.9rem;">Try selecting a different locality or adjusting your price parameters.</p>
      </div>
      <button class="btn btn-primary btn-sm" onclick="document.getElementById('btn-reset-filters').click()">Reset Filters</button>
    </div>
  `;
}

function renderPropertyCard(prop) {
  const isFav = appState.favorites.includes(prop.id);
  const isComp = appState.compareList.includes(prop.id);
  return `
    <div class="property-card glassmorphism" id="prop-card-${prop.id}">
      <div class="card-img-wrapper">
        <img src="${prop.image}" alt="${prop.name}">
        <div class="card-badges">
          <span class="badge-tag">${prop.type}</span>
          <div class="card-actions">
            <button class="btn-card-action ${isFav ? "active" : ""}" onclick="toggleFavorite(${prop.id})" title="Favorite">
              <i data-lucide="heart" style="fill: ${isFav ? "var(--accent)" : "none"};"></i>
            </button>
            <button class="btn-card-action ${isComp ? "active" : ""}" onclick="toggleCompare(${prop.id})" title="Compare">
              <i data-lucide="git-compare"></i>
            </button>
          </div>
        </div>
        <span class="card-price-tag">${prop.price}</span>
      </div>
      <div class="card-content">
        <div class="card-location"><i data-lucide="map-pin" style="width:12px; height:12px;"></i> ${prop.location}</div>
        <h3 class="card-title"><a href="#/property/${prop.id}">${prop.name}</a></h3>
        <p class="card-desc">${prop.description}</p>
        <div class="card-specs">
          <div class="spec-item"><i data-lucide="bed-double"></i> <span>${prop.bedrooms > 0 ? prop.bedrooms + " BHK" : "Office"}</span></div>
          <div class="spec-item"><i data-lucide="bath"></i> <span>${prop.bathrooms} Baths</span></div>
          <div class="spec-item"><i data-lucide="maximize-2"></i> <span>${prop.area}</span></div>
        </div>
      </div>
    </div>
  `;
}

let debounceTimer;
function debounceFilterChange() {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    applyFilters();
  }, 450);
}

function applyFilters() {
  renderPropertiesView({});
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
}

window.highlightCard = function(id) {
  const card = document.getElementById(`prop-card-${id}`);
  if (card) card.style.borderColor = "var(--accent)";
};
window.unhighlightCard = function(id) {
  const card = document.getElementById(`prop-card-${id}`);
  if (card) card.style.borderColor = "var(--border-color)";
};

// 3. LOCATIONS VIEW (SPOTLIGHT MAP ON PUNE MICROMARKETS)
function renderLocationsView(queryParams) {
  const container = document.getElementById("app-view");
  
  const locationsHtml = `
    <div class="standard-page-hero animate-fade">
      <div class="container">
        <span class="section-subtitle">Micro Markets Showcase</span>
        <h1>Popular <span>Pune Localities</span></h1>
        <p>UrbanRise specializes in the most promising investment zones across Pune. Click to explore active listings in these premium hubs.</p>
      </div>
    </div>

    <div class="container section-padding animate-fade" style="padding-top: 2rem; margin-bottom: 6rem;">
      <div class="categories-grid" style="grid-template-columns: repeat(3, 1fr); gap: 2.2rem;">
        
        <div class="category-card" onclick="window.location.hash = '#/properties?location=Baner'">
          <img src="assets/penthouse_nyc.png" alt="Baner">
          <div class="category-overlay">
            <h3 class="cat-title">Baner</h3>
            <span class="cat-count">Prime residential & commercial hub on West Pune corridor. Near Balewadi High Street.</span>
          </div>
        </div>

        <div class="category-card" onclick="window.location.hash = '#/properties?location=Wakad'">
          <img src="assets/villa_palm.png" alt="Wakad">
          <div class="category-overlay">
            <h3 class="cat-title">Wakad</h3>
            <span class="cat-count">Fast-expanding connectivity corridor near IT park entries. Perfect for modern villas.</span>
          </div>
        </div>

        <div class="category-card" onclick="window.location.hash = '#/properties?location=Hinjawadi'">
          <img src="assets/beachfront_miami.png" alt="Hinjawadi">
          <div class="category-overlay">
            <h3 class="cat-title">Hinjawadi</h3>
            <span class="cat-count">Pune's premier technology park. High demand for commercial offices and executive suites.</span>
          </div>
        </div>

        <div class="category-card" onclick="window.location.hash = '#/properties?location=Kharadi'">
          <img src="assets/villa_hero.png" alt="Kharadi">
          <div class="category-overlay">
            <h3 class="cat-title">Kharadi</h3>
            <span class="cat-count">East Pune's prominent IT corridor close to World Trade Center and EON Free Zone.</span>
          </div>
        </div>

        <div class="category-card" onclick="window.location.hash = '#/properties?location=Kothrud'">
          <img src="assets/chalet_zermatt.png" alt="Kothrud">
          <div class="category-overlay">
            <h3 class="cat-title">Kothrud</h3>
            <span class="cat-count">Heritage cultural hub with excellent residential rates. Sanctioned plots and classic villas.</span>
          </div>
        </div>

        <div class="category-card" onclick="window.location.hash = '#/properties?location=Viman Nagar'">
          <img src="assets/beachfront_miami.png" alt="Viman Nagar">
          <div class="category-overlay">
            <h3 class="cat-title">Viman Nagar</h3>
            <span class="cat-count">Prestigious residential area located next to the Airport. Home to elite penthouses.</span>
          </div>
        </div>

      </div>
    </div>
  `;

  container.innerHTML = locationsHtml;
}

// 4. PROPERTY DETAILS VIEW
let activeDetailFormTab = "inquiry";

function renderPropertyDetailsView(id) {
  const container = document.getElementById("app-view");
  const prop = appState.properties.find(p => p.id === id);

  if (!prop) {
    container.innerHTML = `
      <div class="container section-padding flex-center" style="flex-direction: column; gap: 2rem;">
        <i data-lucide="alert-triangle" style="width: 48px; height: 48px; color: var(--accent);"></i>
        <h2 style="font-family: var(--font-serif); font-size: 2.2rem;">Listing Entry Not Found</h2>
        <p style="color: var(--text-muted);">The property might have been sold or taken off market.</p>
        <a href="#/properties" class="btn btn-primary">Return to Catalog</a>
      </div>
    `;
    if (typeof lucide !== "undefined") lucide.createIcons();
    return;
  }

  const agent = appState.agents[id % 2 === 0 ? 1 : 0];
  const isFav = appState.favorites.includes(prop.id);

  const subImg1 = prop.id === 1 ? "assets/villa_hero.png" : "assets/villa_palm.png";
  const subImg2 = prop.id === 2 ? "assets/beachfront_miami.png" : "assets/penthouse_nyc.png";

  const detailsHtml = `
    <div class="details-page animate-fade">
      <!-- Full Width Gallery Block -->
      <div class="details-gallery">
        <img src="${prop.image}" class="gallery-main-img" id="detail-main-img" alt="${prop.name}">
        <div class="gallery-sub-imgs">
          <img src="${subImg1}" class="gallery-sub-img" onclick="swapMainImage('${subImg1}')">
          <img src="${subImg2}" class="gallery-sub-img" onclick="swapMainImage('${subImg2}')">
        </div>
      </div>

      <div class="container">
        <div class="details-content-container">
          <div class="details-main">
            
            <div class="details-header">
              <div class="details-meta">
                <div class="details-location">
                  <i data-lucide="map-pin"></i> ${prop.location}
                </div>
                <div class="details-price">${prop.price}</div>
              </div>
              <h1 class="details-title">${prop.name}</h1>
              <div class="details-badges">
                <span class="badge-tag">${prop.type}</span>
                <span class="badge-tag" style="background: var(--surface); color: var(--accent); border: 1px solid var(--border-gold);">Pune Premium</span>
              </div>
            </div>

            <!-- Specifications -->
            <div class="details-specs-bar glassmorphism">
              <div class="detail-spec-item">
                <span class="label">Layout</span>
                <span class="value"><i data-lucide="bed-double"></i> ${prop.bedrooms > 0 ? prop.bedrooms + " BHK" : "Office"}</span>
              </div>
              <div class="detail-spec-item" style="border-left: 1px solid rgba(255,255,255,0.08); padding-left: 2rem;">
                <span class="label">Bathrooms</span>
                <span class="value"><i data-lucide="bath"></i> ${prop.bathrooms}</span>
              </div>
              <div class="detail-spec-item" style="border-left: 1px solid rgba(255,255,255,0.08); padding-left: 2rem;">
                <span class="label">Carpet Area</span>
                <span class="value"><i data-lucide="maximize-2"></i> ${prop.area}</span>
              </div>
              <div class="detail-spec-item" style="border-left: 1px solid rgba(255,255,255,0.08); padding-left: 2rem;">
                <span class="label">Property ID</span>
                <span class="value" style="color:var(--accent);">#UR00${prop.id}</span>
              </div>
            </div>

            <!-- Description -->
            <div class="details-section">
              <h3>Detailed Overview</h3>
              <p class="details-description">${prop.description} Located in one of Pune's highly sought-after development sectors, this property boasts top-tier building quality and direct access to major arterial highways. Designed for optimal layout space and maximum air cross-ventilation.</p>
            </div>

            <!-- Features -->
            <div class="details-section">
              <h3>Property Features & Conveniences</h3>
              <div class="features-list">
                ${prop.features.map(f => `
                  <div class="feature-item-tick">
                    <i data-lucide="shield-check"></i>
                    <span>${f}</span>
                  </div>
                `).join("")}
                <div class="feature-item-tick"><i data-lucide="shield-check"></i> <span>MahaRERA Registered</span></div>
                <div class="feature-item-tick"><i data-lucide="shield-check"></i> <span>Demarcated Compound</span></div>
              </div>
            </div>
            
          </div>

          <!-- Sidebar Booking / Inquiry Form -->
          <div class="details-sidebar">
            <div class="details-sidebar-card glassmorphism-gold">
              
              <!-- Assigned Agent Info -->
              <div class="sidebar-agent-info">
                <div class="sidebar-agent-avatar">
                  <img src="${agent.image}" alt="${agent.name}">
                </div>
                <div>
                  <h4 class="sidebar-agent-name">${agent.name}</h4>
                  <span class="sidebar-agent-title">${agent.title}</span>
                </div>
              </div>

              <!-- Interactive Tabs -->
              <div class="form-tabs">
                <button class="form-tab ${activeDetailFormTab === "inquiry" ? "active" : ""}" id="tab-inquiry">Inquire</button>
                <button class="form-tab ${activeDetailFormTab === "visit" ? "active" : ""}" id="tab-visit">Schedule Tour</button>
              </div>

              <!-- Form Body Container -->
              <div id="sidebar-form-container">
                <!-- Form body gets injected here -->
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  container.innerHTML = detailsHtml;
  renderDetailsFormBody(prop, agent);

  document.getElementById("tab-inquiry").addEventListener("click", () => {
    activeDetailFormTab = "inquiry";
    renderPropertyDetailsView(id);
  });
  document.getElementById("tab-visit").addEventListener("click", () => {
    activeDetailFormTab = "visit";
    renderPropertyDetailsView(id);
  });
}

window.swapMainImage = function(newSrc) {
  const main = document.getElementById("detail-main-img");
  if (main) main.src = newSrc;
};

function renderDetailsFormBody(prop, agent) {
  const wrapper = document.getElementById("sidebar-form-container");
  if (!wrapper) return;

  if (activeDetailFormTab === "inquiry") {
    wrapper.innerHTML = `
      <form id="details-action-form" class="sidebar-form">
        <div class="form-group">
          <label>Full Name</label>
          <input type="text" id="inq-name" placeholder="Priya Sharma" required>
        </div>
        <div class="form-group">
          <label>Email Address</label>
          <input type="email" id="inq-email" placeholder="priya@domain.in" required>
        </div>
        <div class="form-group">
          <label>Inquiry Message</label>
          <textarea id="inq-msg" rows="4" required>I am interested in setting up a consultation for ${prop.name} in ${prop.locationShort}. Please contact me.</textarea>
        </div>
        <button type="submit" class="btn btn-primary" style="width: 100%;">Submit Inquiry</button>
      </form>
    `;
  } else {
    wrapper.innerHTML = `
      <form id="details-action-form" class="sidebar-form">
        <div class="form-group">
          <label>Select Date</label>
          <input type="date" id="visit-date" min="2026-06-05" required>
        </div>
        <div class="form-group">
          <label>Preferred Time slot</label>
          <select id="visit-time" required>
            <option value="10:00 - 11:30">Morning (10:00 - 11:30)</option>
            <option value="14:00 - 15:30">Afternoon (14:00 - 15:30)</option>
            <option value="17:00 - 18:30">Evening (17:00 - 18:30)</option>
          </select>
        </div>
        <div class="form-group">
          <label>Contact Phone</label>
          <input type="tel" id="visit-phone" placeholder="+91 98765 43210" required>
        </div>
        <button type="submit" class="btn btn-primary" style="width: 100%;">Request Tour Booking</button>
      </form>
    `;
  }

  document.getElementById("details-action-form").addEventListener("submit", (e) => {
    e.preventDefault();
    if (activeDetailFormTab === "inquiry") {
      const name = document.getElementById("inq-name").value;
      const email = document.getElementById("inq-email").value;
      const msg = document.getElementById("inq-msg").value;
      
      const newInquiry = {
        id: Date.now(),
        name,
        email,
        phone: "+91 Confidential",
        type: "Agent inquiry",
        property: prop.name,
        message: msg,
        date: new Date().toISOString().split("T")[0],
        status: "Pending"
      };

      appState.inquiries.unshift(newInquiry);
      showToast(`Inquiry sent to ${agent.name}. An advisor will reach out shortly.`, "success");
    } else {
      const date = document.getElementById("visit-date").value;
      const time = document.getElementById("visit-time").value;
      const phone = document.getElementById("visit-phone").value;
      
      const newVisit = {
        id: Date.now(),
        propertyId: prop.id,
        propertyName: prop.name,
        date,
        time,
        status: "Pending Approval"
      };

      const newInquiry = {
        id: Date.now() + 1,
        name: appState.currentUser ? appState.currentUser.name : "Anonymous Buyer",
        email: appState.currentUser ? appState.currentUser.email : "buyer@urbanrise.in",
        phone,
        type: "Schedule visit",
        property: prop.name,
        message: `Requested site visit on ${date} at ${time}. Phone: ${phone}`,
        date: new Date().toISOString().split("T")[0],
        status: "Pending"
      };

      appState.visits.unshift(newVisit);
      appState.inquiries.unshift(newInquiry);
      showToast("Tour request submitted. Check status in Member Dashboard.", "success");
    }
    
    renderPropertyDetailsView(prop.id);
  });
}

// 5. ABOUT VIEW (PUNE STORY & TEAM)
function renderAboutView() {
  const container = document.getElementById("app-view");
  
  const aboutHtml = `
    <div class="standard-page-hero animate-fade">
      <div class="container">
        <span class="section-subtitle">UrbanRise Realty</span>
        <h1>About <span>Our Agency</span></h1>
        <p>Helping families and investors locate premium residential apartments, commercial workspaces, and N.A. plots in Pune.</p>
      </div>
    </div>

    <div class="container section-padding animate-fade" style="padding-top: 2rem; margin-bottom: 5rem;">
      <div class="about-intro-grid">
        <div class="about-intro-img">
          <img src="assets/villa_palm.png" alt="Wakad Villa">
        </div>
        <div class="about-intro-text">
          <h2>Trust, Transparency & <span>Professional Guidance</span></h2>
          <p>At UrbanRise Realty, we focus on verified property listings in Pune's major micro-markets (Baner, Wakad, Hinjawadi, Kharadi, Kothrud, Viman Nagar). We verify land titles, clear builder compliance logs, and secure MahaRERA details to keep transactions secure.</p>
          <p>Our team provides end-to-end guidance from legal title checking to home loan options and registry filing. We believe in providing personalized, clean transactions for all our homeowners.</p>
          
          <div class="stats-grid" style="margin-top: 3rem; grid-template-columns: 1fr 1fr;">
            <div class="stat-item" style="text-align: left;">
              <div class="stat-number">250+</div>
              <div class="stat-label">Families Served</div>
            </div>
            <div class="stat-item" style="text-align: left; border-left: 1px solid rgba(255,255,255,0.08); padding-left: 2rem; border-right:none;">
              <div class="stat-number">100%</div>
              <div class="stat-label">Verified Listings</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  container.innerHTML = aboutHtml;
}

// 6. CONTACT VIEW
function renderContactView() {
  const container = document.getElementById("app-view");
  
  const contactHtml = `
    <div class="standard-page-hero animate-fade">
      <div class="container">
        <span class="section-subtitle">Baner Road Showcase</span>
        <h1>Contact <span>Our Desk</span></h1>
        <p>Visit our Baner showroom or schedule an appointment with an investment advisor.</p>
      </div>
    </div>

    <div class="container section-padding animate-fade" style="padding-top: 2rem; margin-bottom: 6rem;">
      <div class="contact-grid">
        <div class="contact-info-col">
          <div class="contact-info-cards">
            
            <div class="contact-info-card glassmorphism">
              <i data-lucide="building"></i>
              <div>
                <h3 class="contact-info-title">Corporate Office</h3>
                <p class="contact-info-desc">Office No. 204, Business Hub,<br>Baner Road, Pune, MH 411045</p>
              </div>
            </div>

            <div class="contact-info-card glassmorphism">
              <i data-lucide="phone-call"></i>
              <div>
                <h3 class="contact-info-title">Contact Lines</h3>
                <p class="contact-info-desc">+91 98765 43210<br>hello@urbanriserealty.in</p>
              </div>
            </div>

            <div class="contact-info-card glassmorphism">
              <i data-lucide="lock"></i>
              <div>
                <h3 class="contact-info-title">Secure Registry</h3>
                <p class="contact-info-desc">Our RERA advisory services are strictly bound by non-disclosure codes to shield buyer investments.</p>
              </div>
            </div>

          </div>
        </div>

        <div class="contact-form-col">
          <div class="contact-form-box glassmorphism">
            <h2>Schedule Consultation</h2>
            <form id="contact-central-form" class="sidebar-form">
              <div class="contact-form-grid">
                <div class="form-group">
                  <label>Full Name</label>
                  <input type="text" id="contact-name" placeholder="Priya Sharma" required>
                </div>
                <div class="form-group">
                  <label>Email Address</label>
                  <input type="email" id="contact-email" placeholder="priya@domain.in" required>
                </div>
                <div class="form-group">
                  <label>Mobile Phone</label>
                  <input type="tel" id="contact-phone" placeholder="+91 98765 43210" required>
                </div>
                <div class="form-group">
                  <label>Property Interest</label>
                  <select id="contact-class">
                    <option value="Apartments">Residential Apartments</option>
                    <option value="Luxury Villas">Luxury Villas</option>
                    <option value="Commercial Offices">Commercial Workspace</option>
                    <option value="NA Plots">N.A. Plots</option>
                  </select>
                </div>
                <div class="form-group full-width">
                  <label>Message details</label>
                  <textarea id="contact-msg" rows="5" required>I am planning to invest in Pune real estate and would like to receive verified options.</textarea>
                </div>
              </div>
              <button type="submit" class="btn btn-primary" style="margin-top: 1.5rem; width: 100%;">Book Consultation</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  `;

  container.innerHTML = contactHtml;

  document.getElementById("contact-central-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("contact-name").value;
    const email = document.getElementById("contact-email").value;
    const phone = document.getElementById("contact-phone").value;
    const cls = document.getElementById("contact-class").value;
    const msg = document.getElementById("contact-msg").value;

    const newInquiry = {
      id: Date.now(),
      name,
      email,
      phone,
      type: "Contact Desk",
      property: cls,
      message: msg,
      date: new Date().toISOString().split("T")[0],
      status: "Pending"
    };

    appState.inquiries.unshift(newInquiry);
    showToast("Consultation booked successfully. An UrbanRise advisor will connect soon.", "success");
    document.getElementById("contact-central-form").reset();
  });
}

// 7. USER DASHBOARD VIEW
let activeUserDashboardTab = "favorites";

function renderUserDashboardView() {
  const container = document.getElementById("app-view");
  
  const dashboardHtml = `
    <div class="dashboard-layout animate-fade">
      
      <!-- Sidebar -->
      <aside class="dashboard-sidebar">
        <div class="sidebar-menu-item ${activeUserDashboardTab === "favorites" ? "active" : ""}" id="db-menu-favorites">
          <i data-lucide="heart"></i> Saved Properties
        </div>
        <div class="sidebar-menu-item ${activeUserDashboardTab === "visits" ? "active" : ""}" id="db-menu-visits">
          <i data-lucide="calendar"></i> Scheduled Visits
        </div>
        <div class="sidebar-menu-item ${activeUserDashboardTab === "profile" ? "active" : ""}" id="db-menu-profile">
          <i data-lucide="settings"></i> Profile Settings
        </div>
      </aside>

      <!-- Panel Content -->
      <main class="dashboard-main-content">
        <div class="dashboard-header">
          <div>
            <span class="dashboard-subtitle">Buyer Dashboard</span>
            <h1 class="dashboard-title">Private Portfolio</h1>
          </div>
          <div style="font-size: 0.9rem; color:var(--text-muted);">
            Active Session: <span style="color:var(--accent); font-weight:600;">${appState.currentUser.email}</span>
          </div>
        </div>

        <div id="dashboard-tab-content-panel">
          <!-- Rendered dynamically -->
        </div>
      </main>

    </div>
  `;

  container.innerHTML = dashboardHtml;
  renderUserDashboardTabContent();

  document.getElementById("db-menu-favorites").addEventListener("click", () => {
    activeUserDashboardTab = "favorites";
    renderUserDashboardView();
  });
  document.getElementById("db-menu-visits").addEventListener("click", () => {
    activeUserDashboardTab = "visits";
    renderUserDashboardView();
  });
  document.getElementById("db-menu-profile").addEventListener("click", () => {
    activeUserDashboardTab = "profile";
    renderUserDashboardView();
  });
}

function renderUserDashboardTabContent() {
  const wrapper = document.getElementById("dashboard-tab-content-panel");
  if (!wrapper) return;

  if (activeUserDashboardTab === "favorites") {
    const favs = appState.properties.filter(p => appState.favorites.includes(p.id));
    
    let html = `
      <div class="dash-block glassmorphism">
        <h3 class="dash-block-title">Saved Properties <span>(${favs.length})</span></h3>
    `;

    if (favs.length === 0) {
      html += `
        <div class="flex-center" style="flex-direction: column; padding: 4rem 0; gap: 1rem; text-align: center;">
          <i data-lucide="heart-off" style="width: 40px; height: 40px; color:var(--text-muted);"></i>
          <p style="color: var(--text-muted);">No properties saved.</p>
          <a href="#/properties" class="btn btn-primary btn-sm" style="margin-top: 1rem;">Browse Collection</a>
        </div>
      `;
    } else {
      html += `<div class="properties-grid" style="grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem;">`;
      favs.forEach(prop => {
        html += `
          <div class="property-card glassmorphism" style="border: 1px solid rgba(255,255,255,0.05);">
            <div class="card-img-wrapper" style="height: 180px;">
              <img src="${prop.image}" alt="${prop.name}">
              <div class="card-badges">
                <span class="badge-tag" style="font-size:0.65rem;">${prop.type}</span>
                <button class="btn-card-action active" onclick="toggleFavorite(${prop.id})" title="Remove Favorite">
                  <i data-lucide="x" style="width: 14px; height: 14px;"></i>
                </button>
              </div>
              <span class="card-price-tag" style="font-size: 0.95rem; padding: 0.25rem 0.8rem;">${prop.price}</span>
            </div>
            <div class="card-content" style="padding: 1.2rem;">
              <h4 style="font-family: var(--font-sans); font-size: 1.15rem; font-weight:600;"><a href="#/property/${prop.id}">${prop.name}</a></h4>
              <p style="color:var(--accent); font-size:0.75rem; text-transform:uppercase; margin-bottom: 0.8rem;">${prop.location}</p>
              <a href="#/property/${prop.id}" class="btn btn-outline btn-sm" style="font-size: 0.75rem; padding: 0.4rem; border-radius: var(--radius-sm);">View Details</a>
            </div>
          </div>
        `;
      });
      html += `</div>`;
    }

    html += `</div>`;
    wrapper.innerHTML = html;

  } else if (activeUserDashboardTab === "visits") {
    let html = `
      <div class="dash-block glassmorphism">
        <h3 class="dash-block-title">Scheduled Site Visits <span>(${appState.visits.length})</span></h3>
    `;

    if (appState.visits.length === 0) {
      html += `
        <div class="flex-center" style="flex-direction: column; padding: 4rem 0; gap: 1rem; text-align: center;">
          <i data-lucide="calendar" style="width: 40px; height: 40px; color:var(--text-muted);"></i>
          <p style="color: var(--text-muted);">No visits scheduled.</p>
        </div>
      `;
    } else {
      html += `<div class="visits-grid">`;
      appState.visits.forEach(visit => {
        html += `
          <div class="visit-card">
            <div class="visit-header">
              <span class="visit-property-name">${visit.propertyName}</span>
              <span class="visit-status">${visit.status}</span>
            </div>
            <div class="visit-detail-row">
              <i data-lucide="calendar"></i>
              <span>${visit.date}</span>
            </div>
            <div class="visit-detail-row">
              <i data-lucide="clock"></i>
              <span>${visit.time}</span>
            </div>
            <div class="visit-detail-row" style="margin-top: 1rem; border-top:1px solid rgba(255,255,255,0.05); padding-top: 0.8rem;">
              <span style="font-size:0.75rem; color:var(--text-muted);">MahaRERA Support Registry</span>
            </div>
          </div>
        `;
      });
      html += `</div>`;
    }

    html += `</div>`;
    wrapper.innerHTML = html;

  } else if (activeUserDashboardTab === "profile") {
    const initials = appState.currentUser.name.split(" ").map(n => n[0]).join("");
    wrapper.innerHTML = `
      <div class="dash-block glassmorphism">
        <h3 class="dash-block-title">Buyer Settings</h3>
        
        <div class="profile-card-grid">
          <div class="profile-avatar-upload glassmorphism" style="border: 1px solid rgba(255,255,255,0.05);">
            <div class="profile-large-avatar">${initials}</div>
            <div style="text-align: center;">
              <h4 class="profile-name">${appState.currentUser.name}</h4>
              <span class="profile-role-badge">${appState.currentUser.role}</span>
            </div>
            <button class="btn btn-secondary btn-sm" onclick="showToast('Secure upload is offline.', 'info')" style="font-size: 0.75rem; padding: 0.5rem 1rem;">Change Photo</button>
          </div>

          <div class="profile-inputs-form">
            <form id="db-profile-form" class="sidebar-form" style="gap: 1.5rem;">
              <div style="display:grid; grid-template-columns: 1fr 1fr; gap:1.2rem;">
                <div class="form-group">
                  <label>Display Name</label>
                  <input type="text" id="profile-name-input" value="${appState.currentUser.name}">
                </div>
                <div class="form-group">
                  <label>Email Address</label>
                  <input type="email" id="profile-email-input" value="${appState.currentUser.email}" readonly style="opacity: 0.6; cursor: not-allowed;">
                </div>
              </div>
              <div class="form-group">
                <label>Secure Mobile</label>
                <input type="text" id="profile-phone-input" placeholder="+91 98765 43210">
              </div>
              <div style="border-top:1px solid rgba(255,255,255,0.08); padding-top:1.5rem; display:flex; justify-content: flex-end;">
                <button type="submit" class="btn btn-primary btn-sm" style="padding: 0.7rem 2rem;">Save Settings</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    `;

    document.getElementById("db-profile-form").addEventListener("submit", (e) => {
      e.preventDefault();
      const newName = document.getElementById("profile-name-input").value.trim();
      if (newName) {
        appState.currentUser.name = newName;
        updateHeaderAuthSection();
        showToast("Profile settings saved successfully.", "success");
        renderUserDashboardView();
      }
    });
  }

  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
}

// 8. ADMIN DASHBOARD VIEW
let activeAdminDashboardTab = "analytics";

function renderAdminDashboardView() {
  const container = document.getElementById("app-view");

  const dashboardHtml = `
    <div class="dashboard-layout animate-fade">
      
      <!-- Sidebar -->
      <aside class="dashboard-sidebar">
        <div class="sidebar-menu-item ${activeAdminDashboardTab === "analytics" ? "active" : ""}" id="adm-menu-analytics">
          <i data-lucide="bar-chart-3"></i> Desk Performance
        </div>
        <div class="sidebar-menu-item ${activeAdminDashboardTab === "properties" ? "active" : ""}" id="adm-menu-properties">
          <i data-lucide="layout-grid"></i> Manage Properties
        </div>
        <div class="sidebar-menu-item ${activeAdminDashboardTab === "leads" ? "active" : ""}" id="adm-menu-leads">
          <i data-lucide="users"></i> Customer Leads
        </div>
      </aside>

      <!-- Main Dash -->
      <main class="dashboard-main-content">
        <div class="dashboard-header">
          <div>
            <span class="dashboard-subtitle">Executive Suite</span>
            <h1 class="dashboard-title">UrbanRise Desk Controls</h1>
          </div>
          <div style="display:flex; gap: 1rem; align-items:center;">
            <button class="btn btn-primary btn-sm" id="btn-admin-add-property" style="font-size: 0.85rem; padding: 0.5rem 1.5rem;">
              <i data-lucide="plus" style="width:16px;"></i> Add Property
            </button>
          </div>
        </div>

        <div id="admin-tab-content-panel">
          <!-- Tab content injected dynamically -->
        </div>
      </main>

      <!-- Add Property Slideout Overlay Drawer -->
      <div id="admin-add-property-panel" class="admin-panel-overlay">
        <div class="admin-panel-header">
          <h2 class="admin-panel-title">Add Property Entry</h2>
          <button class="btn-close-modal" id="btn-close-admin-panel"><i data-lucide="x"></i></button>
        </div>
        <form id="admin-add-property-form" class="sidebar-form">
          <div class="form-group">
            <label>Property Name</label>
            <input type="text" id="add-prop-name" placeholder="e.g. Royal Meadows" required>
          </div>
          <div style="display:grid; grid-template-columns: 1fr 1fr; gap:1rem;">
            <div class="form-group">
              <label>Typology</label>
              <select id="add-prop-type" required>
                <option value="Apartments">Apartments</option>
                <option value="Luxury Villas">Luxury Villas</option>
                <option value="Commercial Spaces">Commercial Spaces</option>
                <option value="Residential Plots">Residential Plots</option>
              </select>
            </div>
            <div class="form-group">
              <label>Locality (e.g. Baner, Pune)</label>
              <input type="text" id="add-prop-loc" placeholder="Baner, Pune" required>
            </div>
          </div>
          <div style="display:grid; grid-template-columns: 1fr 1fr; gap:1rem;">
            <div class="form-group">
              <label>Pricing (in Rupees, e.g. 12500000 for 1.25 Cr)</label>
              <input type="number" id="add-prop-price" placeholder="12500000" required>
            </div>
            <div class="form-group">
              <label>Area (e.g. 1,600 sq ft)</label>
              <input type="text" id="add-prop-area" placeholder="1,600 sq ft" required>
            </div>
          </div>
          <div style="display:grid; grid-template-columns: 1fr 1fr; gap:1rem;">
            <div class="form-group">
              <label>BHK Layout (Beds count)</label>
              <input type="number" id="add-prop-beds" placeholder="3" required>
            </div>
            <div class="form-group">
              <label>Bathrooms count</label>
              <input type="number" id="add-prop-baths" placeholder="3" required>
            </div>
          </div>
          <div class="form-group">
            <label>Mock Visual Asset</label>
            <select id="add-prop-img" required>
              <option value="assets/penthouse_nyc.png">Modern Apartment Mock Visual</option>
              <option value="assets/villa_palm.png">Luxury Villa Mock Visual</option>
              <option value="assets/beachfront_miami.png">Commercial Office Mock Visual</option>
              <option value="assets/chalet_zermatt.png">NA plot Mock Visual</option>
            </select>
          </div>
          <div class="form-group">
            <label>Narrative Description</label>
            <textarea id="add-prop-desc" rows="4" placeholder="Brief copy summarizing structural details..." required></textarea>
          </div>
          <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 1rem;">Add to Listing Desk</button>
        </form>
      </div>

    </div>
  `;

  container.innerHTML = dashboardHtml;
  renderAdminDashboardTabContent();

  document.getElementById("adm-menu-analytics").addEventListener("click", () => {
    activeAdminDashboardTab = "analytics";
    renderAdminDashboardView();
  });
  document.getElementById("adm-menu-properties").addEventListener("click", () => {
    activeAdminDashboardTab = "properties";
    renderAdminDashboardView();
  });
  document.getElementById("adm-menu-leads").addEventListener("click", () => {
    activeAdminDashboardTab = "leads";
    renderAdminDashboardView();
  });

  document.getElementById("btn-admin-add-property").addEventListener("click", () => {
    document.getElementById("admin-add-property-panel").classList.add("active");
  });
  document.getElementById("btn-close-admin-panel").addEventListener("click", () => {
    document.getElementById("admin-add-property-panel").classList.remove("active");
  });
  document.getElementById("admin-add-property-form").addEventListener("submit", handleAdminAddPropertySubmit);
}

function renderAdminDashboardTabContent() {
  const wrapper = document.getElementById("admin-tab-content-panel");
  if (!wrapper) return;

  if (activeAdminDashboardTab === "analytics") {
    const totalValuation = appState.properties.reduce((sum, p) => sum + p.priceNum, 0);
    const count = appState.properties.length;
    const leads = appState.inquiries.length;
    const visits = appState.visits.length;

    wrapper.innerHTML = `
      <div class="dashboard-stats-grid">
        <div class="dash-stat-card glassmorphism">
          <div class="dash-stat-info">
            <h4>Global Inventory</h4>
            <div class="dash-stat-val">${count} Listings</div>
            <div class="dash-stat-change positive"><i data-lucide="trending-up"></i> +1 added this week</div>
          </div>
          <div class="dash-stat-icon"><i data-lucide="building"></i></div>
        </div>

        <div class="dash-stat-card glassmorphism">
          <div class="dash-stat-info">
            <h4>Active Valuation</h4>
            <div class="dash-stat-val">${formatIndianPrice(totalValuation)}</div>
            <div class="dash-stat-change positive"><i data-lucide="trending-up"></i> Portfolio growth</div>
          </div>
          <div class="dash-stat-icon"><i data-lucide="dollar-sign"></i></div>
        </div>

        <div class="dash-stat-card glassmorphism">
          <div class="dash-stat-info">
            <h4>Registered Leads</h4>
            <div class="dash-stat-val">${leads} Active</div>
            <div class="dash-stat-change positive"><i data-lucide="trending-up"></i> +3 this week</div>
          </div>
          <div class="dash-stat-icon"><i data-lucide="users"></i></div>
        </div>

        <div class="dash-stat-card glassmorphism">
          <div class="dash-stat-info">
            <h4>Visits Booked</h4>
            <div class="dash-stat-val">${visits} Scheduled</div>
            <div class="dash-stat-change" style="color:var(--text-muted);">Verified tours</div>
          </div>
          <div class="dash-stat-icon"><i data-lucide="calendar"></i></div>
        </div>
      </div>

      <div class="dashboard-grid-2col equal">
        <div class="dash-block glassmorphism">
          <h3 class="dash-block-title">Outreach Metrics <span>Inquiries/Week</span></h3>
          <div class="chart-container" id="admin-chart-weekly">
            <div class="chart-bar-wrap">
              <div class="chart-bar-fill" id="chart1-col1" data-value="12"></div>
              <span class="chart-bar-label">Wk 21</span>
            </div>
            <div class="chart-bar-wrap">
              <div class="chart-bar-fill" id="chart1-col2" data-value="19"></div>
              <span class="chart-bar-label">Wk 22</span>
            </div>
            <div class="chart-bar-wrap">
              <div class="chart-bar-fill" id="chart1-col3" data-value="26"></div>
              <span class="chart-bar-label">Wk 23</span>
            </div>
            <div class="chart-bar-wrap">
              <div class="chart-bar-fill" id="chart1-col4" data-value="35"></div>
              <span class="chart-bar-label">Wk 24</span>
            </div>
          </div>
        </div>

        <div class="dash-block glassmorphism">
          <h3 class="dash-block-title">Inventory Splits <span>Classification Value</span></h3>
          <div class="chart-container" id="admin-chart-val">
            <div class="chart-bar-wrap">
              <div class="chart-bar-fill" id="chart2-col1" data-value="2.03 Cr"></div>
              <span class="chart-bar-label">Apartments</span>
            </div>
            <div class="chart-bar-wrap">
              <div class="chart-bar-fill" id="chart2-col2" data-value="2.80 Cr"></div>
              <span class="chart-bar-label">Villas</span>
            </div>
            <div class="chart-bar-wrap">
              <div class="chart-bar-fill" id="chart2-col3" data-value="95 L"></div>
              <span class="chart-bar-label">Commercial</span>
            </div>
            <div class="chart-bar-wrap">
              <div class="chart-bar-fill" id="chart2-col4" data-value="3.20 Cr"></div>
              <span class="chart-bar-label">Plots</span>
            </div>
          </div>
        </div>
      </div>
    `;

    setTimeout(() => {
      const col1 = document.getElementById("chart1-col1");
      const col2 = document.getElementById("chart1-col2");
      const col3 = document.getElementById("chart1-col3");
      const col4 = document.getElementById("chart1-col4");

      if (col1) col1.style.height = "35%";
      if (col2) col2.style.height = "55%";
      if (col3) col3.style.height = "75%";
      if (col4) col4.style.height = "95%";

      const val1 = document.getElementById("chart2-col1");
      const val2 = document.getElementById("chart2-col2");
      const val3 = document.getElementById("chart2-col3");
      const val4 = document.getElementById("chart2-col4");

      if (val1) val1.style.height = "63%";
      if (val2) val2.style.height = "87%";
      if (val3) val3.style.height = "30%";
      if (val4) val4.style.height = "100%";
    }, 100);

  } else if (activeAdminDashboardTab === "properties") {
    let html = `
      <div class="dash-block glassmorphism">
        <h3 class="dash-block-title">Active Property Database</h3>
        
        <div class="admin-table-wrap">
          <table class="admin-table">
            <thead>
              <tr>
                <th>Property</th>
                <th>Category</th>
                <th>Locality</th>
                <th>Price</th>
                <th>Specifications</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
    `;

    appState.properties.forEach(prop => {
      html += `
        <tr>
          <td>
            <div class="admin-prop-cell">
              <img src="${prop.image}" class="admin-prop-img">
              <span style="font-weight:600; color:var(--text-primary);">${prop.name}</span>
            </div>
          </td>
          <td>${prop.type}</td>
          <td>${prop.location}</td>
          <td style="color:var(--accent); font-weight:600;">${prop.price}</td>
          <td style="font-size:0.8rem; color:var(--text-muted);">${prop.bedrooms > 0 ? prop.bedrooms + " BHK" : "Office"} / ${prop.area}</td>
          <td>
            <div class="admin-actions-cell">
              <button class="btn-admin-action edit" onclick="showToast('Edit mode locked for demo.', 'info')">Edit</button>
              <button class="btn-admin-action delete" onclick="deleteProperty(${prop.id})">Delete</button>
            </div>
          </td>
        </tr>
      `;
    });

    html += `
            </tbody>
          </table>
        </div>
      </div>
    `;

    wrapper.innerHTML = html;

  } else if (activeAdminDashboardTab === "leads") {
    let html = `
      <div class="dash-block glassmorphism">
        <h3 class="dash-block-title">Active Buyer Leads</h3>
        
        <div class="lead-list">
    `;

    appState.inquiries.forEach(lead => {
      const isVisit = lead.type.toLowerCase().includes("visit");
      html += `
        <div class="lead-item">
          <div class="lead-info-main">
            <h5>${lead.name}</h5>
            <p>Email: <span style="color:var(--text-primary);">${lead.email}</span> | Phone: <span style="color:var(--text-primary);">${lead.phone}</span></p>
            <p style="margin-top:0.4rem; color:var(--accent); font-size:0.8rem; font-weight:600;">Requirement: ${lead.property}</p>
            <div class="lead-msg">"${lead.message}"</div>
          </div>
          <div class="lead-meta">
            <span class="lead-date">${lead.date}</span>
            <div>
              <span class="lead-tag ${isVisit ? "visit" : "inquiry"}">${lead.type}</span>
            </div>
            <button class="btn btn-outline btn-sm" onclick="showToast('Lead archived.', 'info')" style="font-size:0.7rem; padding:0.3rem 0.8rem; margin-top:0.8rem; border-color:rgba(255,255,255,0.1); color:var(--text-muted);">
              Archive
            </button>
          </div>
        </div>
      `;
    });

    html += `
        </div>
      </div>
    `;

    wrapper.innerHTML = html;
  }

  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
}

// Admin Action Handler: Delete Property
window.deleteProperty = function(id) {
  const index = appState.properties.findIndex(p => p.id === id);
  if (index > -1) {
    const name = appState.properties[index].name;
    appState.properties.splice(index, 1);
    showToast(`Property "${name}" removed.`, "info");
    renderAdminDashboardView();
  }
};

// Admin Action: Add Property Submit
function handleAdminAddPropertySubmit(e) {
  e.preventDefault();
  
  const name = document.getElementById("add-prop-name").value.trim();
  const type = document.getElementById("add-prop-type").value;
  const location = document.getElementById("add-prop-loc").value.trim();
  const priceNum = parseInt(document.getElementById("add-prop-price").value);
  const area = document.getElementById("add-prop-area").value.trim();
  const bedrooms = parseInt(document.getElementById("add-prop-beds").value);
  const bathrooms = parseInt(document.getElementById("add-prop-baths").value);
  const image = document.getElementById("add-prop-img").value;
  const description = document.getElementById("add-prop-desc").value.trim();

  const newProperty = {
    id: Date.now(),
    name,
    type,
    location,
    locationShort: location.split(",")[0].trim(),
    priceNum,
    price: formatIndianPrice(priceNum),
    bedrooms,
    bathrooms,
    area,
    description,
    image,
    featured: false,
    coords: { x: 30 + Math.random() * 40, y: 30 + Math.random() * 40 },
    features: ["Demarcated Property Boundary", "24/7 Power Support", "Clear Land Title"]
  };

  appState.properties.unshift(newProperty);
  showToast(`Success! "${name}" added to Pune listings database.`, "success");

  document.getElementById("admin-add-property-form").reset();
  document.getElementById("admin-add-property-panel").classList.remove("active");

  renderAdminDashboardView();
}
