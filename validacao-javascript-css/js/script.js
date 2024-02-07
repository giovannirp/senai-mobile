const button = document.querySelector("button");
const inputNome = document.querySelector("#nome");
const inputCidade = document.querySelector("#cidade");

// criando um elemento p
const pMensagem = document.createElement('p');

const clearForm = () => {
  inputNome.value = '';
  inputCidade.value = '';
}

button.addEventListener(("click"), function(event) {
  event.preventDefault();

  // validações
  if (inputNome.value.trim() === '') {
    pMensagem.textContent = "Campo obrigatório";
    inputNome.insertAdjacentElement("afterend", pMensagem);
    pMensagem.setAttribute("class", "error");
    return false;
  }

  // acertando layout
  // testando
  if (inputCidade.value.trim() === '') {
    pMensagem.textContent = "Campo obrigatório";
    inputCidade.insertAdjacentElement("afterend", pMensagem);
    pMensagem.setAttribute("class", "error");
    return false;
  }

   pMensagem.classList.add("d-none");
  clearForm();
});

