import React from 'react'
import Image from '../../../../../../../shared/app/components/support/image/image'
import { PostingIndexTileIndustry } from '../../index/components/components/industry/industry'

interface CompanyInterface {
  (props: {
    logo: string
    businessName: string
    industry: {
      value: string
      label: string
      icon: string
    }
    backgroundColor?: string
    textColor?: string
    isPreview?: boolean
  }): React.ReactElement | null
}

export const Company: CompanyInterface = props => {
  const { logo, businessName, industry, backgroundColor, textColor, isPreview } = props

  return (
    <div
      className='company'
      style={{
        backgroundColor,
      }}
    >
      <div className='company-logo'>
        <Image
          src={logo}
          alt='warsaw-digital'
          crossOrigin={isPreview ? 'anonymous' : undefined}
        />
      </div>
      <div
        className='business-name'
        style={{
          color: textColor,
        }}
      >
        {businessName}
      </div>
      <PostingIndexTileIndustry
        industry={industry.label}
        icon={industry.icon}
        textColor={textColor}
      />
    </div>
  )
}
