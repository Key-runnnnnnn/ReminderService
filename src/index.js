import express from 'express';
import bodyParser from 'body-parser';
import { config } from "./config/serverConfig.js"
// import sendBasicEmails  from "./services/email-service.js"
import cron from 'node-cron';

const setUpAndStartServer = () => {

  // create an express app
  const app = express();

  // middlewares
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

 
  // Listen to the root endpoint
  app.listen(config.PORT, () => {
    console.log(`Server is running on port ${config.PORT}`)

    // send email
    sendBasicEmails(    
      'support@noti.com',
      'metaversewebo@gmail.com',
      'This is a testing Email', 
      'Hey, how are you? I hope you like this email.'
    )


    cron.schedule('*/2 * * * *', () => {
      console.log('running a task every two minutes');
    });
  })
}
setUpAndStartServer()