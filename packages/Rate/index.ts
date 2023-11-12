import rRate from './index.vue'
import type { App } from 'vue'

rRate.install = (app: App) => {
  app.component(rRate.name as string, rRate)
}

export default rRate
