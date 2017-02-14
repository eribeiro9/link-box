import express from 'express';
import bodyParser from 'body-parser';
import SocketIO from 'socket-io';

import CONFIG from './config/main';
import router from './router';
import socketEvents from './socket-events';

let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router(app);

let server = app.listen(CONFIG.PORT);

let io = SocketIO.listen(server);
socketEvents(io);
