import React from 'react'
import { KeyInput } from './components/key/key.input'
import { CreateRecordButton } from './components/create-record/create-record-button'
import { changeUrl } from '../../../functions/routes/changers/change-url'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { useData } from '../../../functions/store/use-data'
import { useInputs } from '../../../functions/store/use-inputs'

interface RecordIndexerInterface {
  (props: {
    create: any // TODO: TS!
  }): React.ReactElement
}

export const RecordIndexer: RecordIndexerInterface = props => {
  useStyles(styles)

  const { create } = props
  const { recordKeys, recordPath } = useData()
  const { recordKey } = useInputs()

  return (
    <div className='record-creator'>
      <KeyInput />
      <ul className='record-keys'>
        {recordKeys.map((key: string) => {
          const newNameRegex = recordKey

          if (key.match(newNameRegex)) {
            return (
              <li
                key={key}
                onClick={() => changeUrl({ href: `/${recordPath}/${key}` })}
              >
                {key}
              </li>
            )
          }

          return null
        })}
      </ul>
      <CreateRecordButton create={create} />
    </div>
  )
}
