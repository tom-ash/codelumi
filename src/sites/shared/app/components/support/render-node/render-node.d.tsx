type RenderNodeData = string | string[] | {
  pageIndexer?: {
    collection: string
  }
  article?: RenderNodeData[]
  header?: {
    t: string
    a?: {
      n: string
      l: string
    }
    i?: {
      s: string
      a: string
      ar: string
    }
    l?: {
      s: string
      a: string
    }
  }
  editorial?: string
  toc?: string
  main?: RenderNodeData[]
  h2?: string | {
    c: string
    n: string
  }
  h3?: string | {
    c: string
    n: string
  }
  h4?: string | {
    c: string
    n: string
  }
  img?: {
    s: string
    a: string
  }
  code?: string | {
    c: string
    l: string
  }
  yte?: {
    s: string
    w: string
  }
  className?: string
}

type RenderNodeProps = {
  node: RenderNodeData
  index: number
  jsonBody: RenderNodeData[]
  jsonMeta?: { codeLang: string }
  clientUrl: string
  tutorials?: Array<any>
  articles?: Array<any>
  sectionBody?: RenderNodeData[]
  publishedOn?: string
  modifiedOn?: string
  appName: string
  device: string
  lang: string
  changeRoute: ChangeRoute
  langHandler: LangHandler
}
