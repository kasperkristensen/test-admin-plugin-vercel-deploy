import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    define: {
        __BASE__: JSON.stringify("/"),
        __MEDUSA_BACKEND_URL__: JSON.stringify("http://localhost:9000"),
    },
})