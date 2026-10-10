const nav = document.getElementById("nav");
const menu = document.querySelector(".menu");

/* Mobile navigation */
menu.addEventListener("click", () => {
  nav.classList.toggle("open");
});

/* Close mobile menu after selecting a section */
document.querySelectorAll(".links a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});

/* Scroll reveal animation */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.12
  }
);

document.querySelectorAll(".reveal").forEach((element) => {
  observer.observe(element);
});
