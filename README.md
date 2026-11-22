# Rekha Learning Centre 🎓

[![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.x-7952B3?logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Deployment](https://img.shields.io/badge/Deployed-GitHub_Pages-22c55e?logo=github&logoColor=white)](https://rbsk-05.github.io/Rekha-Learning-Centre/)

> **Over 10+ Years of Excellence & Trust in Education**  
> Comprehensive academic coaching for **2nd to 10th Standard** students covering **CBSE, ICSE, and Tamil Nadu State Board** syllabi. Based in Vadapalani, Chennai.

---

## 🌟 Overview

**Rekha Learning Centre** is a premier tuition and coaching centre founded with a vision of transforming education through patience, personal attention, and joy. This modern, fully responsive web application showcases the centre's coaching programs, unique teaching methodology, mentor background, celebration archives, and direct admissions inquiry channel.

---

## ✨ Features & Highlights

### 🎨 Clean Minimalist Design
- **Frosted Glass Navbar**: Adaptive sticky navigation (`.navbar-glass`) that blurs gently on scroll and responds cleanly on mobile, tablet, and desktop viewports.
- **Custom Brand Identity**: Integrated dotless `ı` typography with custom elevated Swastika motif, fine-tuned for high-DPI displays and physical mobile system fonts (Samsung One UI, Android Roboto, iOS SF Pro).
- **Subtle Background Doodles**: Lightweight, non-intrusive floating academic doodles (rulers, pencils, math symbols, lightbulbs) that scroll seamlessly with content.

### 📚 Comprehensive Academic Showcase
- **Curriculum Details**: Focused streams for Primary (2nd–5th), Middle School (6th–8th), High School (9th–10th Board preparation), Spoken English, and Handwriting Improvement.
- **Learning Methodology**: Spotlighting concept-first clarity, stress-free small batches, regular assessments, and dedicated parent communication via WhatsApp.
- **Founder & Mentor Spotlight**: Dedicated founder portrait featuring natural lighting and polished presentation.

### 📸 Dynamic Storytelling Gallery ("Memories")
- **Categorized Outings & Celebrations**: Interactive filtering across Birla Planetarium, Beach Outings, Children's Day, Cinema Visits, Restaurant Dinners, Gifts & Rewards, and Milestones.
- **Optimized Media Delivery**: Pre-generated thumbnails for instant loading alongside high-resolution assets on demand.
- **Lightbox Viewer**: Fullscreen modal preview with arrow navigation, captions, and keyboard accessibility.

### 📱 Flawless Mobile Responsiveness
- **Adaptive Toggle Placement**: Hamburger button sits on the right side on standard devices (iPhone 16, Samsung Galaxy A55, Pixel), smoothly adjusting to centered placement on ultra-compact screens ($\le$ 330px).
- **Zero Horizontal Squishing**: Dropdown navigation menu expands to 100% full width with centered links and comfortable touch targets.
- **Centered Mobile Headings**: "About Us" and section headers automatically center on mobile devices for visual balance.

### 📞 Contact & Admissions
- **Direct Inquiry Form**: Integrated form for quick admission inquiries and callbacks.
- **One-Click Connect**: Direct WhatsApp chat integration, phone calling, and interactive Google Maps location in Vadapalani, Chennai.

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| **Frontend Library** | [React](https://react.dev/) |
| **Build Tool & Bundler** | [Vite](https://vitejs.dev/) |
| **Styling & UI Grid** | [Bootstrap 5](https://getbootstrap.com/) & [React-Bootstrap](https://react-bootstrap.github.io/) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Icons** | [React Icons](https://react-icons.github.io/react-icons/) (FontAwesome, Bootstrap Icons) |
| **Routing** | [React Router DOM](https://reactrouter.com/) (with single-page redirect support for GitHub Pages) |
| **Deployment** | GitHub Pages (`gh-pages`) |

---

## 📁 Project Structure

```
Tuition Center/
├── public/                     # Static public assets (Favicon, Logo, 404.html redirect)
│   ├── 404.html                # GitHub Pages SPA fallback script
│   └── logo.png                # Brand logo icon
├── src/
│   ├── assets/                 # Optimized brand assets, gallery images & thumbnails
│   │   ├── images/             # Full-resolution event & celebration media
│   │   ├── thumbnails/         # Fast-loading thumbnails for gallery grid
│   │   ├── logo.png            # Primary brand emblem
│   │   ├── mentor_v2_clean.png # Founder & Mentor portrait
│   │   └── swastik.png         # Brand typography motif
│   ├── components/             # Reusable UI sections
│   │   ├── common/             # Shared components (FloatingBackground, ImageCard, etc.)
│   │   ├── About.jsx           # About Us section with responsive headings
│   │   ├── Contact.jsx         # Contact details, map, and inquiry form
│   │   ├── Courses.jsx         # Grade-wise curriculum cards
│   │   ├── Footer.jsx          # Footer with quick links & location
│   │   ├── Gallery.jsx         # Home page featured memory preview
│   │   ├── Hero.jsx            # Hero section with mentor portrait
│   │   ├── LearningMethod.jsx  # Pedagogical methodology & USPs
│   │   └── Navigation.jsx      # Responsive glass navbar
│   ├── pages/                  # Page route components
│   │   ├── Home.jsx            # Main one-page landing layout
│   │   └── GalleryPage.jsx     # Full-page dedicated Memories gallery
│   ├── utils/
│   │   └── imageMapper.js      # Dynamic media categorization & cover picker
│   ├── index.css               # Core styling, responsive typography & theme variables
│   ├── App.jsx                 # Root route switch
│   └── main.jsx                # React DOM entry point
├── scripts/                    # Utility scripts (e.g. image thumbnail generator)
├── index.html                  # HTML entry point with Montserrat font preconnect
├── vite.config.js              # Vite build configuration (base path for GitHub Pages)
└── package.json                # Project dependencies and npm scripts
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- [npm](https://www.npmjs.com/) (installed automatically with Node.js)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/rbsk-05/Rekha-Learning-Centre.git
   cd Rekha-Learning-Centre
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173/Rekha-Learning-Centre/` (or the port indicated in terminal).

---

## 📦 Build & Deployment

### Creating a Production Build
To compile and minify the app into the `dist/` directory:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

### Deploying to GitHub Pages
The project is configured with a base path of `/Rekha-Learning-Centre/` in `vite.config.js` and includes a `public/404.html` SPA router redirect.

To deploy using the `gh-pages` branch:
```bash
npm run deploy
```

---

## 📍 Location & Contact

- **Centre Name**: Rekha Learning Centre
- **Location**: Vadapalani, Chennai, Tamil Nadu, India
- **Standards Catered**: 2nd to 10th Standard (CBSE, ICSE & State Board)
- **Specializations**: All Academic Subjects, Concept Clarity, Handwriting Mastery, Spoken English

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
