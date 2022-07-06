import nodeParser from "../components/node-parser/node-parser"

const jsonToJsxParser = props => {
  const { jsonBody } = props

  const main = jsonBody.map((node, index) => {
    if (!node) return null
    
    return nodeParser({ ...props, node, index })
  })

  return main
}

export default jsonToJsxParser
