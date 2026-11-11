document.addEventListener("DOMContentLoaded", function () {
    // 画面に入ったことを検知する設定
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.15 // 要素が15%画面に入ったら発動
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target); // 一度アニメーションしたら監視解除
            }
        });
    }, observerOptions);

    // .fade-in-section がついた要素をすべて監視対象にする
    const fadeElements = document.querySelectorAll(".fade-in-section");
    fadeElements.forEach(el => observer.observe(el));
});