import React from 'react'
import './styles/styles.scss'

const WindmillSpinner = (props) => {
  return (
    <div className={props.spinnerClass}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default WindmillSpinner;