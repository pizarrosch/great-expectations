
const upButton = $('.up-button');

window.onscroll = () => {
  if (window.scrollY > 300) {
    upButton.classList.add('shown');
  } else {
    upButton.classList.remove('shown');
  }
}

upButton.onclick = () => {
  window.scrollTo(0,0);
}