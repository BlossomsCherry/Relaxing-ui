import rCol from './index.vue'
import type { App } from 'vue'

rCol.install = (app: App<Element>) => {
  app.component(rCol.name, rCol)
}

export default rCol
