const hamburger = document.getElementById('hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


document.addEventListener("scroll", function () {
  const section = document.querySelector(".fayoum-section");
  const sectionTop = section.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (sectionTop < screenHeight - 100) {
    section.classList.add("show");
  }
});
