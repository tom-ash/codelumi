import { labels } from '../../../constants/labels'

export function labelProvider(input) {
  return this.languageObjectHandler(labels[input].text)
}