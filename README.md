# TSK Sound Store - Astro & Gumroad Integration

A modern, audio-focused e-commerce website built with Astro and Gumroad, designed specifically for music producers and sound designers.

## 🎵 Features

- **Modern Astro Framework**: Fast, static-first web development
- **Gumroad Integration**: Secure payment processing and digital product delivery
- **Responsive Design**: Beautiful UI with Tailwind CSS
- **Audio-First Design**: Optimized for music and audio product showcase
- **Zero Cart Complexity**: Direct Gumroad checkout for seamless purchases

## ⚙️ Environment Setup

Create a `.env` file in your project root with your Gumroad API credentials:

```env
# Gumroad API Configuration
GUMROAD_ACCESS_TOKEN=your_gumroad_access_token
PUBLIC_GUMROAD_ACCESS_TOKEN=your_gumroad_access_token
```

Replace `your_gumroad_access_token` with your actual Gumroad API access token.

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
