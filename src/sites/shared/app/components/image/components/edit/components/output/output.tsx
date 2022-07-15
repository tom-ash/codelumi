import React from 'react'
import RenderNode from '../../../../../support/render-node/render-node'

interface OutputProps {
  width: string,
  height: string,
  bodyElements: RenderNodeData[],
  clientUrl: string
  appName: string
  device: string
  lang: string
  changeRoute(props: object): void
  langHandler: LangHandler
}

const Output = (props: OutputProps) => {
  const {
    width,
    height,
    bodyElements,
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
          clientUrl,
          appName,
          device,
          lang,
          changeRoute,
          langHandler,
          key: index
        }

        
        return <RenderNode {...nodeProps} />
      })}
    </div>
  )
}

export default Output
