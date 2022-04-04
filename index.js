const buttons = document.querySelectorAll(".card-buttons button");
const sections = document.querySelectorAll(".card-section");
const card = document.querySelector(".card");
const header = document.querySelector(".card-header");
const text = document.querySelector(".name");
const img = document.querySelector(".card-avatar");

const handleButtonClick = (e) => {
  const targetSection = e.target.getAttribute("data-section");

  const section = document.querySelector(targetSection);

  targetSection !== "#about"
    ? card.classList.add("is-active")
    : card.classList.remove("is-active");

  card.setAttribute("data-state", targetSection);
  header.setAttribute("data-state", targetSection);
  text.setAttribute("data-state", targetSection);
  img.setAttribute("data-state", targetSection);
  sections.forEach((s) => s.classList.remove("is-active"));
  buttons.forEach((b) => b.classList.remove("is-active"));

  // ?
  e.target.classList.add("is-active");

  section.classList.add("is-active");
};
buttons.forEach((btn) => {
  btn.addEventListener("click", handleButtonClick);
});
