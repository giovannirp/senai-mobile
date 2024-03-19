# Projeto React com Vite: Construção de um Site Completo com API JSON

## Objetivo:
Nesta atividade, você irá criar um projeto React utilizando Vite, onde construirá um site completo com no mínimo 4 páginas, baseado em um tema de sua escolha. Além disso, você irá integrar uma API JSON utilizando o Json Server para criar serviços de cadastro (POST) e consumo desses serviços utilizando GET. O projeto também incluirá recursos do React, como formulários com validações.

## Passos:

1. **Escolha de um Tema:**
   - Antes de começar, escolha um tema para o seu site. Pode ser um site de portfolio, um blog, uma loja virtual, ou qualquer outro tema que você preferir.

2. **Configuração do Ambiente:**
   - Certifique-se de ter o Node.js instalado em sua máquina.
   - Instale o Vite globalmente utilizando o comando `npm install -g create-vite`.

3. **Criação do Projeto:**
   - Utilize o comando `create-vite meu-projeto-react --template react` para criar um novo projeto React com Vite. Substitua `meu-projeto-react` pelo nome desejado para o projeto.

4. **Instalação das Dependências:**
   - Instale as dependências necessárias, incluindo React Router e Json Server, utilizando `npm install react-router-dom json-server`.

5. **Criação das Páginas:**
   - Crie no mínimo 5 páginas dentro do diretório `src/pages`, relacionadas ao tema escolhido. Por exemplo: Página inicial, Sobre, Contato e Serviços. Utilize recursos do React para estruturar e estilizar essas páginas conforme necessário.

6. **Criação da API com Json Server:**
   - Crie um arquivo `db.json` na raiz do projeto para definir os dados da API.
   - Configure as rotas e os dados desejados no arquivo `db.json`.
   - Inicie o Json Server utilizando `json-server --watch db.json --port 3001`.

7. **Integração com a API:**
   - Utilize o React para criar formulários de cadastro e consumir os serviços da API utilizando GET para exibir os dados nas páginas do site. Utilize a biblioteca Axios ou o próprio Fetch API do navegador para realizar as requisições HTTP.

8. **Validações nos Formulários:**
   - Implemente validações nos formulários.
## Execução do Projeto:
- Inicie o servidor de desenvolvimento React e o servidor do Json Server utilizando 
- Acesse o site através do navegador e verifique se as páginas estão funcionando corretamente, e se os formulários estão realizando as validações de acordo com as regras definidas.

## Observações:
- Fique à vontade para explorar mais recursos do React e do Json Server conforme necessário para tornar o seu projeto mais robusto e completo.


## Entrega:
- Ao concluir o projeto, compartilhe o código fonte comigo para que eu possa revisá-lo e fornecer feedback, se necessário.
