import React from 'react'
import loadable from '@loadable/component'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { Rent } from '../../../common/rent/rent'

const Heading = loadable(() => import('../../../common/tile/components/heading'))
const Pictures = loadable(() => import('../../../common/tile/components/pictures/pictures'))

interface Picture {
  database: string
}

interface ListingIndexTileInterface {
  (props: {
    id: number;
    title: string;
    pictures: Picture[],
    disableSLides: boolean,
    name: string;
    category: number;
    locality: string;
    sublocality: string;
    lang: string;
    amount: number;
    currency: number;
  }): React.ReactElement
}

{/* <PrimaryData {...primaryDataProps} /> */}

// const primaryDataProps = {
//   lang,
//   category,
//   area,
//   netRentAmount,
//   netRentAmountPerSqm,
//   grossRentAmount,
//   grossRentAmountPerSqm,
//   rentCurrency,
//   rooms,
//   floor,
//   totalFloors,
//   availabilityDate,
//   showPrimary,
// }

export const ListingIndexTile: ListingIndexTileInterface = (props) => {
  useStyles(styles)

  const {
    id,
    title,
    pictures,
    disableSLides,
    name,
    category,
    locality,
    sublocality,
    lang,
    amount,
    currency,
  } = props

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

  const rentProps = {
    amount,
    currency,
    // type,
  }

  return (
    <div className='listing-index-tile'>
      <Pictures {...picturesProps} />
      <Heading {...{ ...headingProps, tier: 2 }} />
      <Rent {...rentProps} />
      {/* <PrimaryData {...primaryDataProps} /> */}
      {/* {control} */}
    </div>
  )

}
