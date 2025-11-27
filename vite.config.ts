import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'

const config = defineConfig({
  plugins: [
    // this is the plugin that enables path aliases
    viteTsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tailwindcss(),
    tanstackStart({
prerender: {
        enabled: true,
        autoSubfolderIndex: true,
        crawlLinks: true,
      },
      pages: [
        {
          path: "/404",
          prerender: { enabled: true, outputPath: "/404.html" },
        },
        // {
        //   path: "/this-route-doesnt-exist",
        //   prerender: {enabled: true}
        // }
      ],
    }),
    viteReact(),
  ],
})

export default config
