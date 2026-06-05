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
