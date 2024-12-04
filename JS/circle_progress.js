// document.addEventListener("DOMContentLoaded", () => {
//     const progressBars = document.querySelectorAll('.progress-bar');

//     progressBars.forEach(bar => {
//         const percentage = bar.getAttribute('data-percentage'); // 퍼센티지 가져오기
//         const circle = bar.querySelector('circle:nth-child(2)'); // 진행 원 가져오기
//         const percentageLabel = bar.querySelector('.percentage'); // 퍼센티지 텍스트

//         const radius = circle.r.baseVal.value; // 반지름 가져오기
//         const circumference = 2 * Math.PI * radius; // 원 둘레 계산

//         circle.style.strokeDasharray = circumference; // 둘레 설정
//         circle.style.strokeDashoffset = circumference; // 초기 상태 설정

//         let currentPercentage = 0;

//         const updateProgress = setInterval(() => {
//             if (currentPercentage >= percentage) {
//                 clearInterval(updateProgress); // 목표 퍼센티지에 도달하면 중지
//             } else {
//                 currentPercentage++;
//                 const offset = circumference - (circumference * currentPercentage) / 100;
//                 circle.style.strokeDashoffset = offset; // 애니메이션
//                 percentageLabel.textContent = `${currentPercentage}%`; // 텍스트 업데이트
//             }
//         }, 20); // 속도 조절
//     });
// });


document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll('.progress-bar');

    const startProgress = (bar) => {
        const percentage = bar.getAttribute('data-percentage'); // 퍼센티지 가져오기
        const circle = bar.querySelector('circle:nth-child(2)'); // 진행 원 가져오기
        const percentageLabel = bar.querySelector('.percentage'); // 퍼센티지 텍스트

        const radius = circle.r.baseVal.value; // 반지름 가져오기
        const circumference = 2 * Math.PI * radius; // 원 둘레 계산

        circle.style.strokeDasharray = circumference; // 둘레 설정
        circle.style.strokeDashoffset = circumference; // 초기 상태 설정

        let currentPercentage = 0;

        const updateProgress = setInterval(() => {
            if (currentPercentage >= percentage) {
                clearInterval(updateProgress); // 목표 퍼센티지에 도달하면 중지
            } else {
                currentPercentage++;
                const offset = circumference - (circumference * currentPercentage) / 100;
                circle.style.strokeDashoffset = offset; // 애니메이션
                percentageLabel.textContent = `${currentPercentage}%`; // 텍스트 업데이트
            }
        }, 20); // 속도 조절
    };

    // Intersection Observer 설정
    const observerOptions = {
        root: null, // 뷰포트 기준
        threshold: 0.5 // 요소의 50%가 보이면 트리거
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startProgress(entry.target); // 진행 바 애니메이션 시작
                observer.unobserve(entry.target); // 한 번만 실행되도록 관찰 해제
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // 각 진행 바를 관찰 대상으로 추가
    progressBars.forEach(bar => observer.observe(bar));
});
