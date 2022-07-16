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
const Aside = loadable(() => import('./components/aside/aside'))
const Anchor = loadable(() => import('./components/anchor/anchor'))

const RenderNode = (props: RenderNodeProps) => {
  const {
    node,
    index,
    appName,
    jsonBody,
    jsonMeta,
    clientUrl,
    changeRoute,
    device,
    lang,
    langHandler
  } = props

  if (!node) return null

  if (typeof node === 'string') {
    const paragraphProps = { content: node }

    return <Paragraph key={index} {...paragraphProps} />
  }

  if (Array.isArray(node)) {
    const ulProps = { listNodes: node }

    return <List key={index} {...ulProps} />
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

  if (node.img) {
    const { st } = node
    const { s: src, a: alt } = node.img
    const imgProps = { src, alt, style: st }

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

  if (node.anchor) {
    const {
      st: style
    } = node
    const {
      h: href,
      r: rel,
      t: target,
      c: content
    } = node.anchor
    const anchorProps = {
      style,
      href,
      rel,
      target,
      content
    }

    return <Anchor {...anchorProps} />
  }

  if (node.div) {
    // @ts-ignore
    return <Section key={index} {...{ ...props, element: 'div', jsonBody: node.div, st: node.st }} />
  }

  if (node.main) {
    // @ts-ignore
    return <Section key={index} {...{ ...props, element: 'main', className: 'main', jsonBody: node.main }} />
  }

  if (node.article) {
    const className = node.className

    // @ts-ignore
    return <Section key={index} {...{ ...props, element: 'article', className, jsonBody: node.article }} />
  }

  if (node.pageIndexer) {
    const { collection } = node.pageIndexer
    const {
      articles,
      tutorials,
      clientUrl,
      changeRoute
    } = props

    const pageIndexerProps = {
      collection,
      tutorials,
      articles,
      clientUrl,
      changeRoute,
      key: index
    }

    return <PageIndexer {...pageIndexerProps} />
  }

  if (node.toc) {
    const { sectionBody } = props
    const tableOfContentsProps = { key: index, jsonBody: sectionBody, title: node.toc }

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

  if (node.page) {
    const sectionProps = {
      key: index,
      node,
      index,
      appName,
      jsonBody,
      jsonMeta,
      clientUrl,
      changeRoute,
      device,
      lang,
      langHandler,
      className: node.className,
      st: node.st
    }

    return <Section {...sectionProps} />
  }

  if (node.image) {
    const sectionProps = {
      key: index,
      node,
      index,
      appName,
      jsonBody,
      jsonMeta,
      clientUrl,
      changeRoute,
      device,
      lang,
      langHandler,
      className: node.className,
      st: node.st
    }
    
    return <Section {...sectionProps} />
  }

  if (node.aside) {
    const asideProps = {
      key: index,
      node,
      jsonBody: node.aside,
      clientUrl,
      appName,
      device,
      lang,
      changeRoute,
      langHandler,
      sectionBody: node.aside
    }

    return <Aside {...asideProps} />
  }

  return null
}

export default RenderNode
