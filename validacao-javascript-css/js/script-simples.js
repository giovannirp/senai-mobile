const button = document.querySelector("button");
const inputNome = document.querySelector("#nome");
const inputCidade = document.querySelector("#cidade");

const medicamentosButton = document.getElementById('medicamentos');
const listaRemedios = document.querySelector('.remedios');

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
    alert("Campo obrigatório");
    return false;
  }

  if (inputCidade.value.trim() === '') {
    alert("Campo obrigatório");
    return false;
  }

   pMensagem.classList.add("d-none");
  clearForm();
});

medicamentosButton.addEventListener("click", function() {
  listaRemedios.classList.add('d-block')
});