import Modal from "./Modal.js";
export default class ModalWithForm extends Modal {
  constructor(modalSelector, handleFormSubmit) {
    super({ modalSelector });
    this._modalForm = this._modalElement.querySelector(
      ".modal__container-form"
    );
    this._handleFormSubmit = handleFormSubmit;
  }
  _getInputValues() {
    const values = {};
    this._modalForm
      .querySelectorAll(".modal__container-form-input")
      .forEach((input) => {
        values[input.title] = input.value;
      });
    return values;
  }

  setEventListeners() {
    super.setEventListeners();
    this._modalForm.addEventListener("submit", this._submitHandler);
  }

  _submitHandler = (evt) => {
    evt.preventDefault();
    const inputValues = this._getInputValues();
    this._handleFormSubmit(inputValues);
  };

  close() {
    super.close();
    this._modalForm.reset();
  }
}
