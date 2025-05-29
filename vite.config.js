import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Configuração do proxy para se comunicar com seu backend Express
    // Ajuste a porta '3001' se o seu backend rodar em outra porta
    proxy: {
      "/api": {
        // Se suas rotas de backend começam com /api
        target: "http://localhost:3001", // URL do seu servidor backend
        changeOrigin: true, // Necessário para hosts virtuais
        // secure: false, // Descomente se seu backend não usa HTTPS ou tem certificado autoassinado
        // rewrite: (path) => path.replace(/^\/api/, '') // Se precisar remover /api antes de enviar ao backend
      },
    },
  },
});
