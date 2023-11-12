import rInput from './index.vue'
import type { App } from 'vue'

rInput.install = (app: App) => {
  app.component(rInput.name as string, rInput)
}

export default rInput
