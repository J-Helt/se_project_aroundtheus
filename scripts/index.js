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

const editButton = document.querySelector(".profile__editButton");
const closeButton = document.querySelector(".modal__close-button");
const modalElement = document.querySelector(".modal");
const nameInput = document.querySelector(".modal__input:first-of-type");
const jobInput = document.querySelector(".modal__input:last-of-type");

const profileFormElement = document.querySelector("#modal__form");

const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__description");
const cardSection = document.querySelector(".cards");
const cardTemplate = document.querySelector("#card").content;

editButton.addEventListener("click", function () {
  modalElement.classList.add("modal_opened");
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});

function closeModal(evt) {
  modalElement.classList.remove("modal_opened");
}

closeButton.addEventListener("click", closeModal);

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
