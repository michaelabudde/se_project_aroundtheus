export default class Card {
  constructor({ title, link }, cardSelector) {
    this._title = title;
    this._link = link;
    this._cardSelector = cardSelector;
  }
  getView() {
    //get the card view
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    this._cardLikeButton =
      this._cardElement.querySelector(".card__like-button");
    this._previewImageModal = document.querySelector("#preview-image-modal");
    this._previewImage = this._previewImageModal.querySelector(
      ".modal__container-image"
    );
    this._previewCaption = this._previewImageModal.querySelector(
      ".modal__container-caption"
    );
    this._deleteCardButton = this._cardElement.querySelector(
      ".card__delete-button"
    );
    this._cardImage = this._cardElement.querySelector(".card__image");
    this._cardImage.src = this._link;
    this._cardImage.alt = this._title;
    this._cardElement.querySelector(".card__title").textContent = this._title;
    this._setEventListeners();
    //return the card
    return this._cardElement;
  }
  _handleLikeIcon() {
    this._cardLikeButton.classList.toggle("card__like-button_active");
  }

  _handleDeleteCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  _handlePreviewPicture() {
    this._previewImage.src = this._link;
    this._previewImage.alt = this._title;
    this._previewCaption.textContent = this._title;

    openModal(this._previewImageModal);
  }
  _setEventListeners() {
    this._cardLikeButton.addEventListener("click", (event) => {
      this._handleLikeIcon();
    });

    this._deleteCardButton.addEventListener("click", (event) => {
      this._handleDeleteCard();
    });

    this._cardImage.addEventListener("click", () =>
      this._handlePreviewPicture()
    );
  }
}
