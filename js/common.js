const Body = $('body');
const container = $(".container");
const button = $(".theme-button");

button.onclick =  () => {
  container.classList.toggle("dark");
  Body.classList.toggle('body-dark');
}

const menuButton = $('.menu-button');
const menuBox = $('.menu-box');

menuButton.onclick = () => {
  menuBox.classList.toggle('open-menu');
}

const tooltipButtons = $('.tooltip-button', true);

// for (const button of tooltipButtons) {
//   button.onclick = () => {
//     const tooltip = button.querySelector('.tooltip');
//     tooltip.classList.toggle('tooltip-popup');
//     tooltip.textContent = tooltip.dataset.tooltipText;
//   }
// }

const message = $('.subscription-message')
const email = $('.subscription-email')
const form = $('.submission');

form.onsubmit = (evt) => {
  evt.preventDefault();
  message.textContent = email.value + ' has been registered on our website';
}

const article = $('article');
const ul = create('ul');
ul.className = "firstList";
ul.innerHTML = "To-do list:";
article.after(ul);

const liFirst = create('li');
liFirst.innerHTML = "learning";
ul.append(liFirst);

const liSecond = create('li');
liSecond.innerHTML = "improving";
ul.append(liSecond);



