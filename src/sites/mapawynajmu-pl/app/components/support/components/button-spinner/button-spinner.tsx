import React from 'react'
import Spinner from '../spinner/components/windmill/windmill'

interface ButtonSpinnerProps {
  connecting: boolean
  label: string
}

export const ButtonSpinner = (props: ButtonSpinnerProps) => {
  const { connecting, label } = props

  return connecting ? <Spinner spinnerClass='button-spinner' /> : <>{label}</>
}

// @ts-ignore
function ButtonSpinnerDeprecated({ connecting, label, langHandler }) {
  if (connecting) return <Spinner spinnerClass='button-spinner' />

  return langHandler(label)
}

export default ButtonSpinnerDeprecated
