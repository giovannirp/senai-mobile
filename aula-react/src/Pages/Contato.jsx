import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Contato() {
  //UseState do React para gerenciar o estado dos usuários
  const [usuarios, setUsuarios] = useState([]);

  // Hook useEffect para lidar com efeitos colaterais no componente
  useEffect(() => {
    fetch("http://localhost:7000/books")
      .then((response) => response.json())
      .then((data) => setUsuarios(data))
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  console.log(usuarios)

  return (
    <main className="container">
      <h1>Contato</h1>

      <Link to="/">Voltar para Home</Link><br /> <br /> 

      <div>
        {usuarios.map((user) => (
          <div key={user.id}>
            <strong>Nome: {user.nome}</strong><br />
            <strong>Email: {user.email}</strong><br />
            <strong>Telefone: {user.telefone}</strong><br />
            <hr />
          </div>
        ))}
      </div>
    </main>
  );
}
