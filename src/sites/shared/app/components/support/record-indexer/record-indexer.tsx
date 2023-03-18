import React from 'react'
import { useStore } from '../../../functions/store/useStore'
import { KeyInput } from './components/key/key.input'
import { CreateRecordButton } from './components/create-record/create-record-button'
import { changeUrl } from '../../../functions/routes/changers/change-url'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'

interface RecordIndexerInterface {
  (props: {
    create: any // TODO: TS!
  }): React.ReactElement
}

export const RecordIndexer: RecordIndexerInterface = (props) => {
  useStyles(styles)

  const { create } = props
  const { state } = useStore()
  const { data, inputs } = state
  const { recordKeys, recordPath } = data
  const { recordKey } = inputs

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
                onClick={() => changeUrl({ href: `${recordPath}/${key}` })}
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
