/**
 * =========================================================================
 * CROWN BOUQUET LADIES TAILOR - DIGITAL VISITING CARD CONFIGURATION
 * =========================================================================
 * SINGLE SOURCE OF TRUTH:
 * Update any business details, contact numbers, address or services below.
 * The entire website updates automatically.
 * =========================================================================
 */

const shopDetails = {
    // A. Shop Branding
    name: "CROWN BOUQUET",
    subtitle: "LADIES TAILOR",
    category: "Boutique & Designer Studio",
    tagline: "Specialist: All Types of Hand & Machine Embroidery, Lachas & Salwar Suits.",
    shortBio: "Crafting bespoke bridal lachas, intricate designer embroidery, and flattering salwar suits with timeless boutique perfection.",

    // B. Business & Owner Information
    ownerName: "Taj Qureshi",
    ownerTitle: "Master Designer & Tailor",
    phone: "+917379012111",           // Used for tel: link (international format)
    displayPhone: "7379012111",        // Display format shown to customers
    whatsappNumber: "917379012111",    // Digits only with country code
    whatsappMessage: "Hello! I would like to inquire about your services.",
    instagramId: "tajquraishi5",
    instagramUrl: "https://www.instagram.com/tajquraishi5?lqvp=aG15cDF3enppdTM2",

    // C. Shop Location & Maps
    address: "SHOP NO. 35 AROHI PLAZA, PATRKAR PURAM, GOMTI NAGAR, LUCKNOW",
    shortAddress: "Shop 35, Arohi Plaza, Patrkar Puram, Gomti Nagar, Lucknow",
    cityState: "Lucknow, Uttar Pradesh",
    landmark: "Patrkar Puram Crossing",
    // Verified Google Maps Location Share URL
    mapsUrl: "https://maps.app.goo.gl/cKu2MEqh7qFryR7F7",

    // D. Additional Business Details
    gst: "", // Leave blank if not available (will hide automatically)
    timings: "11:00 AM – 9:00 PM (All 7 Days)",

    // E. Services & Specialties
    services: [
        {
            title: "Hand Embroidery",
            desc: "Zardozi, Aari & threadwork",
            badge: "Specialist",
            icon: "needle"
        },
        {
            title: "Machine Embroidery",
            desc: "Precision designer patterns",
            badge: "Specialist",
            icon: "machine"
        },
        {
            title: "Designer Lachas",
            desc: "Bridal & festive lehengas",
            badge: "Signature",
            icon: "dress"
        },
        {
            title: "Salwar Suits",
            desc: "Anarkali, Pakistani & Straight",
            badge: "Custom Fit",
            icon: "suit"
        },
        {
            title: "Designer Blouses",
            desc: "Padded, Dori & Sabyasachi cuts",
            badge: "Popular",
            icon: "scissors"
        },
        {
            title: "Custom Alterations",
            desc: "Flawless refitting & sizing",
            badge: "Quick Service",
            icon: "measuring"
        }
    ]
};

