/** @type {import('tailwindcss').Config} */
export default {
  darkMode: [ 'class' ],
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        theme: {
          background: 'rgb(var(--theme-background))',
          foreground: 'rgb(var(--theme-foreground))',
          accent: 'rgb(var(--theme-accent))',
          'accent-secondary': 'rgb(var(--theme-accent-secondary))',
          border: 'rgb(var(--theme-border))',
          'background-two': 'rgb(var(--theme-background-two))',
          'foreground-two': 'rgb(var(--theme-foreground-two))',
          'accent-two': 'rgb(var(--theme-accent-two))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      },
      fontFamily: {
        NeueMaksima: [ 'neue-maksima', 'neue-maksima-light', 'sans-serif' ],
        NeueMaksimaLight: [ 'neue-maksima-light', 'neue-maksima', 'sans-serif' ]
      },
      keyframes: {
        expand: {
          '0%': { maxWidth: '0' },
          '100%': { maxWidth: '100%' }
        },
        shrink: {
          '0%': { maxWidth: '100%' },
          '100%': { maxWidth: '0' }
        }
      },
      animation: {
        'expand-once': 'expand 2.5s forwards',
        'shrink': 'shrink 0.5s'
      }
    }
  },
  plugins: [ require('tailwindcss-animate') ]
}
