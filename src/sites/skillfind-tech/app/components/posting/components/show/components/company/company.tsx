import React from 'react'
import { useData } from '../../../../../../../../shared/app/functions/store/use-data'
import { Company as CompanyPartial } from '../../../common/company/company'

interface CompanyInterface {
  (props: {}): React.ReactElement
}

export const Company: CompanyInterface = () => {
  const {
    posting: { logo, businessName, industry, backgroundColor, textColor, posterLink: link },
  } = useData()

  return (
    <CompanyPartial
      logo={logo}
      businessName={businessName}
      link={link}
      industry={industry}
      backgroundColor={backgroundColor}
      textColor={textColor}
    />
  )
}
