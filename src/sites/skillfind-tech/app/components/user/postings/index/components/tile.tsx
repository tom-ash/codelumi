import React from 'react'
import { PostingIndexTile, PostingTileProps } from '../../../../posting/components/index/components/tile/tile'
import { Link } from '../../../../../../../shared/app/components/support/link/link'

interface TileInterface {
  (
    props: PostingTileProps & {
      createdAt: string
      expiresAt: string
      editHref: string
      setControl(params: any): void
      createdAtLabel: string
      expiresAtLabel: string
      editLabel: string
      deleteLabel: string
    }
  ): React.ReactElement
}

export const Tile: TileInterface = props => {
  const {
    id,
    href,
    businessName,
    industry,
    industryIcon,
    b2bMin,
    b2bMax,
    b2bCurrency,
    employmentMin,
    employmentMax,
    employmentCurrency,
    skills,
    logo,
    locality,
    country,
    cooperationMode,
    position,
    createdAtLabel,
    createdAt,
    expiresAtLabel,
    expiresAt,
    editLabel,
    editHref,
    deleteLabel,
    setControl,
  } = props

  return (
    <div>
      <PostingIndexTile
        id={id}
        href={href}
        logo={logo}
        position={position}
        cooperationMode={cooperationMode}
        locality={locality}
        country={country}
        b2bMin={b2bMin}
        b2bMax={b2bMax}
        b2bCurrency={b2bCurrency}
        employmentMin={employmentMin}
        employmentMax={employmentMax}
        employmentCurrency={employmentCurrency}
        skills={skills}
        // Needed?
        businessName={businessName}
        industry={industry}
        industryIcon={industryIcon}
      />
      <div className='panel'>
        <div className='meta'>
          <div className='created-at'>
            <label>{createdAtLabel}</label>
            <div className='value'>{createdAt}</div>
          </div>
          <div className='expires-at'>
            <label>{expiresAtLabel}</label>
            <div className='value'>{expiresAt}</div>
          </div>
        </div>
        <div className='buttons'>
          <Link
            href={editHref}
            customClassNames='edit'
            label={editLabel}
          />
          <button
            className='delete'
            onClick={() => {
              setControl({ deletedPosting: id })
            }}
          >
            {deleteLabel}
          </button>
        </div>
      </div>
    </div>
  )
}
