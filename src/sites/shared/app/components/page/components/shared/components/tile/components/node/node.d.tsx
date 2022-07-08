type HeadingType = {
  c: string
  n: string
} | string

type NodeType = {
  t: string
  h2: HeadingType
  h3: HeadingType
  h4: HeadingType

} | string | string[]

interface NodeProps {
  node: NodeType
  index: number
  jsonBody: NodeType[]
}
