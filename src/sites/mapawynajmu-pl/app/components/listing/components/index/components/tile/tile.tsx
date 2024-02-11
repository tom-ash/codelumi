import React from 'react'
import loadable from '@loadable/component'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { Area } from '../../../common/area/area'
import { Rent } from '../../../common/rent/rent'

const Heading = loadable(() => import('../../../show/components/tile/components/heading'))
const Pictures = loadable(() => import('../../../show/components/tile/components/pictures/pictures'))

interface Picture {
  database: string
}

interface ListingIndexTileInterface {
  (props: {
    href: string
    id: number
    category: number
    lang: string
    title: string
    name?: string
    locality: string
    sublocality?: string
    pictures: Picture[]
    disableSlides: boolean
    area?: number
    rentAmount?: number
    rentCurrency?: number
    isPromoted?: boolean
    children?: React.ReactNode
    onClick?: (e: React.SyntheticEvent) => void
    onMouseOver?: () => void
    onMouseLeave?: () => void
  }): React.ReactElement
}

export const ListingIndexTile: ListingIndexTileInterface = props => {
  useStyles(styles)

  const {
    href,
    id,
    title,
    pictures,
    name,
    category,
    locality,
    sublocality,
    lang,
    rentAmount,
    rentCurrency,
    area,
    isPromoted,
    children,
    onClick,
    onMouseOver,
    onMouseLeave,
    disableSlides,
  } = props

  const classNames = ['listing-index-tile']
  if (isPromoted) {
    classNames.push('promoted')
  }

  const tileProps = {
    href,
    className: classNames.join(' '),
    onClick,
    onMouseOver,
    onMouseLeave,
  }
  const picturesProps = {
    id,
    title,
    pictures,
    disableSlides,
  }
  const headingProps = {
    name,
    category,
    locality,
    sublocality,
    lang,
  }
  const areaProps = {
    area,
  }
  const rentProps = {
    rentAmount,
    rentCurrency,
  }

  // TODO: @ts-ignores

  return (
    <a {...tileProps}>
      <Pictures {...picturesProps} />
      <div className='primary'>
        {/* @ts-ignore */}
        <Heading {...{ ...headingProps, tier: 2 }} />
        {/* @ts-ignore */}
        <Area {...areaProps} />
        {/* @ts-ignore */}
        <Rent {...rentProps} />
      </div>
      {children}
    </a>
  )
}
