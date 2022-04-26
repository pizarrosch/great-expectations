// The great function o Zaur
function $(selector, many=false) {
  if(many) {
    return document.querySelectorAll(selector)
  }
    return document.querySelector(selector);
}

function create(name) {
  return document.createElement(name);
}

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

const commentsContainer = $('.comment-container');
const comment = $('.comment-form');
let counter = 1;

comment.onsubmit = (evt) => {
  evt.preventDefault();

  // Get input element and save into a variable
  const input = $('#comment-input');

  // Read the input's value and save into useComment variable
  const userComment = input.value;

  // Create a new div element and save into newLi variable
  const newDiv = create('div');

  // Create a new span element and save into newNumberEl variable
  const newSpan = create('span');

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

const commentField = $('.comment-field');
const output = $('output');
const submitButton = $('.submit-button');

commentField.oninput = () => {
  output.textContent = commentField.value.length;

  if (commentField.value.length > 200) {
    comment.classList.add('warning');
    submitButton.disabled = true;
  } else {
    comment.classList.remove('warning');
    submitButton.disabled = false;
  }
}

submitButton.onclick = () => {
  output.textContent = 0;
}

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