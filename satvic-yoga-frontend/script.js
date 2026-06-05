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
