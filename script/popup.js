let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let popupCloseButton = document.querySelector('.popup__button-close');
let popupWindow = document.querySelector('.popup__window');

//Получаем переменный текстовых полей
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');

//Получаем перменные текстовых полей в диалоговом окне
let popupName = document.querySelector('.popup__input_name');
let popupDescription = document.querySelector('.popup__input_description');

//Открываем диалоговое окно и записываем в него значения
function popupOpened() {
  popupOpenedBlock(profileName.textContent, profileDescription.textContent);
}

function popupOpenedBlock(name, description) {
  popup.classList.add('popup_opened');
  popupName.setAttribute('value', name);
  popupDescription.setAttribute('value', description);
};

//Функция закрытия popup
function popupClose() {
  popup.classList.remove('popup_opened');
};


editButton.addEventListener('click', popupOpened);


//Что бы форма не закрывалась кликая по контенту
popupWindow.addEventListener('click', function (event) {
  event.stopImmediatePropagation();
});


//Отслеживание клика по оверлею и кнопке
popup.addEventListener('click', popupClose);
popupCloseButton.addEventListener('click', popupClose);


// Находим форму в DOM
let formElement = document.querySelector('.popup__form')


// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler(evt) {
  evt.preventDefault();

  // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.
  profileName.textContent = popupName.value
  profileDescription.textContent = popupDescription.value;
  popupClose()
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler); 
