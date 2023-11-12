import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import RDropdown from '../index.vue'

describe('RDropdown组件', () => {
  it('默认触发方式为hover', async () => {
    const wrapper = mount(RDropdown)
    const dropdownDefaultMenu = wrapper.find('.r-dropdown-default-menu')
    await dropdownDefaultMenu.trigger('mouseenter')
    expect(wrapper.emitted().enterShow).toBeTruthy()
  })

  it('点击下拉菜单切换显示状态', async () => {
    const wrapper = mount(RDropdown)
    const dropdownDefaultMenu = wrapper.find('.r-dropdown-default-menu')
    await dropdownDefaultMenu.trigger('click')
    expect(wrapper.emitted().clickShow).toBeTruthy()
  })

  it('点击下拉菜单项时隐藏下拉菜单', async () => {
    const wrapper = mount(RDropdown, {
      props: {
        options: [{ label: 'Option 1' }]
      }
    })
    const dropdownDefaultMenu = wrapper.find('.r-dropdown-default-menu')
    const dropdownListItem = wrapper.find('.r-dropdown-list-item')
    await dropdownDefaultMenu.trigger('click')
    await dropdownListItem.trigger('click')
    expect(wrapper.emitted().change).toBeTruthy()
  })

  it('标题默认为"下拉菜单"', () => {
    const wrapper = mount(RDropdown)
    const title = wrapper.find('.r-dropdown-default-menu span')
    expect(title.text()).toBe('下拉菜单')
  })

  it('自定义标题', () => {
    const wrapper = mount(RDropdown, {
      props: {
        title: '自定义标题'
      }
    })
    const title = wrapper.find('.r-dropdown-default-menu span')
    expect(title.text()).toBe('自定义标题')
  })

  it('下拉菜单显示时，箭头应为向上', async () => {
    const wrapper = mount(RDropdown)
    const dropdownDefaultMenu = wrapper.find('.r-dropdown-default-menu')
    await dropdownDefaultMenu.trigger('mouseenter')
    const arrowUp = wrapper.find('.m-icon-arrow-up-bold')
    expect(arrowUp.exists()).toBe(true)
  })

  it('下拉菜单隐藏时，箭头应为向下', async () => {
    const wrapper = mount(RDropdown)
    const dropdownDefaultMenu = wrapper.find('.r-dropdown-default-menu')
    await dropdownDefaultMenu.trigger('mouseenter')
    await dropdownDefaultMenu.trigger('mouseleave')
    const arrowDown = wrapper.find('.m-icon-arrow-down-bold')
    expect(arrowDown.exists()).toBe(true)
  })
})
