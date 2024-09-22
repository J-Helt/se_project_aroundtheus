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
const close = document.querySelector(".modal_close");
const modalElement = document.querySelector(".modal");

edit.addEventListener("click", function () {
  modalElement.classList.add("modal_opened");
  document.querySelector(".modal_container").classList.add("modal_opened");
  document.querySelector(".modal_close").classList.add("modal_opened");
  document.querySelector(".modal_heading").classList.add("modal_opened");
  document.querySelector(".modal_form").classList.add("modal_opened");
});

function modalCloser(evt) {
  modalElement.classList.remove("modal_opened");
}

close.addEventListener("click", modalCloser);

const profileFormElement = document.querySelector(".modal_form");

const nameInput = document.querySelector(".modal_name");
const jobInput = document.querySelector(".modal_description");

const profileName = document.querySelector(".profile__info-name");
const profileJob = document.querySelector(".profile__info-description");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
}

profileFormElement.addEventListener("submit", handleProfileFormSubmit);

let i = 0;
function getCardElement(data) {
  let cardSection = document.querySelector(".cards");
  let cardTemplate = document.querySelector("#card").content;

  let cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  let cardImage = cardElement.querySelector(".card_image");
  let cardLocation = cardElement.querySelector(".card__location");
  cardImage.src = initialCards[i].link;
  cardImage.alt = initialCards[i].name;
  cardLocation.textContent = initialCards[i].name;
  cardSection.append(cardElement);
  i++;
}

initialCards.forEach(getCardElement);
