const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('bg-white/95', 'shadow-lg', 'py-3', 'border-b-2', 'border-kayang-orange/20');
        navbar.classList.remove('py-5', 'bg-kayang-cream/95', 'border-kayang-orange/10', 'shadow-sm');
    } else {
        navbar.classList.remove('bg-white/95', 'shadow-lg', 'py-3', 'border-b-2', 'border-kayang-orange/20');
        navbar.classList.add('py-5', 'bg-kayang-cream/95', 'border-kayang-orange/10', 'shadow-sm');
    }
});

// TESTIMONIAL SLIDER LOGIC
const track = document.getElementById('testimonial-track');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

if (track && prevBtn && nextBtn) {
    // Lebar card + gap diperkirakan sekitar 450px + 32px
    const scrollAmount = 482;

    nextBtn.addEventListener('click', () => {
        track.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
    prevBtn.addEventListener('click', () => {
        track.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });
}

function sendToWhatsapp(event) {
    event.preventDefault();
    const name = document.getElementById('orderName').value;
    const message = document.getElementById('orderPesan').value;

    if (!name || !message) {
        alert("Mohon lengkapi nama dan pesanan anda.");
        return;
    }

    const whatsappNumber = "6283850337840"; // Nomor dari footer
    const text = `Halo Admin, saya ingin memesan: ${message} Atas Nama ${name}`;

    const url = `https://wa.me/${whatsappNumber}?text=${text}`;

    window.open(url, '_blank');
}