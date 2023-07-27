import Modal from "./Modal.js";

export default class ModalWithImage extends Modal {
  constructor(modalSelector) {
    super(modalSelector);
    this._containerImage = this._modalElement.querySelector(
      ".modal__container-preview"
    );
    this._containerImageTitle = this._modalElement.querySelector(
      ".modal__container-caption"
    );
  }

  open({ name, link }) {
    const image = this._containerImage.querySelector(".modal__container-image");
    this._containerImageTitle.textContent = name;
    image.alt = name;
    image.src = link;
    super.open();
  }
}
