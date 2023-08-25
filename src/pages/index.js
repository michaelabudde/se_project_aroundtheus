import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import ModalWithImage from "../components/ModalWithImage.js";
import ModalWithForm from "../components/ModalWithForm.js";
import ModalConfirmation from "../components/ModalConfirmation.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import Api from "../components/Api.js";
import {
  selectors,
  //cards
  /*   cardList,
  cardData, */
  cardSelector,
  //profile
  profileEditForm,
  nameInput,
  jobInput,
  avaEditForm,
  //add card
  addCardForm,
  /*   cardTitleInput,
  cardUrlInput, */
  //buttons
  profileEditButton,
  addNewCardButton,
  avaEditButton,
  //validation
  validationSettings,
} from "../utils/constants.js";
import "../pages/index.css";

//Cards
/* const section = new Section(
  {
    items: initialCards,
    renderer: (cardData) => {
      const card = createCard(cardData);
      section.addItem(card);
    },
  },
  cardList
);
section.renderItems(); */

function createCard(cardData) {
  const card = new Card({
    name: cardData.name,
    link: cardData.link,
    isLiked: cardData.isLiked,
    cardId: cardData._id,
    userId: userId,
    handleCardClick,
    handleDeleteClick,
    handleLikeClick,
    cardSelector,
  });
  return card.getView();
}

function handleCardClick(cardData) {
  previewImage.open(cardData);
}
function handleLikeClick(card) {
  if (card.isLiked) {
    api
      .removeCardLikes(card.cardId)
      .then((res) => {
        card.updateLikes(res.isLiked);
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    api
      .addCardLikes(card.cardId)
      .then((res) => {
        card.updateLikes(res.isLiked);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
const deleteCardModal = new ModalConfirmation("#modal__delete");

function handleDeleteClick(card) {
  deleteCardModal.open();
  deleteCardModal.setSubmitAction(() => {
    deleteCardModal.renderLoading(true);
    api
      .deleteCard(card.cardId)
      .then(() => {
        card.handleDeleteCard();
        deleteCardModal.close();
      })

      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        deleteCardModal.renderLoading(false);
      });
  });
}
//form validation
const editProfileFormValidator = new FormValidator(
  validationSettings,
  profileEditForm
);
editProfileFormValidator.enableValidation();

const addCardFormValidator = new FormValidator(validationSettings, addCardForm);
addCardFormValidator.enableValidation();

const avaFormValidator = new FormValidator(validationSettings, avaEditForm);
avaFormValidator.enableValidation();

//user info
const userInfo = new UserInfo({
  userNameSelector: ".profile__title",
  userDescriptionSelector: ".profile__description",
  userAva: ".profile__image",
});
const avatarModal = new ModalWithForm(selectors.changeAvaModal, handleAvaModal);

function handleAvaModal(inputValues) {
  avatarModal.renderLoading(true);
  api
    .updateProfileAvatar(inputValues.avatar)
    .then(() => {
      userInfo.setAvatar(inputValues.avatar);
      avatarModal.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      avatarModal.renderLoading(false, "Save");
    });
}
//modalWithImage
const previewImage = new ModalWithImage(
  "#preview-image-modal",
  handleImageClick
);
previewImage.setEventListeners();

function handleImageClick(cardData) {
  previewImage.open(cardData);
}

// edit profile
const profileEditModal = new ModalWithForm(
  "#edit-modal",
  handleEditProfileSubmit
);
profileEditModal.setEventListeners();
profileEditButton.addEventListener("click", () => {
  handleProfileEditClick();
});

avaEditButton.addEventListener("click", () => {
  avaFormValidator.toggleButtonState();
  avatarModal.open();
});
avatarModal.setEventListeners();

function handleEditProfileSubmit(inputValues) {
  userInfo.setUserInfo(inputValues);
  profileEditModal.close();
}

function handleProfileEditClick() {
  const user = userInfo.getUserInfo();
  nameInput.value = user.name;
  jobInput.value = user.job;
  profileEditModal.open();
}

// add card
const addCardModal = new ModalWithForm(
  selectors.cardModalSelector,
  handleAddCardSubmit
);
addCardModal.setEventListeners();
addNewCardButton.addEventListener("click", () => {
  addCardFormValidator.resetValidation();
  addCardFormValidator.toggleButtonState();
  addCardModal.open();
});

let newCardSection;
let userId;

function handleAddCardSubmit(inputValues) {
  addCardModal.renderLoading(true);
  api
    .addNewCard(inputValues)
    .then((cardData) => {
      const addCard = createCard(cardData);
      newCardSection.addItem(addCard);
      addCardModal.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      addCardModal.renderLoading(false, "Create");
    });
}

//API
const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "498919bf-f014-4fef-8736-2688c4ecb079",
    "Content-Type": "application/json",
  },
});
Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cardData]) => {
    userInfo.setUserInfo(userData);
    userInfo.setAvatar(userData.avatar);
    userId = userData._id;
    newCardSection = new Section(
      {
        items: cardData,
        renderer: (data) => {
          const newCard = createCard(data);
          newCardSection.addItem(newCard);
        },
      },
      selectors.cardSection
    );
    newCardSection.renderItems();
  })
  .catch(console.error);
