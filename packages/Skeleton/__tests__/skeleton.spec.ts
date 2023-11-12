import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import RSkeleton from '../index.vue' // 替换成你的组件路径
import RSkeletonItem from '../r-skeleton-item.vue' // 替换成你的组件路径

describe('RSkeleton组件', () => {
  it('默认渲染3行骨架项', () => {
    const wrapper = mount(RSkeleton)
    const skeletonItems = wrapper.findAll('.r-skeleton-item')
    expect(skeletonItems.length).toBe(4) // 默认的3行 + 1行标题
  })

  it('动画类应该存在于"r-skeleton"元素上', () => {
    const wrapper = mount(RSkeleton, {
      props: {
        animated: true
      }
    })
    const skeleton = wrapper.find('.r-skeleton')
    expect(skeleton.classes()).toContain('is-animated')
  })

  it('指定行数应该渲染相应数量的骨架项', () => {
    const wrapper = mount(RSkeleton, {
      props: {
        rows: 5
      }
    })
    const skeletonItems = wrapper.findAll('.r-skeleton-item')
    expect(skeletonItems.length).toBe(6) // 指定的5行 + 1行标题
  })
})

describe('RSkeletonItem组件', () => {
  it('默认情况下应该渲染"p"类型的骨架项', () => {
    const wrapper = mount(RSkeletonItem)
    const skeletonItem = wrapper.find('.r-skeleton-item')
    expect(skeletonItem.classes()).toContain('r-skeleton-p')
  })

  it('指定类型应该应用相应的类', () => {
    const wrapper = mount(RSkeletonItem, {
      props: {
        variant: 'text'
      }
    })
    const skeletonItem = wrapper.find('.r-skeleton-item')
    expect(skeletonItem.classes()).toContain('r-skeleton-text')
  })

  it('插槽内容应该被渲染', () => {
    const wrapper = mount(RSkeletonItem, {
      slots: {
        default: '骨架项内容'
      }
    })
    expect(wrapper.text()).toBe('骨架项内容')
  })
})
