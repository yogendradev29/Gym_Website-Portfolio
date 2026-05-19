const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const glow = document.querySelector(".cursor-glow");
const revealItems = document.querySelectorAll(".reveal");
const counters = document.querySelectorAll("[data-count]");
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".site-nav a");
const bmiForm = document.querySelector("[data-bmi-form]");
const bmiOutput = document.querySelector("[data-bmi-output]");

const updateHeader = () => {
  header.classList.toggle("scrolled", window.scrollY > 24);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

navToggle.addEventListener("click", () => {
  const open = document.body.classList.toggle("nav-open");
  navToggle.setAttribute("aria-expanded", String(open));
});

nav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    document.body.classList.remove("nav-open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

window.addEventListener("mousemove", (event) => {
  if (!glow) return;
  glow.style.transform = `translate3d(${event.clientX - 180}px, ${event.clientY - 180}px, 0)`;
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

revealItems.forEach((item, index) => {
  item.style.transitionDelay = `${Math.min(index % 4, 3) * 80}ms`;
  revealObserver.observe(item);
});

const animateCounter = (counter) => {
  const target = Number(counter.dataset.count);
  const duration = 1300;
  const start = performance.now();

  const tick = (time) => {
    const progress = Math.min((time - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    counter.textContent = Math.round(target * eased).toLocaleString("en-IN");

    if (progress < 1) requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
};

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

counters.forEach((counter) => counterObserver.observe(counter));

const activeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  { rootMargin: "-45% 0px -50% 0px" }
);

sections.forEach((section) => activeObserver.observe(section));

bmiForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(bmiForm);
  const height = Number(data.get("height")) / 100;
  const weight = Number(data.get("weight"));

  if (!height || !weight) {
    bmiOutput.textContent = "Please enter height and weight.";
    return;
  }

  const bmi = weight / (height * height);
  let label = "Healthy range";

  if (bmi < 18.5) label = "Lean range";
  if (bmi >= 25) label = "Improvement range";
  if (bmi >= 30) label = "Coach-guided plan recommended";

  bmiOutput.textContent = `BMI ${bmi.toFixed(1)} - ${label}`;
});
