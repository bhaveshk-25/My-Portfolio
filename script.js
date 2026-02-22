document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    animateTyping();
    setupCards();
    setupContactForm();
    setupThemeToggle(); // This line tells the button to wake up and listen for clicks!
});

function createParticles() {
    const container = document.querySelector('.container');
    if (!container) return;
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
    if (!el) return;
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

function setupContactForm() {
    const form = document.querySelector('.contact-form');
    
    if (form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault(); 
            
            const timeInput = document.getElementById('local-time');
            if (timeInput) {
                timeInput.value = new Date().toLocaleString(); 
            }

            const data = new FormData(form);
            const button = form.querySelector('.submit-btn');
            const originalText = button.textContent;
            
            button.textContent = 'Sending...';
            
            try {
                const response = await fetch(form.action, {
                    method: form.method,
                    body: data,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (response.ok) {
                    alert("Message Sent! Thank you for getting in touch.");
                    form.reset();
                } else {
                    alert("Oops! There was a problem submitting your form.");
                }
            } catch (error) {
                alert("Oops! There was a problem submitting your form.");
            } finally {
                button.textContent = originalText;
            }
        });
    }
}

// The engine for your Theme Button
function setupThemeToggle() {
    const themeBtn = document.getElementById('theme-btn');
    if (!themeBtn) return; // Failsafes if the button is missing from HTML
    
    const icon = themeBtn.querySelector('i');

    themeBtn.addEventListener('click', () => {
        // Toggles the light-mode class on the body
        document.body.classList.toggle('light-mode');
        
        // Swaps the sun/moon icon
        if (document.body.classList.contains('light-mode')) {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        } else {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    });
}