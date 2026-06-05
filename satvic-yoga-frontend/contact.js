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
