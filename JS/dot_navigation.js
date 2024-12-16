document.addEventListener("DOMContentLoaded", () => {
    const dots = document.querySelectorAll(".dot");
    const sections = document.querySelectorAll(".section");

    // 활성화 함수
    const activateDot = (targetId) => {
        dots.forEach((dot) => {
            if (dot.dataset.target === targetId) {
                dot.classList.add("active");
            } else {
                dot.classList.remove("active");
            }
        });
    };

    // Intersection Observer 설정
    const observerOptions = {
        root: null, // 뷰포트 기준
        threshold: 0.5, // 섹션의 50%가 보일 때 트리거
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                activateDot(entry.target.id);
            }
        });
    }, observerOptions);

    // 모든 섹션에 Observer 적용
    sections.forEach((section) => observer.observe(section));

    // 닷 클릭 이벤트
    dots.forEach((dot) => {
        dot.addEventListener("click", () => {
            const targetSection = document.getElementById(dot.dataset.target);
            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
            activateDot(dot.dataset.target);
        });
    });
});
