import { QuarkElement, customElement, property } from 'quarkc'
import style from './index.less?inline'

@customElement({
  tag: 'q-button',
  style,
})
class Button extends QuarkElement {
  @property({ type: String })
  type = 'primary'

  @property({ type: String })
  size = 'medium'

  @property({ type: Boolean })
  disabled = false

  @property({ type: Boolean })
  loading = false

  @property({ type: String })
  icon = ''

  @property({ type: Boolean })
  plain = false

  @property({ type: Boolean })
  light = false

  @property({ type: String })
  shape = 'round'

  // 用于存储点击效果元素
  private rippleElement: HTMLElement | null = null

  handleClick = (e: MouseEvent) => {
    // 禁用状态或加载状态下不触发点击事件
    if (this.disabled || this.loading) {
      e.preventDefault()
      return
    }

    // 创建点击波纹效果
    this.createRippleEffect(e)

    // 触发自定义点击事件
    this.dispatchEvent(
      new CustomEvent('click', {
        detail: {
          event: e,
        },
        bubbles: true,
        composed: true,
      }),
    )
  }

  // 创建点击波纹效果
  createRippleEffect(e: MouseEvent) {
    const button = e.currentTarget as HTMLElement
    const rect = button.getBoundingClientRect()

    // 计算点击位置相对于按钮的坐标
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    // 创建波纹元素
    const ripple = document.createElement('span')
    ripple.className = 'q-button-ripple'
    ripple.style.left = `${x}px`
    ripple.style.top = `${y}px`

    // 添加到按钮中
    button.appendChild(ripple)

    // 动画结束后移除波纹元素
    this.rippleElement = ripple
    ripple.addEventListener('animationend', () => {
      if (ripple.parentElement) {
        ripple.parentElement.removeChild(ripple)
      }
      if (this.rippleElement === ripple) {
        this.rippleElement = null
      }
    })
  }

  // 清理函数，确保组件销毁时移除残留的波纹元素
  disconnectedCallback() {
    if (this.rippleElement && this.rippleElement.parentElement) {
      this.rippleElement.parentElement.removeChild(this.rippleElement)
    }
    super.disconnectedCallback?.()
  }

  renderIcon() {
    if (this.loading) {
      return <span class="q-button-loading-icon"></span>
    }

    if (this.icon) {
      return <span class={`q-button-icon ${this.icon}`}></span>
    }

    return null
  }

  render() {
    // 构建按钮类名
    const buttonClasses = [
      'q-button',
      `q-button-${this.type}`,
      `q-button-${this.size}`,
      `q-button-${this.shape}`,
      this.disabled ? 'q-button-disabled' : '',
      this.loading ? 'q-button-loading' : '',
      this.icon || this.loading ? 'q-button-with-icon' : '',
      this.plain ? 'q-button-plain' : '',
      this.light ? 'q-button-light' : '',
    ].filter(Boolean).join(' ')

    return (
      <button
        class={buttonClasses}
        disabled={this.disabled}
        onClick={this.handleClick}
      >
        {this.renderIcon()}
        <slot></slot>
      </button>
    )
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'q-button': Button
  }
}
