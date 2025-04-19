import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      fontFamily: {
        monoton: ['"Monoton"', 'cursive'],
      },
    },
  },

  plugins: [
    react(),
    tailwindcss()
  ],
})
