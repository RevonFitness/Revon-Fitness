// Generate floating particles
const particlesContainer = document.getElementById("particles");
for (let i = 0; i < 30; i++) {
  const particle = document.createElement("div");
  particle.className = "particle";
  particle.style.left = Math.random() * 100 + "%";
  particle.style.top = Math.random() * 100 + "%";
  particle.style.animationDelay = Math.random() * 6 + "s";
  particle.style.animationDuration = Math.random() * 4 + 4 + "s";
  particlesContainer.appendChild(particle);
}

// Sticky header on scroll
const header = document.querySelector("header");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
  
  lastScroll = currentScroll;
});

// Show detail page
function showDetail(type) {
  document.getElementById(type + "-detail").classList.add("active");
  document.body.style.overflow = "hidden";
}

// Hide detail page
function hideDetail(type) {
  const detailPage = document.getElementById(type + "-detail");
  detailPage.style.animation = "fadeOut 0.3s ease-out";
  
  setTimeout(() => {
    detailPage.classList.remove("active");
    detailPage.style.animation = "";
    document.body.style.overflow = "auto";
  }, 300);
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
