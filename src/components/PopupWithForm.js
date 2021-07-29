import Popup from './Popup.js'
export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSumbit }) {
    super(popupSelector)
    this._handleFormSumbit = handleFormSumbit
    this._currentForm = this._popup.querySelector('.popup__form')
    this._inputList = this._popup.querySelectorAll('.popup__input')
  }
  _getInputValues() {
    
    this._formValues = {};
    this._inputList.forEach(input => this._formValues[input.name] = input.value);
    return this._formValues;
  }

  setEventListeners() {
    this._currentForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSumbit(this._getInputValues())
    })
    super.setEventListeners();
  }


  closePopup() {
    super.closePopup();
    this._currentForm.reset()
  }
}