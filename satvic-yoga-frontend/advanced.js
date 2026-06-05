function showWeek(week) {
    const week1 = document.getElementById("week1");
    const week2 = document.getElementById("week2");

    const tabs = document.querySelectorAll(".week-tab");
    tabs.forEach(tab => tab.classList.remove("active"));
    tabs[week - 1].classList.add("active");

    if (week === 1) {
        week1.classList.remove("hidden");
        week2.classList.add("hidden");
    } else {
        week2.classList.remove("hidden");
        week1.classList.add("hidden");
    }
}

function toggleText(element) {
    const card = element.closest(".educators-content");
    const shortText = card.querySelector(".short-text");
    const fullText = card.querySelector(".full-text");

    if (fullText.style.display === "none") {
        fullText.style.display = "block";
        element.textContent = "Read less ▲";
    } else {
        fullText.style.display = "none";
        element.textContent = "Read more ▼";
    }
}

function toggleFAQ(element) {
    let answer = element.querySelector(".answer");
    let icon = element.querySelector("svg");

    if (answer.style.display === "block") {
        answer.style.display = "none";
        icon.style.transform = "rotate(0deg)";
    } else {
        answer.style.display = "block";
        icon.style.transform = "rotate(180deg)";
    }
}
const amountButtons = document.querySelectorAll('.amount-btn');

amountButtons.forEach(button => {
    button.addEventListener('click', () => {
        amountButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

 var eventDate = new Date("Feb 16, 2026 06:00:00");

  setInterval(function () {
    var now = new Date();
    var timeLeft = eventDate.getTime() - now.getTime();

    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("min").textContent = minutes;
    document.getElementById("sec").textContent = seconds;

    if (timeLeft < 0) {
      document.querySelector(".countdown-box").innerHTML = "Workshop Started!";
    }
  }, 1000);
