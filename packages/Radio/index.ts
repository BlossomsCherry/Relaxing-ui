import rRadio from './index.vue'
import type { App } from 'vue'

rRadio.install = (app: App) => {
  app.component(rRadio.name as string, rRadio)
}

export default rRadio
