const btn = document.querySelector(".offerings-btn");
  const hiddenSection = document.querySelector(".hidden-educators");

  btn.addEventListener("click", () => {
    hiddenSection.classList.toggle("show");

    if (hiddenSection.classList.contains("show")) {
      btn.textContent = "Show Less";
    } else {
      btn.textContent = "Meet Full Team";
     
    }
  });
