import Modal from "./Modal.js";

export default class ModalWithForm extends Modal {
  constructor(modalSelector, handleFormSubmit) {
    super({ modalSelector });
    this._handleFormSubmit = handleFormSubmit;
    this._modalForm = this._modalElement.querySelector(
      ".modal__container-form"
    );
    this._saveButton = this._modalForm.querySelector(
      ".modal__container-form-button"
    );
  }
  setEventListeners() {
    super.setEventListeners();
    this._modalForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const inputValues = this._getInputValues();
      this._handleFormSubmit(inputValues);
    });
  }

  _getInputValues() {
    const inputs = this._modalForm.querySelectorAll(".modal__input");
    const values = {};
    inputs.forEach((input) => {
      values[input.name] = input.value;
    });
    return values;
  }
  close() {
    this._modalForm.reset();
    super.close();
  }
  renderLoading(isLoading, saveButtonText) {
    if (isLoading) {
      this._saveButton.textContent = "Saving...";
    } else {
      this._saveButton.textContent = saveButtonText;
    }
  }
}
