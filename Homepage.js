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


const monthlyBtn = document.querySelector(".switch-btn-month");
const yearlyBtn = document.querySelector(".switch-btn-year");
const monthlyContents = document.querySelectorAll(".monthly-content");
const yearlyContents = document.querySelectorAll(".yearly-content");

monthlyBtn.addEventListener("click", () => {

    monthlyBtn.classList.add("active");
    yearlyBtn.classList.remove("active");

    monthlyContents.forEach(el => {
        el.style.display = "flex";
    });

    yearlyContents.forEach(el => {
        el.style.display = "none";
    });

});

yearlyBtn.addEventListener("click", () => {

    yearlyBtn.classList.add("active");
    monthlyBtn.classList.remove("active");

    monthlyContents.forEach(el => {
        el.style.display = "none";
    });

    yearlyContents.forEach(el => {
        el.style.display = "flex";
    });

});

const track = document.querySelector(".track");
const cards = document.querySelectorAll(".user-card");

const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");

const cardWidth = cards[0].offsetWidth + 20;

let index = 0;
const visible = 3;
const maxIndex = cards.length - visible;

function move() {
    track.scrollTo({
        left: index * cardWidth,
        behavior: "smooth"
    });
}

rightBtn.addEventListener("click", () => {

    index++;

    if (index > maxIndex) {
        index = 0;
    }

    move();
});

leftBtn.addEventListener("click", () => {

    index--;

    if (index < 0) {
        index = maxIndex;
    }

    move();
});