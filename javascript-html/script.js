/*Criando variaveis */
const nome = document.querySelector("#nome");
const button = document.querySelector("button");
const lista = document.querySelector(".lista");

/*Eventos de javascript */
button.addEventListener("click", (event) => {
  event.preventDefault();
  const inputValue = nome.value;
  const templateHTML = `<li>${inputValue}</li>`;

  /*Condição */
  if (inputValue.trim() === "") {
    alert("Digite alguma coisa");
    return;
  }

  /*Incluindo intens no HTML */
  lista.innerHTML += templateHTML;
  /*Limpando meu campo */
  nome.value = "";
});