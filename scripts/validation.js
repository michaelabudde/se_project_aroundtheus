// enabling validation by calling enableValidation()
// pass all the settings on call

function showInputError(formEl, inputEl, { inputErrorClass, errorClass }) {
  const errorMessageEl = formEl.querySelector(`#${inputEl.id}-error`);
  inputEl.classList.add(inputErrorClass);
  errorMessageEl.textContent = inputEl.validationMessage;
  errorMessageEl.classList.add(errorClass);
}
function hideInputError(formEl, inputEl, { inputErrorClass, errorClass }) {
  const errorMessageEl = formEl.querySelector(`#${inputEl.id}-error`);
  inputEl.classList.remove(inputErrorClass);
  errorMessageEl.textContent = "";
  errorMessageEl.classList.remove(errorClass);
}
function checkInputValidity(formEl, inputEl, options) {
  if (!inputEl.validity.valid) {
    showInputError(formEl, inputEl, options);
    return;
  }
  hideInputError(formEl, inputEl, options);
}
function hasInvalidInput(inputList) {
  return !inputList.every((inputEl) => inputEl.validity.valid);
}
//disable button
function disableButton(inputEls, submitButton, inactiveButtonClass) {
  if (hasInvalidInput(inputEls)) {
    submitButton.classList.add(inactiveButtonClass);
    submitButton.disabled = true;
    return;
  }
}

//enable button
function enableButton(inputEls, submitButton, inactiveButtonClass) {
  if (!hasInvalidInput([...inputEls])) {
    submitButton.classList.remove(inactiveButtonClass);
    submitButton.disabled = false;
  }
}

function toggleButtonState(inputEls, submitButton, { inactiveButtonClass }) {
  if (hasInvalidInput(inputEls)) {
    disableButton(inputEls, submitButton, inactiveButtonClass);
    return;
  }
  enableButton(inputEls, submitButton, inactiveButtonClass);
}

function setEventListeners(formEl, options) {
  const { inputSelector } = options;
  const inputEls = [...formEl.querySelectorAll(inputSelector)];
  const submitButton = formEl.querySelector(submitButtonSelector);

  inputEls.forEach((inputEl) => {
    inputEl.addEventListener("input", (e) => {
      checkInputValidity(formEl, inputEl, options);
      toggleButtonState(inputEls, submitButton, options);
    });
  });
}
function enableValidation(options) {
  const formEls = [...document.querySelectorAll(options.formSelector)];
  formEls.forEach((formEl) => {
    formEl.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    setEventListeners(formEl, options);
  });
}

const options = {
  formSelector: ".modal__container-form",
  inputSelector: ".modal__container-form-input",
  submitButtonSelector: ".modal__container-form-button",
  inactiveButtonClass: "modal__container-form-button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error",
};
enableValidation(options);
