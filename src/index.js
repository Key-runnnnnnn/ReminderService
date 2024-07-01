import express from 'express';
import bodyParser from 'body-parser';
import {PORT} from "./config/serverConfig.js"

const setUpAndStartServer = () => {

  // create an express app
  const app = express();

  // middlewares
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));


  // Listen to the root endpoint
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  })
}
setUpAndStartServer()