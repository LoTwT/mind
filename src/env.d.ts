import type { AttributifyAttributes } from 'unocss/preset-attributify'

declare module 'solid-js' {
  namespace JSX {
    interface HTMLAttributes<T> extends AttributifyAttributes {}
    interface Directives {
      model: [() => any, (v: any) => any];
    }
  }
}
