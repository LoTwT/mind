import type { ParentComponent } from 'solid-js'

const Container: ParentComponent = (props) => {
  return (
    <main w-full h="100vh" text="[var(--p-text)]" dark:text="[var(--dp-text)]"
      bg="[var(--p-color)]" dark:bg="[var(--dp-color)]" overflow-hidden p-5 box-border
      flex justify-between
    >{props.children}</main>
  )
}

export default Container
