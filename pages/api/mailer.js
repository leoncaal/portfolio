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
    text: `Te contacto: ${name}\nsu email: ${email}\n${comments}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    throw new Error("Failed to send email.");
  }
}
