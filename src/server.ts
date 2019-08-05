/* eslint no-console: 0 */
import cors from 'cors';
import express from 'express';

const app = express();
app.use(cors());
app.get('/', (req, res): void => {
  res.send({ hello: 'world' });
});
app.listen(3000, (): void => console.log('Example app listening on port 3000!'));
