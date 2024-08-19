import { useState } from "react";
import "./form.css";

const Form = () => {
  // Estado inicial do formulário
  const initilForm = {
    nome: "",
  };

  // Estado do formulário
  const [formState, setFormState] = useState(initilForm);

  // Função para lidar com a alteração dos campos de entrada
  const handleInput = (event) => {
    // Obter o elemento de entrada atual
    const target = event.currentTarget;
    // Extrair o valor e o nome do campo de entrada
    const { value, name } = target;

    // Atualizar o estado do formulário com os novos valores
    setFormState({ ...formState, [name]: value });
  };

    // Função para lidar com a submissão do formulário
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(formState.nome)

      setFormState({ ...initilForm })
    }

  return (
    <div className="container">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              name="nome"
              id="nome"
              value={formState.nome}
              onChange={handleInput}
            />
          </div>

          <div>
            <button type="submit">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
