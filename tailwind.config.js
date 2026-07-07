import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // ── Stitch: Architect Portfolio System color tokens ──
      colors: {
        // Surface / Background
        'ap-bg':             'var(--ap-bg)',
        'ap-surface':        'var(--ap-surface)',
        'ap-surface-dim':    'var(--ap-surface-dim)',
        'ap-surface-bright': 'var(--ap-surface-bright)',
        'ap-surface-low':    'var(--ap-surface-low)',
        'ap-surface-mid':    'var(--ap-surface-mid)',
        'ap-surface-high':   'var(--ap-surface-high)',
        'ap-surface-highest':'var(--ap-surface-highest)',
        // On-surface
        'ap-on-surface':         'var(--ap-on-surface)',
        'ap-on-surface-variant': 'var(--ap-on-surface-variant)',
        // Outline
        'ap-outline':         'var(--ap-outline)',
        'ap-outline-variant': 'var(--ap-outline-variant)',
        // Primary (near-black)
        'ap-primary':           'var(--ap-primary)',
        'ap-on-primary':        'var(--ap-on-primary)',
        'ap-primary-container': 'var(--ap-primary-container)',
        'ap-primary-fixed':     'var(--ap-primary-fixed)',
        'ap-primary-fixed-dim': 'var(--ap-primary-fixed-dim)',
        // Secondary (indigo)
        'ap-secondary':           'var(--ap-secondary)',
        'ap-on-secondary':        'var(--ap-on-secondary)',
        'ap-secondary-container': 'var(--ap-secondary-container)',
        'ap-secondary-fixed':     'var(--ap-secondary-fixed)',
        'ap-secondary-fixed-dim': 'var(--ap-secondary-fixed-dim)',
        'ap-on-secondary-fixed-variant': 'var(--ap-on-secondary-fixed-variant)',
        // Tertiary (emerald)
        'ap-tertiary':            'var(--ap-tertiary)',
        'ap-tertiary-container':  'var(--ap-tertiary-container)',
        'ap-on-tertiary-container': 'var(--ap-on-tertiary-container)',
        'ap-tertiary-fixed':      'var(--ap-tertiary-fixed)',
        // Error
        'ap-error':           'var(--ap-error)',
        'ap-error-container': 'var(--ap-error-container)',
      },
      // ── Stitch typography ──
      fontFamily: {
        'ap-display':  ['Inter', 'sans-serif'],
        'ap-body':     ['Inter', 'sans-serif'],
        'ap-mono':     ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        'ap-display':      ['48px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'ap-display-mob':  ['36px', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' }],
        'ap-headline-lg':  ['30px', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' }],
        'ap-headline-md':  ['24px', { lineHeight: '1.4', letterSpacing: '-0.01em', fontWeight: '600' }],
        'ap-body-lg':      ['18px', { lineHeight: '1.6' }],
        'ap-body-md':      ['16px', { lineHeight: '1.6' }],
        'ap-label-mono':   ['14px', { lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: '500' }],
        'ap-caption':      ['12px', { lineHeight: '1.4', letterSpacing: '0.01em', fontWeight: '500' }],
      },
      // ── Stitch spacing scale ──
      spacing: {
        'ap-xs':  '4px',
        'ap-sm':  '8px',
        'ap-md':  '16px',
        'ap-lg':  '24px',
        'ap-xl':  '48px',
        'ap-xxl': '96px',
      },
      // ── Stitch border-radius ──
      borderRadius: {
        'ap-sm': '0.125rem',
        'ap-md': '0.25rem',
        'ap-lg': '0.5rem',
        'ap-xl': '0.75rem',
      },
      // ── Max-width token ──
      maxWidth: {
        'ap': '1120px',
      },
      // ── Box-shadow tokens ──
      boxShadow: {
        'ap-card':       '0 4px 12px rgba(0,0,0,0.03)',
        'ap-card-hover': '0 8px 24px rgba(0,0,0,0.06)',
      },
      // ── Keyframes for subtle animations ──
      keyframes: {
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.4' },
        },
      },
      animation: {
        'fade-up':   'fade-up 0.8s ease-out forwards',
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ['light', 'dark'],
  },
}


