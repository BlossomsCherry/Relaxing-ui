import rDialog from './index.vue'
import type { App } from 'vue'

rDialog.install = (app: App) => {
  app.component(rDialog.name as string, rDialog)
}

export default rDialog
