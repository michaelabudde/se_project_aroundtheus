import Modal from "./Modal.js";

export default class ModalConfirmation extends Modal {
  constructor(modalSelector) {
    super({ modalSelector });
    this._modalForm = document.querySelector(".modal__container-form");
    this._saveButton = document.querySelector(".modal__container-form-button");
  }

  setSubmitAction(action) {
    this._handleSubmit = action;
  }

  renderLoading(isLoading) {
    if (isLoading) {
      this._saveButton.textContent = "Loading...";
    } else {
      this._saveButton.textContent = "Yes";
    }
  }

  _handleSubmit = (evt) => {
    evt.preventDefault();
    this._handleConfirm();
  };

  setEventListeners() {
    super.setEventListeners();
    this._modalForm.addEventListener("submit", this._handleSubmit);
  }
}
