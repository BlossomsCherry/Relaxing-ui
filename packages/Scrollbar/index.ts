import rScrollbar from './index.vue'
import type { App } from 'vue'

rScrollbar.install = (app: App<Element>) => {
  app.component(rScrollbar.name as string, rScrollbar)
}

export default rScrollbar
