import nodemailer from 'nodemailer';
import { config } from './serverConfig.js'

const sender = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user:config.EMAIL_ID,
      pass:config.EMAIL_PASS
    }
})

export default sender;