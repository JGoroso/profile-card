const buttons = document.querySelectorAll(".card-buttons button");
const sections = document.querySelectorAll(".card-section");
const card = document.querySelector(".card");

const handleButtonClick = (e) => {
  //El evento click obtiene el atributo que se encuentre en data-section
  const targetSection = e.target.getAttribute("data-section");

  const section = document.querySelector(targetSection);

  // targetSection !== "#about"
  //   ? card.classList.add("is-active")
  //   : card.classList.remove("is-active");

  //Setea un valor especifico en el atributo data-state y lo saca de targetSection
  card.setAttribute("data-state", targetSection);

  //CREO que recorre los elementos del dom que estan llamados por el queryselectorAll y luego les remueve la clase is-active
  sections.forEach((s) => s.classList.remove("is-active"));
  buttons.forEach((b) => b.classList.remove("is-active"));

  // y aca? XD

  section.classList.add("is-active");
};
buttons.forEach((btn) => {
  btn.addEventListener("click", handleButtonClick);
});
