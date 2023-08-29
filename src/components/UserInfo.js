export default class UserInfo {
  constructor(selectors) {
    this._nameElement = document.querySelector(selectors.userNameSelector);
    this._descriptionElement = document.querySelector(
      selectors.userDescriptionSelector
    );
    this._userAva = document.querySelector(selectors.userAva);
  }

  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      about: this._descriptionElement.textContent,
    };
  }
  setAvatar(avatar) {
    this._userAva.src = avatar;
  }

  setUserInfo(inputValues) {
    this._nameElement.textContent = inputValues.name;
    this._descriptionElement.textContent = inputValues.about;
  }
}
