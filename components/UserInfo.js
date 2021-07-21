export default class UserInfo {
  constructor({ userName, desciptionUser }) {
    this._userName = userName;
    this._descriptionUser = desciptionUser;
  }

  getUserInfo() {
    return {
      username: this._userName,
      description: this._descriptionUser
    }
  }

  setUserInfo() {
    const popupName = document.querySelector('#name');
    const popupDescription = document.querySelector('#description');

    const profileName = document.querySelector('.profile__name');
    const profileDescription = document.querySelector('.profile__description');

    this._userName = popupName.value
    this._descriptionUser = popupDescription.value

    profileName.textContent = this._userName
    profileDescription.textContent = this._descriptionUser
  }
}