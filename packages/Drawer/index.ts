import rDrawer from './index.vue'
import type { App } from 'vue'

rDrawer.install = (app: App) => {
  app.component(rDrawer.name as string, rDrawer)
}

export default rDrawer
