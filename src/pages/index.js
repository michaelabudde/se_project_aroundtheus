import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import ModalWithImage from "../components/ModalWithImage.js";
import ModalWithForm from "../components/ModalWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import {
  //cards
  initialCards,
  cardList,
  cardData,
  cardSelector,
  //profile
  profileEditForm,
  nameInput,
  jobInput,
  //add card
  addCardForm,
  cardTitleInput,
  cardUrlInput,
  //buttons
  profileEditButton,
  addNewCardButton,
  //validation
  validationSettings,
} from "../utils/constants.js";
import "../pages/index.css";

//Cards
const section = new Section(
  {
    items: initialCards,
    renderer: (cardData) => {
      const card = createCard(cardData);
      section.addItem(card);
    },
  },
  cardList
);
section.renderItems();

function createCard(cardData) {
  const card = new Card(cardData, cardSelector, handleCardClick);
  return card.getView();
}

function handleCardClick(cardData) {
  previewImage.open(cardData);
}
//form validation
const editProfileFormValidator = new FormValidator(
  validationSettings,
  profileEditForm
);
editProfileFormValidator.enableValidation();

const addCardFormValidator = new FormValidator(validationSettings, addCardForm);
addCardFormValidator.enableValidation();

//user info
const userInfo = new UserInfo({
  userNameSelector: ".profile__title",
  userTitleSelector: ".profile__description",
});

//modalWithImage
const previewImage = new ModalWithImage(
  "#preview-image-modal",
  handleImageClick
);
previewImage.setEventListeners();

function handleImageClick(cardData) {
  previewImage.open(cardData);
}

//modalWithForm
//
// edit profile
const profileEditPopup = new ModalWithForm(
  "#edit-modal",
  handleEditProfileSubmit
);
profileEditPopup.setEventListeners();
profileEditButton.addEventListener("click", () => {
  handleProfileEditClick();
});

function handleProfileEditClick() {
  const user = userInfo.getUserInfo();
  nameInput.value = user.name;
  jobInput.value = user.job;
  profileEditPopup.open();
}

function handleEditProfileSubmit(inputValues) {
  userInfo.setUserInfo(inputValues);
  profileEditPopup.close();
}

// add card
const addCardModal = new ModalWithForm("#add-card-modal", handleAddCardSubmit);
addCardModal.setEventListeners();
addNewCardButton.addEventListener("click", () => {
  addCardFormValidator.resetValidation();
  addCardModal.open();
});

function handleAddCardSubmit(inputValues) {
  debugger;
  const { title, link } = inputValues;
  const newCardData = {
    title: title,
    link: link,
  };
  const newCard = createCard(newCardData);
  section.addItem(newCard);
  addCardModal.close();
}
