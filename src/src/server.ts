import express from 'express';
import * as bodyParser from 'body-parser';
import { routerController } from './router/routerController';
import { server } from './config/app';

const app: express.Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', routerController);

app.listen(server.port || 3000, () => {
  console.clear();
  console.log(`Server started in ${server.host}:${server.port}🚀`);
});
