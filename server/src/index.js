import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;
const clientOrigin = process.env.CLIENT_ORIGIN || 'http://localhost:5173';
const allowedOrigins = clientOrigin.split(',').map((origin) => origin.trim());

app.use(express.json({ limit: '10kb' }));
app.use(
  cors({
    origin(origin, callback) {
      if (!origin) {
        callback(null, true);
        return;
      }

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
        return;
      }

      callback(new Error('Not allowed by CORS'));
    },
  })
);

app.get('/health', (_req, res) => {
  res.json({ ok: true });
});

app.post('/api/contact', async (req, res) => {
  const { email, message } = req.body || {};

  if (!email || !message) {
    res.status(400).json({ error: 'Email and message are required.' });
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    res.status(400).json({ error: 'Please provide a valid email address.' });
    return;
  }

  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  const toEmail = process.env.TO_EMAIL || user;
  const fromName = process.env.FROM_NAME || 'Portfolio Contact';

  if (!user || !pass || !toEmail) {
    res.status(500).json({ error: 'Server email configuration is missing.' });
    return;
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user,
        pass,
      },
    });

    await transporter.sendMail({
      from: `${fromName} <${user}>`,
      to: toEmail,
      replyTo: email,
      subject: 'New portfolio contact message',
      text: `From: ${email}\n\nMessage:\n${message}`,
    });

    res.json({ ok: true });
  } catch (error) {
    console.error('Failed to send email:', error);
    res.status(500).json({ error: 'Failed to send message.' });
  }
});

app.listen(port, () => {
  console.log(`Contact server running on port ${port}`);
});
