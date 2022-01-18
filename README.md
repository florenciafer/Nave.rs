Desafio de front-end
Navedex
O sistema consiste em uma web app para visualização e criação dos navers, possuindo informações como: nomes, idades, cargos, tempo de empresa e projetos que participou.

Será um diferencial realizar o desenvolvimento usando React, pois é a biblioteca que mais usamos na empresa. Também serão aceitos testes desenvolvidos com Vue.js, Angular ou sem uso de um framework específico, mas com as funcionalidades desenvolvidas utilizando JavaScript.

Figma
Use as telas do figma para se guiar no desenvolvimento. O código de css não será tão importante quando o javascript, mas esperamos que o layout fique de acordo com as telas.

API
Para as funcionalidades da aplicação, faça integração com a api. Recomendamos o uso da fetch api ou do axios para realizar as chamadas http.

A documentação da API oficial do teste pode ser utilizada com o postman importando esse link. Todos os parâmetros para cada rota estão documentados nessa URL, então a utilize como base para montar a web app.

Após importar o link no postman, você deve criar um cadastro utilizando a request de users/signup.

Funcionalidades
Login
A web app deverá possuir um fluxo de autenticação, onde o usuário só pode acessar as telas internas do sistema (listagem, formulários) passando pela tela de login com as credenciais criadas previamente via Postman.

Para realizar o login, você deve usar a request de users/login disponível no postman. Essa request retornará um token do tipo Bearer que deverá ser utilizado no header das próximas requisições.

Listagem
A página inicial da aplicação tera uma lista dos navers.

Para listar os navers, você deve usar a request de navers/index disponível no postman.

Visualização
Ao clicar em algum naver da listagem, o usuário terá uma visualização completa das informações do mesmo.

Para apresentar um único naver, você deve usar a request de navers/show disponível no postman. Para excluir um naver, você deve usar a request de navers/delete disponível no postman.

Criação/edição
O usuário precisa ter a possibilidade de criar um novo naver ou editar um já existente.

Para criar um naver, você deve usar a request de navers/create disponível no postman. Para editar um naver, você deve usar a request de navers/update disponível no postman.

Observações
Ao finalizar o teste, envie o link do seu repositório por mensagem lá na gupy.

Um diferencial positivo é fazer com que o teste seja responsivo.

Se durante o processo de desenvolvimento não conseguiu fazer algo, explique qual o impedimento que encontrou e como tentou resolver em uma seção Dificuldades do seu README e nos envie até onde chegou. 😄