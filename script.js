document.addEventListener('DOMContentLoaded', function() {
    createFloatingParticles();
    initScrollAnimations();
    addTypingAnimation();
    addProjectCardEffects();
    enhanceContactLinks();
    initThemeSwitcher();
});

function initThemeSwitcher() {
    const themeBtn = document.getElementById('theme-toggle');
    const body = document.body;

    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        themeBtn.textContent = '☀️';
    }

    themeBtn.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        const isLight = body.classList.contains('light-mode');
        themeBtn.textContent = isLight ? '☀️' : '🌙';
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });
}

function createFloatingParticles() {
    const container = document.querySelector('.container');
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        const size = Math.random() * 6 + 2 + 'px';
        particle.style.width = size;
        particle.style.height = size;
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(particle);
    }
}

function initScrollAnimations() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('h2, .project-card, li').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
}

function addTypingAnimation() {
    const title = document.getElementById('main-title');
    const text = title.textContent;
    title.textContent = '';
    let i = 0;
    const type = () => {
        if (i < text.length) {
            title.textContent += text.charAt(i);
            i++;
            setTimeout(type, 100);
        }
    };
    setTimeout(type, 300);
}

function addProjectCardEffects() {
    const projects = document.querySelectorAll('.projects h3');
    projects.forEach(h3 => {
        const card = document.createElement('div');
        card.className = 'project-card';
        const desc = h3.nextElementSibling;
        h3.parentNode.insertBefore(card, h3);
        card.appendChild(h3);
        if (desc) card.appendChild(desc);
    });
}

function enhanceContactLinks() {
    const area = document.getElementById('contact-area');
    const links = area.querySelectorAll('a');
    const wrapper = document.createElement('div');
    wrapper.className = 'contact-links';
    
    links.forEach(l => {
        const btn = document.createElement('a');
        btn.href = l.href;
        btn.target = "_blank";
        if (l.href.includes('mailto')) btn.innerHTML = '✉️ Compose Email';
        else if (l.href.includes('github')) btn.innerHTML = '🐙 GitHub';
        else btn.innerHTML = '🔗 LinkedIn';
        wrapper.appendChild(btn);
    });
    area.innerHTML = '';
    area.appendChild(wrapper);
}