import rTabs from './index.vue'
import rPane from './tab-pane.vue'
import type { App } from 'vue'

rTabs.install = (app: App) => {
  app.component(rTabs.name as string, rTabs)
  app.component(rPane.name as string, rPane)
}

export default rTabs
