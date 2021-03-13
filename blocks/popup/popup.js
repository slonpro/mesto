//Реализация откртия и закрытия всплывающего окна + Получение данных
let editButton = document.querySelector('.profile__edit-button');
let popupOpen = document.querySelector('.popup');
let popupCloseButton = document.querySelector('.popup__button-close');
let popupWindow = document.querySelector('.popup__window');
//Получаем переменный текстовых полей
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');
//Получаем перменные текстовых полей в диалоговом окне
let popupName = document.querySelector('.popup__name');
let popupDescription = document.querySelector('.popup__description');
//Открываем диалоговое окно и записываем в него значения

function popupOpened() {
  popupOpenedBlock(profileName.textContent, profileDescription.textContent);
}


function popupOpenedBlock(name, description) {
  popupOpen.classList.add('popup_opened');
  popupName.setAttribute('value', name);
  popupDescription.setAttribute('value', description);
};

function popupClose() {
  popupOpen.classList.remove('popup_opened');
};



editButton.addEventListener('click', popupOpened); 

popupWindow.addEventListener('click', function(event) {
  event.stopImmediatePropagation();
});

popupOpen.addEventListener('click', popupClose);
popupCloseButton.addEventListener('click', popupClose);

// --------------------------------------------------------


/* // Находим форму в DOM
let formElement = // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = // Воспользуйтесь инструментом .querySelector()
let jobInput = // Воспользуйтесь инструментом .querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value

    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);  */