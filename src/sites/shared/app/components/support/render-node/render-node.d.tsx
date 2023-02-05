type RenderNodeData =
  | string
  | string[]
  | {
      pageIndexer?: {
        collection: string
      }
      page?: RenderNodeData[]
      image?: RenderNodeData[]
      section?: RenderNodeData[]
      article?: RenderNodeData[]
      main?: RenderNodeData[]
      div?: RenderNodeData[]
      sectionBody?: RenderNodeData[]
      leftAside?: RenderNodeData[]
      aside?: RenderNodeData[]
      header?: {
        imageSrc?: string
        imageAlt?: string
        authorName?: string
        authorLink?: string
        title?: string
      }
      editorial?: string
      toc?: string
      ul?: string[]
      h1?: string
      h2?:
        | string
        | {
            c: string
            n: string
          }
      h3?:
        | string
        | {
            c: string
            n: string
          }
      h4?:
        | string
        | {
            c: string
            n: string
          }
      img?: {
        s: string
        a: string
      }
      anchor?: {
        h: string
        r: string
        t: string
        c: string
      }
      code?:
        | string
        | {
            c: string
            l: string
          }
      yte?: {
        s: string
        w: string
      }
      share?: {
        h: string
      }
      className?: string
      st?: React.CSSProperties
      style?: React.CSSProperties
      opts?: object
      index?: number
      codeLang?: string
      id?: string
    }

type RenderNodeProps = {
  node: RenderNodeData
  index?: number
  jsonBody: RenderNodeData[]
  sectionBody?: RenderNodeData[]
  publishedOn?: string
  modifiedOn?: string
  tutorials?: Array<any>
  articles?: Array<any>
  clientUrl: string
  appName: string
  device: string
  lang: string
  changeRoute: ChangeRoute
  langHandler: LangHandler
  pageTitle?: string
  coverImage?: string
  codeLang?: string
}
