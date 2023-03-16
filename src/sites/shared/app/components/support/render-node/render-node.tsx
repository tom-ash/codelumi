import React from 'react'
import loadable from '@loadable/component'
import { Logo } from '../../../../../mapawynajmu-pl/app/components/scaffold/header/components/logo/logo'

const Paragraph = loadable(() => import('./components/paragraph/paragraph'))
const Heading = loadable(() => import('../heading/heading'))
const List = loadable(() => import('./components/list/list'))
const Code = loadable(() => import('./components/code/code'))
const Image = loadable(() => import('./components/image/image'))
const YouTubeEmbed = loadable(() => import('./components/youtube-embed/youtube-embed'))
const PageIndexer = loadable(() => import('./components/page-indexer/page-indexer'))
const Section = loadable(() => import('./components/section/section'))
const Editorial = loadable(() => import('./components/editorial/editorial'))
const TableOfContents = loadable(() => import('./components/table-of-contents/table-of-contents'))
// const Aside = loadable(() => import('./components/aside/aside'))
const Anchor = loadable(() => import('./components/anchor/anchor'))
const Share = loadable(() => import('./components/share/share'))
const Definition = loadable(() => import('./components/definition/definition'))
const Figure = loadable(() => import('./components/figure/figure'))

export const RenderNode = (props: RenderNodeProps) => {
  const { node, index } = props

  if (!node) return null

  if (typeof node === 'string') {
    const paragraphProps = { content: node }

    return (
      <Paragraph
        key={index}
        {...paragraphProps}
      />
    )
  }

  if (Array.isArray(node)) {
    const ulProps = { listNodes: node }

    return (
      <List
        key={index}
        {...ulProps}
      />
    )
  }

  if (node.ul) {
    const ulProps = {
      key: index,
      listNodes: node.ul,
      style: node.style,
    }

    return <List {...ulProps} />
  }

  // @ts-ignore
  if (node.h1 || node.headingOne) {
    // TODO: Move to Heading.

    return (
      <h1>
        {/* @ts-ignore */}
        <span>{node.h1 || node.headingOne}</span>
      </h1>
    )
  }

  // @ts-ignore
  if (node.h2 || node.headingTwo) {
    const headingProps = {
      rank: 2,
      // @ts-ignore
      heading: node.h2 || node.headingTwo,
    }

    return (
      // @ts-ignore
      <Heading
        key={index}
        {...headingProps}
      />
    )
  }

  if (node.h3) {
    const headingProps = {
      rank: 3,
      heading: node.h3,
    }

    return (
      <Heading
        key={index}
        {...headingProps}
      />
    )
  }

  if (node.h4) {
    const headingProps = {
      rank: 4,
      heading: node.h4,
    }

    return (
      <Heading
        key={index}
        {...headingProps}
      />
    )
  }

  if (node.image) {
    const { style } = node
    const {
      source,
      alternative,
    } = node.image
    const imgProps = {
      src: source,
      alt: alternative,
      style,
    }

    return (
      <Image
        key={index}
        {...imgProps}
      />
    )
  }

  if (node.code) {
    const { code } = node
    const codeLang = node.codeLang || props.codeLang
    const codeProps = { code, codeLang }

    return (
      <Code
        key={index}
        {...codeProps}
      />
    )
  }

  if (node.yte) {
    const { s: src, w: width } = node.yte
    const youTubeEmbedProps = { key: index, src, width }

    return <YouTubeEmbed {...youTubeEmbedProps} />
  }

  if (node.anchor) {
    const { style, className } = node
    const { h: href, r: rel, t: target, c: content } = node.anchor
    const anchorProps = {
      style,
      href,
      rel,
      target,
      content,
      className,
    }

    // @ts-ignore
    return <Anchor {...anchorProps} />
  }

  // @ts-ignore
  if (node.division) {
    return (
      <Section
        key={index}
        {...{
          ...props,
          body: node.division,
          element: 'div',
          style: node.style,
        }}
      />
    )
  }

  if (node.section) {
    const className = node.className
    const codeLang = node.codeLang || props.codeLang

    return (
      <Section
        key={index}
        {...{
          ...props,
          element: 'section',
          body: node.section,
          className,
          codeLang,
          id: node.id,
          style: node.style,
        }}
      />
    )
  }

  if (node.main) {
    const codeLang = node.codeLang

    return (
      <Section
        key={index}
        {...{
          ...props,
          element: 'main',
          body: node.main,
          className: node.className || 'main',
          codeLang,
          style: node.style,
        }}
      />
    )
  }

  if (node.article) {
    const className = node.className
    const codeLang = node.codeLang || props.codeLang

    return (
      <Section
        key={index}
        {...{
          ...props,
          element: 'article',
          body: node.article,
          className,
          codeLang,
          style: node.style,
        }}
      />
    )
  }

  if (node.pageIndexer) {
    const { collection } = node.pageIndexer
    const { articles, tutorials } = props

    const pageIndexerProps = {
      collection,
      tutorials,
      articles,
      key: index,
    }

    return <PageIndexer {...pageIndexerProps} />
  }

  if (node.tableOfContents) {
    const tableOfContentsProps = { key: index, title: node.tableOfContents }

    return <TableOfContents {...tableOfContentsProps} />
  }

  if (node.editorial) {
    const { editorial } = node
    const editorialProps = { key: index, editorial }

    return <Editorial {...editorialProps} />
  }

  if (node.root) {
    const sectionProps = {
      key: index,
      node,
      index,
      className: node.className,
      style: node.style,
      body: node.root,
    }

    return <Section {...sectionProps} />
  }

  // if (node.leftAside) {
  //   const asideProps = {
  //     key: index,
  //     node,
  //     placing: 'left',
  //   } as const

  //   return <Aside {...asideProps} />
  // }

  // if (node.aside) {
  //   const asideProps = {
  //     key: index,
  //     node,
  //     placing: 'right',
  //   } as const

  //   return <Aside {...asideProps} />
  // }

  if (node.share) {
    const { h: href } = node.share

    const shareProps = { href }

    return <Share {...shareProps} />
  }

  // @ts-ignore
  if (node.logo) {
    const {
      // @ts-ignore
      style,
      // @ts-ignore
    } = node.logo

    const logoProps = {
      style,
    }

    // @ts-ignore
    return <Logo {...logoProps} />
  }

  // @ts-ignore
  if (node.def) {
    const {
      term,
      definition,
      // @ts-ignore
    } = node.def

    const definitionProps = {
      term,
      definition,
    }

    return <Definition {...definitionProps} />
  }

  // TODO: Change term to appelation.
  // @ts-ignore
  if (node.definition) {
    const {
      term,
      body,
      // @ts-ignore
    } = node.definition

    const definitionProps = {
      term,
      definition: body,
    }

    return <Definition {...definitionProps} />
  }

  // @ts-ignore
  if (node.figure) {
    const {
      content,
      caption,
      // @ts-ignore
    } = node.figure

    const figureProps = {
      content,
      caption,
    }

    return <Figure {...figureProps} />
  }

  return null
}
