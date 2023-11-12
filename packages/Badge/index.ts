import rBadge from './index.vue'
import type { App } from 'vue'

rBadge.install = (app: App) => {
  app.component(rBadge.name as string, rBadge)
}

export default rBadge
