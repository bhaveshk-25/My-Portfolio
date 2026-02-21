document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    animateTyping();
    setupCards();
});

function createParticles() {
    const container = document.querySelector('.container');
    for (let i = 0; i < 20; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        const size = Math.random() * 2 + 1 + 'px'; 
        p.style.width = size; p.style.height = size;
        p.style.left = Math.random() * 100 + '%';
        p.style.top = Math.random() * 100 + '%';
        p.style.animation = `float ${Math.random() * 10 + 10}s infinite linear`;
        container.appendChild(p);
    }
}

function animateTyping() {
    const el = document.getElementById('main-title');
    const txt = el.textContent; el.textContent = '';
    let i = 0;
    const type = () => {
        if (i < txt.length) { el.textContent += txt.charAt(i++); setTimeout(type, 100); }
    };
    setTimeout(type, 300);
}

function setupCards() {
    const headers = document.querySelectorAll('.projects h3');
    headers.forEach(h => {
        const card = document.createElement('div');
        card.className = 'project-card';
        const p = h.nextElementSibling;
        h.parentNode.insertBefore(card, h);
        card.append(h, p);
    });
}