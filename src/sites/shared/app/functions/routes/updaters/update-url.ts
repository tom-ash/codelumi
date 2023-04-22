import { changeUrl } from "../changers/change-url"

// @ts-ignore
export const updateUrl = ({ href }) => {
  // @ts-ignore
  window.onlyUpdate = true

  changeUrl({ href })
}
