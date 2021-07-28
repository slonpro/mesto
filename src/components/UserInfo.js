export default class UserInfo {
  constructor({ userName, desciptionUser, selectorUserName, selectorDescriptionUser }) {
    this._userName = userName;
    this._descriptionUser = desciptionUser;
    this._profileName = document.querySelector(selectorUserName);
    this._profileDescription = document.querySelector(selectorDescriptionUser)
  }

  getUserInfo() {
    return {
      username: this._userName,
      description: this._descriptionUser
    }
  }

  setUserInfo({name, description}) {
    this._userName = name
    this._descriptionUser = description
    this._profileName.textContent = name
    this._profileDescription.textContent = description
  }
}