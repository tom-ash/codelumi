import React from 'react'
import Node from '../../../../../page/components/shared/components/tile/components/node/node'

interface OutputProps {
  width: string,
  height: string,
  bodyElements: NodeData[],
  clientUrl: string
  appName: string
  device: string
  lang: string
  changeRoute(props: object): void
  langHandler(): void
}

const Output = (props: OutputProps) => {
  const {
    width,
    height,
    bodyElements,
    // jsonMeta,
    clientUrl,
    appName,
    device,
    lang,
    changeRoute,
    langHandler
  } = props

  return (
    <div
      id='image-output'
      className='output'
      style={{
        width: +width,
        height: +height
      }}
    >
      {bodyElements.map((node, index) => {
        const nodeProps = {
          node,
          index,
          jsonBody: bodyElements,
          // jsonMeta,
          clientUrl,
          appName,
          device,
          lang,
          changeRoute,
          langHandler
        }

        // @ts-ignore
        return <Node {...nodeProps} />
      })}
    </div>
  )
}

export default Output
