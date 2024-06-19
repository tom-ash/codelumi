import React from 'react'
import Image from '../../../../../../../shared/app/components/support/image/image'
import { PostingIndexTileIndustry } from '../../index/components/components/industry/industry'
import { Link } from '../../../../../../../shared/app/components/support/link/link'
import { FloatClear } from '../../../../../../../shared/app/components/support/float-clear/float-clear'

interface CompanyInterface {
  (props: {
    logo: string
    businessName: string
    link?: string;
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
  const { logo, businessName, industry, backgroundColor, textColor, isPreview, link } = props

  return (
    <div className='company'>
      <div className='company-logo'>
        <Image
          src={logo}
          alt='warsaw-digital'
          crossOrigin={isPreview ? 'anonymous' : undefined}
        />
      </div>
      <div
        className='business-name-and-industry'
        style={{
          backgroundColor,
        }}
      >
        <div
          className='business-name'
          style={{
            color: textColor,
          }}
        >
          {link ? (
            <Link
              href={link}
              label={businessName}
              title={businessName}
            />
          ) : businessName}
        </div>
        <PostingIndexTileIndustry
          industry={industry.label}
          icon={industry.icon}
          textColor={textColor}
        />
      </div>
      <FloatClear />
    </div>
  )
}
