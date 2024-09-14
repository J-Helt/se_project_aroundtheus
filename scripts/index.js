const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

const edit = document.querySelector(".profile__button-edit");
const close = document.querySelector(".modal_close");

edit.addEventListener("click", function () {
  document.querySelector(".modal").classList.add("modal_opened");
  document.querySelector(".modal_container").classList.add("modal_opened");
  document.querySelector(".modal_close").classList.add("modal_opened");
  document.querySelector(".modal_heading").classList.add("modal_opened");
  document.querySelector(".modal_form").classList.add("modal_opened");
});

close.addEventListener("click", function () {
  // document.querySelector(".modal_container").classList.remove("modal_opened");
  document.querySelector(".modal").classList.remove("modal_opened");
});
