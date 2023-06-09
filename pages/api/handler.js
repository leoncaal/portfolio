import { sendEmail } from './mailer';

export default async function handler (req, res) {

  if (req.method === 'POST') {
    const { name, email, comments } = req.body;

    try {
      await sendEmail({ name, email, comments });
      res.status(200).json({ message: 'Enviado con exito' });
    } catch (error) {
      res.status(500).json({ error: 'Fallo el envio' });
    }
  } else {
    res.status(400).json({ error: 'Fallo el envio' });
  }
}