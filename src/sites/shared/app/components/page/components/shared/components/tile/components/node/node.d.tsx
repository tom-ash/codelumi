type HeadingData = string | {
  c: string
  n: string
}

type ImgData = {
  s: string
  a: string
}

type CodeData = string | {
  c: string
  l: string
}

type YouTubeEmbedData = {
  s: string
  w: string
}

type PageIndexerData = {
  collection: string
}

type NodeData = string | string[] | {
  h2?: HeadingData
  h3?: HeadingData
  h4?: HeadingData
  img?: ImgData
  code?: CodeData
  yte?: YouTubeEmbedData
  main?: NodeData[]
  article?: NodeData[]
  className?: string
  pageIndexer?: PageIndexerData
}

interface NodeProps {
  node: NodeData
  index: number
  jsonBody: NodeData[]
  jsonMeta: { codeLang: string }
  changeRoute(): void
  clientUrl: string
  tutorials?: Array<any>
  articles?: Array<any>
}
