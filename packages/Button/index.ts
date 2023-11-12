import rButton from './index.vue'
import type { App } from 'vue'

rButton.install = (app: App) => {
  app.component(rButton.name as string, rButton)
}

export default rButton
