type RenderNodeData =
  | string
  | string[]
  | {
      pageIndexer?: {
        collection: string
      }
      root?: RenderNodeData[]
      main?: RenderNodeData[]
      article?: RenderNodeData[]
      section?: RenderNodeData[]
      division?: RenderNodeData[]
      // leftAside?: RenderNodeData[]
      // aside?: RenderNodeData[]
      editorial?: string
      tableOfContents?: string
      ul?: string[]
      h1?: string
      h2?: string
      h3?: string
      h4?: string
      image?: {
        source: string
        alternative: string
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
      style?: React.CSSProperties
      codeLang?: string
      id?: string
    }

type RenderNodeProps = {
  node: RenderNodeData
  index?: number
  tutorials?: Array<any>
  articles?: Array<any>
  codeLang?: string
}
