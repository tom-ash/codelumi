import { useEffect } from "react"
import { loadFonts, Fonts } from "./fonts/load-fonts"

export const useFontsFactory = (fonts: Fonts) => {
  return (() => useEffect(() => loadFonts(fonts), []))
}
