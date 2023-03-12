import React from 'react'
import { useStore } from '../../../../../../../../shared/app/functions/store/useStore'
import { UserEditCell as Cell } from '../common/cell/cell'
import { Explanation } from '../../../../../../../../shared/app/components/support/explanation/explanationt'
import { BusinessNameInput } from '../../../../../../../../shared/app/components/user/components/new/components/form/components/business-name/business-name.input'
import { SubmitBusinessNameButton } from './components/submit-business-name'

export const UserEditBusinessName = () => {
  const cellProps = {
    attrName: 'businessName'
  }

  const { state } = useStore()
  const { texts } = state
  const {
    businessNameInputExplanation,
  } = texts

  return (
    <Cell {...cellProps}>
      <Explanation explanation={businessNameInputExplanation} />
      <BusinessNameInput />
      <SubmitBusinessNameButton />
    </Cell>
  )
}
