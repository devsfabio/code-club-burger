import express from 'express';
import routes from './routes';
// importado do routes

// class
class App {
  constructor() {
    // a primeiro coisa que acontece é chamado o metodo constructor

    this.app = express();

    this.middlewares();
    this.routes();
    // assim que aplicação começa a rodar as rotas esta disponivel
  }

  middlewares() {
    this.app.use(express.json());
    // avisando toda aplicação que vai utilizar json a pedido do express documentação
  }

  routes() {
    this.app.use(routes);
    // rotas disponivel na aplicação
  }
}

export default App
// assim que o server sobe ele instância a classe new App().app ai começa a rodar
