import "./style.css";
export const Lista = () => {
  const lista = [
    {
      nome: "Projeto novo",
      responsavel: "Fernando Carlos",
      valor: 1200
    },
    {
      nome: "Projeto do Mar",
      responsavel: "Fonseca",
      valor: 4000
    },
    {
      nome: "Giovanni",
      responsavel: "Pedro",
      valor: 2000
    },
    {
      nome: "Fernanda",
      responsavel: "Pedro",
      valor: 990
    }
  ]

  return (
    <main className="lista">
      <section className="content-list">
        <h1>Lista</h1>
        <img src="https://fastly.picsum.photos/id/309/300/250.jpg?hmac=Bfnht9vHjeWSVqGWtNfKxzCwO94Gk4KFwQ6umjm4K0w" alt="Imagem" />

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, perspiciatis. Odio iure facilis nostrum velit, et, voluptas praesentium earum ut accusantium ad voluptatem, quaerat optio dolore expedita unde nulla inventore?
        </p>
      </section>
      
      <section className="list-names">
        <h1>
          Lista nomes
        </h1>

        <article className="content-listagem">
          {lista.map((item, index) => {
            return (
              <div key={index} className="listagem">
                <strong>Nome: </strong> <span>{item.nome}</span>
                <strong>Responsável: </strong> <span>{item.responsavel}</span>
                <strong>Valor: </strong> <span>{item.valor}</span>
              </div>
            )
          })}


        </article>
      </section>
    </main>
  ) 
}