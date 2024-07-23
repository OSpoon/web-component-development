import { QuarkElement, customElement, property } from 'quarkc'
import style from './index.less?inline'

@customElement({
  tag: 'my-component',
  style,
})
class MyComponent extends QuarkElement {
  @property({ type: Number }) // 外部属性
    count = 0

  @property({ type: String })
  text = ''

  add = () => {
    // 内部事件
    this.count += 1
  }

  componentDidMount() {
    // 生命周期
    console.log('dom loaded!')
    // ...
  }

  render() {
    return (
      <>
        <div>
          <a href="https://quarkc.hellobike.com" target="_blank">
            <img
              src="https://raw.githubusercontent.com/hellof2e/static/main/quark-logo.png"
              className="logo"
              alt="quark logo"
            />
          </a>
        </div>

        <h1>
          Quark -
          {this.text}
        </h1>

        <div className="card">
          <button onClick={this.add}>
            count is:
            {this.count}
          </button>
        </div>
      </>
    )
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-component': MyComponent
  }
}
