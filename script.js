const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('bg-black', 'shadow-lg', 'py-3');
        navbar.classList.remove('py-5', 'mix-blend-difference');
    } else {
        navbar.classList.remove('bg-black', 'shadow-lg', 'py-3');
        navbar.classList.add('py-5', 'mix-blend-difference');
    }
});

// TESTIMONIAL SLIDER LOGIC
const track = document.getElementById('testimonial-track');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

if (track && prevBtn && nextBtn) {
    nextBtn.addEventListener('click', () => {
        track.scrollBy({
            left: 350, // Geser sejauh 350px ke kanan
            behavior: 'smooth'
        });
    });

    prevBtn.addEventListener('click', () => {
        track.scrollBy({
            left: -350, // Geser sejauh 350px ke kiri
            behavior: 'smooth'
        });
    });
}