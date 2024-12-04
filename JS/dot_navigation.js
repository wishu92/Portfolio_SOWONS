document.addEventListener("DOMContentLoaded", () => {
    const dots = document.querySelectorAll(".dot");
    const sections = document.querySelectorAll(".section");

    // 섹션 활성화 함수
    const activateDot = (targetId) => {
        dots.forEach(dot => {
            if (dot.dataset.target === targetId) {
                dot.classList.add("active");
            } else {
                dot.classList.remove("active");
            }
        });
    };

    // 초기 상태 설정 (첫 번째 섹션 활성화)
    const initActiveSection = () => {
        const firstSectionId = sections[0].id; // 첫 번째 섹션 ID 가져오기
        activateDot(firstSectionId); // 첫 번째 섹션의 닷 활성화
    };

    // 스크롤 이벤트
    window.addEventListener("scroll", () => {
        let foundActive = false;
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                activateDot(section.id);
                foundActive = true; // 활성화된 섹션을 찾음
            }
        });

        // 모든 섹션이 비활성화된 경우 (예: 스크롤이 빠르게 움직일 때)
        if (!foundActive) {
            const firstSectionId = sections[0].id;
            activateDot(firstSectionId); // 첫 번째 섹션 활성화 유지
        }
    });

    // 닷 클릭 이벤트
    dots.forEach(dot => {
        dot.addEventListener("click", () => {
            const targetSection = document.getElementById(dot.dataset.target);
            targetSection.scrollIntoView({ behavior: "smooth" });
            activateDot(dot.dataset.target);
        });
    });

    // 초기 활성화 호출
    initActiveSection();
});