import React from 'react'

import Image from '../../../../../../../../shared/app/components/support/image/image'
import { PostingIndexTileIndustry } from '../../../index/components/components/industry/industry'

interface CompanyInterface {
  (props: {
    logo: string;
    businessName: string;
    industry: {
      value: string;
      label: string;
      icon: string;
    }
  }): React.ReactElement | null
}

export const Company: CompanyInterface = (props) => {
  const {
    logo,
    businessName,
    industry,
  } = props

  return (
    <div className='company'>
    <div className='background' />
    <div className='company-logo'>
      <Image
        src={logo}
        alt='warsaw-digital'
        crossOrigin='anonymous'
      />
    </div>
    <div className='business-name'>{businessName}</div>
    <PostingIndexTileIndustry
      industry={industry.label}
      icon={industry.icon}
    />
  </div>
  )
}
