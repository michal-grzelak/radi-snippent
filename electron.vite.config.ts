import { resolve } from 'path'
import { defineConfig } from 'electron-vite'
import react from '@vitejs/plugin-react'
import pkg from './package.json'

const packages = [
  ...Object.keys('dependencies' in pkg ? (pkg.dependencies as Record<string, unknown>) : {})
]

export default defineConfig({
  main: {
    build: {
      externalizeDeps: {
        exclude: packages
      }
    }
  },
  preload: {
    build: {
      externalizeDeps: {
        exclude: packages
      }
    }
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src')
      }
    },
    plugins: [react()]
  }
})
