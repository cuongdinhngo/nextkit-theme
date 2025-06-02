// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  ssr: false,
  app: {
    baseURL: '/nextkit-theme/',
  },
  modules: ['vuetify-nuxt-module'],
  css: [
    '@/assets/styles/main.scss',
  ],
  vuetify: {
    moduleOptions: {
      styles: 'sass',
    },
    vuetifyOptions: {
      theme: {
        defaultTheme: 'light',
        themes: {
          light: {
            colors: {
              background: '#FFFFFF',
              white: '#FFFFFF',
              blue: '#0164d3',
              info: '#0164d3', // Blue - for informational messages and elements
              success: '#2cdd9b', // Green - for success states and positive actions
              warning: '#fec500', // Yellow/Orange - for warnings and caution states
              primary: '#316ce8', // Blue - main brand color for primary actions
              accent: '#607df9', // Light Blue/Purple - secondary brand color for accents
              light: '#f4f8fa', // Very Light Gray - for light backgrounds
              dark: '#263238', // Dark Gray/Blue - for dark text and elements
              error: '#ff4d7e', // Pink/Red - for error states and destructive actions
              muted: '#8d97ad', // Medium Gray - for muted/secondary text
              green: '#439691',
              'light-blue': '#5b6987',
              'light-blue-1': '#2d6adf',
              'gray-100': '#e5e7ec',
              'gray-200': '#f3f5f8',
              'gray-300': '#c4c8ce',
              'gray-400': '#c6cbd6',
              'gray-500': '#8d97ad',
              'gray-600': '#3e4555',
              'orange': '#ff6a5b',
              'danger-dark': '#a23131',
              'success-dark': '#1dc8cc',
              'warning-dark': '#dcaf17',
              'primary-light': '#dae5fb',
              'primary-dark': '#345bcb',
              'info-dark': '#2c73cb',
              'red-dark': '#d61f1f',
              'inverse-dark': '#232a37',
              'dark-blue': '3252a2',
              // ==================================== //
              // Lighten Colors
              // ==================================== //
              'success-lighten-5': '#e1f3e5',
              'success-lighten-4': '#f2f9f4',
              'info-lighten-5': '#e5f4fb',
              'warning-lighten-5': '#fdf6e3',
              'error-lighten-5': '#fce2e5',
              'primary-lighten-5': '#e6edfd',
              'accent-lighten-5': '#f4e6fd',
            },
          },
        },
      },
      icons: {
        defaultSet: 'mdi', // Uses Material Design Icons (@mdi/font) for icons like mdi-cart, mdi-magnify
      },
    },
  },
})