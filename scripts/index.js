const initialCards = [
  {
    name: "Guanajuato, MX",
    link: "https://unsplash.com/photos/H4VrfB98ddA",
  },
  {
    name: "Rio de Janiero, BR",
    link: "https://unsplash.com/photos/7F65HDP0-E0",
  },
  {
    name: "San Juan, PR",
    link: "https://unsplash.com/photos/48iZAbNgU8U",
  },
  {
    name: "Querétaro, MX",
    link: "https://unsplash.com/photos/RZ_EIT0IXbg",
  },
  {
    name: "Puerto Vallarta, MX",
    link: "https://unsplash.com/photos/f60ysZEQgR8",
  },
  {
    name: "Barcelona, ES",
    link: "https://unsplash.com/photos/N6HTCyN50p0",
  },
];
const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector(".modal");
profileEditButton.addEventListener("click", () => {
  profileEditModal.classList.add("modal_opened");
});

const modalCloseButton = document.querySelector(".modal__container-close");
profileEditModal.addEventListener("click", () => {
  profileEditModal.classList.remove("modal_opened");
});
