import { createSignal } from 'solid-js'

const [index, setIndex] = createSignal(-1)
const [link, setLink] = createSignal('')

export function useItemIndex() {
  return {
    index,
    setIndex,
  }
}

export function useLink() {
  return {
    link,
    setLink,
  }
}
