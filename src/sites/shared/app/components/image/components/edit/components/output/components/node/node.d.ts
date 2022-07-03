export type AttrsProps = {
  crossorigin?: 'anonymous'
}

export type NodeProps = {
  t: string,
  c?: string,
  attrs?: AttrsProps,
  children?: NodeProps[]
}
