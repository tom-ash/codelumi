import React from 'react'
import { TextInput } from './components/text-input/text-input'
import { DeleteButton } from './components/delete/delete.button'
import { deleteAsset } from './functions/delete/delete'
import { CreateButton } from './components/create/create.button'
import { UpdateButton } from './components/update/update.button'
import { updateAsset } from './functions/update/update'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { useData } from '../../../../functions/store/use-data'

const Index = () => {
  useStyles(styles)

  const { redirects } = useData()

  return (
    <div id='redirects-index'>
      <CreateButton />
      {redirects.map((asset: any, index: number) => {
        const { id, originalUrl, redirectedUrl } = asset

        return (
          <div key={id}>
            <span className='id'>{id}</span>
            <TextInput
              id={id}
              fieldName='originalUrl'
              value={originalUrl}
              index={index}
            />
            <TextInput
              id={id}
              fieldName='redirectedUrl'
              value={redirectedUrl}
              index={index}
            />
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
