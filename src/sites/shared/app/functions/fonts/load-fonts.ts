export interface Fonts {
  google: {
    families: string[]
    text: string
  }
}

interface LoadFonts {
  (fonts: Fonts): void
}

export const loadFonts: LoadFonts = fonts => {
  const WebFont = require('webfontloader')

  WebFont.load(fonts)
}
