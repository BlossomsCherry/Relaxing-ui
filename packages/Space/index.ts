import rSpace from './index.vue'
import type { App } from 'vue'

rSpace.install = (app: App) => {
  app.component(rSpace.name as string, rSpace)
}

export default rSpace
