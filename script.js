const projects = [
  {
    n: "01",
    title: "HIRA Ultimate",
    category: "Clinical AI",
    filter: "clinical",
    year: "2025",
    featured: true,
    desc: "A full-stack clinical intelligence platform that triages six imaging modalities, explains predictions with Grad-CAM, and translates results into age-aware summaries.",
    tech: ["TensorFlow", "Flask", "Grad-CAM", "Gemini"],
    metric: "97%",
    metricLabel: "sensitivity",
    href: "https://github.com/maaazzinn/HIRA-ULTIMATE",
  },
  {
    n: "02",
    title: "SAR Ship Detection",
    category: "Defence AI",
    filter: "defence",
    year: "2025",
    featured: true,
    desc: "Near-perfect maritime target detection on speckle-heavy SAR imagery, with a custom polygon annotation and preprocessing pipeline.",
    tech: ["YOLOv5", "PyTorch", "OpenCV"],
    metric: "99.1%",
    metricLabel: "mAP@0.5",
    href: "https://github.com/maaazzinn/SAR-Ship-Detection-Using-YOLOv5",
  },
  {
    n: "03",
    title: "SAR Target Classifier",
    category: "Defence AI",
    filter: "defence",
    year: "2025",
    desc: "Military target recognition with scattering wavelet features, outperforming the established MATLAB baseline by 15%.",
    tech: ["TensorFlow", "Kymatio", "MSTAR"],
    metric: "98.9%",
    metricLabel: "accuracy",
    href: "https://github.com/maaazzinn/Scattering-Transform-Features-with-Neural-Network-Classifier-for-SAR-Target-Recognition",
  },
  {
    n: "04",
    title: "Aircraft Detection",
    category: "Defence AI",
    filter: "defence",
    year: "2025",
    desc: "Field-ready web application for real-time aircraft detection in SAR and aerial imagery.",
    tech: ["YOLOv5", "Flask", "SARDet-100K"],
    href: "https://github.com/maaazzinn/Aircraft-Detection-Web-App-using-YOLOv5-Flask",
  },
  {
    n: "05",
    title: "Metro Predict",
    category: "Computer Vision",
    filter: "vision",
    year: "2024",
    desc: "Real-time crowd density intelligence for five Kochi Metro stations with proactive Low, Medium, and High load alerts.",
    tech: ["YOLOv8", "OpenCV", "Flask"],
    href: "https://github.com/maaazzinn/MetroPredict",
  },
  {
    n: "06",
    title: "AI Video Agent",
    category: "Computer Vision",
    filter: "vision",
    year: "2024",
    desc: "A dual-capability security system for face recognition and license plate detection with live search and alerting.",
    tech: ["dlib", "YOLOv8", "OpenCV"],
    href: "https://github.com/maaazzinn/AI-Video-Analysis-Agent",
  },
  {
    n: "07",
    title: "Meet-Mood",
    category: "Computer Vision",
    filter: "vision",
    year: "2024",
    featured: true,
    desc: "An online meeting platform that turns facial emotion, gaze, and head movement into live engagement signals for hosts.",
    tech: ["DeepFace", "WebRTC", "Flask"],
    metric: "LIVE",
    metricLabel: "engagement",
    href: "https://github.com/maaazzinn/Meet-Mood",
  },
  {
    n: "08",
    title: "FaceCertify",
    category: "Computer Vision",
    filter: "vision",
    year: "2024",
    desc: "Face-recognition exam attendance that instantly retrieves each student’s subject, room, and assigned seat.",
    tech: ["Custom CNN", "Keras", "OpenCV"],
    href: "https://github.com/maaazzinn/FaceCertify",
  },
  {
    n: "09",
    title: "GeoAttend",
    category: "Web Apps",
    filter: "web",
    year: "2024",
    desc: "Network-aware classroom attendance through ARP scanning, MAC matching, and a live reporting dashboard.",
    tech: ["Python", "SQLite", "JavaScript"],
    href: "https://github.com/maaazzinn/Geo-Attend",
  },
  {
    n: "10",
    title: "Lost & Found AI",
    category: "Web Apps",
    filter: "web",
    year: "2024",
    desc: "A campus recovery tool matching lost and found reports through image and text similarity.",
    tech: ["Flask", "Image Matching", "SQLite"],
    href: "https://github.com/maaazzinn/Lost-and-Found-AI",
  },
  {
    n: "11",
    title: "Placify",
    category: "Web Apps",
    filter: "web",
    year: "2024",
    desc: "A secure college placement portal with opportunity discovery, publishing, and full administration tools.",
    tech: ["Node.js", "Express", "SQLite"],
    href: "https://github.com/maaazzinn/Placify",
  },
];

