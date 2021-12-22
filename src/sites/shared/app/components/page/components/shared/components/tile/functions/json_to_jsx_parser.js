import nodeParser from "../components/node-parser/node-parser"

const jsonToJsxParser = props => {
  const { jsonBody } = props

  const jsx = jsonBody.map(function(node, index) {
    return nodeParser({ node, index, ...props })
  })

  return jsx
}

export default jsonToJsxParser
