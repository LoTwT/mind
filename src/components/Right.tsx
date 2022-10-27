import { Show } from 'solid-js'
import { useLink } from '../composable/useChoose'

const Fallback = () => <div w-full h-full bg-o flex-center text-lg>
  PLEASE CHOOSE ONE WEBSITE ON LEFT
</div>

const Right = () => {
  const { link } = useLink()
  return (
    <div w="[calc(98%-360px)]" h-full rounded-2 overflow-hidden>
      <Show when={link() !== ''} fallback={Fallback}>
        <iframe src={link()} w-full h-full></iframe>
      </Show>
    </div>
  )
}

export default Right
