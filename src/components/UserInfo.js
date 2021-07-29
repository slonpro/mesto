export default class UserInfo {
  constructor({selectorUserName, selectorDescriptionUser }) {
    this._profileName = document.querySelector(selectorUserName);
    this._profileDescription = document.querySelector(selectorDescriptionUser)
  }

  getUserInfo() {
    return {
      username: this._profileName.textContent,
      description: this._profileDescription.textContent
    }
  }

  setUserInfo({name, description}) {
 
    this._profileName.textContent = name
    this._profileDescription.textContent = description
  }
}