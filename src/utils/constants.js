//cards
/* export const initialCards = [
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
]; */
export const selectors = {
  cardSection: ".cards__list",
  cardTemplate: "#card-template",
  previewModal: "#modal-preview",
  cardModalSelector: "#add-card-modal",
  /*   profileModalSelector: "#edit-modal", */
  changeAvaModal: "#change-ava-img",
  deleteModal: "#modal__delete",
};
/* export const cardList = document.querySelector(".cards__list");
 */ export const cardData = {
  name: "Guanajuato, MX",
  link: "https://images.unsplash.com/photo-1585975985662-449adf2e7f8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NTY0OTc2OA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
};
export const cardSelector = "#card-template";
//profile
/* export const profileEditModal = document.querySelector("#edit-modal");
 */
export const profileEditForm = document.querySelector("#profile-form");
export const nameInput = document.querySelector("#profile-title-input");
export const aboutInput = document.querySelector("#profile-description-input");
//add card
/* export const document = document.querySelector("#add-card-modal");
 */
export const addCardForm = document.querySelector("#card-form");
export const cardTitleInput = document.querySelector("#card-modal-input-title");
export const cardUrlInput = document.querySelector("#card-modal-input-url");
//buttons
export const profileEditButton = document.querySelector(
  ".profile__edit-button"
);
export const addNewCardButton = document.querySelector(".profile__add-button");
export const deleteModal = document.querySelector("#modal__delete");
export const deleteModalForm = document.querySelector("#modal__delete-form");
export const deleteModalButton = document.querySelector(
  "#modal__container-delete-form-button"
);
//validation
export const validationSettings = {
  formSelector: ".modal__container-form",
  inputSelector: ".modal__container-form-input",
  submitButtonSelector: ".modal__container-form-button",
  inactiveButtonClass: "modal__container-form-button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error",
};
/* export const avaButton = avaEditForm.querySelector(".change-avi-form__button");
 */
export const avaEditButton = document.querySelector(
  "#profile-ava__image-hover-button"
);
export const avaEditForm = document.querySelector("#change-ava-form");
