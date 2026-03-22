onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const text = "PARA MI POKEBOLA Y LUNETA BOLUDA PRECIOSA 🥰❤️";
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < text.length) {
        titleElement.innerHTML = text.slice(0, index + 1);
        index++;
        setTimeout(appendTitle, 100);
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};}
