// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Add floating particles
    createFloatingParticles();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Add typing animation to main heading
    addTypingAnimation();
    
    // Add hover effects to project cards
    addProjectCardEffects();
    
    // Add loading animations
    addLoadingAnimations();
    
    // Add contact form enhancements
    enhanceContactLinks();
});

// Create floating particles
function createFloatingParticles() {
    const container = document.querySelector('.container');
    
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        container.appendChild(particle);
    }
}

// Initialize scroll animations
function initScrollAnimations() {
    const revealElements = document.querySelectorAll('h2, h3, p, li, .project-card');
    
    revealElements.forEach(el => {
        el.classList.add('reveal');
    });
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(el => {
        observer.observe(el);
    });
}

// Add typing animation to main heading
function addTypingAnimation() {
    const heading = document.querySelector('h1');
    const text = heading.textContent;
    heading.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            heading.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    setTimeout(typeWriter, 500);
}

// Add project card effects
function addProjectCardEffects() {
    const projectHeaders = document.querySelectorAll('h3');
    
    projectHeaders.forEach(header => {
        // Create project card wrapper
        const card = document.createElement('div');
        card.classList.add('project-card');
        
        // Wrap the header and following paragraph
        const nextElement = header.nextElementSibling;
        header.parentNode.insertBefore(card, header);
        card.appendChild(header);
        if (nextElement && nextElement.tagName === 'P') {
            card.appendChild(nextElement);
        }
        
        // Add hover effect
        card.addEventListener('mouseenter', function() {
            this.style.background = 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(255, 107, 107, 0.1) 100%)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.background = 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)';
        });
    });
}

// Add loading animations
function addLoadingAnimations() {
    const elements = document.querySelectorAll('p, h1, h2, h3, li, a');
    
    elements.forEach((element, index) => {
        element.classList.add('loading');
        element.style.animationDelay = (index * 0.1) + 's';
    });
}

// Enhance contact links
function enhanceContactLinks() {
    const contactSection = document.querySelector('h2:last-of-type').nextElementSibling;
    const links = contactSection.querySelectorAll('a');
    
    // Create contact links container
    const linksContainer = document.createElement('div');
    linksContainer.classList.add('contact-links');
    
    // Move links to container
    links.forEach(link => {
        // Add icons based on link content
        if (link.textContent.includes('qwerty@gmail.com')) {
            link.innerHTML = '📧 ' + link.textContent;
        } else if (link.href.includes('github')) {
            link.innerHTML = '🐱 GitHub';
        } else if (link.href.includes('linkedin')) {
            link.innerHTML = '💼 LinkedIn';
        }
        
        linksContainer.appendChild(link);
        
        // Add click animation
        link.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255,255,255,0.6)';
            ripple.style.width = ripple.style.height = '0px';
            ripple.style.left = ripple.style.top = '50%';
            ripple.style.transform = 'translate(-50%, -50%)';
            ripple.style.animation = 'ripple 0.6s linear';
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    contactSection.appendChild(linksContainer);
    
    // Add ripple keyframes to CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                width: 100px;
                height: 100px;
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Add smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add mouse movement parallax effect
document.addEventListener('mousemove', function(e) {
    const particles = document.querySelectorAll('.particle');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    particles.forEach((particle, index) => {
        const speed = (index + 1) * 0.5;
        const xPos = (x - 0.5) * speed;
        const yPos = (y - 0.5) * speed;
        
        particle.style.transform = `translate(${xPos}px, ${yPos}px)`;
    });
});

// Add window resize handler
window.addEventListener('resize', function() {
    // Recalculate animations on resize
    const particles = document.querySelectorAll('.particle');
    particles.forEach(particle => {
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
    });
});
