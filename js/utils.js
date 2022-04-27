function $(selector, many=false) {
  if(many) {
    return document.querySelectorAll(selector)
  }
  return document.querySelector(selector);
}

function create(name) {
  return document.createElement(name);
}
