const editButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup_profile');
const popupCloseButton = document.querySelector('.popup__button-close');

//Получаем переменный текстовых полей
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

//Получаем перменные текстовых полей в диалоговом окне
const popupName = document.querySelector('#name');
const popupDescription = document.querySelector('#description');

// Находим форму в DOM
const formElement = document.querySelector('.popup__form')

//Открываем диалоговое окно 
function openPopup(modelWindow) { 
  modelWindow.classList.add('popup_opened') 
  document.addEventListener('keydown', closeByEscape);
}

//Функция закрытия popup
function closePopup(modelWindow) {
  modelWindow.classList.remove('popup_opened')
  document.removeEventListener('keydown', closeByEscape);
  
}

const popups = document.querySelectorAll('.popup')

popups.forEach((popup) => {
    popup.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            closePopup(popup)
        }
        if (evt.target.classList.contains('popup__close')) {
          closePopup(popup)
        }
    })
})


//Открываем диалоговое окно и записываем в него значения
function popupOpenedProfile() {
  openPopup(popupProfile)
  popupName.value = profileName.textContent;
  popupDescription.value = profileDescription.textContent;
}

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler(evt) {
  evt.preventDefault();

  // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.
  profileName.textContent = popupName.value
  profileDescription.textContent = popupDescription.value;
  closePopup(popupProfile)
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»

formElement.addEventListener('submit', formSubmitHandler);

editButton.addEventListener('click', popupOpenedProfile);

//Отслеживание клика по оверлею и кнопке

popupCloseButton.addEventListener('click', () => closePopup(popupProfile));


function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened')
    closePopup(openedPopup); 
    console.log('Я еще')
  }
}












