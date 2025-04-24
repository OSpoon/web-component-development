import { expect, fixture, html } from '@open-wc/testing'
import '../index'

describe('<q-card />', async () => {
  // 测试卡片基本渲染功能，包括默认属性
  it('renders with default properties', async () => {
    const el = await fixture(html`<q-card>Card Content</q-card>`)

    expect(el.title).to.equal('')
    expect(el.shadow).to.equal('light')
    expect(el.bordered).to.be.true
    expect(el.radius).to.equal(8)
    expect(el.loading).to.be.false
    expect(el.headerImage).to.equal('')

    const card = el.shadowRoot.querySelector('.q-card')
    expect(card).to.exist
    expect(card.classList.contains('q-card')).to.be.true
    expect(card.classList.contains('q-card-shadow-light')).to.be.true
    expect(card.classList.contains('q-card-bordered')).to.be.true

    // 验证内容区域
    const content = el.shadowRoot.querySelector('.q-card-content')
    expect(content).to.exist
    expect(content.textContent).to.include('Card Content')
  })

  // 测试标题属性是否正常工作
  it('renders with title', async () => {
    const title = 'Card Title'
    const el = await fixture(html`<q-card title=${title}>Card Content</q-card>`)
    const cardTitle = el.shadowRoot.querySelector('.q-card-title')

    expect(el.title).to.equal(title)
    expect(cardTitle).to.exist
    expect(cardTitle.textContent).to.equal(title)
  })

  // 测试不同阴影程度（light、medium、dark、none）的卡片样式是否正确
  it('renders with different shadow values', async () => {
    const shadows = ['light', 'medium', 'dark', 'none']

    for (const shadowType of shadows) {
      const el = await fixture(html`<q-card shadow=${shadowType}>Card Content</q-card>`)
      const card = el.shadowRoot.querySelector('.q-card')

      expect(el.shadow).to.equal(shadowType)
      expect(card.classList.contains(`q-card-shadow-${shadowType}`)).to.be.true
    }
  })

  // 测试边框属性是否正常工作
  it('supports bordered property', async () => {
    // 有边框的卡片（默认）
    const borderedCard = await fixture(html`<q-card>Card Content</q-card>`)
    expect(borderedCard.bordered).to.be.true
    expect(borderedCard.shadowRoot.querySelector('.q-card').classList.contains('q-card-bordered')).to.be.true

    // 无边框的卡片
    const borderlessCard = await fixture(html`<q-card bordered=${false}>Card Content</q-card>`)
    expect(borderlessCard.bordered).to.be.false
    expect(borderlessCard.shadowRoot.querySelector('.q-card').classList.contains('q-card-bordered')).to.be.false
  })

  // 测试圆角属性是否正常工作
  it('supports radius property', async () => {
    const radius = 16
    const el = await fixture(html`<q-card radius=${radius}>Card Content</q-card>`)
    const card = el.shadowRoot.querySelector('.q-card')

    expect(el.radius).to.equal(radius)
    expect(card.style.borderRadius).to.equal(`${radius}px`)
  })

  // 测试加载状态是否正常工作
  it('supports loading state', async () => {
    const el = await fixture(html`<q-card loading>Card Content</q-card>`)
    const card = el.shadowRoot.querySelector('.q-card')

    expect(el.loading).to.be.true
    expect(card.classList.contains('q-card-is-loading')).to.be.true

    // 检查是否有加载遮罩和加载图标
    const loadingMask = el.shadowRoot.querySelector('.q-card-loading-mask')
    expect(loadingMask).to.exist
    const loadingSpinner = el.shadowRoot.querySelector('.q-card-loading-spinner')
    expect(loadingSpinner).to.exist
  })

  // 测试头部图片是否正常显示
  it('renders with header image', async () => {
    const imageUrl = 'https://example.com/image.jpg'
    const el = await fixture(html`<q-card headerImage=${imageUrl}>Card Content</q-card>`)

    expect(el.headerImage).to.equal(imageUrl)

    const headerImage = el.shadowRoot.querySelector('.q-card-header-image')
    expect(headerImage).to.exist

    const img = headerImage.querySelector('img')
    expect(img).to.exist
    expect(img.getAttribute('src')).to.equal(imageUrl)
    expect(img.getAttribute('alt')).to.equal('card header')
  })

  // 测试内容区域的slot功能
  it('renders default slot content', async () => {
    const el = await fixture(html`<q-card><span class="test-content">Custom Content</span></q-card>`)
    const contentSlot = el.shadowRoot.querySelector('.q-card-content slot')

    expect(contentSlot).to.exist
    const assignedNodes = contentSlot.assignedNodes()
    expect(assignedNodes.length).to.be.greaterThan(0)
    expect(assignedNodes[0].textContent).to.include('Custom Content')
  })

  // 测试底部操作区域的slot功能
  it('renders footer slot content', async () => {
    const el = await fixture(html`
      <q-card>
        Card Content
        <div slot="footer" class="test-footer">Footer Content</div>
      </q-card>
    `)
    const footerSlot = el.shadowRoot.querySelector('.q-card-footer slot[name="footer"]')

    expect(footerSlot).to.exist
    const assignedNodes = footerSlot.assignedNodes()
    expect(assignedNodes.length).to.be.greaterThan(0)
    expect(assignedNodes[0].textContent).to.include('Footer Content')
  })

  // 测试没有标题和头部图片时，头部不渲染
  it('does not render header when no title and header image', async () => {
    const el = await fixture(html`<q-card>Card Content</q-card>`)
    const header = el.shadowRoot.querySelector('.q-card-header')

    expect(header).to.be.null
  })
})
