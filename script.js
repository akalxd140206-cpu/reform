document.addEventListener('DOMContentLoaded', () => {
    // ハンバーガーメニューの開閉
    const hamburger = document.getElementById('hamburger');
    const spNav = document.getElementById('sp-nav');
    const spNavLinks = spNav.querySelectorAll('a');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        spNav.classList.toggle('active');
    });

    // メニューのリンクをクリックしたら閉じる
    spNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            spNav.classList.remove('active');
        });
    });

    // スムーススクロール（ヘッダーの高さを考慮）
    const headerHeight = document.querySelector('.header').offsetHeight;
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});
