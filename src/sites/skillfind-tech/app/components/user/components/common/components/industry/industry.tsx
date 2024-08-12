import React from 'react'
import { Select } from '../../../../../../../../shared/app/components/support/select/select'
import { useInputs } from '../../../../../../../../shared/app/functions/store/use-inputs'
import { SVG } from '../../../../../../../../shared/app/components/support/svg/svg'

export const Industry = (props: { isEdited?: boolean }) => {
  const { isEdited } = props
  const { industry: industryValue, industrySelectOptions } = useInputs()

  const industry = industrySelectOptions.find((industrySelectOption: any) => {
    return industrySelectOption.value === industryValue
  })

  return (
    <div className='industry'>
      <div className='icon'>
        <SVG name={industry.icon} />
      </div>
      <Select
        selectKey='industry'
        required={true}
        className='select'
        disabled={!isEdited}
      />
    </div>
  )
}
