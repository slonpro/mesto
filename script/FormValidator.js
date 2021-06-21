class FormValidator {
  constructor(data) {
    this._formSelector = data.formSelector
    this._inputSelector = data.inputSelector
    this._submitButtonSelector = data.submitButtonSelector
    this._inactiveButtonClass = data.inactiveButtonClass
    this._inputErrorClass = data.inputErrorClass
    this._errorClass = data.errorClass
  }


  _showError(formElement, inputElement, errorMessage) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(this._inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(this._errorClass);
};

_hideError(formElement, inputElement) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(this._inputErrorClass);
  errorElement.classList.remove(this._errorClass);
  errorElement.textContent = '';
};

_checkInputValidity(formElement, inputElement) {
  if (!inputElement.validity.valid) {
    this._showError(formElement, inputElement, inputElement.validationMessage);
  } else {
    this._hideError(formElement, inputElement);
  }
};

_setEventListeners(formElement) {
  const inputList = Array.from(formElement.querySelectorAll(this._inputSelector));
  const buttonElement = formElement.querySelector(this._submitButtonSelector);

  this._buttonInactive(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      this._checkInputValidity(formElement, inputElement);
      this._buttonInactive(inputList, buttonElement);
    });
  });
};

enableValidation() {
  const formList = Array.from(document.querySelectorAll(this._formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    this._setEventListeners(formElement);

  });
};

_hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

_buttonInactive(inputList, buttonElement) {
  if (this._hasInvalidInput(inputList)) {
    buttonElement.classList.add(this._inactiveButtonClass);
  } else {
    buttonElement.classList.remove(this._inactiveButtonClass);
  }
}
}






export {FormValidator }