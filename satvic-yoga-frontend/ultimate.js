function showPage(pageNumber) {
    const review1 = document.getElementById("review1");
    const review2 = document.getElementById("review2");
    const review3 = document.getElementById("review3");

    if (pageNumber === 1) {
      review1.hidden = false;
      review2.hidden = true;
      review3.hidden = true; 
    } else if (pageNumber === 2) {
      review1.hidden = true; 
      review2.hidden = false;
      review3.hidden = true;  
    }else if(pageNumber === 3){
       review2.hidden = true;
       review1.hidden = true;
       review3.hidden = false;   
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
