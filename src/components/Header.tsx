import { useDark } from '@colid/core'

export const Header = () => {
  const { setIsDark } = useDark()
  return () => (
    <div text-10 w-full flex justify-between items-start mb-5>
      <span font-lobster lh-10>Mind</span>
      <div onclick={() => setIsDark(d => !d)} cursor-pointer w-10 h-10
        flex justify-center items-center rounded-3 dark:text="#98CFCF"
        hover="bg-o" transition-colors
      >
        <div i-carbon-sun dark:i-carbon-moon text-5></div>
      </div>
    </div>
  )
}

export default Header
