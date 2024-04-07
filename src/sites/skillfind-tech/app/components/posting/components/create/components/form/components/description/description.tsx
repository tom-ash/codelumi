import React from 'react';
import { useInputs } from '../../../../../../../../../../shared/app/functions/store/use-inputs';
import { useDispatch } from 'react-redux';
import { useApp } from '../../../../../../../../../../shared/app/functions/store/use-app';

let ReactQuill: any;
if (typeof window !== 'undefined') {
  ReactQuill = require('react-quill')
}

export const Description = () => {
  const { isDocumentReady } = useApp()
  const { description } = useInputs()
  const dispatch = useDispatch()
  const setInputs = (value: any) => dispatch({ type: 'inputs', value })

  return (
    <section className='description'>
      <h2>DESCRIPTION</h2>
      {isDocumentReady && <ReactQuill
        theme="snow"
        value={description}
        onChange={(value: any) => {
          setInputs({ description: value })
        }}
      />}
    </section>
  )
}
