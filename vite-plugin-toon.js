import { readFileSync } from 'fs'
import { decode } from '@toon-format/toon'

export function toonPlugin() {
  return {
    name: 'vite-plugin-toon',
    load(id) {
      if (!id.endsWith('.toon')) return null
      const content = readFileSync(id, 'utf-8')
      const data = decode(content)
      return `export default ${JSON.stringify(data)}`
    },
    handleHotUpdate({ file, server }) {
      if (file.endsWith('.toon')) {
        server.ws.send({ type: 'full-reload' })
      }
    },
  }
}
