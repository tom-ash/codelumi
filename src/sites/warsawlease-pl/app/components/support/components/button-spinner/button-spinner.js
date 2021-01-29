import React from 'react'
import WindmillSpinner from '../spinner/components/windmill/windmill'

export default function ButtonSpinner({ connecting, label, langObjHandler }) {
  if (connecting) return <WindmillSpinner spinnerClass='very-small-windmill-spinner'/>

  return langObjHandler(label)
}
