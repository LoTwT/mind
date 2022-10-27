import type { Component } from 'solid-js'
import { Show, createSignal } from 'solid-js'
import { useItemIndex, useLink } from '../composable/useChoose'
import type { DataItem } from '../composable/useData'
import { readIcon } from '../composable/useFile'
import FallbackIcon from './FallbackIcon'

const Item: Component<{
  index: number
  data: DataItem
}> = ({ index, data: { link, svgPath, title, description } }) => {
  const { setIndex, index: i } = useItemIndex()
  const { setLink } = useLink()
  const active = () => i() === index
  const onClick = () => {
    setLink(() => i() === index ? '' : link)
    setIndex(() => i() === index ? -1 : index)
  }
  const [icon, setIcon] = createSignal('')
  readIcon(svgPath).then(setIcon)
  return (
    <div w-full rounded-2 h-80px
      flex justify-between overflow-hidden cursor-pointer py-2 px-3 box-border first:mt-0 mt-3
      transition-colors
      class={active() ? 'bg-[rgba(0,0,0,.1)] dark:bg-#424242' : undefined}
      onclick={onClick}
    >
      <div w="[calc(80px-0.5rem)]" flex-center>
        <div w="75%" h="75%">
          <Show when={svgPath} fallback={FallbackIcon}>
            <div innerHTML={icon()} w-full h-full class='icon'></div>
          </Show>
        </div>
      </div>
      <div w="[calc(100%-80px)]" h-full w-auto box-border>
        <div text-18px mb-2px>{title}</div>
        <div text-12px text-gray-600 dark:text-gray-400 line-clamp-2>{description}</div>
      </div>
    </div>
  )
}

export default Item
