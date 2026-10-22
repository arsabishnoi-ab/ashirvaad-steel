const navbar = document.getElementById("navbar");
const navLinks = document.getElementById("nav-links");
const hamburger = document.querySelector(".hamburger");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 40);
});

hamburger.addEventListener("click", () => {
  const open = navLinks.classList.toggle("active");
  hamburger.setAttribute("aria-expanded", String(open));
  hamburger.innerHTML = open ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    if (link.parentElement.classList.contains("has-dropdown") && window.innerWidth <= 992) {
      return;
    }
    navLinks.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
  });
});

document.querySelectorAll(".has-dropdown > a").forEach((link) => {
  link.addEventListener("click", (event) => {
    if (window.innerWidth <= 992) {
      event.preventDefault();
      link.parentElement.classList.toggle("open");
    }
  });
});

const slides = [...document.querySelectorAll(".hero-slide")];
const dotsWrap = document.querySelector(".hero-dots");
let slideIndex = 0;
let slideTimer;

slides.forEach((_, index) => {
  const dot = document.createElement("button");
  dot.type = "button";
  dot.setAttribute("aria-label", `Slide ${index + 1}`);
  if (index === 0) dot.classList.add("active");
  dot.addEventListener("click", () => showSlide(index));
  dotsWrap.appendChild(dot);
});

function showSlide(index) {
  slides[slideIndex].classList.remove("active");
  dotsWrap.children[slideIndex].classList.remove("active");
  slideIndex = (index + slides.length) % slides.length;
  slides[slideIndex].classList.add("active");
  dotsWrap.children[slideIndex].classList.add("active");
  clearInterval(slideTimer);
  slideTimer = setInterval(() => showSlide(slideIndex + 1), 6000);
}

document.querySelector(".hero-arrow.next").addEventListener("click", () => showSlide(slideIndex + 1));
document.querySelector(".hero-arrow.prev").addEventListener("click", () => showSlide(slideIndex - 1));
slideTimer = setInterval(() => showSlide(slideIndex + 1), 6000);

function applyFilter(name) {
  document.querySelectorAll(".filter-btn").forEach((button) => {
    button.classList.toggle("active", button.dataset.filter === name);
  });
  document.querySelectorAll(".gallery-item").forEach((item) => {
    const show = name === "all" || item.classList.contains(name);
    item.hidden = !show;
  });
}

document.querySelectorAll(".filter-btn, .dropdown a[data-filter]").forEach((button) => {
  button.addEventListener("click", () => applyFilter(button.dataset.filter));
});

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const caption = document.getElementById("caption");

document.querySelectorAll(".gallery-item").forEach((item) => {
  item.addEventListener("click", () => {
    const image = item.querySelector("img");
    lightbox.style.display = "block";
    lightboxImg.src = image.src;
    lightboxImg.alt = image.alt;
    caption.textContent = image.alt;
  });
});

function closeLightbox() {
  lightbox.style.display = "none";
}

document.querySelector(".close-lightbox").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeLightbox();
});
