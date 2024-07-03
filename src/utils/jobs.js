import cron from 'node-cron';

/**
 * 10:00 am 
 * Every 5 minutes
 * We will check are their any pending emails which was expected to be sent 
 * by now  and is pending
 */

const setupJobs=()=>{
    cron.schedule('*/5 * * * *', () => {
        console.log('running a task every 5 minutes');
    });
}

export default setupJobs;