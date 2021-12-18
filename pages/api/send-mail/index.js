import sgMail from '@sendgrid/mail'
import emailTeplate from '../../../styles/email-template'

// Sign SendGrid API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function (req, res) {
  if (req.method === 'POST') {
    console.log(req.body);

    // Create email template
    const html = emailTeplate(req.body);

    // Create email object
    const msg = {
      to: 'robin.souriau@gmail.com',
      from: 'robin.souriau@gmail.com',
      subject : req.body.subject,
      name: req.body.name,
      html,
    };

    try {
      await sgMail.send(msg);
      //! FOR TESTING PURPOSES ONLY - Wait for 2 seconds
      // await new Promise((resolve) => setTimeout(resolve, 2000));
      res.status(200).json({ success: true, message: `Votre email a été envoyé ! Nous vous répondrons sous peu.` })
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Une erreur est survenue lors de l\'envoi du mail. Merci de réessayer' })
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }

}