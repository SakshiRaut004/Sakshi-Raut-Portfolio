# Sakshi Raut — Portfolio

A responsive React + Vite portfolio with a space / field-notes visual direction, subtle motion, project cards, skills, an experience timeline, linked credentials, and contact links.

## Run locally

1. Install Node.js (LTS) from https://nodejs.org/
2. Extract this folder.
3. Open a terminal inside the folder and run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the local URL Vite prints (usually `http://localhost:5173`).

To check the production build:

```bash
npm run build
npm run preview
```

## Before publishing — customize these

- `src/App.jsx`: verify `profile.email`, project URLs, project descriptions, credential details, and any other personal details before publishing.
- The resume, professional portrait, and credential files are imported from `src/sources`. Replace those files or update their imports in `src/App.jsx` when the assets change.
- Credential titles and issuer details are listed in the `credentials` array in `src/App.jsx`; verify them against the original documents.
- Add real screenshots / deployed demo URLs / GitHub repositories for each project. Do not leave the example project links as final links.
- Check all claims, dates, technologies, and education details before publishing.
- Consider adding one strong case study with the problem, your role, process, technical choices, challenges, and outcome.
- The Power BI card is intentionally marked as a case study to complete. Replace its text and status only after adding your real dataset, business question, DAX measures, and verified findings.

## Design choices

- React 19 + Vite
- Framer Motion for reveal/entrance animations
- Lucide React icons
- Custom CSS for responsive layout, orbital visuals, and project mockups
- Reduced-motion accessibility support

## Suggested next build steps

1. Replace the placeholders and verify factual details.
2. Add real project screenshots and a project detail page for your strongest project.
3. Add issuer dates and verification URLs to credentials where available.
4. Deploy on Vercel or Netlify and connect a custom domain if available.
