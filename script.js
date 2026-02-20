document.addEventListener('DOMContentLoaded', function() {
    createFloatingParticles();
    initScrollAnimations();
    addTypingAnimation();
    addProjectCardEffects();
    enhanceContactLinks();
});

function createFloatingParticles() {
    const container = document.querySelector('.container');
    for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        const size = Math.random() * 5 + 2 + 'px';
        particle.style.width = size;
        particle.style.height = size;
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        container.appendChild(particle);
    }
}

function initScrollAnimations() {
    const revealElements = document.querySelectorAll('h2, h3, p, li');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });
    
    revealElements.forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
}

function addTypingAnimation() {
    const heading = document.querySelector('h1');
    const text = heading.textContent;
    heading.textContent = '';
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            heading.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 120);
        }
    };
    setTimeout(typeWriter, 500);
}

function addProjectCardEffects() {
    const projectHeaders = document.querySelectorAll('.projects h3');
    projectHeaders.forEach(header => {
        const card = document.createElement('div');
        card.classList.add('project-card');
        const nextElement = header.nextElementSibling;
        header.parentNode.insertBefore(card, header);
        card.appendChild(header);
        if (nextElement && nextElement.tagName === 'P') {
            card.appendChild(nextElement);
        }
        // Background-override removed to keep default theme as requested
    });
}

function enhanceContactLinks() {
    const contactArea = document.querySelector('#contact-area');
    const links = contactArea.querySelectorAll('a');
    const linksContainer = document.createElement('div');
    linksContainer.classList.add('contact-links');
    
    links.forEach(link => {
        if (link.href.includes('mailto')) link.innerHTML = '📧 Email';
        else if (link.href.includes('github')) link.innerHTML = '🔗 GitHub';
        else if (link.href.includes('linkedin')) link.innerHTML = '💼 LinkedIn';
        linksContainer.appendChild(link);
    });
    contactArea.innerHTML = '';
    contactArea.appendChild(linksContainer);
}