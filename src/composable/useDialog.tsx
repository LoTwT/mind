import type { JSX } from 'solid-js'
import { createEffect, createSignal } from 'solid-js'
import { Portal } from 'solid-js/web'
import Button from '../components/Button'
import IconButton from '@/components/IconButton'

const Dialog = (props: DialogChildrenProps) => {
  const { title, content, setShow } = props
  return (
    <div bg-white dark:bg="[var(--ds-color)]" dark:text-white
      py-2 px-4 rounded-3 min-w-400px shadow-2xl class="dialog"
    >
      <div w-full h-14 flex justify-between items-center>
        <div text-26px>{ title }</div>
        <IconButton onclick={() => setShow(false)}>
          <div i-icon-park-outline:close text-5></div>
        </IconButton>
      </div>

      {content}

      <div w-full h-full py-3 box-border flex justify-end gap-3>
         <Button bType='default' onclick={() => setShow(false)}>Cancel</Button>
         <Button bType='primary'>Confirm</Button>
      </div>
    </div>
  )
}

interface UseDialogParams {
  title: string
  content: JSX.Element
}

type DialogChildrenProps = UseDialogParams & {
  setShow: (show: boolean) => void
}

export const useDialog = (params: UseDialogParams) => {
  const [isShow, setShow] = createSignal(false)

  Portal({
    children: <Dialog {...params} setShow={setShow} />,
    ref: (el) => {
      createEffect(() => {
        el.className = `dialog-overlay dialog-overlay-${
          isShow() ? 'show' : 'hidden'
        }`
      })
    },
  })

  return { isShow, setShow }
}