const arrowIcon = `
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"
    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M5 19 19 5"></path>
    <path d="M9 5h10v10"></path>
  </svg>`;

function renderProject(project) {
  const metric = project.metric
    ? `<div class="project-metric"><strong>${project.metric}</strong><small>${project.metricLabel}</small></div>`
    : "";
  const technologies = project.tech.map((item) => `<span>${item}</span>`).join("");
  const featured = project.featured ? " featured" : "";

  return `
    <article class="project-card reveal${featured}" data-category="${project.filter}">
      <div class="card-top">
        <span>${project.category} / ${project.year}</span>
        <b>${project.n}</b>
      </div>
      <div class="card-content">
        ${metric}
        <h3>${project.title}</h3>
        <p>${project.desc}</p>
        <div class="project-tech">${technologies}</div>
      </div>
      <a href="${project.href}" target="_blank" rel="noreferrer" class="card-link"
        aria-label="View ${project.title} on GitHub">
        ${arrowIcon}
      </a>
    </article>`;
}

const projectGrid = document.querySelector("#project-grid");
projectGrid.innerHTML = projects.map(renderProject).join("");

document.querySelector("#current-year").textContent = new Date().getFullYear();

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.12 },
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      document.querySelectorAll(".nav-links a").forEach((link) => {
        link.classList.toggle("active", link.hash === `#${entry.target.id}`);
      });
    });
  },
  { rootMargin: "-35% 0px -55%" },
);

document.querySelectorAll("section[id]").forEach((section) => sectionObserver.observe(section));

const progress = document.querySelector(".scroll-progress");

function updateScrollProgress() {
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  const amount = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
  progress.style.transform = `scaleX(${Math.max(0, Math.min(1, amount))})`;
}

window.addEventListener("scroll", updateScrollProgress, { passive: true });
window.addEventListener("resize", updateScrollProgress);
updateScrollProgress();

const hero = document.querySelector(".hero");
hero.addEventListener("pointermove", (event) => {
  const bounds = hero.getBoundingClientRect();
  hero.style.setProperty("--mx", `${event.clientX - bounds.left}px`);
  hero.style.setProperty("--my", `${event.clientY - bounds.top}px`);
});

document.querySelectorAll(".filters button").forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    document.querySelectorAll(".filters button").forEach((filterButton) => {
      const selected = filterButton === button;
      filterButton.classList.toggle("active", selected);
      filterButton.setAttribute("aria-pressed", String(selected));
    });

    document.querySelectorAll(".project-card").forEach((card) => {
      card.hidden = filter !== "all" && card.dataset.category !== filter;
    });

    updateScrollProgress();
  });
});

const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");
const menuIcon = menuButton.innerHTML;
const closeIcon = `
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="m6 6 12 12M18 6 6 18"></path>
  </svg>`;

function setMenuOpen(open) {
  navLinks.classList.toggle("open", open);
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  menuButton.innerHTML = open ? closeIcon : menuIcon;
}

menuButton.addEventListener("click", () => {
  setMenuOpen(menuButton.getAttribute("aria-expanded") !== "true");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenuOpen(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenuOpen(false);
});
