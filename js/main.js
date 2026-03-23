/* =========================================================================
   main.js - Interactive behaviors and animations
   ========================================================================= */

document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. Navigation Scroll Effect --- */
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    /* --- 2. Active Link Switching on Scroll --- */
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-item');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });

    /* --- 3. Scroll Reveal Animations --- */
    const revealElements = document.querySelectorAll('.section-reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    /* --- 4. Terminal Typing Effect --- */
    const typeTarget = document.querySelector('.typing');
    const textToType = "Segmenting the unsegmentable...";
    let charIndex = 0;

    function typeWriter() {
        if (typeTarget && charIndex < textToType.length) {
            typeTarget.textContent += textToType.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, Math.random() * 50 + 50); // random delay between 50-100ms
        }
    }

    // Start typing effect after 1 second
    setTimeout(typeWriter, 1000);
});
