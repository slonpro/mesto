export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = document.querySelector(popupSelector);
  }

  openPopup() {
    this._popupSelector.classList.add('popup_opened')
    document.addEventListener('keydown', (e) => this._hundleEscClose(e));
  }

  closePopup() {
    this._popupSelector.classList.remove('popup_opened')
    document.removeEventListener('keydown', (e) => this._hundleEscClose(e));
  }

  _hundleEscClose(e) {
    if (e.key === 'Escape') {
      this.closePopup();
  }
}
  setEventListeners() {
    this._popupSelector.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
          this.closePopup()
          console.log('ues')
        }
        if (evt.target.classList.contains('popup__button-close')) {
          this.closePopup()
          console.log('ues')
        }
      })
    }

}