// =========================================================================
// SVG ICON LIBRARY (Crisp, vector icons matching boutique aesthetic)
// =========================================================================
const iconLibrary = {
    needle: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 19.5L19 5M19 5c1-1 2.5.5 1.5 1.5L6 21l-3.5.5.5-3.5L19 5z"/><path d="M16 8l-2-2"/></svg>`,
    machine: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="14" width="18" height="6" rx="2"/><path d="M5 14V6a2 2 0 0 1 2-2h8a4 4 0 0 1 4 4v6"/><circle cx="16" cy="9" r="2"/><line x1="9" y1="14" x2="9" y2="10"/></svg>`,
    dress: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3l3 2 3-2v3l4 3-2 12H7L5 9l4-3V3z"/><path d="M9 12a3 3 0 0 0 6 0"/></svg>`,
    suit: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12l2 6-4 2-1-3-3 4-3-4-1 3-4-2 2-6z"/><path d="M8 12v9h8v-9"/></svg>`,
    scissors: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></svg>`,
    measuring: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="18" height="10" rx="2"/><line x1="7" y1="7" x2="7" y2="11"/><line x1="11" y1="7" x2="11" y2="12"/><line x1="15" y1="7" x2="15" y2="11"/><line x1="19" y1="7" x2="19" y2="12"/></svg>`,
    phone: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
    whatsapp: `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12.04 2c-5.5 0-9.97 4.47-9.97 9.97 0 1.76.46 3.48 1.34 5L2 22l5.22-1.37a9.96 9.96 0 0 0 4.82 1.23h.01c5.5 0 9.97-4.47 9.97-9.97 0-2.66-1.04-5.16-2.92-7.04A9.91 9.91 0 0 0 12.04 2zm0 18.23c-1.5 0-2.96-.4-4.24-1.16l-.3-.18-3.15.83.84-3.07-.2-.32a8.23 8.23 0 0 1-1.26-4.36c0-4.57 3.72-8.29 8.3-8.29 2.21 0 4.29.86 5.86 2.43 1.56 1.57 2.42 3.65 2.42 5.87 0 4.58-3.72 8.3-8.31 8.3zm4.55-6.22c-.25-.13-1.48-.73-1.71-.81-.23-.08-.39-.13-.56.13-.16.25-.64.81-.79.97-.14.16-.29.18-.54.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.48-1.38-1.73-.14-.25-.01-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.16 0-.42.06-.64.3-.23.25-.87.85-.87 2.08 0 1.23.89 2.42 1.02 2.59.13.16 1.76 2.69 4.27 3.77.6.26 1.07.41 1.43.53.6.2 1.15.17 1.58.11.48-.07 1.48-.6 1.69-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.3z"/></svg>`,
    maps: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
    instagram: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
    share: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>`,
    copy: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`,
    check: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
    contactCard: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`
};

// =========================================================================
// APPLICATION INITIALIZATION & DOM HYDRATION
// =========================================================================
document.addEventListener("DOMContentLoaded", () => {
    // 1. Apply environment variables from Netlify (via env-config.js or fallback)
    if (window.__ENV__) {
        applyEnvOverrides(window.__ENV__);
    }
    hydrateShopData();
    setupActions();
    setupMobileHeightCorrection();

    // 2. Check for dynamic runtime updates via Netlify serverless function (if deployed)
    fetchDynamicNetlifyConfig();
});

/**
 * Applies environment variables from Netlify or window.__ENV__
 */
function applyEnvOverrides(env) {
    if (!env) return;
    if (env.MAPS_URL && env.MAPS_URL.trim()) shopDetails.mapsUrl = env.MAPS_URL.trim();
    if (env.INSTAGRAM_URL && env.INSTAGRAM_URL.trim()) shopDetails.instagramUrl = env.INSTAGRAM_URL.trim();
    if (env.INSTAGRAM_ID && env.INSTAGRAM_ID.trim()) shopDetails.instagramId = env.INSTAGRAM_ID.trim();
    if (env.PHONE_NUMBER && env.PHONE_NUMBER.trim()) shopDetails.phone = env.PHONE_NUMBER.trim();
    if (env.DISPLAY_PHONE && env.DISPLAY_PHONE.trim()) shopDetails.displayPhone = env.DISPLAY_PHONE.trim();
    if (env.WHATSAPP_NUMBER && env.WHATSAPP_NUMBER.trim()) shopDetails.whatsappNumber = env.WHATSAPP_NUMBER.trim().replace(/\D/g, '');
    if (env.WHATSAPP_MESSAGE && env.WHATSAPP_MESSAGE.trim()) shopDetails.whatsappMessage = env.WHATSAPP_MESSAGE.trim();
    if (env.SHOP_ADDRESS && env.SHOP_ADDRESS.trim()) shopDetails.address = env.SHOP_ADDRESS.trim();
}

/**
 * Attempts to fetch live Netlify function configuration
 */
function fetchDynamicNetlifyConfig() {
    fetch('/.netlify/functions/config')
        .then(res => (res.ok ? res.json() : null))
        .then(liveEnv => {
            if (liveEnv) {
                applyEnvOverrides(liveEnv);
                hydrateShopData();
            }
        })
        .catch(() => {
            // Silently keep default/static values when offline or running locally
        });
}

/**
 * Hydrates DOM elements with data from shopDetails
 */
function hydrateShopData() {
    // 1. Text elements
    setText("shop-name-title", `${shopDetails.name}`);
    setText("shop-sub-title", shopDetails.subtitle);
    setText("shop-category-badge", shopDetails.category);
    setText("specialist-text", shopDetails.tagline);
    setText("contact-phone-val", shopDetails.displayPhone);
    setText("instagram-handle-val", `@${shopDetails.instagramId}`);
    setText("shop-address-text", shopDetails.address);
    setText("owner-info-text", `${shopDetails.ownerName} • ${shopDetails.ownerTitle}`);
    setText("copyright-year", new Date().getFullYear());
    setText("copyright-shop-name", `${shopDetails.name} ${shopDetails.subtitle}`);

    // GST visibility
    const gstContainer = document.getElementById("gst-info-row");
    if (gstContainer) {
        if (shopDetails.gst && shopDetails.gst.trim().length > 0) {
            gstContainer.style.display = "flex";
            setText("gst-val", shopDetails.gst);
        } else {
            gstContainer.style.display = "none";
        }
    }

    // 2. Action Links
    const callBtn = document.getElementById("btn-call");
    if (callBtn) {
        callBtn.href = `tel:${shopDetails.phone}`;
        callBtn.setAttribute("aria-label", `Call ${shopDetails.name} at ${shopDetails.displayPhone}`);
    }

    const whatsappBtn = document.getElementById("btn-whatsapp");
    if (whatsappBtn) {
        const encodedMsg = encodeURIComponent(shopDetails.whatsappMessage);
        whatsappBtn.href = `https://wa.me/${shopDetails.whatsappNumber}?text=${encodedMsg}`;
        whatsappBtn.setAttribute("aria-label", `Chat on WhatsApp with ${shopDetails.name}`);
    }

    const mapsBtn = document.getElementById("btn-directions");
    if (mapsBtn) {
        mapsBtn.href = shopDetails.mapsUrl;
        mapsBtn.setAttribute("aria-label", `Get directions to ${shopDetails.shortAddress} on Google Maps`);
    }

    const instaBtn = document.getElementById("btn-instagram");
    if (instaBtn) {
        instaBtn.href = shopDetails.instagramUrl;
        instaBtn.setAttribute("aria-label", `Visit Instagram profile @${shopDetails.instagramId}`);
    }

    // Address link to maps
    const addressLink = document.getElementById("address-card-link");
    if (addressLink) {
        addressLink.href = shopDetails.mapsUrl;
    }

    // 3. Render Services Grid
    renderServicesList();
}

