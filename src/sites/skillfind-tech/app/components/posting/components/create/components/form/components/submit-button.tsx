import React from 'react'
import { ManagedButton } from 'managed-inputs'
import { submit } from '../functions/submit'
import { useStore } from 'react-redux'

const SubmitButton = () => {
  const state = useStore().getState()
  const {
    app: { lang },
    texts,
    inputs,
  } = state
  const {
    selectedSkills,
    // remote,
    // hybrid,
    // office,
    b2b,
    b2bMax,
    b2bMin,
    // employment,
    // employmentMax,
    // employmentMin,
    // civilContract,
    // civilContractMax,
    // civilContractMin,
  } = inputs

  const buttonProps = {
    classNames: { container: 'submit-button' },
    label: texts.submit,
    onClick: () =>
      submit({
        lang,
        selectedSkills,
        // remote,
        // hybrid,
        // office,
        b2b,
        b2bMax,
        b2bMin,
        // employment,
        // employmentMax,
        // employmentMin,
        // civilContract,
        // civilContractMax,
        // civilContractMin,
      }),
  }

  return <ManagedButton {...buttonProps} />
}

export default SubmitButton
