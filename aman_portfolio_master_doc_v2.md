# Aman Sharma — Portfolio Website Master Document v2
### Complete Blueprint: AI Prompt + Real Projects + Exact Copy
> Built from: Resume (April 2026) + GitHub (github.com/89Aman) — All data is real, no placeholders.

---

## SECTION 1: MASTER AI PROMPT

Use this verbatim in **v0.dev**, **Lovable**, **Bolt**, **Cursor**, or any AI website builder.

---

```
Build a professional developer portfolio website for Aman Sharma — a Python Developer and aspiring ML Engineer from Raipur, Chhattisgarh, India. He specializes in FastAPI backends, RAG/LLM systems, and cloud-native apps on GCP and AWS.

Portfolio site: www.amanmlworks.xyz
GitHub: github.com/89Aman
LinkedIn: linkedin.com/in/sharmaaman26
Email: shasarita23@gmail.com

=== DESIGN SYSTEM ===
Theme: Dark mode default with light mode toggle
Art direction: "Precision ML lab" — deep tech, data-driven, clean and dense
Primary background: #0D0D12
Surface: #13131A
Card background: #1A1A24
Primary accent: #4F98A3 (muted teal — signals GCP/cloud/AI without screaming startup)
Highlight: #6DBF8F (soft green for success states, certifications, and badges)
Text primary: #CDCCCA
Text muted: #797876
Font display: "Cabinet Grotesk" (Fontshare) — for headings, hero, section titles
Font body: "Satoshi" (Fontshare) — for all body text, cards, UI
Font mono: "JetBrains Mono" (Google Fonts) — tech stack badges, code snippets, terminal text
Border radius: 8px cards, 4px inputs/badges
Shadow: subtle dark glow using accent color at 8% opacity

=== PAGE SECTIONS (STRICT ORDER) ===

--- 1. NAVBAR (sticky, glassmorphism blur) ---
Left: SVG logo "aman.dev" in JetBrains Mono
Center nav links: About | Projects | Skills | Certifications | Contact
Right: [Let's Talk →] button (teal accent) + GitHub icon + LinkedIn icon
Mobile: hamburger that expands to full-screen overlay nav

--- 2. HERO SECTION (full viewport height) ---
Layout: left-heavy asymmetric split (60/40)
Left column (text):
  - Small tag in monospace: `< Python Dev & ML Engineer />`
  - H1 (Cabinet Grotesk, --text-hero): "Aman Sharma"
  - H2 (animated typewriter, --text-xl): cycles through:
      "RAG Systems Builder"
      "FastAPI Backend Engineer"
      "Cloud-Native Developer"
      "GCP + AWS Practitioner"
  - One-liner: "I build intelligent backends — from semantic search engines to conversational AI systems, deployed production-ready on GCP and AWS."
  - Two CTA buttons:
      [View Projects ↓]  (primary, teal)
      [Download Resume]  (ghost, outline)
  - Social row: GitHub | LinkedIn | Email | ORCID
Right column:
  - Terminal-style animated card showing a fake "aman --status" command output:
      $ aman --status
      > Name:     Aman Sharma
      > Role:     Python Dev & ML Engineer
      > Location: Raipur, CG, India
      > Stack:    FastAPI · GCP · Gemini AI · RAG
      > Status:   Open to internships & collabs
      > Org:      Noventra-labs
      [blinking cursor]

--- 3. ABOUT SECTION ---
Section heading: "About Me"
Two-column layout:
  Left: Profile photo with subtle teal glow border animation on hover
  Right: Bio paragraph (see Section 2.2 for exact copy)
Below bio: Four stat cards in a row:
  "3 Major Projects" | "4 Certifications" | "24 GitHub Repos" | "2 Cloud Platforms"
Below stats: Values row of pill badges:
  RAG / LLMs · FastAPI · GCP · AWS · Docker · ML Engineering · Open Source · Hackathons

--- 4. SKILLS SECTION ---
Section heading: "Tech Stack"
Layout: tabbed card groups (tabs switch categories without page scroll)

Tab "Languages":
  Python ██████████ Expert
  SQL     ███████░░░ Intermediate
  Dart    ████░░░░░░ Learning
  TypeScript ████░░░░░░ Learning

Tab "Frameworks & Libraries":
  FastAPI · Angular 17 · Flutter · Flask
  PyTorch · scikit-learn · Pandas · NumPy · sentence-transformers

Tab "Cloud & DevOps":
  Google Cloud Platform (Cloud Run, Vertex AI)
  AWS (EC2, S3, Lambda)
  Docker · GitHub Actions · Linux

Tab "AI / ML":
  RAG Architectures · Semantic Search · Gemini AI · ChromaDB
  Supervised Learning · Neural Networks · Model Training · LangChain

Tab "Databases":
  PostgreSQL · MongoDB · MySQL · ChromaDB · Supabase

Tab "APIs & Tools":
  Google Gemini API · REST APIs · Postman · Git · GitHub · Authlib · JWT

Each skill: icon + name + proficiency bar (for languages) or clean badge (for tools)
Skill badges: subtle shimmer on hover, teal border

--- 5. PROJECTS SECTION ---
Section heading: "Featured Projects"
Filter bar: [All] [AI/ML] [Full-Stack] [Cloud] [Hackathon]
Layout: 3-column card grid on desktop, 1-column on mobile
Each card: title, 2-line description, tech badges, GitHub link icon, Live Demo button (if available), project category tag

FEATURED (pinned top row):
  Card 1: Knowledge Vault
  Card 2: CampusFix
  Card 3: RAG-DEMO

SECOND ROW:
  Card 4: SkillSnap
  Card 5: Fullstack Movie Recommendation System
  Card 6: Material Demand Forecasting

THIRD ROW:
  Card 7: Text Classification Model
  Card 8: SortViz
  Card 9: Library Management System

(See Section 3 for complete project details for each card)

"View All on GitHub →" button below grid → github.com/89Aman

--- 6. CERTIFICATIONS SECTION ---
Section heading: "Certifications"
Layout: 2×2 certification cards with issuer logo, cert name, date
Cards:
  1. AWS Generative AI — AWS (Cloud Technology & Services Concepts)
  2. MongoDB Python Developer Path — MongoDB University
  3. API Fundamentals Student Expert — Postman
  4. Supervised Learning with scikit-learn — DataCamp

Each card: issuer logo + cert title + "Verified ✓" badge in green

--- 7. JOURNEY / TIMELINE SECTION ---
Section heading: "Journey"
Vertical timeline, left-aligned line, cards to the right
(See Section 2.5 for timeline entries)

--- 8. CONTACT SECTION ---
Section heading: "Let's Build Together"
Left column: warm copy + direct contact links (see Section 2.4)
Right column: contact form
  Fields: Name | Email | Subject | Message
  Button: [Send Message →] in teal

--- 9. FOOTER ---
Left: SVG logo + tagline "Building intelligent systems, one commit at a time."
Center: Quick nav links
Right: Social icons
Bottom bar: "© 2026 Aman Sharma · Built with FastAPI + React ♥ · Raipur, India"

=== TECHNICAL REQUIREMENTS ===
Framework: React + Vite OR Next.js 14
Styling: TailwindCSS + shadcn/ui
Animations: Framer Motion — scroll-triggered card reveals, typewriter in hero, terminal animation
Performance: Lazy loading images, code splitting, LCP < 1.5s
Fonts via Fontshare CDN: Cabinet Grotesk + Satoshi
Mono font via Google Fonts: JetBrains Mono
Deploy: Vercel (connect github.com/89Aman/Portfolio)
Domain: www.amanmlworks.xyz (already owned)

=== INTERACTION DETAILS ===
- Scroll progress bar at top of viewport
- Cards: lift + teal glow on hover (box-shadow with accent color)
- Skill badges: shimmer scan animation on hover
- Project filter: smooth CSS transition when filtering cards (no layout shift)
- Hero terminal: typewriter animation for the fake CLI output, blinking cursor
- Hero H2: typewriter cycling through roles (erase + retype every 3s)
- Dark/light toggle: sun/moon in navbar top-right
- Loading screen: terminal "booting..." → fade to hero

=== TONE & PERSONALITY ===
Precise, technical, confident. The design itself communicates "I build production systems, not just tutorials."
No gradient blobs, no glowing orbs, no purple gradients. Clean surfaces, teal accent, terminal energy.
```

