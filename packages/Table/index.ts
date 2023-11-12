import rTable from './index.vue'
import type { App } from 'vue'

rTable.install = (app: App) => {
  app.component(rTable.name as string, rTable)
}

export default rTable
