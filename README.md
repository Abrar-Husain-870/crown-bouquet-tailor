# Crown Bouquet Ladies Tailor — Digital Visiting Card

A luxury, mobile-first, single-screen digital visiting card website for **Crown Bouquet Ladies Tailor**, Lucknow.

Designed for instant customer engagement via QR codes on physical business cards.

---

## 🌟 Live Preview & Key Features

- **Single-Screen (100dvh) Viewport Fit**: Optimized to present all essential information on mobile screens without requiring scrolling, complete with a controlled scroll fallback.
- **Reference-Accurate Boutique Aesthetic**: Styled with inspiration from high-end bespoke tailoring studios (deep wine plum `#6A223D`, warm gold `#C69255`, ivory linen backgrounds, and fine botanical filigree).
- **Instant 1-Tap Actions**:
  - 📞 **CALL NOW**: Dial `+91 7379012111` directly.
  - 💬 **WHATSAPP**: One-tap pre-composed message via official `wa.me` protocol.
  - 📍 **DIRECTIONS**: Google Maps navigation to *Shop No. 35 Arohi Plaza, Patrkar Puram, Gomti Nagar, Lucknow*.
  - 📸 **INSTAGRAM**: Direct connection to `@tajquraishi5`.
  - 📇 **SAVE CONTACT**: Generates and downloads a complete `.vcf` vCard into the customer's phone contacts.
  - 🔗 **SHARE CARD**: Native Web Share API with instant link copying fallback.

---

## 🏢 Business Details Included

- **Shop Name**: CROWN BOUQUET LADIES TAILOR
- **Owner**: Taj Qureshi (Master Designer & Tailor)
- **Specialization**: Hand & Machine Embroidery, Designer Lachas & Salwar Suits
- **Address**: SHOP NO. 35 AROHI PLAZA, PATRKAR PURAM, GOMTI NAGAR, LUCKNOW
- **Contact Number**: 7379012111
- **Instagram**: [tajquraishi5](https://www.instagram.com/tajquraishi5?lqvp=aG15cDF3enppdTM2)

---

## ✏️ How to Update Business Information

All shop information is managed from a single source of truth in [script.js](file:///c:/Users/husai/CROWN%20BOUQUET%20LADIES%20TAILOR/script.js):

```javascript
const shopDetails = {
    name: "CROWN BOUQUET",
    subtitle: "LADIES TAILOR",
    category: "Boutique & Designer Studio",
    tagline: "Specialist: All Types of Hand & Machine Embroidery, Lachas & Salwar Suits.",
    ownerName: "Taj Qureshi",
    phone: "+917379012111",
    displayPhone: "7379012111",
    whatsappNumber: "917379012111",
    instagramId: "tajquraishi5",
    address: "SHOP NO. 35 AROHI PLAZA, PATRKAR PURAM, GOMTI NAGAR, LUCKNOW",
    mapsUrl: "https://maps.app.goo.gl/cKu2MEqh7qFryR7F7",
    // ...
};
```

Any modification to `shopDetails` automatically updates the entire website, phone links, maps navigation, and vCard downloads.

---

## ⚙️ Netlify Environment Variables (Change links without editing code)

You can configure and change your links anytime from the Netlify Dashboard (**Project configuration > Environment variables**):

| Variable Key | Description | Default Fallback Value |
| :--- | :--- | :--- |
| `MAPS_URL` | Google Maps location URL | `https://maps.app.goo.gl/cKu2MEqh7qFryR7F7` |
| `INSTAGRAM_URL` | Full Instagram profile URL | `https://www.instagram.com/tajquraishi5?lqvp=aG15cDF3enppdTM2` |
| `INSTAGRAM_ID` | Instagram username handle | `tajquraishi5` |
| `PHONE_NUMBER` | Contact phone with country code | `+917379012111` |
| `DISPLAY_PHONE` | Formatted phone number | `7379012111` |
| `WHATSAPP_NUMBER` | WhatsApp digits only | `917379012111` |
| `WHATSAPP_MESSAGE` | Pre-filled greeting message | `Hello! I would like to inquire about your services.` |
| `SHOP_ADDRESS` | Shop address text | `SHOP NO. 35 AROHI PLAZA, PATRKAR PURAM, GOMTI NAGAR, LUCKNOW` |

If any variable is omitted or left blank, the website automatically falls back to its current default value.

---

## 🚀 Deployment to Netlify (Free Static Hosting)

This project works both as a pure static site (Drag & Drop) and with Netlify Builds / Functions.

### Option 1: Drag & Drop (Instant)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag and drop the `CROWN BOUQUET LADIES TAILOR` folder into the Netlify drop zone.
3. Your digital visiting card will be live with HTTPS.

### Option 2: Git Repository (Enables automatic Environment Variable builds)
1. Push this folder to GitHub / GitLab.
2. Link the repository in Netlify (Netlify detects `netlify.toml` automatically: Build command `node build.js`, Publish directory `.`).
3. Whenever you update an environment variable in Netlify, triggering a deploy instantly updates your website without modifying code!

