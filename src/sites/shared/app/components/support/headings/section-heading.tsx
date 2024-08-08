import React from 'react'
import { useTexts } from '../../../functions/store/use-texts'
import { SVG } from '../svg/svg'

interface SectionHeadingInterface {
  (props: { name: string; icon?: string; suffix?: React.ReactElement }): React.ReactElement
}

export const SectionHeading: SectionHeadingInterface = props => {
  const { name, icon, suffix } = props
  const { [`${name}SectionHeading`]: heading } = useTexts()

  if (icon || suffix) {
    return (
      <div className='section-heading'>
        {icon && <SVG name={icon} />}
        <h2>{heading}</h2>
        {suffix && suffix}
      </div>
    )
  }

  return (
    <h2 className='section-heading'>{heading}</h2>
  )
}
