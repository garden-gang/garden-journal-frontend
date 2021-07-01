import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({

server:{
  proxy: {
    '^/api.*': {
      target: 'http://localhost:8080',
      changeOrigin: true,
      secure: false,
      ws: true,
    }
  }
},

  plugins: [vue()],

})
