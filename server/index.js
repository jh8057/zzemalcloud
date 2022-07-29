const express = require('express');
const app = express();

//req.body를 위한 패키지
app.use(express.json());

//환경변수config
const configEnv = require('./config/config.js');

//기본 라우터 삽입
const port = configEnv.PORT || 3000;
const routes = require('./routes');
app.use('/', routes);

//인증 페이지 router middleware
const authRoute = require('./routes/auth');
app.use('/api/user', authRoute);

//DB router middleware
const dbRoute = require('./routes/dbcon');
app.use('/api/db', dbRoute);

const config = require('../nuxt.config.js');
const { Nuxt, Builder } = require('nuxt');
const nuxt = new Nuxt(config);

const http = require('http');
const server = http.createServer(app);
app.use(nuxt.render);

// if (config.dev) {
const builder = new Builder(nuxt);
builder.build();
// }

//swagger

server.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});
