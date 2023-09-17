import React from 'react'
import { UserEditCell as Cell } from '../common/cell/cell'
import { Explanation } from '../../../../../../../../shared/app/components/support/explanation/explanationt'
import { BusinessNameInput } from '../../../../../../../../shared/app/components/user/components/new/components/form/components/business-name/business-name.input'
import { SubmitBusinessNameButton } from './components/submit-business-name-button'
import { useTexts } from '../../../../../../../../shared/app/functions/store/use-texts'

export const UserEditBusinessName = () => {
  const cellProps = {
    attrName: 'businessName',
  }
  const { businessNameInputExplanation } = useTexts()

  return (
    <Cell {...cellProps}>
      <Explanation explanation={businessNameInputExplanation} />
      <BusinessNameInput />
      <SubmitBusinessNameButton />
    </Cell>
  )
}
