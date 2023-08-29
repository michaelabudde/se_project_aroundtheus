export default class Modal {
  constructor({ modalSelector }) {
    this._modalElement = document.querySelector(modalSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._modalElement.addEventListener("mousedown", this._handleClickOutside);
    this.close();
  }

  open() {
    this._modalElement.classList.add("modal_opened");
    document.addEventListener("keyup", this._handleEscClose);
  }

  close() {
    this._modalElement.classList.remove("modal_opened");
    document.removeEventListener("keyup", this._handleEscClose);
  }

  _handleClickOutside = (evt) => {
    if (
      evt.target.classList.contains("modal_opened") ||
      evt.target.classList.contains("modal__close")
    ) {
      this.close();
    }
  };
}
