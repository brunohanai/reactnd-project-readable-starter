# Rotas

* `/`
* `/post/:id` 
* `/category/:id` (confirmar)

* `/post` POST
* `/post/id` PUT

# Anot

http://udacity.github.io/frontend-nanodegree-styleguide/index.html
http://udacity.github.io/frontend-nanodegree-styleguide/css.html
http://udacity.github.io/frontend-nanodegree-styleguide/javascript.html
https://udacity.github.io/git-styleguide/

https://github.com/udacity/reactnd-udacimeals-complete
https://github.com/brunohanai/reactnd-project-myreads

especificações do projeto: https://review.udacity.com/#!/rubrics/1081/view

fetch(
    url,
    {
        headers: { 'Authorization': 'whatever-you-want' }
    }
)

Views

Seu aplicativo deve ter, no mínimo, quatro views:

    Padrão (Root)
        deve listar todas as categorias disponíveis, que devem se conectar a uma view de categoria para esta categoria
        deve listar todas as postagens ordenadas pelo voteScore (começando pela pontuação mais alta)
        deve ter um controle para modificar o método de ordenação da lista, incluindo, no mínimo, ordenar por voteScore e ordenar por data de criação
        deve ter um controle para adicionar novas postagens
    View de Categoria
        idêntica à view padrão, mas filtrada para incluir somente postagens com a categoria selecionada
    View de Detalhe da Postagem
        deve mostrar os detalhes da postagem, incluindo: título, corpo, autor, data de criação em formato legível pelo usuário e pontuação dos votos
        deve listar todos os comentários daquela postagem, ordenados por voteScore (começando pelo mais alto)
        deve ter controles para editar ou remover a postagem
        deve ter um controle para adicionar um novo comentário
        implemente o formulário de comentários da forma que quiser (em linha, modal, etc.)
        os comentários também devem ter controles para edição ou exclusão
    Criar/Editar a View
        deve ter um formulário para criar novas postagens ou editar as existentes
        ao editar, os dados existentes devem ser povoados no formulário

# Utils

* https://github.com/brunohanai/reactnd-project-myreads
* https://review.udacity.com/#!/rubrics/1081/view
* https://github.com/brunohanai/reactnd-project-readable-starter/blob/master/api-server/README.md
* https://dribbble.com/shots/3917250-Blog-App/attachments/892491
* https://github.com/gaearon/redux-thunk
* https://marketplace.visualstudio.com/items?itemName=humao.rest-client
* https://github.com/gaearon/redux-thunk
* https://github.com/udacity/reactnd-udacimeals-complete/blob/master/src/index.js
* https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf

# API

GET http://localhost:3001/posts
Authorization: eu
