import React from 'react'
import loadable from '@loadable/component'

const Paragraph = loadable(() => import('./components/paragraph/paragraph'))
const Heading = loadable(() => import('./components/heading/heading'))
const List = loadable(() => import('./components/list/list'))
const Code = loadable(() => import('./components/code/code'))
const Image = loadable(() => import('./components/image/image'))
const YouTubeEmbed = loadable(() => import('./components/youtube-embed/youtube-embed'))
const PageIndexer = loadable(() => import('./components/page-indexer/page-indexer'))
const Section = loadable(() => import('./components/section/section'))
const TitleBoard = loadable(() => import('./components/title-board/title-board'))
const Editorial = loadable(() => import('./components/editorial/editorial'))
const TableOfContents = loadable(() => import('./components/table-of-contents/table-of-contents'))

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
    const headingProps = {
      rank: 2,
      heading: node.h2
    }

    return <Heading key={index} {...headingProps} />
  }

  if (node.h3) {
    const headingProps = {
      rank: 3,
      heading: node.h3
    }

    return <Heading key={index} {...headingProps} />
  }

  if (node.h4) {
    const headingProps = {
      rank: 4,
      heading: node.h4
    }

    return <Heading key={index} {...headingProps} />
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

  if (node.editorial) {
    const { editorial } = node
    const editorialProps = { key: index, editorial}

    return <Editorial {...editorialProps} />
  }

  if (node.header) {
    const {
      t: title,
      a: author,
      i: image,
      l: logo
    } = node.header

    const {
      publishedOn,
      modifiedOn,
      appName,
      device,
      lang,
      langHandler
    } = props

    const titleBoardProps = {
      key: index,
      title,
      author,
      image,
      logo,
      publishedOn,
      modifiedOn,
      appName,
      device,
      lang,
      langHandler
    }

    return <TitleBoard {...titleBoardProps} />
  }

  return null
}

export default nodeParser
