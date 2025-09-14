document.addEventListener('DOMContentLoaded', () => {

    // --- ЛОГИКА ЗАГРУЗОЧНОГО ЭКРАНА ---
    const preloader = document.getElementById('preloader');
    const root = document.getElementById('root');

    setTimeout(() => {
        preloader.classList.add('fade-out');
        document.body.style.overflow = 'none';
        root.classList.remove('hidden');
    }, 100);

    // --- СКРИПТ ДЛЯ ВОЗРАСТА ---
    const ageElement = document.getElementById('age');
    if (ageElement) {
        const birthDate = new Date(2025, 3, 1).getTime(); // Тут измените - (год, месяц, день)
        const updateAge = () => {
            const now = new Date().getTime();
            const ageInYears = (now - birthDate) / (1000 * 60 * 60 * 24 * 365.25);
            ageElement.textContent = `Мне ${ageInYears.toFixed(9)} лет`;
        };
        setInterval(updateAge, 50);
    }

    // --- СКРИПТ ДЛЯ ПЕРЕКЛЮЧЕНИЯ СТРАНИЦ ---
    const views = document.querySelectorAll('.view');
    const pageTriggers = [
        { btnId: 'projects-btn', viewId: 'projects-view' },
        { btnId: 'contacts-btn', viewId: 'contacts-view' },
        { btnId: 'donations-btn', viewId: 'donations-view' },
    ];

    const switchToView = (viewId) => {
        views.forEach(view => view.classList.remove('active'));
        const targetView = document.getElementById(viewId);
        if (targetView) targetView.classList.add('active');
    };
    
    pageTriggers.forEach(trigger => {
        const btn = document.getElementById(trigger.btnId);
        if (btn) btn.addEventListener('click', () => switchToView(trigger.viewId));
    });

    document.querySelectorAll('.back-link').forEach(btn => {
        btn.addEventListener('click', () => switchToView('home-view'));
    });

    // --- ЛОГИКА ПАСХАЛКИ ---
    const avatar = document.getElementById('main-avatar');
    const video = document.getElementById('background-video');
    let clickCount = 0;
    let clickTimer = null;

    if (avatar) {
        avatar.addEventListener('click', () => {
            clickCount++;
            clearTimeout(clickTimer);
            clickTimer = setTimeout(() => { clickCount = 0; }, 1500);

            if (clickCount === 7) {
                clickCount = 0;
                document.body.classList.toggle('video-active');
                if (document.body.classList.contains('video-active')) {
                    video.play();
                } else {
                    video.pause();
                }
            }
        });
    }
});