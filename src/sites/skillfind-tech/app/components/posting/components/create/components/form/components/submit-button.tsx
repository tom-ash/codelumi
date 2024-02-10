import React from 'react'
import { ManagedButton } from 'managed-inputs'
import { submit } from '../functions/submit'
import { useApp } from '../../../../../../../../../shared/app/functions/store/use-app'
import { useTexts } from '../../../../../../../../../shared/app/functions/store/use-texts'
import { useInputs } from '../../../../../../../../../shared/app/functions/store/use-inputs'

const SubmitButton = () => {
  const { lang } = useApp()
  const texts = useTexts()
  const inputs = useInputs()

  const {
    selectedSkills,
    businessName,
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
        businessName,
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
