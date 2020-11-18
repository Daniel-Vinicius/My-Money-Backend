# My Money Backend

**Projeto em Finalizado e Hospedado no Heroku**

O que eu fiz:

* 1- Criei um repositório separado um de Backend e um de Frontend
* 2- Criei um projeto para o Backend no heroku e linkei o repositório do Github Backend
* 3- Criei variáveis de ambiente no heroku
* 4- Criei um Projeto na Organização Daniel's Org no MongoDbAtlas
* 5- Criei um Cluster lá no Projeto
* 6- Fui em collections dentro de cluster e criei um banco com nome mymoney(sem espaçoes e tudo minúsculo) e uma collection com um nome que já era usado no backend
* 7- Criei um usuário com permissões de ler e escrever todos os docs lá no Projeto My-Money-App
* 8- Peguei a String de conexão e coloquei na variável do Heroku com o nome: MONGO_URL e usei na hora de conectar com o mongo
* 9- Coloquei process.env.port na variável port dessa forma: **const port = process.env.PORT || 3003**
* 10- Configurei um Buildpacks Node.js no Heroku
* 11- Se der erro olha no log: **heroku logs --tail --app nome-do-app-no-heroku** que no caso era my-money-backend-br
* 12- Configurei o Procfile dessa forma: **web: node src/loader.js**

Links Úteis:

* [1- Ver Organizações](https://cloud.mongodb.com/v2#/preferences/organizations)
* [2- Criar Projeto na Organização Daniel's Org](https://cloud.mongodb.com/v2#/org/5fb42e26dfb7e53129c59b01/projects/create)
* [3- Daniel's Org](https://cloud.mongodb.com/v2#/org/5fb42e26dfb7e53129c59b01/projects)
* [4- Projeto My-Money-App No MongoDb Atlas](https://cloud.mongodb.com/v2/5fb42e266f8323671cc1025a#clusters)
* [5- Tutorial Rocketseat](https://youtu.be/-j7vLmBMsEU)
* [6- Link do Heroku](https://my-money-backend-br.herokuapp.com/)
* [7- Link do Repo Backend](https://github.com/Daniel-Vinicius/My-Money-Backend)
* [8- Link do repo Frontend](https://github.com/Daniel-Vinicius/My-Money-Frontend)
* 9- String de Conexão:

``` javascript
mongodb+srv://NomeDoProjeto:SenhaDoProjeto@nome-do-cluster.6cnx1.mongodb.net/nomedobanco?retryWrites=true&w=majority
```
