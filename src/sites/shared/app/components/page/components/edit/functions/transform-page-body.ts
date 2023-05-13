// @ts-ignore
import parameterize from 'parameterize'

let headingTwoIdentifier: string

// TODO: TS!
export const transformPageBody = (node: any) => {
  if (Array.isArray(node)) {
    node.map(node => transformPageBody(node))
  } else if (typeof node === 'object') {
    if (node.Section) {
      const headingTwoNode = node.Section.find((subnode: any) => subnode.HeadingTwo)

      if (headingTwoNode) {
        headingTwoIdentifier = parameterize(headingTwoNode.HeadingTwo)
        node.identifier = headingTwoIdentifier
      }

      const headingThreeNode = node.Section.find((subnode: any) => subnode.HeadingThree)

      if (headingThreeNode) {
        node.identifier = `${headingTwoIdentifier}-${parameterize(headingThreeNode.HeadingThree)}`
      }
    }

    for (const subnode in node) {
      transformPageBody(node[subnode])
    }
  }
}
