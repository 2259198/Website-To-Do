import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace 'your-repo-name' with your GitHub repository name
export default defineConfig({
  base: '/Website-To-Do/',
  plugins: [react()],
})
