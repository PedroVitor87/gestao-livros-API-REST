# Sistema de Gerenciamento de Livros

O Sistema de Gerenciamento de Livros é um serviço web REST desenvolvido com Express para simplificar a gestão de uma coleção de livros. Este projeto oferece funcionalidades essenciais para criar, listar, atualizar e excluir livros de forma eficiente.

## Funcionalidades Principais

- **Criação de Livros:** Adicione novos livros à sua coleção especificando título, autor e ISBN.

- **Listagem de Livros:** Obtenha uma visão geral completa de todos os livros em sua coleção.

- **Busca por ISBN:** Localize facilmente um livro específico através do número ISBN.

- **Atualização de Informações:** Mantenha suas informações de livros atualizadas, como título e autor.

- **Exclusão de Livros:** Remova livros que não são mais necessários.

## Endpoints Principais

- **Cadastrar Livro:**
  - Rota: `/livros/cadastrar`
  - Método: `POST`

- **Listar Livros:**
  - Rota: `/livros`
  - Método: `GET`

- **Buscar por ISBN:**
  - Rota: `/livros/buscar/:isbn`
  - Método: `GET`

- **Atualizar Livro:**
  - Rota: `/livros/atualizar/:isbn`
  - Método: `PUT`

- **Excluir Livro:**
  - Rota: `/livros/excluir/:isbn`
  - Método: `DELETE`

## Utilização

Estes endpoints foram projetados para serem utilizados em ferramentas como [Insomnia](https://insomnia.rest/) ou [Postman](https://www.postman.com/) para interações e testes com a API.

Lembre-se de fornecer instruções sobre como configurar e usar essas ferramentas específicas, se necessário.
