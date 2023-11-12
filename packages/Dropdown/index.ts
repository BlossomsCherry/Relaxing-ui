import rDropdown from './index.vue'
import type { App } from 'vue'

rDropdown.install = (app: App) => {
  app.component(rDropdown.name as string, rDropdown)
}

export default rDropdown
