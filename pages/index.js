import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";

import { closeModal, openModal } from "../utils/utils.js";

const cardData = [
  {
    //object 1
    title: "Guanajuato, MX",
    link: "https://images.unsplash.com/photo-1585975985662-449adf2e7f8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NTY0OTc2OA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
  },

  {
    //object 2
    title: "Rio de Janiero, BR",
    link: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MjA3MDgzMA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
  },
  {
    //object 3
    title: "San Juan, PR",
    link: "https://images.unsplash.com/photo-1579687196544-08ae57ab5c11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NTY0OTc0NQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
  },
  {
    //object 4
    title: "Querétaro, MX",
    link: "https://images.unsplash.com/photo-1591933733584-bf9577821973?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NTY0OTczNg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
  },
  {
    //object 5
    title: "Puerto Vallarta, MX",
    link: "https://images.unsplash.com/photo-1547047549-0d757aaa848a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NTY0OTY3Mw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
  },
  {
    //object 6
    title: "Barcelona, ES",
    link: "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTMyNDg0Ng&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
  },
];

const cardSelector = "#card-template";
const renderCard = (data, cardsWrap) => {
  const card = new Card(data, cardSelector);
  cardsWrap.prepend(card.getView());
  card._setEventListeners();
};

//Wrappers
const cardsWrap = document.querySelector(".cards__list");
const profileEditModal = document.querySelector("#edit-modal");
const addCardModal = document.querySelector("#add-card-modal");
const previewModalWindow = document.querySelector("#preview-image-modal");

const previewImageModal = document.querySelector("#preview-image-modal");
const cardForm = document.forms["card-form"];
const profileForm = document.forms["profile-form"];

//Buttons and other DOM Nodes
const profileEditButton = document.querySelector("#profile-edit-button");
const profileModalCloseButton = profileEditModal.querySelector(".modal__close");
const addNewCardButton = document.querySelector(".profile__add-button");
const addCardModalCloseButton = addCardModal.querySelector(".modal__close");

//Profile Dom nodes
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

const previewImageModalCloseButton =
  previewImageModal.querySelector(".modal__close");
const previewImage = previewImageModal.querySelector(".modal__container-image");
const previewCaption = previewImageModal.querySelector(
  ".modal__container-caption"
);
const addCardSaveButton = cardForm.querySelector(
  ".modal__container-form-button"
);
//Form Data
const nameInput = document.querySelector("#profile-title-input");
const jobInput = document.querySelector("#profile-description-input");
const cardTitleInput = addCardModal.querySelector("#card-modal-input-title");
const cardUrlInput = addCardModal.querySelector("#card-modal-input-url");

//Open Close

// find all close buttons
const closeButtons = document.querySelectorAll(".modal__close");

//add event listener for overlay and esc button

function closeByEscape(evt) {
  if (evt.key === "Escape") {
    const openedModal = document.querySelector(".modal_opened");
    // find the opened popup
    closeModal(openedModal);
    // close the opened popup with `closePopup`
  }
}

//changed event listener to inside openModal and added new function for escape button

profileEditModal.addEventListener("mousedown", (e) => {
  console.log(e.target);
  if (
    e.target.classList.contains("modal") ||
    e.target.classList.contains("modal__close")
  ) {
    closeModal(profileEditModal);
  }
});

const addCardModalWindow = document.querySelector("#add-card-modal");
addCardModalWindow.addEventListener("mousedown", (e) => {
  console.log(e.target);
  if (
    e.target.classList.contains("modal") ||
    e.target.classList.contains("modal__close")
  ) {
    closeModal(addCardModalWindow);
  }
});

previewImageModal.addEventListener("mousedown", (e) => {
  console.log(e.target);
  if (
    e.target.classList.contains("modal") ||
    e.target.classList.contains("modal__close")
  ) {
    closeModal(previewImageModal);
  }
});
//Form Data

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__title");
  const likeButton = cardElement.querySelector(".card__like-button");
  const deleteButton = cardElement.querySelector(".card__delete-button");

  cardTitleEl.textContent = cardData.title;
  cardImageEl.src = cardData.link;
  cardImageEl.alt = cardData.title;
  return cardElement;
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closeModal(profileEditModal);
  editProfileValidator.resetValidation();
}

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  const title = cardTitleInput.value;
  const link = cardUrlInput.value;
  renderCard({ title, link }, cardsWrap);
  closeModal(addCardModal);
  cardForm.reset();

  addCardValidator.resetValidation();
}

//Edit Event Listeners

profileEditButton.addEventListener("click", () => {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
  openModal(profileEditModal);
});

profileForm.addEventListener("submit", handleProfileFormSubmit);

//Add Card Listeners
addNewCardButton.addEventListener("click", () => openModal(addCardModal));
cardForm.addEventListener("submit", handleAddCardFormSubmit);

cardData.forEach((cardData) => renderCard(cardData, cardsWrap));
const config = {
  formElement: ".modal__container-form",
  inputSelector: ".modal__container-form-input",
  submitButtonSelector: ".modal__container-form-button",
  inactiveButtonClass: "modal__container-form-button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error",
};

//initialize form validation Edit Profile and Add Card
const editProfileFormEl = document.querySelector("#profile-form");
const editProfileValidator = new FormValidator(config, editProfileFormEl);
editProfileValidator.enableValidation();
const addCardFormEl = document.querySelector("#card-form");
const addCardValidator = new FormValidator(config, addCardFormEl);
addCardValidator.enableValidation();
