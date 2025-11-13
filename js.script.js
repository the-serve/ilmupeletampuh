const navbarNav = document.querySelector(".navbar-nav");
const menuButton = document.querySelector("#menu");

// toggle menu
menuButton.onclick = (e) => {
  e.stopPropagation(); // penting agar klik icon tidak ikut ke event document
  navbarNav.classList.toggle("active");
};

// klik di luar untuk close
document.addEventListener("click", function (e) {
  // jika klik bukan pada menu & bukan pada navbar-nav
  if (!navbarNav.contains(e.target) && !menuButton.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