---

## SECTION 2: EXACT COPY — TEXT FOR EVERY SECTION

### 2.1 HERO ONE-LINER
Place directly below the H2 typewriter, above CTA buttons.

> "I build intelligent backends — from semantic search engines to conversational AI systems, deployed production-ready on GCP and AWS."

---

### 2.2 ABOUT ME PARAGRAPH
Place in the right column of the About section.

> Hi, I'm Aman — a Python Developer and aspiring ML Engineer from Raipur, Chhattisgarh. I'm currently pursuing a Bachelor's in Computer Applications at Disha College (2024–2027) and building real-world AI systems in parallel. My work focuses on RAG architectures, semantic search, and full-stack backends using FastAPI, deployed on Google Cloud Platform and AWS.
>
> I co-founded **Noventra Labs** and regularly compete in hackathons — including Parivesh 3.0 at IIIT Naya Raipur's e-summit and The Forge hackathon. I'm certified in AWS Generative AI, MongoDB, Postman, and ML fundamentals, and I'm always working toward the next meaningful project.

---

### 2.3 STAT CARDS
4 cards in a horizontal row below the about paragraph.

| Icon | Value | Label |
|------|-------|-------|
| 🛠️ | 3+ | Major Projects |
| 🏆 | 4 | Certifications |
| 🐙 | 24 | GitHub Repos |
| ☁️ | 2 | Cloud Platforms (GCP + AWS) |

