// Scroll Reveal
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000 ,
    delay: 200
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .project-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });

// typed js
const typed = new Typed('.multiple-text', {
    strings: ['Web Developer', 'Frontend designer', 'Tech Geek','Student'],
    typeSpeed : 100,
    backSpeed: 100,
    backDelay:1000,
    loop: true
});