function $(selector) {
  return document.querySelector(selector);
}

function create(name) {
  return document.createElement(name);
}

let element = $(".container");
let button = $(".theme-button");

button.onclick = function () {
  element.classList.toggle("dark");
}

let menuButton = $('.menu-button');
let menuBox = $('.menu-box');

menuButton.onclick = () => {
  menuBox.classList.toggle('open-menu');
}

let tooltipButton = $('.tooltip-button');
let tooltip = $('.tooltip');

tooltipButton.onclick = () => {
  tooltip.classList.toggle('tooltip-popup');
  tooltip.textContent = tooltip.dataset.tooltipText;
}

let message = $('.subscription-message')
let email = $('.subscription-email')
let form = $('.submission');

form.onsubmit = (evt) => {
  evt.preventDefault();
  message.textContent = email.value + ' has been registered on our website';
}

let article = $('article');
let ul = create('ul');
ul.className = "firstList";
ul.innerHTML = "To-do list:";
article.after(ul);

let liFirst = create('li');
liFirst.innerHTML = "learning";
ul.append(liFirst);

let liSecond = create('li');
liSecond.innerHTML = "improving";
ul.append(liSecond);

let likesNumber = $('.likes-number');
let heart = $('.heart');

heart.onclick = () => {
  heart.style.fill = heart.style.fill === 'red' ? null : 'red';

  if (heart.classList.contains('liked')) {
    likesNumber.textContent--;
  } else {
    likesNumber.textContent++;
  }

  heart.classList.toggle('liked');
}

let commentsContainer = $('.comment-container');
let comment = $('.comment-form');
let counter = 1;

comment.onsubmit = (evt) => {
  evt.preventDefault();

  // Get input element and save into a variable
  let input = $('#comment-input');

  // Read the input's value and save into useComment variable
  let userComment = input.value;

  // Create a new div element and save into newLi variable
  let newDiv = create('div');

  // Create a new span element and save into newNumberEl variable
  let newSpan = create('span');

  // Add a new class to the span element
  newSpan.classList.add('comment-number');
  // Insert text content into span element
  newSpan.textContent = '#' + counter + ' ';
  counter++;

  // Add class to the new div-element
  newDiv.classList.add('personal-comment');
  // Insert the new span element into the new div element
  newDiv.append(newSpan);
  // Insert the field text into the new div
  newDiv.append(userComment);

  commentsContainer.append(newDiv);

  // Clear the input field
  input.value = '';
};
