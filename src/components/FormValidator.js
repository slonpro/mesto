export class FormValidator {
  constructor(data, selectorForm) {
    //this._formSelector = data.formSelector
    this._inputSelector = data.inputSelector
    this._submitButtonSelector = data.submitButtonSelector
    this._inactiveButtonClass = data.inactiveButtonClass
    this._inputErrorClass = data.inputErrorClass
    this._errorClass = data.errorClass
    this._selectorForm = selectorForm
  }



  _showError(inputElement) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._errorClass);
  };

  _hideError(inputElement) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  };

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showError(inputElement,);
    } else {
      this._hideError(inputElement);
    }
  };

  _setEventListeners() {
    this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));

    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();

      });
    });
  };

  enableValidation() {
    this._form = document.querySelector(this._selectorForm);
    this._form.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    this._setEventListeners();
  };

  resetValidation() {
    this._form.reset()
    this.buttonElement.classList.add(this._inactiveButtonClass)
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState() {
    this.buttonElement = this._form.querySelector(this._submitButtonSelector);
    if (this._hasInvalidInput()) {
      this.buttonElement.classList.add(this._inactiveButtonClass);
    } else {
      this.buttonElement.classList.remove(this._inactiveButtonClass);
    }
  }
}