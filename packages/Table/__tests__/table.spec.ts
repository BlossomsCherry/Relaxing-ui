import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import RTable from '../index.vue' // 请根据你的文件路径修改

describe('RTable组件', () => {
  const testData = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 35 }
  ]

  it('渲染表格标题行', () => {
    const wrapper = mount(RTable, {
      props: {
        data: testData
      }
    })
    const thElements = wrapper.findAll('th')
    expect(thElements.length).toBe(3) // 应该渲染3个表头单元格
    expect(thElements[0].text()).toBe('id')
    expect(thElements[1].text()).toBe('name')
    expect(thElements[2].text()).toBe('age')
  })

  it('渲染表格数据行', () => {
    const wrapper = mount(RTable, {
      props: {
        data: testData
      }
    })
    const tdElements = wrapper.findAll('td')
    expect(tdElements.length).toBe(9) // 应该渲染9个数据单元格（3行 * 3列）
    expect(tdElements[0].text()).toBe('1')
    expect(tdElements[1].text()).toBe('Alice')
    expect(tdElements[2].text()).toBe('25')
  })

  it('应用斑马纹样式', () => {
    const wrapper = mount(RTable, {
      props: {
        data: testData,
        stripe: true
      }
    })
    const trElements = wrapper.findAll('tbody tr')
    expect(trElements.length).toBe(3) // 应该有3行数据
    expect(trElements[0].element.style.backgroundColor).toBe('rgb(250, 250, 250)')
    expect(trElements[1].element.style.backgroundColor).toBe('rgb(255, 255, 255)')
  })

  it('应用边框样式', () => {
    const wrapper = mount(RTable, {
      props: {
        data: testData,
        border: true
      }
    })
    const tableElement = wrapper.find('table')
    expect(tableElement.classes()).toContain('border')
  })

  it('应用高度样式', () => {
    const wrapper = mount(RTable, {
      props: {
        data: testData,
        height: 200
      }
    })
    const tableElement = wrapper.find('.r-table')
    expect(tableElement.element.style.height).toBe('200px')
  })

  it('应用最大高度样式', () => {
    const wrapper = mount(RTable, {
      props: {
        data: testData,
        maxHeight: 300
      }
    })
    const tableElement = wrapper.find('.r-table')
    expect(tableElement.element.style.maxHeight).toBe('300px')
  })
})
