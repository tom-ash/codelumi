interface AsideProps {
  node: RenderNodeData
  sectionBody: RenderNodeData[]
  jsonBody: RenderNodeData[]
  clientUrl: string
  appName: string
  device: string
  lang: string
  langHandler: LangHandler
  placing: 'left' | 'right'
}
