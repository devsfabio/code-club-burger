import { Router } from 'express';

// importo o Router dentro do express igual na documentação express
const routes = new Router();
// chamou o routes por meio da variavel

routes.get('/', (request, response) =>
  // criando rota do tipo get só o / é a raiz do projeto porta http://localhost:3000/

  response.json({ message: 'hello word' }),
  // primera rota respota de hello word
);

export default routes;
// nao pode esquecer de exportar as routes para que dentro do app.js para esta disponivel
