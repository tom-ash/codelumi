import React, { useContext} from 'react'
import { ManagedButton } from 'managed-inputs'
import { submit } from '../functions/submit'
import { useStore } from 'react-redux'
import AppContext from '../../../../../../../constants/context'

const SubmitButton = () => {
  const { changeRoute } = useContext(AppContext)
  const state = useStore().getState()
  const { app: { lang }, texts, inputs } = state
  const { submit } = texts
  const {
    selectedSkills,
    // remote,
    // hybrid,
    // office,
    // b2b,
    // b2bMax,
    // b2bMin,
    // employment,
    // employmentMax,
    // employmentMin,
    // civilContract,
    // civilContractMax,
    // civilContractMin,
  } = inputs

  const buttonProps = {
    classNames: { container: 'submit-button' },
    label: submit,
    onClick: () => submit({
      lang,
      selectedSkills,
      changeRoute,
      // remote,
      // hybrid,
      // office,
      // b2b,
      // b2bMax,
      // b2bMin,
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
