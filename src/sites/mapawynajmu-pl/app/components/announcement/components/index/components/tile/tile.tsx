import React from 'react'
import loadable from '@loadable/component'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { Area } from '../../../common/area/area'
import { Rent } from '../../../common/rent/rent'
import { FloatClear } from '../../../../../../../../shared/app/components/support/float-clear/float-clear'

const Heading = loadable(() => import('../../../common/tile/components/heading'))
const Pictures = loadable(() => import('../../../common/tile/components/pictures/pictures'))

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
    name: string
    locality: string
    sublocality: string
    pictures: Picture[]
    disableSLides: boolean
    area: number
    rentAmount: number
    rentCurrency: number
    onClick?: (e: React.SyntheticEvent) => void;
    onMouseOver?: () => void;
    onMouseLeave?: () => void;
  }): React.ReactElement
}

export const ListingIndexTile: ListingIndexTileInterface = props => {
  useStyles(styles)

  const { href, id, title, pictures, name, category, locality, sublocality, lang, rentAmount, rentCurrency, area,
    onClick, onMouseOver, onMouseLeave,
  } = props
  const tileProps = {
    href,
    className: 'listing-index-tile',
    onClick,
    onMouseOver,
    onMouseLeave,
  }
  const picturesProps = {
    id,
    title,
    pictures,
    disableSLides: true,
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

  // const firstPicture = `${AWS_S3_URL}/announcements/${id}/${picture.database}`

  return (
    <a {...tileProps}>
      <Pictures {...picturesProps} />
      <div className='primary'>
        <Heading {...{ ...headingProps, tier: 2 }} />
        <Area {...areaProps} />
        <Rent {...rentProps} />
      </div>
      <FloatClear />
    </a>
  )
}
