import 'dotenv/config';

import { connection } from '../typeorm';
import { app } from './app';

connection();

app.listen(process.env.PORT || 3333, () =>
  console.log(`Server started on port ${process.env.PORT || 3333}`)
);
