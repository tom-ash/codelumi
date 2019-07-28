import { getPicture } from './get-picture'

export function componentDidMount() {
  getPicture.call(this)
}