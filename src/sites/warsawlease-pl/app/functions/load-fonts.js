export function loadFonts() {
  if (typeof window === 'undefined') return

  const WebFont = require('webfontloader')

  WebFont.load({
    google: {
      families: ['Oswald:300'],
      text: '0123456789mqszł'
    }
  })
}
