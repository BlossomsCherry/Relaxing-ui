import rSwitch from './index.vue'
import type { App } from 'vue'

rSwitch.install = (app: App) => {
  app.component(rSwitch.name as string, rSwitch)
}

export default rSwitch
