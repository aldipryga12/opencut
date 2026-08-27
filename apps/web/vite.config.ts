import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { cloudflare } from '@cloudflare/vite-plugin'
import { nitro } from 'nitro/vite'

const isVercel = Boolean(process.env.VERCEL)

const config = defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    devtools(),
    ...(!isVercel ? [cloudflare({ viteEnvironment: { name: 'ssr' } })] : []),
    tailwindcss(),
    tanstackStart(),
    viteReact(),
    ...(isVercel ? [nitro()] : []),
  ],
})

export default config
