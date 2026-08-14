import { defineConfig, type Plugin } from 'vite'

function injectToolbar(): Plugin {
  return {
    name: 'inject-instruckt-toolbar-test',
    transformIndexHtml: {
      order: 'post',
      handler() {
        return [{
          tag: 'script',
          attrs: { type: 'module', src: '/src/injected-toolbar.ts' },
          injectTo: 'body',
        }]
      },
    },
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === '/instruckt-test/annotations' && req.method === 'GET') {
          res.setHeader('Content-Type', 'application/json')
          res.end('[]')
          return
        }
        next()
      })
    },
  }
}

export default defineConfig({
  root: __dirname,
  plugins: [injectToolbar()],
  server: {
    port: 4174,
    strictPort: true,
  },
})
