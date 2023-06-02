const initialCards = [
  {
    name: "Guanajuato, MX",
    link: "https://source.unsplash.com/H4VrfB98ddA",
  },
  {
    name: "Rio de Janiero, BR",
    link: "https://source.unsplash.com/7F65HDP0-E0",
  },
  {
    name: "San Juan, PR",
    link: "https://source.unsplash.com/48iZAbNgU8U",
  },
  {
    name: "Querétaro, MX",
    link: "https://source.unsplash.com/RZ_EIT0IXbg",
  },
  {
    name: "Puerto Vallarta, MX",
    link: "https://source.unsplash.com/f60ysZEQgR8",
  },
  {
    name: "Barcelona, ES",
    link: "https://source.unsplash.com/N6HTCyN50p0",
  },
];

const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector(".modal");
const modalCloseButton = profileEditModal.querySelector(
  ".modal__container-close"
);
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const profileEditForm = profileEditModal.querySelector(
  ".modal__container-form"
);
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
const cardListEl = document.querySelector(".cards__list");

function closePopup() {
  profileEditModal.classList.remove("modal_opened");
}

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__title");
  cardTitleEl.textContent = cardData.name;
  cardImageEl.src = cardData.link;
  cardImageEl.alt = cardData.name;
  return cardElement;
}

profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  profileEditModal.classList.add("modal_opened");
});

modalCloseButton.addEventListener("click", () => {
  closePopup();
});

profileEditForm.addEventListener("submit", (e) => {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup();
});

initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  cardListEl.prepend(cardElement);
});
