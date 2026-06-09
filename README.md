# Insect ID Lens — Legal Site

Static legal pages for the **Insect ID Lens** app, built with Next.js (App Router) and deployed on Vercel.

## Pages

| Route | Page |
|-------|------|
| `/` | Index |
| `/policy` | Privacy Policy |
| `/terms` | Terms of Use |
| `/delete-account` | Account Deletion instructions |

Page content lives as Markdown in [`content/`](content/) and is rendered with `react-markdown`. To update a document, edit the corresponding `.md` file.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push this repo to GitHub.
2. In Vercel, **New Project → Import** this repository.
3. Framework preset is auto-detected as **Next.js** — no configuration needed.
4. Deploy.

Contact: support.winxx@gmail.com
