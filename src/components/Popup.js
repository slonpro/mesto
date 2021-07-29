export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this)
    
  }

  openPopup() {
    this._popup.classList.add('popup_opened')
    document.addEventListener('keydown', this._handleEscClose);
  }

  closePopup() {
    this._popup.classList.remove('popup_opened')
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose(e) {
    if (e.key === 'Escape') {
      this.closePopup();
    }
  }
  setEventListeners() {
    this._popup.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
        this.closePopup()
      }
      if (evt.target.classList.contains('popup__button-close')) {
        this.closePopup()
      }
    })
  }

}