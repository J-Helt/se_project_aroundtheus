// Initial Data--------------------------------------------------------------
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

// Profile
const profileEditButton = document.querySelector(".profile__editButton");
const profileCloseButton = document.querySelector(".modal__close-button");
const profileModal = document.querySelector("#edit-modal");
const profileNameInput = profileModal.querySelector(
  ".modal__input:first-of-type"
);
const profileJobInput = profileModal.querySelector(
  ".modal__input:last-of-type"
);
const profileForm = document.forms["profile-form"];
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__description");

// Cards
const cardSection = document.querySelector(".cards");
const cardTemplate = document.querySelector("#card").content;
const addCardForm = document.forms["add-modal__form"];
const addModalElement = document.querySelector("#add-modal");
const addButton = document.querySelector(".profile__addButton");
const cardModalCloseButton = document.querySelector("#add-modal__close-button");
const cardName = addModalElement.querySelector(".modal__input:first-of-type");
const cardPlace = addModalElement.querySelector(".modal__input:last-of-type");

// Preview
const modalPreview = document.querySelector("#modal-preview");
const modalPreviewClose = modalPreview.querySelector("#modal-preview__close");
const modalPreviewImage = modalPreview.querySelector(".modal-preview__image");
const modalPreviewTitle = modalPreview.querySelector(".modal-preview__title");

// Functions --------------------------------------------------------------

// Visibility
function openModal(modal) {
  modal.classList.add("modal_opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
}

// Submit Handlers
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileJob.textContent = profileJobInput.value;
  closeModal(profileModal);
}

function handleAddFormSubmit(evt) {
  evt.preventDefault();
  const name = cardName.value;
  const link = cardPlace.value;
  const cardElement = getCardElement({
    name,
    link,
  });

  cardSection.prepend(cardElement);
  evt.target.reset();

  closeModal(addModalElement);
}

// Card Creation
function getCardElement(data) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardLocation = cardElement.querySelector(".card__location");

  const likeButton = cardElement.querySelector(".card__like");
  const trashButton = cardElement.querySelector(".card__trash-button");

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
    openModal(modalPreview);
    modalPreviewImage.src = data.link;
    modalPreviewImage.alt = data.name;
    modalPreviewTitle.textContent = data.name;
  });

  return cardElement;
}

// Loops--------------------------------------------------------------

initialCards.forEach((data) => {
  const cardElement = getCardElement(data);
  cardSection.prepend(cardElement);
});

// Event Listeners --------------------------------------------------------------

// Profile Edit
profileEditButton.addEventListener("click", () => {
  openModal(profileModal);
  profileNameInput.value = profileName.textContent;
  profileJobInput.value = profileJob.textContent;
});

profileCloseButton.addEventListener("click", () => {
  closeModal(profileModal);
});

profileForm.addEventListener("submit", handleProfileFormSubmit);

// Card Creator
addButton.addEventListener("click", () => {
  openModal(addModalElement);
});
cardModalCloseButton.addEventListener("click", () => {
  closeModal(addModalElement);
});

addCardForm.addEventListener("submit", handleAddFormSubmit);

// Preview
modalPreviewClose.addEventListener("click", () => {
  closeModal(modalPreview);
});
