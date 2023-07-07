import { openModal } from "../utils/utils.js";

class Card {
  constructor({ title, link }, cardSelector) {
    this._title = title;
    this._link = link;
    this._cardSelector = cardSelector;
  }

  _setEventListeners() {
    this._cardElement
      .querySelector(".card__like-button")
      .addEventListener("click", () => {
        this._handleLikeIcon();
      });
    this._cardElement
      .querySelector(".card__delete-button")
      .addEventListener("click", () => {
        this._handleDeleteCard();
      });
    this._cardElement
      .querySelector(".card__image")
      .addEventListener("click", () => this._handlePreviewPicture());
  }

  _handleLikeIcon() {
    this._cardElement
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_active");
  }

  _handleDeleteCard() {
    this._cardElement.remove;
    this._cardElement = null;
  }

  _handlePreviewPicture() {
    const previewImageModal = document.querySelector("#preview-image-modal");
    const previewImage = previewImageModal.querySelector(
      ".modal__container-image"
    );
    const previewCaption = previewImageModal.querySelector(
      ".modal__container-caption"
    );
    previewImage.src = this._link;
    previewImage.alt = this._title;
    previewCaption.textContent = this._title;

    openModal(previewImageModal);
  }
  getView() {
    //get the card view
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    this._cardElement.querySelector(".card__image").src = this._link;
    this._cardElement.querySelector(".card__image").alt = this._title;
    this._cardElement.querySelector(".card__title").textContent = this._title;
    //return the card
    return this._cardElement;
  }
}
export default Card;
