const likesNumber = $('.likes-number');
const heart = $('.heart');

heart.onclick = () => {
  heart.style.fill = heart.style.fill === 'red' ? null : 'red';

  if (heart.classList.contains('liked')) {
    likesNumber.textContent--;
  } else {
    likesNumber.textContent++;
  }

  heart.classList.toggle('liked');
}