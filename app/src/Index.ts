import Server from './Server';
import { Request, Response } from 'express';

class Application {

  constructor(protected port: number,
              protected msg: string) {
    this.start();
  }

  start() {
    Server.listen(this.port, () => `Listening on ${this.port}`);
    Server.get('/', (req: Request, res: Response) => {
      res.send(this.msg);
    });
  }
}

new Application(8080, 'Node BR!!!');
