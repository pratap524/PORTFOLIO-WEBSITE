# Contact Server

Express + Nodemailer endpoint that sends contact form submissions to your Gmail inbox.

## Setup

1. Install dependencies:

   ```sh
   npm install
   ```

2. Copy env file and fill in values:

   ```sh
   copy .env.example .env
   ```

3. Start the server:

   ```sh
   npm run dev
   ```

The server runs on `http://localhost:4000` by default.

## Notes

- Use a Gmail App Password (Google Account -> Security -> App Passwords).
- If you deploy, update `CLIENT_ORIGIN` and set `VITE_API_BASE_URL` in the frontend.
