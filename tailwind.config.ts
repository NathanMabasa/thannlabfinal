import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import animatePlugin from 'tailwindcss-animate'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#080808',
        white: '#F5F5F0',
        accent: '#C8FF00',
        mid: '#1A1A1A',
        muted: '#666666',
      },
      fontFamily: {
        syne: ['var(--font-syne)', ...defaultTheme.fontFamily.sans],
        inter: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'hero-h1': ['clamp(4rem, 10vw, 9rem)', { lineHeight: '1.1', fontWeight: '800' }],
        'display-h2': ['clamp(2.5rem, 5vw, 4.5rem)', { lineHeight: '1.2', fontWeight: '700' }],
        'display-h3': ['1.75rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body': ['1.0625rem', { lineHeight: '1.7' }],
        'label': ['0.75rem', { lineHeight: '1.3', letterSpacing: '0.15em' }],
      },
      spacing: {
        'gutter': 'clamp(1.25rem, 5vw, 5vw)',
      },
      borderRadius: {
        'sharp': '4px',
      },
      maxWidth: {
        'container': '1400px',
      },
      animation: {
        'marquee': 'marquee 40s linear infinite',
        'marquee-reverse': 'marquee-reverse 40s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      borderColor: {
        'border-subtle': 'rgba(255, 255, 255, 0.08)',
      },
    },
  },
  plugins: [animatePlugin],
}

export default config
