import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#4F46E5",
          "secondary": "#64748B",
          "accent": "#06B6D4",
          "neutral": "#1E293B",
          "base-100": "#F8FAFC",
          "info": "#2563EB",
          "success": "#22C55E",
          "warning": "#FACC15",
          "error": "#DC2626",
        },
      },
    ]
  },
}

