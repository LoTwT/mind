import { useDark } from '@colid/core'
import { showImport } from './Actions'
import IconButton from '@/components/IconButton'

export const Header = () => {
  const { setIsDark } = useDark()
  return () => (
    <div text-10 w-full flex justify-between items-start mb-5>
      <span font-lobster lh-10>
        Mind
      </span>

      <div flex>
        <IconButton onclick={() => showImport()}>
          <div i-icon-park-outline:plus text-5></div>
        </IconButton>

        <IconButton onclick={() => setIsDark(d => !d)}>
          <div i-carbon-sun dark:i-carbon-moon text-5></div>
        </IconButton>
      </div>
    </div>
  )
}

export default Header

