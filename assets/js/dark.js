const html = document.querySelector("html");
const check = document.querySelector(".btn-dark");

check.addEventListener("click", () => {
  html.classList.toggle("btn-dark");

  html.classList.contains("btn-dark")
    ? (check.src = "/assets/img/LampadaAcessa.png")
    : (check.src = "/assets/img/LampadaApagada.png");
});
