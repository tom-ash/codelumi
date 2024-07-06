import React from 'react'
import Image from '../../../../../../../shared/app/components/support/image/image'
import { PostingIndexTileIndustry } from '../../index/components/components/industry/industry'
import { Link } from '../../../../../../../shared/app/components/support/link/link'
import { FloatClear } from '../../../../../../../shared/app/components/support/float-clear/float-clear'

interface CompanyInterface {
  (props: {
    logo: string
    businessName: string
    link?: string
    industry: {
      value: string
      label: string
      icon: string
    }
    isPreview?: boolean
  }): React.ReactElement | null
}

export const Company: CompanyInterface = props => {
  const { logo, businessName, industry, isPreview, link } = props

  return (
    <div className='company'>
      <div className='company-logo'>
        <Image
          src={logo}
          alt='warsaw-digital'
          crossOrigin={isPreview ? 'anonymous' : undefined}
        />
      </div>
      <div className='business-name-and-industry'>
        <div className='business-name'>
          {link ? (
            <Link
              href={link}
              label={businessName}
              title={businessName}
            />
          ) : (
            businessName
          )}
        </div>
        <PostingIndexTileIndustry
          industry={industry.label}
          icon={industry.icon}
        />
      </div>
      <FloatClear />
    </div>
  )
}
