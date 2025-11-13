const navbarNav = document.querySelector(".navbar-nav");
const menuBtn = document.querySelector("#menu");

// buka / tutup menu
menuBtn.addEventListener("click", function (e) {
  e.stopPropagation(); // mencegah trigger event global
  navbarNav.classList.toggle("active");
});

// klik di luar untuk menutup
document.addEventListener("click", function (e) {
  if (!navbarNav.contains(e.target) && !menuBtn.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
