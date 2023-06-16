const initialCards = [
  {
    title: "Guanajuato, MX",
    link: "https://images.unsplash.com/photo-1585975985662-449adf2e7f8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NTY0OTc2OA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
  },
  {
    title: "Rio de Janiero, BR",
    link: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MjA3MDgzMA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
  },
  {
    title: "San Juan, PR",
    link: "https://images.unsplash.com/photo-1579687196544-08ae57ab5c11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NTY0OTc0NQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
  },
  {
    title: "Querétaro, MX",
    link: "https://images.unsplash.com/photo-1591933733584-bf9577821973?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NTY0OTczNg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
  },
  {
    title: "Puerto Vallarta, MX",
    link: "https://images.unsplash.com/photo-1547047549-0d757aaa848a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NTY0OTY3Mw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
  },
  {
    title: "Barcelona, ES",
    link: "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTMyNDg0Ng&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
  },
];

const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");

//Wrappers
const cardsWrap = document.querySelector(".cards__list");
const profileEditModal = document.querySelector("#edit-modal");
const addCardModal = document.querySelector("#add-card-modal");

const previewImageModal = document.querySelector("#preview-image-modal");

const profileForm = document.forms["profile-form"];
const cardForm = document.forms["card-form"];

//Buttons and other DOM Nodes
const profileEditButton = document.querySelector("#profile-edit-button");
const profileModalCloseButton = profileEditModal.querySelector(".modal__close");
const addCardModalCloseButton = addCardModal.querySelector(".modal__close");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const addNewCardButton = document.querySelector(".profile__add-button");
const previewImageModalCloseButton =
  previewImageModal.querySelector(".modal__close");
const previewImage = previewImageModal.querySelector(".modal__container-image");
const previewCaption = previewImageModal.querySelector(
  ".modal__container-caption"
);
//Form Data
const nameInput = document.querySelector("#profile-title-input");
const jobInput = document.querySelector("#profile-description-input");
const cardTitleInput = addCardModal.querySelector("#card-modal-input-title");
const cardUrlInput = addCardModal.querySelector("#card-modal-input-url");

//Open Close

function openModal(modal) {
  modal.classList.add("modal_opened");
}
function closeModal(modal) {
  modal.classList.remove("modal_opened");
}

// find all close buttons
const closeButtons = document.querySelectorAll(".modal__close");

closeButtons.forEach((button) => {
  // find the closest popup
  const modal = button.closest(".modal");
  // set the listener
  button.addEventListener("click", () => closeModal(modal));
});

//Form Data

function renderCard(cardData, wrapper) {
  const cardElement = getCardElement(cardData);
  wrapper.prepend(cardElement);
}
function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__title");
  const likeButton = cardElement.querySelector(".card__like-button");
  const deleteButton = cardElement.querySelector(".card__delete-button");

  deleteButton.addEventListener("click", () => {
    cardElement.remove();
  });
  //add event listener to the delete button
  //cardelement.remove

  cardImageEl.addEventListener("click", () => {
    previewImage.src = cardImageEl.src;
    previewImage.alt = cardImageEl.alt;
    previewCaption.textContent = cardTitleEl.textContent;

    openModal(previewImageModal);
  });

  //add click listener to the card image element
  //call open modal with previewImageModal

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_active");
  });

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
}

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  const title = cardTitleInput.value;
  const link = cardUrlInput.value;
  renderCard({ title, link }, cardsWrap);
  closeModal(addCardModal);
  cardForm.reset();
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
addCardModalCloseButton.addEventListener("click", () =>
  closeModal(addCardModal)
);
cardForm.addEventListener("submit", handleAddCardFormSubmit);

initialCards.forEach((cardData) => renderCard(cardData, cardsWrap));
