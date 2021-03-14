let likes = document.querySelectorAll('.card__like')

//Закрашиваем сердечко на черное и если черное обратно
for (let i = 0; i < likes.length; i++) {
  let like = likes[i];
  like.addEventListener('click', function likeget() {
    like.classList.toggle('card__like_active');
  })
}