---

### 2.4 CONTACT SECTION COPY
Place in the left column of the contact section.

> Whether you want to collaborate on an AI project, need a Python/FastAPI developer for a hackathon team, want to discuss RAG architectures and LLM systems, or have an internship opportunity — I'm always open.
>
> 📧 shasarita23@gmail.com
> 🐙 github.com/89Aman
> 💼 linkedin.com/in/sharmaaman26
> 🌐 www.amanmlworks.xyz

---

### 2.5 JOURNEY TIMELINE ENTRIES
Ordered newest → oldest. Place in the Journey section.

**Entry 1 (Most Recent)**
- **Title**: Smart Resource Allocation
- **Type**: Active Development
- **Date**: April 2026
- **Bullets**:
  - Building private resource allocation system in Dart/Flutter
  - Exploring optimization algorithms for resource scheduling
  - Part of Noventra Labs product suite

**Entry 2**
- **Title**: CampusFix — GDG Solution Challenge
- **Type**: Hackathon / GDG Competition
- **Date**: January 2026
- **Bullets**:
  - Built a smart campus facility management platform for GDG Solution Challenge
  - Full-stack: FastAPI backend (500+ concurrent requests), Flutter mobile app, Angular 17 admin dashboard
  - Deployed on GCP Cloud Run with OAuth 2.0, JWT, Supabase PostgreSQL

**Entry 3**
- **Title**: Knowledge Vault — Semantic Search Engine
- **Type**: Personal Project
- **Date**: February 2026
- **Bullets**:
  - Engineered production-grade RAG pipeline with 384-dimensional sentence-transformer embeddings
  - Hybrid scoring algorithm improved search relevance 40% over baseline cosine distance
  - Deployed microservices on GCP Cloud Run, <200ms query response times

**Entry 4**
- **Title**: SkillSnap — The Forge Hackathon
- **Type**: Hackathon (1st Problem Statement)
- **Date**: February 2026
- **Bullets**:
  - Built AI skill assessment platform using Angular + Gemini API + FastAPI
  - Integrated Piston API for live code execution and Gemini Cloud SQL for data
  - Competed in The Forge hackathon under time pressure

