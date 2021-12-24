import nodeParser from "../components/node-parser/node-parser"

const jsonToJsxParser = props => {
  const { jsonBody } = props
  const jsx = jsonBody.map((node, index) => nodeParser({ ...props, node, index }))

  return jsx
}

export default jsonToJsxParser
