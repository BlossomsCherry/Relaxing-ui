import { h, render } from 'vue'
import rConfirm from './index.vue'

const divNode = h('div', { class: 'r-confirm-container' })
const container = document.createElement('div')
document.body.appendChild(container)

render(divNode, container)

interface optionsType {
  title?: string
  text?: string
  showIcon?: boolean
  icon?: string
  confirmText?: string
  cancelText?: string
  confirmShow?: boolean
  cancelShow?: boolean
  closeShow?: string
  customClass?: string
}

const Confirm = (options: optionsType) => {
  const title = options.title || ''
  const text = options.text || ''
  const showIcon = options.showIcon as boolean
  const icon = options.icon || 'm-icon-warning'
  const confirmText = options.confirmText || 'OK'
  const cancelText = options.cancelText || 'Cancel'
  const confirmShow = options.confirmShow as boolean
  const cancelShow = options.cancelShow as boolean
  const closeShow = options.closeShow as string
  const customClass = options.customClass || ''

  if (typeof document !== 'undefined') {
    document.body.style.overflow = 'hidden'
  }

  return new Promise((resolve, reject) => {
    const confirmCallback = () => {
      resolve(() => {})
      render(null, container as HTMLDivElement)
      if (typeof document !== 'undefined') {
        document.body.style.overflow = 'initial' //用于将元素的滚动行为恢复到其初始值，从而取消对 overflow 属性的设置。
      }
    }

    const cancelCallback = () => {
      reject()
      render(null, container as HTMLDivElement)
      if (typeof document !== 'undefined') {
        document.body.style.overflow = 'initial'
      }
    }

    const closeCallBack = () => {
      render(null, container as HTMLDivElement)
      if (typeof document !== 'undefined') {
        document.body.style.overflow = 'initial'
      }
    }

    const VNode = h(rConfirm, {
      title,
      text,
      icon,
      showIcon,
      confirmText,
      cancelText,
      confirmShow,
      cancelShow,
      closeShow,
      customClass,
      confirmCallback,
      cancelCallback,
      closeCallBack
    })

    render(VNode, container as HTMLDivElement)
  })
}
export default Confirm
