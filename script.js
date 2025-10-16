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

// Show detail page
function showDetail(type) {
  document.getElementById(type + "-detail").classList.add("active");
  document.body.style.overflow = "hidden";
}

// Hide detail page
function hideDetail(type) {
  document.getElementById(type + "-detail").classList.remove("active");
  document.body.style.overflow = "auto";
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
