  const sql = require('mysql');
  const express = require('express');
  const bodyParser = require('body-parser');
  const db = require('./db.config');
  const router = require('./router/user.route')
  const app = express();
  const port = 3000;
  const controller = require('./controllers/app.controller')
  const cors = require('cors')

  app.use(cors({
    origin: 'http://localhost:4200',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  }));
  
  app.use(bodyParser.json());
  router(app);


  app.listen(port, () => {
    console.log("Using Port " + port);
  });