**Entry 5**
- **Title**: Parivesh 3.0
- **Type**: Hackathon — e-summit IIIT Naya Raipur
- **Date**: January 2026
- **Bullets**:
  - Competed in e-summit hackathon hosted by IIIT Naya Raipur
  - Worked on environmental data platform problem statement
  - Built JavaScript-based frontend prototype within hackathon timeframe

**Entry 6**
- **Title**: Started BCA at Disha College + Joined Noventra Labs
- **Type**: Education & Organization Milestone
- **Date**: 2024
- **Bullets**:
  - Enrolled in Bachelor's of Computer Applications, Disha College, Raipur
  - Co-founded Noventra Labs — focused on building AI-powered tools
  - Earned AWS Generative AI, MongoDB, Postman, and scikit-learn certifications

---

## SECTION 3: PROJECTS — FULL DETAILS FOR EACH CARD

All GitHub links are real. Add screenshots from your repos or record a demo video.

---

### PROJECT 1 — Knowledge Vault ⭐ FEATURED
**GitHub**: https://github.com/89Aman/Knowledge-vault
**Description card text** (2 lines max): Personal semantic search engine with RAG pipeline. Processes PDFs, Markdown, and text with 384-dim embeddings and Gemini AI answer synthesis.
**Full description** (for case study / expanded card):
  - Engineered production-grade semantic search system with RAG pipeline
  - Hybrid scoring: vector similarity + keyword density + temporal recency → 40% relevance improvement over cosine distance baseline
  - JWT auth + OAuth 2.0 using Authlib
  - Deployed on GCP Cloud Run with Docker; <200ms query response times
**Tech Badges**: FastAPI · React · ChromaDB · Google Gemini 1.5 Flash · sentence-transformers · GCP Cloud Run · Docker · JWT · OAuth 2.0
**Category Tags**: AI/ML · Cloud · Full-Stack
**Live Demo**: www.amanmlworks.xyz (check if deployed)
**Status**: Production

---

### PROJECT 2 — CampusFix ⭐ FEATURED
**GitHub**: https://github.com/89Aman/CampusFix
**Description card text**: Smart campus facility management platform with Flutter mobile app and Angular admin dashboard. Built for GDG Solution Challenge.
**Full description**:
  - FastAPI backend handling 500+ concurrent requests with real-time status workflows
  - Flutter mobile app (Android/iOS): camera capture, GPS location tagging
  - Angular 17 admin dashboard with role-based access control
  - Supabase PostgreSQL + Supabase Storage + OAuth 2.0 + JWT
  - Deployed on GCP Cloud Run
**Tech Badges**: FastAPI · Flutter · Angular 17 · PostgreSQL · Supabase · GCP Cloud Run · Docker · JWT
**Category Tags**: Full-Stack · Cloud · Hackathon
**Status**: Production / GDG Submission

---

### PROJECT 3 — RAG-DEMO (FDA Drug Assistant) ⭐ FEATURED
**GitHub**: https://github.com/89Aman/RAG-DEMO
**Description card text**: Transforms static FDA drug label PDFs into an interactive conversational interface using Google's RAG architecture and Gemini 2.5 Flash.
**Full description**:
  - Automated PDF indexing pipeline for multiple drug labels via Google File Search API
  - Semantic chunking enables cross-document drug interaction queries
  - Source attribution system with grounding metadata, citations, and document excerpts
  - Sub-second retrieval latency; transparent, verifiable AI responses
**Tech Badges**: Python · Google GenAI SDK · Gemini 2.5 Flash · File Search API · RAG · PDF Processing
**Category Tags**: AI/ML · RAG
**Status**: Open Source Demo

---

### PROJECT 4 — SkillSnap
**GitHub**: https://github.com/89Aman/SkillSnap
**Description card text**: AI-powered skill assessment platform with live code execution. Built in 24hrs for The Forge Hackathon. Uses Gemini API for evaluation and Piston API for running code.
**Full description**:
  - Angular frontend + FastAPI backend architecture
  - Gemini API for intelligent skill gap analysis
  - Piston API for sandboxed code execution in multiple languages
  - Gemini Cloud SQL for persistent user data
  - Note: Requires Gemini API key to run locally
