import { expect, fixture, html, oneEvent } from '@open-wc/testing'
import '../index'

describe('<q-button />', async () => {
  // 测试按钮渲染是否正确，包括默认属性
  it('renders with default properties', async () => {
    const el = await fixture(html`<q-button>Button</q-button>`)

    expect(el.type).to.equal('primary')
    expect(el.size).to.equal('medium')
    expect(el.disabled).to.be.false
    expect(el.loading).to.be.false
    expect(el.icon).to.equal('')

    const button = el.shadowRoot.querySelector('button')
    expect(button).to.exist
    expect(button.classList.contains('q-button')).to.be.true
    expect(button.classList.contains('q-button-primary')).to.be.true
    expect(button.classList.contains('q-button-medium')).to.be.true
    expect(button.textContent.trim()).to.equal('Button')
  })

  // 测试不同类型（primary、secondary、danger、text）的按钮样式是否正确
  it('renders with different types', async () => {
    const types = ['primary', 'secondary', 'danger', 'text']

    for (const type of types) {
      const el = await fixture(html`<q-button type=${type}>Button</q-button>`)
      const button = el.shadowRoot.querySelector('button')

      expect(el.type).to.equal(type)
      expect(button.classList.contains(`q-button-${type}`)).to.be.true
    }
  })

  // 测试不同尺寸（large、medium、small）的按钮样式是否正确
  it('renders with different sizes', async () => {
    const sizes = ['large', 'medium', 'small']

    for (const size of sizes) {
      const el = await fixture(html`<q-button size=${size}>Button</q-button>`)
      const button = el.shadowRoot.querySelector('button')

      expect(el.size).to.equal(size)
      expect(button.classList.contains(`q-button-${size}`)).to.be.true
    }
  })

  // 测试禁用状态是否正常工作，点击禁用按钮不应触发事件
  it('supports disabled state', async () => {
    const el = await fixture(html`<q-button disabled>Button</q-button>`)
    const button = el.shadowRoot.querySelector('button')

    expect(el.disabled).to.be.true
    expect(button.classList.contains('q-button-disabled')).to.be.true
    expect(button.hasAttribute('disabled')).to.be.true

    // 模拟点击事件
    let clicked = false
    el.addEventListener('click', () => {
      clicked = true
    })

    button.click()
    expect(clicked).to.be.false
  })

  // 测试加载状态是否正常工作
  it('supports loading state', async () => {
    const el = await fixture(html`<q-button loading>Button</q-button>`)
    const button = el.shadowRoot.querySelector('button')

    expect(el.loading).to.be.true
    expect(button.classList.contains('q-button-loading')).to.be.true

    // 检查是否有加载图标
    const loadingIcon = button.querySelector('.q-button-loading-icon')
    expect(loadingIcon).to.exist

    // 模拟点击事件，加载状态下不应触发事件
    let clicked = false
    el.addEventListener('click', () => {
      clicked = true
    })

    button.click()
    expect(clicked).to.be.false
  })

  // 测试图标是否正确显示
  it('renders with icon', async () => {
    const iconClass = 'icon-test'
    const el = await fixture(html`<q-button icon=${iconClass}>Button</q-button>`)
    const button = el.shadowRoot.querySelector('button')

    expect(el.icon).to.equal(iconClass)
    expect(button.classList.contains('q-button-with-icon')).to.be.true

    // 检查是否有图标元素
    const iconElement = button.querySelector(`.q-button-icon.${iconClass}`)
    expect(iconElement).to.exist
  })

  // 测试点击事件是否正常触发
  it('emits click event when clicked', async () => {
    const el = await fixture(html`<q-button>Button</q-button>`)
    const button = el.shadowRoot.querySelector('button')

    // 设置监听事件
    setTimeout(() => button.click())
    const { detail } = await oneEvent(el, 'click')

    // 检查事件是否包含正确的详情
    expect(detail).to.not.be.undefined
    expect(detail.event).to.not.be.undefined
  })

  // 测试按钮内容（slot）
  it('renders slot content', async () => {
    const el = await fixture(html`<q-button><span class="test-content">Custom Content</span></q-button>`)
    const slot = el.shadowRoot.querySelector('slot')

    expect(slot).to.exist
    const assignedNodes = slot.assignedNodes()
    expect(assignedNodes.length).to.be.greaterThan(0)
    expect(assignedNodes[0].textContent).to.include('Custom Content')
  })
})
