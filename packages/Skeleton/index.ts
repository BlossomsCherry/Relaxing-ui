import rSkeleton from './index.vue'
import rSkeletonItem from './r-skeleton-item.vue'
import type { App } from 'vue'

rSkeleton.install = (app: App) => {
  app.component(rSkeleton.name as string, rSkeleton)
  app.component(rSkeletonItem.name as string, rSkeletonItem)
}

export default rSkeleton
