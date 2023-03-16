import React from 'react'
import { RenderNode } from '../../../../../support/render-node/render-node'
import { changeUrl } from '../../../../../../functions/routes/changers/change-url'

interface OutputProps {
  width: string
  height: string
  bodyElements: RenderNodeData[]
  clientUrl: string
  appName: string
  device: string
  lang: string
  langHandler: LangHandler
}

const Output = (props: OutputProps) => {
  const { width, height, bodyElements, clientUrl, appName, device, lang, langHandler } = props

  const nodeProps = {
    node: {
      root: bodyElements,
    },
    jsonBody: bodyElements,
    clientUrl,
    appName,
    device,
    lang,
    changeUrl,
    langHandler,
  }

  return (
    <div
      id='image-output'
      className='output'
      style={{
        width: +width,
        height: +height,
        outline: '1px solid #E5E7E9',
      }}
    >
      <RenderNode {...nodeProps} />
    </div>
  )
}

export default Output
