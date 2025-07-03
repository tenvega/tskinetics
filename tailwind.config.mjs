/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#151515',
        'text-primary': '#FFFFFF',
        'text-secondary': '#B0B0B0',
        'accent': '#FF6B35',
        'border': '#2A2A2A',
      },
      fontFamily: {
        'sans': ['Inter', 'Poppins', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Monaco', 'monospace'],
      },
    },
  },
  plugins: [],
} 