**Tech Badges**: Angular · FastAPI · Gemini API · Piston API · HTML · Python
**Category Tags**: AI/ML · Hackathon · Full-Stack
**Status**: Hackathon Demo (requires API keys)

---

### PROJECT 5 — Fullstack Movie Recommendation System
**GitHub**: https://github.com/89Aman/Fullstack-movie-recommendation-system
**Description card text**: Flutter frontend with a TensorFlow-powered movie recommendation model. Demonstrates ML model integration into a cross-platform mobile app.
**Full description**:
  - TensorFlow/Keras collaborative filtering recommendation model (Jupyter Notebook)
  - Flutter frontend consuming the model via API
  - Full pipeline: data preprocessing → model training → API serving → mobile UI
**Tech Badges**: Flutter · TensorFlow · Python · Jupyter Notebook · Dart
**Category Tags**: AI/ML · Full-Stack · Mobile

---

### PROJECT 6 — Material Demand Forecasting
**GitHub**: https://github.com/89Aman/Material-Demand-Forecasting
**Description card text**: Demand forecasting system for materials/inventory. Applies time series and ML techniques to predict future material requirements.
**Tech Badges**: TypeScript · Python · ML Forecasting
**Category Tags**: AI/ML · Data Science

---

### PROJECT 7 — Text Classification Model
**GitHub**: https://github.com/89Aman/text-classification-model
**Description card text**: SVM-based text classifier that predicts IAB content categories for articles. Clean pipeline using scikit-learn, pandas, and joblib for model serialization.
**Full description**:
  - Support Vector Machine classifier trained on IAB content taxonomy
  - Feature engineering with TF-IDF vectorization
  - Model serialization with joblib for API serving
  - Metrics: precision, recall, F1 reported per category
**Tech Badges**: Python · scikit-learn · pandas · joblib · SVM · TF-IDF
**Category Tags**: AI/ML · ML Engineering

---

### PROJECT 8 — SortViz
**GitHub**: https://github.com/89Aman/SortViz
**Description card text**: Interactive sorting algorithm visualizer built in vanilla JavaScript. Watch bubble sort, merge sort, quick sort, and more animate step-by-step in real time.
**Tech Badges**: JavaScript · HTML · CSS · Algorithms
**Category Tags**: Algorithms · Tools
**Note for card**: Great for showing CS fundamentals and frontend skills side by side.

---

### PROJECT 9 — Library Management System
**GitHub**: https://github.com/89Aman/library-mangement-system
**Description card text**: Full-stack web app for managing books, users, and borrowing records. Built with Flask + MongoDB with bcrypt authentication.
**Full description**:
  - Flask web framework + MongoDB via pymongo
  - User authentication with bcrypt password hashing
  - CRUD operations for books and borrowing records
  - Role-based access (admin vs. member)
**Tech Badges**: Python · Flask · MongoDB · pymongo · bcrypt · HTML
**Category Tags**: Full-Stack · Backend

---

## SECTION 4: CERTIFICATIONS (Full Details for Cards)