/**
 * Safely sets text content of an element by ID
 */
function setText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
}

/**
 * Renders the compact, elegant services chips / cards
 */
function renderServicesList() {
    const container = document.getElementById("services-grid-container");
    if (!container) return;

    container.innerHTML = "";
    shopDetails.services.forEach(srv => {
        const chip = document.createElement("div");
        chip.className = "service-chip";
        const iconSvg = iconLibrary[srv.icon] || iconLibrary.needle;

        chip.innerHTML = `
            <span class="service-chip-icon">${iconSvg}</span>
            <div class="service-chip-content">
                <span class="service-chip-title">${srv.title}</span>
                <span class="service-chip-tag">${srv.badge}</span>
            </div>
        `;
        container.appendChild(chip);
    });
}

/**
 * Sets up button clicks, copy-to-clipboard, share, and vCard download
 */
function setupActions() {
    // Copy Address Button
    const copyAddrBtn = document.getElementById("btn-copy-address");
    if (copyAddrBtn) {
        copyAddrBtn.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            copyTextToClipboard(shopDetails.address, "Address copied to clipboard!");
        });
    }

    // Save Contact (vCard)
    const saveContactBtn = document.getElementById("btn-save-contact");
    if (saveContactBtn) {
        saveContactBtn.addEventListener("click", (e) => {
            e.preventDefault();
            downloadVCard();
        });
    }

    // Share Button
    const shareBtn = document.getElementById("btn-share-card");
    if (shareBtn) {
        shareBtn.addEventListener("click", (e) => {
            e.preventDefault();
            shareVisitingCard();
        });
    }
}

/**
 * Copies text with visual toast feedback
 */
function copyTextToClipboard(text, successMsg) {
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(() => {
            showToast(successMsg);
        }).catch(() => {
            fallbackCopy(text, successMsg);
        });
    } else {
        fallbackCopy(text, successMsg);
    }
}

function fallbackCopy(text, successMsg) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
        document.execCommand("copy");
        showToast(successMsg);
    } catch (err) {
        showToast("Copied to clipboard!");
    }
    document.body.removeChild(textArea);
}

/**
 * Shows a stylish, non-intrusive toast notification
 */
function showToast(message) {
    let toast = document.getElementById("toast-notification");
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "toast-notification";
        toast.className = "toast-popup";
        document.body.appendChild(toast);
    }

    toast.innerHTML = `${iconLibrary.check} <span>${message}</span>`;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2400);
}

/**
 * Generates and triggers download of a standardized vCard (.vcf)
 * so customers can immediately save the shop in their phone contacts!
 */
function downloadVCard() {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${shopDetails.name} ${shopDetails.subtitle}
N:Tailor;Crown;Bouquet;;
ORG:${shopDetails.name} ${shopDetails.subtitle}
TITLE:${shopDetails.tagline}
TEL;TYPE=WORK,VOICE:${shopDetails.phone}
TEL;TYPE=CELL,VOICE:${shopDetails.phone}
ADR;TYPE=WORK:;;${shopDetails.address};Lucknow;UP;;India
NOTE:Owner: ${shopDetails.ownerName} | Instagram: @${shopDetails.instagramId} | ${shopDetails.tagline}
URL:${shopDetails.instagramUrl}
END:VCARD`;

    const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const downloadLink = document.createElement("a");
    downloadLink.href = url;
    downloadLink.setAttribute("download", `Crown-Bouquet-Ladies-Tailor.vcf`);
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    URL.revokeObjectURL(url);
    showToast("Contact card downloaded!");
}

/**
 * Native Web Share API with clipboard fallback
 */
function shareVisitingCard() {
    const shareData = {
        title: `${shopDetails.name} ${shopDetails.subtitle}`,
        text: `${shopDetails.name} ${shopDetails.subtitle}\n${shopDetails.tagline}\n📞 Contact: ${shopDetails.displayPhone}\n📍 ${shopDetails.shortAddress}`,
        url: window.location.href
    };

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
        navigator.share(shareData).catch(() => {});
    } else {
        copyTextToClipboard(window.location.href, "Card link copied to clipboard!");
    }
}

/**
 * Dynamic viewport height calculation (Only on load & orientation, never on scroll resize)
 */
function setupMobileHeightCorrection() {
    const setHeight = () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    setHeight();
    // Do NOT listen to 'resize' event: it fires repeatedly on mobile scroll as URL bar hides, causing lag!
    window.addEventListener("orientationchange", setHeight);
}

