import sender from '../config/emailConfig.js'

const sendBasicEmails = async(mailfrom, mailTo, mailsubject, mailBody)=>{
  try {
    const response = await sender.sendMail({
      from: mailfrom,
      to: mailTo,
      subject: mailsubject,
      text: mailBody
    })
    console.log(response);
  } catch (error) {
    console.log(error)
  }
}

export default sendBasicEmails;