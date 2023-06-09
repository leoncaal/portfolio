import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function sendEmail({ name, email, comments }) {
  const mailOptions = {
    from: email,
    to: "leoncaal@gmail.com",
    subject: "Te han contactado",
    html: `<!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width">
      <title>Información de contacto</title>
    </head>
    <body style="font-family: Arial, sans-serif; background-color: #f2f2f2;">
      <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: white; border-radius: 30px;">
        <header style="text-align: center; margin-bottom: 30px;">
          <img src="https://res.cloudinary.com/dqvivmiyi/image/upload/v1686297475/Personal/LogoLCA_o5b7ew.png" alt="Logo Leonel" width="100" height="85">
          <h1 style="font-size: 24px; margin-top: 0;">¡Tienes un nuevo contacto!</h1>
        </header>
        <section style="margin-bottom: 30px;">
          <p style="font-size: 18px; margin-bottom: 10px;">Hola Leonel!</p>
          <p style="font-size: 16px; margin-bottom: 10px;">Te han contactado desde tu portfolio. A continuación te muestro la información del contacto:</p>
          <ul style="font-size: 16px; margin-bottom: 10px; list-style: none; padding: 0;">
            <li><strong>Nombre:</strong> ${name}</li>
            <li><strong>Correo electrónico:</strong> ${email}</li>
            <li><strong>Mensaje:</strong></li>
            <li style="margin-left: 20px;">${comments}</li>
          </ul>
        </section>
        <footer style="text-align: center;">
          <p style="font-size: 16px; margin-top: 10px;">©2023. Leonel Castañeda Alvarez</p>
        </footer>
      </div>
    </body>
    </html>
    `,
  };

  const mailOptionsRes = {
    from: "leoncaal@gmail.com",
    to: email,
    subject: "Gracias por visitar mi sitio web",
    html: `<!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width">
      <title>Información de contacto</title>
    </head>
    <body style="font-family: Arial, sans-serif; background-color: #f2f2f2;">
      <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: white; border-radius: 30px;">
        <header style="text-align: center; margin-bottom: 30px;">
          <img src="https://res.cloudinary.com/dqvivmiyi/image/upload/v1686297475/Personal/LogoLCA_o5b7ew.png" alt="Logo Leonel" width="100" height="85">
          <h1 style="font-size: 24px; margin-top: 0;">He recibido tu email!</h1>
        </header>
        <section style="margin-bottom: 30px;">
          <p style="font-size: 18px; margin-bottom: 10px;">Hola ${name}!</p>
          <p style="font-size: 16px; margin-bottom: 10px;">Te agradezco que hayas invertido un poco de tu tiempo en dejar un comentario.</p>
          <p style="font-size: 16px; margin-bottom: 10px;">A la brevedad posible te contactare. Estos son los datos que me enviaste:</p>
          <ul style="font-size: 16px; margin-bottom: 10px; list-style: none; padding: 0;">
            <li><strong>Nombre:</strong> ${name}</li>
            <li><strong>Correo electrónico:</strong> ${email}</li>
            <li><strong>Mensaje:</strong></li>
            <li style="margin-left: 20px;">${comments}</li>
          </ul>
        </section>
        <footer style="text-align: center;">
          <p style="font-size: 16px; margin-top: 10px;">©2023. Leonel Castañeda Alvarez</p>
        </footer>
      </div>
    </body>
    </html>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(mailOptionsRes);
    return true;
  } catch (error) {
    throw new Error("Failed to send email.");
  }

}
