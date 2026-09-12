document.addEventListener('DOMContentLoaded', () => {
    
    // 1. HARDWARE-OPTIMIZED SNAP EXIT ANIMATIONS
    const sections = document.querySelectorAll('.snap-section');

    const observerOptions = {
        root: null,
        threshold: 0.4 
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const target = entry.target;
            
            if (entry.isIntersecting) {
                target.classList.remove('exit-top', 'exit-bottom');
            } else {
                if (entry.boundingClientRect.top < 0) {
                    target.classList.add('exit-top');
                    target.classList.remove('exit-bottom');
                } else {
                    target.classList.add('exit-bottom');
                    target.classList.remove('exit-top');
                }
            }
        });
    }, observerOptions);

    sections.forEach(sec => sectionObserver.observe(sec));

    // 2. 3D GLASS CARD TILT ANIMATION
    const tiltCards = document.querySelectorAll('.tilt-card');

    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * -5;
            const rotateY = ((x - centerX) / centerX) * 5;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
        });
    });

    // 3. FAQ ACCORDION INTERACTION
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            faqItems.forEach(i => i.classList.remove('active'));
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // 4. GLOBAL BUTTON SCROLL-TO-HERO FUNCTIONALITY
    const nonHeroButtons = document.querySelectorAll('.nav-to-hero');

    nonHeroButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const heroSection = document.getElementById('hero');
            if (heroSection) {
                heroSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Hero Header CTA Smooth Focus Action
    const heroBtn = document.getElementById('heroConnectBtn');
    if(heroBtn) {
        heroBtn.addEventListener('click', () => {
            const pricingSection = document.getElementById('pricing');
            if(pricingSection) {
                pricingSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

});