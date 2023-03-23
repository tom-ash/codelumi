const WebFont = require('webfontloader')

export const loadFonts = () => {
  WebFont.load({
    google: {
      families: ['Oswald:300'],
      text: '0123456789mqszł',
    },
  })
}
