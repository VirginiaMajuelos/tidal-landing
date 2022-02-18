const allCards = document.querySelector(".container-all-cards");
const dot = document.querySelectorAll(".dot");

dot.forEach((cadaDot, i) => {
  dot[i].addEventListener("click", () => {
    let position = i;
    let operation = position * -50;

    allCards.style.transform = `translateX(${operation}%)`;

    dot.forEach((cadaDot, i) => {
      dot[i].classList.remove("active");
    });
    dot[i].classList.add("active");
  });
});
