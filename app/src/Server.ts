import express = require('express');

class Server {
  public app: express.Application;

  constructor() {
    this.app = express();
  }
}

export default new Server().app;
