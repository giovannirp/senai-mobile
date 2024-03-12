import { Header } from './components/Header'
import { Contador } from './components/Contador'
import { Lista } from './components/Lista'
import { Footer } from './components/Footer'
import './App.css'
import { Banner } from './components/Banner'
import { CadastroNews } from './components/CadastroNews'

function App() {
  return (
    <>
      <Header title="Projeto React" subTitulo="Sub titulo" />

      <main className="container">
        <h1>Conteúdo do projeto React</h1>
        
        <div>
          <a href="#">Vai para Contato</a>
        </div>

        <Contador />

        <Lista />

        <Banner />

        <CadastroNews />
      </main>

      <Footer />
    </>
  )
}

export default App
