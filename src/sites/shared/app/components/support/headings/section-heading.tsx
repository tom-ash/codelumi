import React from 'react'
import { useTexts } from '../../../functions/store/use-texts'
import { SVG } from '../svg/svg'

interface SectionHeadingInterface {
  (props: { name: string, icon?: string }): React.ReactElement
}

export const SectionHeading: SectionHeadingInterface = props => {
  const { name, icon } = props
  const { [`${name}SectionHeading`]: heading } = useTexts()
  const className = 'section-heading'

  if (icon) {
    return (
      <div className={className}>
        <SVG name={icon} />
        <h2>{heading}</h2>
      </div>
    )
  }

  return <h2 className={className}>{heading}</h2>
}
