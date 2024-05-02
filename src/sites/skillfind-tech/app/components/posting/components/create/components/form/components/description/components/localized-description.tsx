import React from 'react'
import { useDispatch } from 'react-redux'
import { ManagedCheckbox } from 'managed-inputs'
import { useApp } from '../../../../../../../../../../../shared/app/functions/store/use-app'
import { useInputs } from '../../../../../../../../../../../shared/app/functions/store/use-inputs'
import { useTexts } from '../../../../../../../../../../../shared/app/functions/store/use-texts'

let ReactQuill: any
if (typeof window !== 'undefined') {
  ReactQuill = require('react-quill')
}

interface LocalizedDescriptionInterface {
  (props: { lang: Lang }): React.ReactElement
}

const capitalize = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const LocalizedDescription: LocalizedDescriptionInterface = props => {
  const { lang } = props
  const capitalizedLang = capitalize(lang)
  const { isDocumentReady } = useApp()
  const descriptionKey = `${lang}Description`
  const addDescriptionKey = `add${capitalizedLang}Description`
  const { [`${addDescriptionKey}Label`]: label } = useTexts()
  const { [addDescriptionKey]: addDescription, [descriptionKey]: description } = useInputs()
  const dispatch = useDispatch()
  const setInputs = (value: any) => dispatch({ type: 'inputs', value })

  return (
    <section className={lang}>
      <ManagedCheckbox
        classNames={{ container: 'form-input checkbox' }}
        checked={addDescription}
        label={label}
        onClick={() => setInputs({ [addDescriptionKey]: !addDescription })}
      />
      {isDocumentReady && addDescription && (
        <ReactQuill
          theme='snow'
          value={description}
          onChange={(value: any) => {
            setInputs({ [descriptionKey]: value })
          }}
        />
      )}
    </section>
  )
}
