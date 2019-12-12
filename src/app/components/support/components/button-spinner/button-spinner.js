import React from 'react'
import WindmillSpinner from '../spinner/components/windmill/windmill'

export default function ButtonSpinner({ connecting, label, languageObjectHandler }) {
  if (connecting) return <WindmillSpinner spinnerClass='very-small-windmill-spinner'/>

  return languageObjectHandler(label)
}
