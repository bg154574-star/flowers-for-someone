const text = "PARA MI LUNETA BOLUDA PRECIOSA 🥰❤️";
let index = 0;

function appendTitle() {
  if (index < text.length) {
    titleElement.innerHTML = text.slice(0, index + 1);
    index++;
    setTimeout(appendTitle, 100);
  }
}
