import React from 'react'
import { TextInput } from './components/text-input/text-input'
import { DeleteButton } from './components/delete/delete.button'
import { deleteAsset } from './functions/delete/delete'
import { AddButton } from './components/create/create.button'
import { UpdateButton } from './components/update/update.button'
import { updateAsset } from './functions/update/update'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { useData } from '../../../../../../shared/app/functions/store/use-data'

const Index = () => {
  useStyles(styles)

  const { assets } = useData()

  return (
    <div id='asset-index'>
      <AddButton />
      {assets.map((asset: any, index: number) => {
        const { id, name, pathData, viewBox } = asset

        return (
          <div key={id}>
            <span className='id'>{id}</span>
            <TextInput
              id={id}
              fieldName='name'
              value={name}
              index={index}
            />
            <TextInput
              id={id}
              fieldName='pathData'
              value={pathData}
              index={index}
            />
            <TextInput
              id={id}
              fieldName='viewBox'
              value={viewBox}
              index={index}
            />
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill={'white'}
              viewBox={viewBox}
            >
              <path d={pathData} />
            </svg>
            <DeleteButton
              label='delete'
              connecting={false}
              onClick={() => deleteAsset(id)}
            />
            <UpdateButton
              label='save'
              connecting={false}
              onClick={() => updateAsset(asset)}
            />
          </div>
        )
      })}
    </div>
  )
}

export default Index
