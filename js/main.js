window.onload = () => {
  const text = "PARA MI POKEBOLA Y MI LUNETA BOLUDA PRECIOSA 🥰❤️";
  const titleElement = document.getElementById("title");

  let index = 0;

  function writeText() {
    if (index < text.length) {
      titleElement.innerHTML += text[index];
      index++;
      setTimeout(writeText, 100);
    }
  }

  writeText();
};
