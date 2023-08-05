import React from 'react'
import loadable from '@loadable/component'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { Area } from '../../../common/area/area'
import { Rent } from '../../../common/rent/rent'

const Heading = loadable(() => import('../../../common/tile/components/heading'))
const Pictures = loadable(() => import('../../../common/tile/components/pictures/pictures'))

interface Picture {
  database: string
}

interface ListingIndexTileInterface {
  (props: {
    id: number
    title: string
    pictures: Picture[]
    disableSLides: boolean
    name: string
    category: number
    locality: string
    sublocality: string
    lang: string
    amount: number
    currency: number
    area: number
  }): React.ReactElement
}

export const ListingIndexTile: ListingIndexTileInterface = props => {
  useStyles(styles)

  const { id, title, pictures, disableSLides, name, category, locality, sublocality, lang, amount, currency, area } = props
  const picturesProps = {
    id,
    title,
    pictures,
    disableSLides,
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
    amount,
    currency,
  }

  return (
    <div className='listing-index-tile'>
      <Pictures {...picturesProps} />
      <Heading {...{ ...headingProps, tier: 2 }} />
      <Area {...areaProps} />
      <Rent {...rentProps} />
    </div>
  )
}
