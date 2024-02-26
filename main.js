const toggleMenu = document.getElementById('toggle-menu')
const navbar = document.getElementById('navbar-nav')
let slides = document.querySelectorAll(".slide");
let index = 0;

toggleMenu.addEventListener('click', () => {
    navbar.classList.toggle('show')
})



function showSlide(n) {
slides[index].classList.remove("active");
index = (n + slides.length) % slides.length;
slides[index].classList.add("active");
}

function nextSlide() {
showSlide(index + 1);
}

function prevSlide() {
showSlide(index - 1);
}

setInterval(nextSlide, 3000); // change slide every 3 seconds
