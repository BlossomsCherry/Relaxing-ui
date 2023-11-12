import rTree from './index.vue'
import type { App } from 'vue'

rTree.install = (app: App) => {
  app.component(rTree.name as string, rTree)
}

export default rTree
