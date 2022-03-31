import React from "react"
import { ManagedTextarea } from "managed-inputs"

//@ts-ignore
function Body(props) {
  const classNames = { container: 'form-input textarea' }

  const textareaProps = {
    classNames
  }

  return <ManagedTextarea {...textareaProps} />
}

export default Body
