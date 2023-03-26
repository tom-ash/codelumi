// @ts-ignore
import parameterize from 'parameterize'
  
// TODO: TS!
export const transformPageBody = (node: any) => {
  if (Array.isArray(node)) {
    node.map(node => transformPageBody(node))
  } else if (typeof node === 'object') {
    if (node.Section) {
      const headingTwo = node.Section.find((subnode: any) => subnode.HeadingTwo).HeadingTwo

      node.identifier = parameterize(headingTwo)
    }

    for (const subnode in node) {
      transformPageBody(node[subnode])
    }
  }
}
