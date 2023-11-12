import rNotification from './index.vue'
import { h, render } from 'vue'

const Notification = (options: {
  title?: string
  message?: string
  duration?: number
  type?: 'info' | 'success' | 'error' | 'warn'
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
}) => {
  const title = options.title
  const message = options.message
  const duration = options.duration || 3000
  const type = options.type
  const position = options.position

  //调用h函数把Notification组件渲染成虚拟DOM
  const VNode = h(rNotification, { title, message, type, position })

  //创建一个DOM容器
  const container = document.createElement('div')

  if (container instanceof HTMLDivElement) {
    document.body.appendChild(container)

    //虚拟DOM渲染到真实DOM
    render(VNode, container)

    // 定时销毁
    if (duration !== 0) {
      let timer: any = null

      clearTimeout(timer)

      timer = setTimeout(() => {
        render(null, container)
        document.body.removeChild(container)
      }, duration)
    }
  }
}

export default Notification
