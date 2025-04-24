import { QuarkElement, customElement, property } from 'quarkc'
import style from './index.less?inline'

@customElement({
  tag: 'q-card',
  style,
})
class Card extends QuarkElement {
  @property({ type: String })
  title = ''

  @property({ type: String })
  shadow = 'light' // light, medium, dark, none

  @property({ type: Boolean })
  bordered = true

  @property({ type: Number })
  radius = 8

  @property({ type: Boolean })
  loading = false

  @property({ type: String })
  headerImage = ''

  renderHeader() {
    if (!this.title && !this.headerImage) {
      return null
    }

    return (
      <div class="q-card-header">
        {this.headerImage
          ? (
              <div class="q-card-header-image">
                <img src={this.headerImage} alt="card header" />
              </div>
            )
          : null}
        {this.title ? <div class="q-card-title">{this.title}</div> : null}
      </div>
    )
  }

  renderContent() {
    return (
      <div class="q-card-content">
        {this.loading
          ? (
              <div class="q-card-loading-mask">
                <div class="q-card-loading-spinner"></div>
              </div>
            )
          : null}
        <slot></slot>
      </div>
    )
  }

  renderFooter() {
    return (
      <div class="q-card-footer">
        <slot name="footer"></slot>
      </div>
    )
  }

  render() {
    const cardClasses = [
      'q-card',
      `q-card-shadow-${this.shadow}`,
      this.bordered ? 'q-card-bordered' : '',
      this.loading ? 'q-card-is-loading' : '',
    ].filter(Boolean).join(' ')

    const cardStyle = {
      borderRadius: `${this.radius}px`,
    }

    return (
      <div class={cardClasses} style={cardStyle}>
        {this.renderHeader()}
        {this.renderContent()}
        {this.renderFooter()}
      </div>
    )
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'q-card': Card
  }
}
