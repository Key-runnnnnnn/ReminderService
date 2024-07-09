const cron = require('node-cron');
const emailService = require('../services/email-service');
const sender = require('../config/emailConfig');
/**
 * 10:00 am 
 * Every 5 minutes
 * We will check are their any pending emails which was expected to be sent 
 * by now  and is pending
 */

const setupJobs=()=>{
    cron.schedule('*/5 * * * *', async () => {
        console.log('running a task every 5 minutes');
        const response = await emailService.fetchPendingEmails();
        console.log(response);
    });
}

module.exports = setupJobs;