# Kadari Saikumar — Portfolio (React + Vite)

## Run locally
```
npm install
npm run dev
```

## Add your photo
Drop your photo into `src/assets/profile.jpg` (must be named exactly `profile.jpg`).
It swaps in automatically over the "KS" placeholder in the hero section — no code changes needed.

## Add your resume
Put your resume PDF in `public/Kadari_Saikumar_Resume.pdf`. The "Résumé ↓" buttons already
link to `/Kadari_Saikumar_Resume.pdf`.

## Contact form (emails you on submit)
The form in `src/components/Contact.jsx` posts to your existing Formspree endpoint
(`https://formspree.io/f/xyyrlqop`), which emails every submission straight to your inbox —
free tier, no backend or serverless function needed, and it works out of the box on a static
Vercel deploy.

**Before it works, confirm on formspree.io:**
1. Log into your Formspree account and make sure this form ID belongs to you and is verified.
2. Formspree sends a verification email the first time someone submits a *new* form — confirm
   that email if you see it, or submissions won't be forwarded.
3. Free tier allows 50 submissions/month, which is plenty for a portfolio contact form.

If you'd rather not depend on Formspree at all, swap the `FORM_ENDPOINT` in `Contact.jsx` for
your own EmailJS service ID, or add a Vercel serverless function under `/api` later — the form
UI and submit handling won't need to change either way.

## Deploy to Vercel
1. Push this folder to a GitHub repo.
2. Import the repo in Vercel — it auto-detects Vite (`npm run build`, output dir `dist`).
3. Deploy. No environment variables required.