| # | Certification | Issuer | Badge Color |
|---|--------------|--------|-------------|
| 1 | AWS Generative AI: Cloud Technology and Services Concepts | Amazon Web Services (AWS) | Orange (#FF9900) |
| 2 | MongoDB Python Developer Path | MongoDB University | Green (#00ED64) |
| 3 | API Fundamentals Student Expert | Postman | Orange (#FF6C37) |
| 4 | Supervised Learning with scikit-learn | DataCamp | Green (#03EF62) |

Each certification card should include: issuer name, cert title, "Verified ✓" pill badge, and the certifier logo (use Simple Icons CDN for AWS, MongoDB, Postman logos).

---

## SECTION 5: SEO META TAGS
Paste into `<head>` of `index.html`.

```html
<title>Aman Sharma — Python Developer & ML Engineer | Raipur, India</title>
<meta name="description" content="Aman Sharma is a Python Developer and aspiring ML Engineer from Raipur, India. Specializes in RAG systems, FastAPI backends, and cloud-native apps on GCP and AWS. Open to internships and collaborations.">
<meta name="keywords" content="Aman Sharma, Python developer India, ML engineer, FastAPI developer, RAG architecture, GCP developer, AWS developer, Raipur developer, Disha College, Noventra Labs">
<meta property="og:title" content="Aman Sharma — Python Developer & ML Engineer">
<meta property="og:description" content="Building intelligent backends — from semantic search engines to conversational AI systems. Open to internships and collaborations.">
<meta property="og:url" content="https://www.amanmlworks.xyz">
<meta property="og:image" content="https://www.amanmlworks.xyz/og-image.png">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Aman Sharma — Python Dev & ML Engineer">
<meta name="twitter:description" content="RAG systems, FastAPI, GCP, AWS. Building production AI tools from Raipur, India.">
<link rel="canonical" href="https://www.amanmlworks.xyz">

<!-- JSON-LD Structured Data -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Aman Sharma",
  "url": "https://www.amanmlworks.xyz",
  "email": "shasarita23@gmail.com",
  "jobTitle": "Python Developer & ML Engineer",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Raipur",
    "addressRegion": "Chhattisgarh",
    "addressCountry": "IN"
  },
  "sameAs": [
    "https://github.com/89Aman",
    "https://www.linkedin.com/in/sharmaaman26",
    "https://orcid.org/0009-0007-8487-3392"
  ]
}
</script>
```

---

## SECTION 6: FONT LOADING (Copy into `<head>`)

```html
<!-- Cabinet Grotesk + Satoshi from Fontshare -->
<link href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@400,500,700,800&f[]=satoshi@300,400,500,700&display=swap" rel="stylesheet">

<!-- JetBrains Mono from Google Fonts (for terminal/code sections) -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

CSS variable setup:
```css
:root {
  --font-display: 'Cabinet Grotesk', 'Inter', sans-serif;
  --font-body: 'Satoshi', 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
}
```

---

## SECTION 7: DEPLOYMENT CHECKLIST

All real links are pre-filled. Only the ☐ items need your action.

### Real Data (Already Confirmed ✅)
- ✅ GitHub: github.com/89Aman
- ✅ LinkedIn: linkedin.com/in/sharmaaman26
- ✅ Email: shasarita23@gmail.com
- ✅ Domain: www.amanmlworks.xyz
- ✅ ORCID: orcid.org/0009-0007-8487-3392
- ✅ Org: github.com/Noventra-labs
- ✅ Phone (for resume only): +91 9406200254

### Action Items
- ☐ Add your profile photo to `/public/avatar.jpg`
- ☐ Record short demo GIFs for Knowledge Vault and CampusFix → `/public/projects/`
- ☐ Take screenshots of all 9 projects for card thumbnails
- ☐ Upload resume PDF → `/public/Aman_Sharma_Resume.pdf`
- ☐ Create OG image (1200×630px) → `/public/og-image.png`
- ☐ Add project READMEs on GitHub if missing (improves SEO and portfolio credibility)
- ☐ Connect github.com/89Aman/Portfolio to Vercel
- ☐ Point www.amanmlworks.xyz to Vercel deployment
- ☐ Submit sitemap.xml to Google Search Console
- ☐ Run Lighthouse audit — target: 90+ on Performance, SEO, Accessibility
- ☐ Add real Gemini API demo for RAG-DEMO if you want a live demo link
- ☐ Update CampusFix GitHub README with GDG Solution Challenge submission details

### Quick Wins for Credibility
- ☐ Pin top 6 repos on GitHub profile (Knowledge Vault, CampusFix, RAG-DEMO, SkillSnap, text-classification-model, Fullstack-movie-recommendation)
- ☐ Fill in GitHub profile bio with your one-liner from Section 2.1
- ☐ Add topics to each repo (already done for most — verify all 9 portfolio projects have relevant topics)
- ☐ Update LinkedIn headline to match portfolio one-liner

---

*Document v2 — Aman Sharma Portfolio Blueprint | Generated: April 2026*
*Source: Resume (April 2026) + github.com/89Aman (24 repos)*
