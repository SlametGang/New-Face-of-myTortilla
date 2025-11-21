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