
# Professional Internship Portfolio

A modern personal portfolio website built with React and Vite to showcase profile information, featured projects, skills, contact details, and downloadable resume.

## Live Project Repository

- GitHub: https://github.com/pratap524/PORTFOLIO-WEBSITE

## Features

- Responsive portfolio landing page
- Hero section with profile image and social links
- Featured projects with live demo and GitHub buttons
- Project thumbnails for each showcased project
- Resume download from public assets
- Contact section with backend mail endpoint support
- Light and dark theme support

## Tech Stack

- Frontend: React, TypeScript, Vite
- Styling: Tailwind CSS, custom theme styles
- UI/Icons: Radix UI components, Lucide icons, Motion animations
- Backend (optional contact server): Node.js, Express, Nodemailer
- Package manager: pnpm

## Project Structure

```text
.
|- public/                     # static assets (resume + project thumbnails)
|- server/                     # optional Express contact server
|  |- src/index.js
|- src/
|  |- app/
|  |  |- components/           # portfolio sections and UI components
|  |  |- contexts/
|  |- styles/
|  |- main.tsx
|- index.html
|- package.json
```

## Getting Started

### 1. Install dependencies

```sh
pnpm install
```

### 2. Run frontend locally

```sh
pnpm dev
```

Frontend runs at: http://localhost:5173

### 3. Build production bundle

```sh
pnpm build
```

## Optional: Run Contact Server

From the server folder:

```sh
cd server
npm install
copy .env.example .env
npm run dev
```

Server runs at: http://localhost:4000

## Contact Form on Vercel (Formspree)

If you do not want to deploy the backend mail server, use Formspree:

1. Create a form in Formspree and copy the endpoint URL (example: `https://formspree.io/f/abcdwxyz`).
2. In Vercel project settings, add:

```sh
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your_form_id
```

3. Redeploy the Vercel project.

The website contact form will then send messages directly through Formspree.

## Featured Projects

- Motoservices
  - Live: https://motoservices-pratap.free.nf/index.php
  - GitHub: https://github.com/pratap524/Motoservices-.git
- Citiezen-complaint-engine
  - Live: https://citiezen-complaint-engine-beem.vercel.app/
  - GitHub: https://github.com/pratap524/Citiezen-complaint-engine.git
- AI-Story-generator
  - Runs locally
  - GitHub: https://github.com/pratap524/AI-Story-generator.git
- Project Desk
  - Live demo coming soon
  - GitHub: https://github.com/pratap524/Project-Desk.git

## Assets Notes

- Resume file path: public/resume.pdf
- Hero profile image: public/profile.jpeg
- Project thumbnails:
  - public/motoservice.png
  - public/citiezen.png
  - public/ai-story.png
  - public/project-desk.png

## Git Workflow

```sh
git add .
git commit -m "Update portfolio"
git push
```

If upstream is not set:

```sh
git push --set-upstream origin master
```
  