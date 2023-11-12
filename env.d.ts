/// <reference types="vite/client" />
declare module '*.vue' {
  import type { ComponentOptions } from 'vue'
  const Component: ComponentOptions
  export default Component
}

declare module '*.md' {
  import type { ComponentOptions } from 'vue'
  const Component: ComponentOptions
  export default Component
}

declare module '*.json' {
  const value: {
    ' title-cn': string
    'title-en': string
    list: {
      name: string
      eName: string
    }[]
  }
  export default value
}
