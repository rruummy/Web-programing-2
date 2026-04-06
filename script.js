document.addEventListener('DOMContentLoaded', () => {
    handleSystemInfo();
    loadEmployerReviews();
    initContactModal();
    initThemeManager();
});

function handleSystemInfo() {
    const systemData = {
        os: navigator.platform,
        browser: navigator.userAgent,
        language: navigator.language,
        screen: `${window.screen.width}x${window.screen.height}`,
        timestamp: new Date().toLocaleString()
    };

    localStorage.setItem('user_device_info', JSON.stringify(systemData));

    const footer = document.getElementById('system-info-footer');
    if (footer) {
        footer.style.padding = "20px";
        footer.style.textAlign = "center";
        footer.innerHTML = `
            <small>OS: ${systemData.os} | Res: ${systemData.screen} | Logged: ${systemData.timestamp}</small>
        `;
    }
}

async function loadEmployerReviews() {
    const container = document.getElementById('comments-container');
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
        if (!response.ok) throw new Error('Network error');

        const comments = await response.json();
        container.innerHTML = '';

        comments.slice(0, 3).forEach(comment => {
            const card = document.createElement('div');
            card.style.cssText = `
                padding: 15px;
                margin-bottom: 15px;
                border-left: 4px solid var(--accent-color);
                background: var(--section-bg);
            `;
            card.innerHTML = `
                <strong>${comment.email}</strong>
                <p style="margin: 5px 0 0; font-style: italic;">"${comment.body}"</p>
            `;
            container.appendChild(card);
        });
    } catch (error) {
        container.innerText = 'Не вдалося завантажити відгуки.';
    }
}

function initContactModal() {
    const modal = document.getElementById('contactModal');
    const closeBtn = document.getElementById('closeModal');

    setTimeout(() => {
        if (modal) modal.style.display = 'flex';
    }, 60000);

    closeBtn.onclick = () => modal.style.display = 'none';
    window.onclick = (e) => { if (e.target == modal) modal.style.display = 'none'; };
}

function initThemeManager() {
    const themeBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Функція для оновлення тексту кнопки
    function updateButtonText() {
        if (body.classList.contains('dark-theme')) {
            themeBtn.innerText = "Денний режим";
        } else {
            themeBtn.innerText = "Нічний режим";
        }
    }

    // Автоматичне визначення теми за часом
    function setAutoTheme() {
        const hour = new Date().getHours();
        // Денна тема: від 07:00 до 21:00
        const isDayTime = hour >= 7 && hour < 21;

        if (isDayTime) {
            body.classList.remove('dark-theme');
        } else {
            body.classList.add('dark-theme');
        }
        updateButtonText();
    }

    // Ручне перемикання
    themeBtn.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        updateButtonText();
    });

    setAutoTheme();
}