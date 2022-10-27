import { createSignal } from 'solid-js'
import { readDataOrCreateInitial } from './useFile'

export interface DataItem {
  id: number
  title: string
  description: string
  link: string
  svgPath: string // relative $DATA/$NAME/images
}

export interface App {
  lastId: number
  data: DataItem[]
}

const [data, setData] = createSignal([] as DataItem[])
const [currentId, setCurrentId] = createSignal(-1)
const [init, setInit] = createSignal(false)

async function initFn() {
  const appData = await readDataOrCreateInitial()
  setData(() => appData.data)
  setCurrentId(() => appData.lastId + 1)
  setInit(true)
}

export function useData() {
  if (!init())
    initFn()
  return {
    data,
    setData,
  }
}

export async function useCurrentId() {
  return {
    currentId,
    setCurrentId,
  }
}
