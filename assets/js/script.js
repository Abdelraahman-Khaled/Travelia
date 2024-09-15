// Loader
const preloader = document.querySelector(".preloader");

window.addEventListener("load", () => {
  preloader.classList.add("remove");
});

// Navbar toggler for mobile
const navbar = document.querySelector(".navbar");
const navTogglers = document.querySelectorAll(".nav-toggle-btn");
const overlay = document.querySelector(".overlay");

const toggleNav = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-acitve");
};

// Hedaer
const header = document.querySelector(".header");
window.addEventListener("scroll", function () {
  header.classList[window.scrollY > 100 ? "add" : "remove"]("active");
});
