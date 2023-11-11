import getPureUrl from '../../../../shared/functions/routes/getters/pure-url'
import { openGraphBuilder } from '../../../../shared/functions/builders/open-graph-builder'

// interface AppendAuthor {
//   (author: string): void
// }

// const appendAuthor: AppendAuthor = author => {
//   // const headElement = document.querySelector('head')
//   const authorMetaElement = document.querySelector('meta[name="author"]')

//   if (author) {
//     if (authorMetaElement) {
//       document.querySelector('meta[name="author"]')!.setAttribute('content', author)
//     } else {
//       const headElement = document.querySelector('head')
//       const newAuthorMetaElement = document.createElement('meta')
//       newAuthorMetaElement.setAttribute('name', 'author')
//       newAuthorMetaElement.content = author
//       headElement?.appendChild(newAuthorMetaElement)
//     }
//   } else {
//     if (authorMetaElement) {
//       const headElement = document.querySelector('head')
//       headElement?.removeChild(authorMetaElement)
//     }
//   }
// }

// @ts-ignore
const replaceOpenGraph = openGraphProps => {
  const elements = document.querySelectorAll(`meta[property^="og"]`)
  elements.forEach(element => element.remove())

  const openGraph = openGraphBuilder(openGraphProps)
  document.head.innerHTML = document.head.innerHTML + openGraph
}

// @ts-ignore
function metaSetter(meta) {
  const { clientUrl, url, canonicalUrl, schemaOrg, openGraph, lang, title, description, keywords, author } = meta
  const canonicalPath = typeof canonicalUrl === 'string' ? canonicalUrl : url

  document.documentElement.lang = lang
  document.title = title
  // appendAuthor(author)
  document.querySelector('meta[name="description"]')!.setAttribute('content', description)
  document.querySelector('meta[name="keywords"]')!.setAttribute('content', keywords)
  document.querySelector('link[rel="canonical"]')!.setAttribute('href', getPureUrl(`${clientUrl}/${canonicalPath}`))

  replaceOpenGraph(openGraph)

  document.querySelector(`script[type="application/ld+json"]`)!.innerHTML = JSON.stringify(schemaOrg)
}

export default metaSetter
