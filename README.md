# Fire Line Services — Website

**Client:** Fire Line Services  
**Built by:** Titan AI / Matt Vincent Walker  
**Stack:** Plain HTML, CSS, Vanilla JS — no frameworks, no build step  
**Hosting:** Netlify (static)

---

## Project Structure

```
firelineservices/
├── index.html          # Home page (hero, services preview, why us, credentials)
├── services.html       # Full services page (detailed breakdowns per service)
├── about.html          # About page (founding story, values, credentials)
├── projects.html       # Projects page (notable projects + markets)
├── contact.html        # Contact page (phone CTA, address, hours, social)
├── netlify.toml        # Netlify deploy config (redirects, headers, caching)
├── README.md           # This file
├── css/
│   └── styles.css      # All styles (variables, components, responsive breakpoints)
├── js/
│   └── main.js         # All JS (hamburger menu, scroll reveal, stagger animations)
└── images/
    └── (drop project photos and logo here)
```

---

## Design System

| Token | Value |
|---|---|
| `--red` | `#CC1A1A` |
| `--red-bright` | `#E02020` |
| `--black` | `#0A0A0A` |
| `--black-mid` | `#141414` |
| `--black-light` | `#1E1E1E` |
| `--white` | `#F5F4F2` |
| Display font | Bebas Neue |
| UI font | Barlow Condensed |
| Body font | Barlow |

---

## Fonts

Loaded via Google Fonts CDN in each page `<head>`:

```html
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Barlow+Condensed:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

---

## Responsive Breakpoints

| Breakpoint | Behavior |
|---|---|
| `> 1024px` | Full desktop layout |
| `≤ 1024px` | Tablet: collapses grids, hides about image |
| `≤ 640px` | Mobile: hamburger nav, stacked hero stats, single-column all |

---

## Images

Drop all project photos and the logo into `/images/`. Reference them in HTML like:

```html
<img src="images/omni-pga-frisco.jpg" alt="Omni PGA Frisco Resort — Fire Line Services" />
```

**Suggested images to source from client:**
- Company logo (replace placeholder logo-mark in nav)
- Crew/field photos for About page
- Project site photos for each project card background
- Drone footage stills (they mentioned having drone footage)

To add a photo as a project card background, replace the `project-bg` gradient div:

```html
<!-- BEFORE (placeholder) -->
<div class="project-bg" style="background: linear-gradient(...);">
</div>

<!-- AFTER (real photo) -->
<div class="project-bg" style="background-image: url('images/omni-pga.jpg'); background-size: cover; background-position: center;">
</div>
```

---

## Deploying to Netlify

### Option 1 — Netlify CLI (from Claude Code)
```bash
npm install -g netlify-cli
netlify login
netlify deploy --dir . --prod
```

### Option 2 — GitHub + Netlify Auto-Deploy
1. Push repo to GitHub
2. In Netlify: New Site → Import from Git → Select repo
3. Build settings:
   - **Build command:** *(leave blank)*
   - **Publish directory:** `.`
4. Deploy — done. Netlify reads `netlify.toml` automatically.

---

## Content To-Dos (Client Needs to Provide)

- [ ] Final logo file (SVG or PNG)
- [ ] Project photos / drone stills for project cards
- [ ] Head shot or team photo for About page
- [ ] Confirm correct year on footer (currently 2025)
- [ ] Confirm legal entity name for footer if needed
- [ ] Favicon (`.ico` or `.png` 32×32)

---

## Notes for Claude Code

- All nav links use file paths (`services.html`, not `/services`) — works both locally and on Netlify
- `netlify.toml` adds clean URL redirects so `/services` resolves to `services.html` in production
- The ticker speed is controlled in `css/styles.css` → `.ticker-track { animation: ticker 18s... }` — adjust duration to taste
- Scroll reveal animations are handled in `js/main.js` via `IntersectionObserver`
- No npm, no build step, no dependencies — open any `.html` file directly in a browser to preview
