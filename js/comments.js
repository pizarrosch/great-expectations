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
