import Modal from "./Modal.js";

export default class ModalWithImage extends Modal {
  constructor(modalSelector) {
    super({ modalSelector: modalSelector });
    this._containerImage = this._modalElement.querySelector(
      ".modal__container-preview"
    );
    this._containerImageTitle = this._modalElement.querySelector(
      ".modal__container-caption"
    );
  }

  open({ title, link }) {
    const image = this._containerImage.querySelector(".modal__container-image");
    this._containerImageTitle.textContent = title;
    image.alt = title;
    image.src = link;
    super.open();
  }
}
