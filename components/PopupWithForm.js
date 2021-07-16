export default class PopupWithForm extends Popup {
  constructor({ popupSelector, sumbit }) {
    super(popupSelector)
    this._sumbit = sumbit
  }

  _getInputValues() {

  }

  setEventListeners() {
    super.setEventListeners();
    this._sumbit(e);
  }

  closePopup() {

  }
}