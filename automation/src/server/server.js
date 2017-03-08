import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import { CONFIG } from '../config/main';
import { router } from './router';

let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

router(app);

app.listen(CONFIG.NODE_PORT);
