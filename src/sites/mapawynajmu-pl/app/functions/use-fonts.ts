import { useEffect } from "react"
import { loadFonts } from "./load-fonts"

export const useFonts = () => {
  useEffect(() => {
    loadFonts()
  }, [])
}
