import { For } from 'solid-js'
import Header from './Header'
import Item from './Item'
import { useData } from '@/composable/useData'

const Left = () => {
  const { data } = useData()
  return (
    <div
      w-360px
      h-full
    >
      <Header />
      <div h="[calc(100vh-3.75rem-40px)]" overflow-y-scroll
        class="
          scrollbar-track:bg-transparent
          scrollbar:!w-12px scrollbar-thumb:bg-blueGray scrollbar-thumb:rounded-4px
        "
      >
        <For each={data()}>
          {(d, i) => <Item data={d} index={i()}></Item>}
        </For>
      </div>
    </div>
  )
}

export default Left
