import { useState } from "react";

//boockStore/src/pages/RegistrationBooks

export function CadastroNews() {
  // Estado inicial do formulário
  const initilForm = {
    nome: "",
    email: "",
    telefone: ""
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
    // Prevenir o comportamento padrão de envio do formulário
    event.preventDefault();

    const formGeneral = {
      description: formState.nome,
      type: formState.email,
      category: formState.telefone,
      createdAt: new Date(),
    }

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formGeneral),
    }

    
    // Limpar os campos do formulário definindo o estado inicial
   

    fetch('http://localhost:7000/news', requestOptions)
      .then((response) => response.json())
      .then((data) => {
        // setFormState(data)
        setFormState({ ...initilForm });
      });

    // Exibir os valores atuais do estado do formulário no console
    console.log(formState);
  };

  const exemploTarget = (event) => {
    console.log("Elemento clicado:", event.target); // Mostra o elemento que foi clicado
    console.log("Elemento atual:", event.currentTarget); // Mostra o elemento atualmente lidando com o evento
    console.log("aqui é evento", event)
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            name="nome"
            id="nome"
            value={formState.nome}
            onChange={handleInput}
            placeholder="Digite seu nome"
          />
        </div>

        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleInput}
            placeholder="Digite seu email"
          />
        </div>

        <div className="form-control">
          <label htmlFor="telefone">Telefone</label>
          <input
            type="text"
            id="telefone"
            name="telefone"
            value={formState.telefone}
            onChange={handleInput}
            placeholder="Digite seu Telefone"
          />
        </div>

        <div>
          <button type="submit">Enviar</button>
        </div>
      </form>

      <div onClick={exemploTarget}>
          <button>Clique Aqui</button>
        </div>
    </>
  );
}
