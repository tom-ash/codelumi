import React from 'react'
import { ApplicationManner, ApplicationMannerEnum } from './components/application-manner/application-manner'
import { SectionHeading } from '../../../../../../../../../../shared/app/components/support/headings/section-heading'
import { InstructionsDeprecated } from '../../../../../../../../../../shared/app/components/support/instructions_deprecated/instructions_deprecated'
import { useTexts } from '../../../../../../../../../../shared/app/functions/store/use-texts'
import { ApplicationLink } from './components/application-link/application-link'
import { useInputs } from '../../../../../../../../../../shared/app/functions/store/use-inputs'
import { useErrors } from '../../../../../../../../../../shared/app/functions/store/use-errors'

export const Application = () => {
  const { applicationSectionInstructions } = useTexts()
  const { linkApplicationManner } = useInputs()

  const { isApplicationError: isError } = useErrors()

  const classNames = ['application']
  if (isError) {
    classNames.push('error')
  }

  return (
    <section
      id='application'
      className={classNames.join(' ')}
    >
      <SectionHeading name='application' />
      <InstructionsDeprecated text={applicationSectionInstructions} />
      <ApplicationManner name={ApplicationMannerEnum.FORM} />
      <ApplicationManner name={ApplicationMannerEnum.LINK} />
      {linkApplicationManner && <ApplicationLink />}
    </section>
  )
}
