import React from 'react'
import loadable from '@loadable/component'

const Header = loadable(() => import('./components/header/header'))
const List = loadable(() => import('../list/list.js'))
const Code = loadable(() => import('../code/code'))
const Paragraph = loadable(() => import('./components/paragraph/paragraph'))
const Image = loadable(() => import('./components/image/image'))
const PageIndexer = loadable(() => import('../../../../../index/components/page-indexer/page-indexer'))
const YouTubeEmbed = loadable(() => import('./components/youtube-embed/youtube-embed'))
const Section = loadable(() => import('../section/section'))
const TableOfContents = loadable(() => import('../table-of-contents/table-of-contents'))

const nodeParser = props => {
  const { node, index, jsonBody } = props

  const nodeTag = node.t

  if (!node) return null

  if (typeof node === 'string') {
    const paragraphProps = {
      ...props,
      content: node
    }

    return <Paragraph key={index} {...paragraphProps} />
  }

  if (node.h2) {
    const headerProps = {
      rank: 2,
      header: node.h2
    }

    return <Header key={index} {...headerProps} />
  }

  if (node.h3) {
    const headerProps = {
      rank: 3,
      header: node.h3
    }

    return <Header key={index} {...headerProps} />
  }

  if (node.h4) {
    const headerProps = {
      rank: 4,
      header: node.h4
    }

    return <Header key={index} {...headerProps} />
  }

  if (node.ul) {
    const ulProps = { listNodes: node.ul }

    return <List key={index} {...ulProps} />
  }

  if (Array.isArray(node)) {
    const ulProps = { listNodes: node }

    return <List key={index} {...ulProps} />
  }

  if (node.img) {
    const { s: src, a: alt } = node.img
    const imgProps = { src, alt }

    return <Image key={index} {...imgProps} />
  }

  if (node.code) {
    const { code } = node
    const { jsonMeta: { codeLang: pageCodeLang } } = props
    const codeProps = { code, pageCodeLang }

    return <Code key={index} {...codeProps}/>
  }

  if (node.yte) {
    const { s: src, w: width } = node.yte
    const youTubeEmbedProps = { key: index, src, width }

    return <YouTubeEmbed {...youTubeEmbedProps}/>
  }

  if (node.main) {
    return <Section key={index} {...{ ...props, element: 'main', jsonBody: node.main }} />
  }
  
  if (nodeTag === 'PageIndexer') return <PageIndexer {...{ ...props, key: index }} />

  if (node.toc) {
    const tableOfContentsProps = { key: index, jsonBody, title: node.toc }

    return <TableOfContents {...tableOfContentsProps} />
  }

  return null
}

export default nodeParser
