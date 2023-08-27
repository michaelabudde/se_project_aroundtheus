import Modal from "./Modal.js";

export default class ModalWithImage extends Modal {
  constructor(modalSelector) {
    super({ modalSelector });
    this._previewImgTitle = this._modalElement.querySelector(
      ".modal__container-caption"
    );
    this._previewImage = this._modalElement.querySelector(
      ".modal__container-image"
    );
  }
  open({ name, link }) {
    super.open();
    this._previewImage.src = link;
    this._previewImage.alt = name;
    this._previewImgTitle.textContent = name;
  }
}
