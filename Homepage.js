const circleProgress = document.getElementById("circle");

let progress = 0;
const target = 75;

function animate() {
    progress += (target - progress) * 0.03;

    circleProgress.style.background = `
        conic-gradient(
            var(--intelliDu-blue) ${progress}%,
            #ffffff1c 0
        )
    `;

    if (progress < target - 0.1) {
        requestAnimationFrame(animate);
    }
}

animate();