import React from 'react'
import loadable from '@loadable/component'

const ArticleHeader = loadable(() => import('./components/article-header/article-header'))
const Section = loadable(() => import('./components/section/section'))
const Heading = loadable(() => import('../heading/heading'))
const TableOfContents = loadable(() => import('./components/table-of-contents/table-of-contents'))
const Editorial = loadable(() => import('./components/editorial/editorial'))
const Paragraph = loadable(() => import('./components/paragraph/paragraph'))
const List = loadable(() => import('./components/list/list'))
const Link = loadable(() => import('./components/link/link'))
const Image = loadable(() => import('./components/image/image'))
const Anchor = loadable(() => import('./components/anchor/anchor'))
const Code = loadable(() => import('./components/code/code'))
const YouTubeEmbed = loadable(() => import('./components/youtube-embed/youtube-embed'))
const Share = loadable(() => import('./components/share/share'))
const Definition = loadable(() => import('./components/definition/definition'))
const Figure = loadable(() => import('./components/figure/figure'))
const SkillFindLogoLogoAndTitle = loadable(
  () => import('../../../../../skillfind-tech/app/components/scaffold/header/components/image/image')
)
const MapawynajmuPlLogoAndTitle = loadable(
  () => import('../../../../../mapawynajmu-pl/app/components/support/logo-and-title/logo-and-title')
)
const FeatureItem = loadable(() => import('./components/feature-item/feature-item'))
const Author = loadable(() => import('../author/author'))
const Index = loadable(() => import('./components/index/index'))

const elements = {
  Author,
  Index,
  FeatureItem,
}

export const RenderNode = (props: RenderNodeProps) => {
  try {
    const { node, index } = props

    if (!node) return null

    if (typeof node === 'string') {
      const paragraphProps = { key: index, content: node }

      return <Paragraph {...paragraphProps} />
    }

    // @ts-ignore
    if (node.Paragraph) {
      // @ts-ignore
      const paragraphProps = { key: index, content: node.Paragraph, style: node.style }

      // @ts-ignore
      return <Paragraph {...paragraphProps} />
    }

    if (Array.isArray(node)) {
      const ulProps = { key: index, listNodes: node }

      return <List {...ulProps} />
    }

    if (node.cat) {
      const Component = elements[node.cat]
      const data = node.data || {}

      return <Component {...data} />
    }

    if (node.ArticleHeader) {
      return <ArticleHeader useCoverImage={node.ArticleHeader.useCoverImage} useAuthor={node.ArticleHeader.useAuthor} />
    }

    if (node.UnorderedList) {
      const ulProps = { key: index, listNodes: node.UnorderedList, style: node.style }

      return <List {...ulProps} />
    }

    if (node.HeadingOne) {
      const headingProps = { key: index, rank: 1, heading: node.HeadingOne }

      return <Heading {...headingProps} />
    }

    if (node.HeadingTwo) {
      const headingProps = { key: index, rank: 2, heading: node.HeadingTwo }

      return <Heading {...headingProps} />
    }

    if (node.HeadingThree) {
      const headingProps = { key: index, rank: 3, heading: node.HeadingThree }

      return <Heading {...headingProps} />
    }

    if (node.HeadingFour) {
      const headingProps = { key: index, rank: 4, heading: node.HeadingFour }

      return <Heading {...headingProps} />
    }

    if (node.Image) {
      // @ts-ignore
      const { style, largePhoneStyle } = node
      const { source, alternative } = node.Image
      const imgProps = {
        key: index,
        src: source,
        alt: alternative,
        style,
        largePhoneStyle,
      }

      return <Image {...imgProps} />
    }

    if (node.Code) {
      const { Code: code } = node
      const codeLang = node.codeLang || props.codeLang
      const codeProps = { key: index, code, codeLang }

      return <Code {...codeProps} />
    }

    if (node.YouTubeEmbed) {
      const { s: src, w: width } = node.YouTubeEmbed
      const youTubeEmbedProps = { key: index, src, width }

      return <YouTubeEmbed {...youTubeEmbedProps} />
    }

    if (node.Anchor) {
      const { style, className } = node
      const { h: href, r: rel, t: target, c: content } = node.Anchor
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
    if (node.Division) {
      return (
        <Section
          key={index}
          {...{
            ...props,
            element: 'div',
            body: node.Division,
            style: node.style,
          }}
        />
      )
    }

    if (node.Section) {
      const className = node.className
      const codeLang = node.codeLang || props.codeLang

      return (
        <Section
          key={index}
          {...{
            ...props,
            element: 'section',
            body: node.Section,
            className,
            codeLang,
            id: node.identifier,
            style: node.style,
          }}
        />
      )
    }

    // @ts-ignore
    if (node.Link) {
      // @ts-ignore
      const { href, body, style, event } = node.Link

      return (
        <Link
          key={index}
          href={href}
          body={body}
          style={style}
          event={event}
        />
      )
    }

    if (node.Main) {
      const codeLang = node.codeLang

      return (
        <Section
          key={index}
          {...{
            ...props,
            element: 'main',
            body: node.Main,
            className: node.className || 'main',
            codeLang,
            style: node.style,
          }}
        />
      )
    }

    if (node.Article) {
      const className = node.className
      const codeLang = node.codeLang || props.codeLang

      return (
        <Section
          key={index}
          {...{
            ...props,
            element: 'article',
            body: node.Article,
            className,
            codeLang,
            style: node.style,
          }}
        />
      )
    }

    if (node.TableOfContents) {
      const tableOfContentsProps = { key: index, title: node.TableOfContents }

      return <TableOfContents {...tableOfContentsProps} />
    }

    if (node.Editorial) {
      const { Editorial: editorial } = node
      const editorialProps = { key: index, editorial }

      return <Editorial {...editorialProps} />
    }

    if (node.Root) {
      const sectionProps = {
        key: index,
        body: node.Root,
        node,
        index,
        className: node.className,
        style: node.style,
      }

      return <Section {...sectionProps} />
    }

    if (node.Share) {
      const { href } = node.Share
      const shareProps = { href }

      return <Share {...shareProps} />
    }

    // TODO: Change term to appelation.
    // @ts-ignore
    if (node.Definition) {
      const {
        term,
        body,
        // @ts-ignore
      } = node.Definition

      const definitionProps = {
        term,
        body,
      }

      return <Definition {...definitionProps} />
    }

    // @ts-ignore
    if (node.Figure) {
      const {
        content,
        caption,
        // @ts-ignore
      } = node.Figure

      const figureProps = {
        content,
        caption,
      }

      return <Figure {...figureProps} />
    }

    // @ts-ignore
    if (node.SkillFindLogo) {
      return <SkillFindLogoLogoAndTitle />
    }

    // @ts-ignore
    if (node.MapawynajmuPlLogoAndTitle) {
      // @ts-ignore
      const { scale } = node

      // @ts-ignore
      return <MapawynajmuPlLogoAndTitle scale={scale} />
    }

    // @ts-ignore
    if (node.kind) {
      // @ts-ignore
      const component = elements[node.kind]

      // @ts-ignore
      if (component) {
        return (
          // @ts-ignore
          React.createElement(component, node.props, node.text || node.nodes)
        )
      }
    }

    return null
  } catch {
    return <div>ERROR</div>
  }
}
