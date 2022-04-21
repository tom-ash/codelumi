import React from "react"

type imageAttrs = {
  crossorigin: 'anonymous'
}

type imageNode = string | {
  t?: string,
  c?: string,
  attrs?: imageAttrs
}

interface OutputProps {
  width: string,
  height: string,
  bodyElements: imageNode[]
}

const Output = (props: OutputProps) => {
  const { width, height, bodyElements } = props

  return (
    <div
      id='image-output'
      className='output'
      style={{
        width: +width,
        height: +height
      }}
    >
      {bodyElements.map((bodyElement, index) => {
        if (!bodyElement) return null
        if (typeof bodyElement === 'string') return <div dangerouslySetInnerHTML={{ __html: bodyElement }} />
        if (!bodyElement.t) return null

        if (bodyElement.t === 's') {
          const css = bodyElement.c
          const head = document.head
          const style = document.createElement('style')
          head.appendChild(style)
          style.type = 'text/css'
          style.appendChild(document.createTextNode(css))
          return
        }

        const tag = bodyElement.t
        const content = bodyElement.c
        const attrs = { ...bodyElement.attrs, key: index }

        if (tag === 'img') {
          attrs['crossorigin'] = 'anonymous'
        }

        return React.createElement(tag, attrs, content)
      })}
    </div>
  )
}

export default Output
