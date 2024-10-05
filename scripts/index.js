const initialCards = [
  {
    name: "Lake Louise",
    link: "./images/lake-louise.png",
  },
  {
    name: "Bald Mountains",
    link: "./images/bald-mountains.png",
  },
  {
    name: "Latemar",
    link: "./images/latemar.png",
  },
  {
    name: "Vanoise National Park",
    link: "./images/vanoise-national-park.png",
  },
  {
    name: "Lago di Braies",
    link: "./images/lago-di-braies.png",
  },
  {
    name: "Yosemite Valley",
    link: "./images/yosemite-valley.png",
  },
];

const edit = document.querySelector(".profile__button-edit");
const close = document.querySelector(".modal__button-close");
const modalElement = document.querySelector(".modal");
const nameInput = document.querySelector(".modal__form-input:first-of-type");
const jobInput = document.querySelector(".modal__form-input:last-of-type");

const profileFormElement = document.querySelector("#modal__form");

const profileName = document.querySelector(".profile__info-name");
const profileJob = document.querySelector(".profile__info-description");
const cardSection = document.querySelector(".cards");
const cardTemplate = document.querySelector("#card").content;

edit.addEventListener("click", function () {
  modalElement.classList.add("modal__opened");
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});

function closeModal(evt) {
  modalElement.classList.remove("modal__opened");
}

close.addEventListener("click", closeModal);

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closeModal(evt);
}

profileFormElement.addEventListener("submit", handleProfileFormSubmit);

function getCardElement(data) {
  let cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  let cardImage = cardElement.querySelector(".card__image");
  let cardLocation = cardElement.querySelector(".card__location");
  cardImage.src = data.link;
  cardImage.alt = data.name;
  cardLocation.textContent = data.name;
  return cardElement;
}

initialCards.forEach((data) => {
  let cardElement = getCardElement(data);
  cardSection.append(cardElement);
});
