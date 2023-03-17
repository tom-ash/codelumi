import React from 'react'
import { useStore } from '../../../functions/store/useStore'
import { KeyInput } from './components/key/key.input'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { changeUrl } from '../../../functions/routes/changers/change-url'

export const RecordIndexer = () => {
  useStyles(styles)

  const { state } = useStore()
  const { data, inputs } = state
  const { recordKeys } = data
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
                onClick={() => changeUrl({ href: key })}
              >
                {key}
              </li>
            )
          }

          return null
        })}
      </ul>
      {/* <CreateButton {...createbuttonProps} /> */}
    </div>
  )
}
