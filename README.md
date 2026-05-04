# HealthConnect

HealthConnect is a personal healthcare web project that helps users check common symptoms, find nearby care, and browse focused self-care resources from one clean interface.

> HealthConnect provides educational guidance only. It is not a medical diagnosis or a substitute for professional care.

## Features

- Product-style home page with HealthConnect branding
- Symptom checker for 12 listed symptoms
- Severity labels, basic remedies, and emergency warnings
- Nearby care search for hospitals, clinics, pharmacies, emergency care, and diagnostic centers
- Browser location permission flow for hospitals near the user
- Self-care resources restricted to the listed symptoms
- Exact YouTube video links for listed self-care symptoms
- Contact, appointment request preview, and emergency helplines
- Light/dark mode with saved preference
- Responsive layout for desktop and mobile

## Listed Symptoms

- Fever
- Cold
- Headache
- Cough
- Stomach Pain
- Vomiting
- Weakness
- Allergy
- Sore Throat
- Dizziness
- Chest Pain
- Breathing Difficulty

## Tech Stack

- HTML
- CSS
- JavaScript
- Google Maps search/embed links
- YouTube video previews and links

## Screenshots / Demo

Add screenshots or a short demo video after the final UI pass. Suggested captures:

- Home page hero
- Find Care symptom result
- Location-based hospital map
- Self-Care resource search
- Dark mode mobile view

## Limitations

- No backend yet
- No login or saved user history
- No real appointment storage yet
- No real-time medical database
- No AI chatbot in the current version
- API keys should not be exposed in frontend JavaScript

## Future Roadmap

- Backend for protected Google Maps, YouTube, and Gemini API usage
- Gemini-powered chatbot for guided healthcare questions
- Secure appointment booking
- Login and saved profile preferences
- Real doctor consultation or telehealth integration
- Deployment on Netlify, Vercel, or GitHub Pages

## How To Run

Open `index.html` in a browser, or run a local server from this folder:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000/index.html`.

## Final Testing Checklist

- Symptom checker works for all 12 listed symptoms
- Chest Pain and Breathing Difficulty show emergency priority
- Self-Care search shows only listed symptom resources
- Random Self-Care searches show no resources found
- Care search updates the map
- Use my location asks permission and shows nearby hospitals
- Light/dark mode persists across pages
- Home, Find Care, and Self-Care work on mobile
