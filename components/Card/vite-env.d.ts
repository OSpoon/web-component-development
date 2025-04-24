/// <reference types="vite/client" />

declare module 'quarkc' {
  import type { JSX } from 'quarkc/jsx'

  // 为Card组件声明TypeScript类型
  interface CardProps {
    title?: string
    shadow?: 'light' | 'medium' | 'dark' | 'none'
    bordered?: boolean
    radius?: number
    loading?: boolean
    headerImage?: string
  }

  interface CardEvents {
    onchange?: (e: Event) => void
    onclick?: (e: MouseEvent) => void
  }

  interface CardMethods {
    renderHeader: () => JSX.Element | null
    renderContent: () => JSX.Element
    renderFooter: () => JSX.Element
  }

  type QCardElementAttributes = CardProps & CardEvents

  declare global {
    namespace JSX {
      interface IntrinsicElements {
        'q-card': QCardElementAttributes & JSX.IntrinsicElements['div']
      }
    }

    interface HTMLElementTagNameMap {
      'q-card': HTMLElement & CardProps & CardMethods
    }
  }
}
