import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { presetScrollbar } from 'unocss-preset-scrollbar'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        mono: ['Fira Code', 'Fira Mono:400,700'],
        lobster: 'Lobster',
      },
    }),
    presetScrollbar(),
  ],
  shortcuts: {
    'flex-center': 'flex justify-center items-center',
    'bg-o': 'bg-[rgba(0,0,0,.1)] dark:bg-[rgba(255,255,255,.1)]',
  },
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
