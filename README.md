# KATY OS — Birthday Edition

A premium, developer-inspired interactive birthday website built with React, Vite, Tailwind CSS, Framer Motion and Lucide React.

## 1. Install

```bash
npm install
```

## 2. Run locally

```bash
npm run dev
```

Open the local URL printed by Vite.

## 3. Optional music

Put your own audio file here:

`public/music/birthday.mp3`

Music is NOT autoplayed. The small button in the bottom-right toggles it. If the file is absent, the rest of the site still works.

## 4. Customize

The main birthday message is near the top of `src/App.jsx` in the `message` constant.

Other easy customization points:
- Hero subtitle: `Hero`
- Profile values: `Profile`
- Quest questions: `Quest`
- Analytics values: `Analytics`
- Final message: `Final`

No external images are required.

## 5. Production build

```bash
npm run build
npm run preview
```

## 6. Free deployment

### Vercel
1. Create a GitHub repository and push this project.
2. Import the repository into Vercel.
3. Framework preset: Vite.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Deploy.

### Netlify
1. Push the project to GitHub.
2. Import it into Netlify.
3. Build command: `npm run build`.
4. Publish directory: `dist`.
5. Deploy.

### GitHub Pages
You can also deploy the generated `dist` directory using GitHub Pages. For a Vite project hosted under a repository path, configure the Vite `base` option to match that path before building.

## Hidden Easter Egg

There are two ways to unlock the secret:
- Click the `KATY OS` logo 5 times.
- Type `KATY` on the keyboard.

## Notes

This project intentionally uses CSS/SVG-style UI and generated particles rather than external images, so there are no family photos or stock images to collect.
