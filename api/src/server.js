import express from 'express';
import bodyParser from 'body-parser';

import CONFIG from './config/main';
import router from './router.js';

let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router(app);

app.listen(CONFIG.PORT);
