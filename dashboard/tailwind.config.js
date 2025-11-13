/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors
        lime: {
          DEFAULT: '#D4E157',
          dark: '#C0D944',
          light: '#E5F186',
        },
        // Neutral colors
        neutral: {
          white: '#FFFFFF',
          black: '#1A1A1A',
          gray: {
            900: '#2D2D2D',
            700: '#616161',
            500: '#9E9E9E',
            300: '#E0E0E0',
            100: '#F5F5F5',
          }
        },
        // Accent colors
        purple: {
          DEFAULT: '#6366F1',
          light: '#A5B4FC',
        },
        // Semantic colors
        success: '#C0D944',
        error: '#EF4444',
        warning: '#F59E0B',
        info: '#6366F1',
        // Integration colors
        slack: '#E01E5A',
        googleMeet: '#4285F4',
        github: '#24292E',
        stripe: '#635BFF',
        visa: '#1A1F71',
        paypal: '#003087',
        mastercard: '#EB001B',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['Fira Code', 'Monaco', 'Courier New', 'monospace'],
      },
      fontSize: {
        'hero': ['48px', { lineHeight: '56px', fontWeight: '700' }],
        'h1': ['32px', { lineHeight: '40px', fontWeight: '700' }],
        'h2': ['24px', { lineHeight: '32px', fontWeight: '600' }],
        'h3': ['20px', { lineHeight: '28px', fontWeight: '600' }],
        'h4': ['18px', { lineHeight: '24px', fontWeight: '600' }],
        'body': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '20px', fontWeight: '400' }],
        'caption': ['12px', { lineHeight: '16px', fontWeight: '400' }],
        'overline': ['11px', { lineHeight: '16px', fontWeight: '600', letterSpacing: '0.5px' }],
      },
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '7': '28px',
        '8': '32px',
        '10': '40px',
        '12': '48px',
        '16': '64px',
        '20': '80px',
      },
      borderRadius: {
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '20px',
        '2xl': '24px',
        '3xl': '32px',
        'full': '9999px',
      },
      boxShadow: {
        'sm': '0px 1px 2px rgba(0, 0, 0, 0.04), 0px 1px 3px rgba(0, 0, 0, 0.06)',
        'md': '0px 2px 4px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.06)',
        'lg': '0px 4px 8px rgba(0, 0, 0, 0.04), 0px 8px 16px rgba(0, 0, 0, 0.08)',
        'xl': '0px 8px 16px rgba(0, 0, 0, 0.06), 0px 12px 24px rgba(0, 0, 0, 0.10)',
        'card': '0px 2px 8px rgba(0, 0, 0, 0.08), 0px 4px 12px rgba(0, 0, 0, 0.04)',
        'card-hover': '0px 4px 12px rgba(0, 0, 0, 0.10), 0px 8px 20px rgba(0, 0, 0, 0.06)',
        'button': '0px 1px 2px rgba(0, 0, 0, 0.06)',
        'dropdown': '0px 4px 16px rgba(0, 0, 0, 0.12)',
        'modal': '0px 12px 32px rgba(0, 0, 0, 0.16)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.4s ease-out',
        'scale-in': 'scale-in 0.3s ease-out',
      },
    },
  },
  plugins: [],
}
