import { Link } from "react-router-dom";
import { Banner } from "../components/Banner";
import { CadastroNews } from "../components/CadastroNews";
import { Contador } from "../components/Contador";
import { Lista } from "../components/Lista";

export function Home() {
  return (
    <main className="container">
      <h1>Conteúdo do projeto React</h1>

      <div>
        <Link to="/contato">Vai para Contato</Link>
      </div>

      <Contador />

      <Lista />

      <Banner />

      <CadastroNews />
    </main>
  );
}
