import { buildAnchor } from './builders/build-anchor'

export const enrichText = (plainText: string) => {
  let enrichedText = plainText

  enrichedText = enrichedText.replace(/\`(.+?)\`/g, (_fullMatch, innerMatch) => `<code>${innerMatch}</code>`)

  enrichedText = enrichedText.replace(
    /\*\*(.+?)\*\*/g,
    (_fullMatch, innerMatch) => `<strong>${innerMatch}</strong>`
  )

  enrichedText = enrichedText.replace(/\*(.+?)\*/g, (_fullMatch, innerMatch) => `<em>${innerMatch}</em>`)

  enrichedText = enrichedText.replace(
    /(a)\[(.+)\]/g,
    // @ts-ignore
    (_fullMatch, tag, attributes) => {
      if (attributes.indexOf('text') === -1) return _fullMatch

      const attrs = attributes.split(/,\s(?=[^,]+:)/)

      switch (tag) {
        case 'a':
          return buildAnchor(attrs)
      }
    }
  )

  return enrichedText
}
