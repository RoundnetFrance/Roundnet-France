import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function (req, res) {
  if (req.method === 'POST') {
    const { email, subject, message, name } = req.body;
    const msg = {
      to: email,
      from: 'robin.souriau@gmail.com',
      subject,
      name,
      text: message,
    };

    console.log(req.body);

    try {
      await sgMail.send(msg);
      // Wait for 2 seconds
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