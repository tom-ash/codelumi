const WebFont = require('webfontloader')

export interface Fonts {
  google: {
    families: string[],
    text: string,
  }
}

interface LoadFonts {
  (fonts: Fonts): void
}

export const loadFonts: LoadFonts = (fonts) => WebFont.load(fonts)
