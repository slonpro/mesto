const showError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('popup__input_active');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__form-error_active');
};

const hideError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('popup__input_active');
  errorElement.classList.remove('popup__form-error_active');
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideError(formElement, inputElement);
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  const buttonElement = formElement.querySelector('.popup__save-button');

  buttonInactive(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      buttonInactive(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__form'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    const fieldsetList = Array.from(formElement.querySelectorAll('.popup__fieldset'));
/*     console.log(formList)
    console.log(fieldsetList) */
    fieldsetList.forEach((fieldSet) => {
      setEventListeners(fieldSet);
    });

  });
};

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

function buttonInactive(inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('popup__save-button_inactive');
  } else {
    buttonElement.classList.remove('popup__save-button_inactive');
  }
}



enableValidation();
