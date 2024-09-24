let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Show/hide navbar based on scroll direction
  if (scrollTop > lastScrollTop) {
    // Scrolling down
    navbar.classList.add("hidden");
  } else {
    // Scrolling up
    navbar.classList.remove("hidden");
  }
  lastScrollTop = scrollTop;

  // Add background color to navbar after scrolling 100vh+
  if (scrollTop > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
