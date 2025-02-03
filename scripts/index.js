const initialCards = [
  {
    name: "Lake Louise",
    link: "./images/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "./images/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "./images/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "./images/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "./images/lago.jpg",
  },
  {
    name: "Yosemite Valley",
    link: "./images/yosemite.jpg",
  },
];

// Variables --------------------------------------------------------------

const main = document.querySelector(".content");
const editButton = document.querySelector(".profile__editButton");
const closeButton = document.querySelector(".modal__close-button");
const modalElement = document.querySelector("#edit-modal");
const nameInput = document.querySelector(".modal__input:first-of-type");
const jobInput = document.querySelector(".modal__input:last-of-type");
const profileFormElement = document.querySelector("#modal__form");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__description");
const cardSection = document.querySelector(".cards");
const cardTemplate = document.querySelector("#card").content;

const addFormElement = document.querySelector("#add-modal__form");
const addModalElement = document.querySelector("#add-modal");
const addButton = document.querySelector(".profile__addButton");
const closeButton2 = document.querySelector("#add-modal__close-button");
const cardName = document.querySelector("#add-modal__input:first-of-type");
const cardPlace = document.querySelector("#add-modal__input:last-of-type");

const previewTemplate = document.querySelector("#preview").content;

// --------------------------------------------------------------

// Functions --------------------------------------------------------------

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closeModal(modalElement);
}

function handleAddFormSubmit(evt) {
  evt.preventDefault();
  const name = cardName.value;
  const link = cardPlace.value;
  const cardElement = getCardElement({
    name,
    link,
  });
  console.log(cardElement);
  cardSection.prepend(cardElement);

  closeModal(addModalElement);
}

function getCardElement(data) {
  let cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  let cardImage = cardElement.querySelector(".card__image");
  let cardLocation = cardElement.querySelector(".card__location");

  let likeButton = cardElement.querySelector(".card__like");
  let trashButton = cardElement.querySelector(".card__trash-button");

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-toggle");
  });

  trashButton.addEventListener("click", () => {
    cardElement.remove();
  });

  cardImage.src = data.link;
  cardImage.alt = data.name;
  cardLocation.textContent = data.name;

  cardImage.addEventListener("click", () => {
    let previewElement = getPreviewElement(data);

    let timer = setInterval(function () {
      if ((previewElement.style.opacity = 1)) clearInterval(timer);
      else previewElement.style.opacity + 0.02;
    }, 20);
    main.prepend(previewElement);
  });

  return cardElement;
}

function getPreviewElement(data) {
  let previewElement = previewTemplate
    .querySelector(".preview")
    .cloneNode(true);
  let previewClose = previewElement.querySelector(".preview__close");
  let previewImage = previewElement.querySelector(".preview__image");
  let previewTitle = previewElement.querySelector(".preview__title");

  previewImage.src = data.link;
  previewImage.alt = data.name;
  previewTitle.textContent = data.name;

  previewClose.addEventListener("click", () => {
    previewElement.style.opacity = 0;
    setInterval(function () {
      previewElement.remove();
    }, 430);
  });

  return previewElement;
}

function openModal(modal) {
  modal.classList.add("modal_opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
}

// --------------------------------------------------------------

// Loops--------------------------------------------------------------

initialCards.forEach((data) => {
  let cardElement = getCardElement(data);
  cardSection.prepend(cardElement);
});

// --------------------------------------------------------------

// Event Listeners --------------------------------------------------------------

editButton.addEventListener("click", () => {
  openModal(modalElement);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});

closeButton.addEventListener("click", () => {
  closeModal(modalElement);
});

profileFormElement.addEventListener("submit", handleProfileFormSubmit);

addButton.addEventListener("click", () => {
  openModal(addModalElement);
});
closeButton2.addEventListener("click", () => {
  closeModal(addModalElement);
});
addFormElement.addEventListener("submit", handleAddFormSubmit);

// --------------------------------------------------------------
