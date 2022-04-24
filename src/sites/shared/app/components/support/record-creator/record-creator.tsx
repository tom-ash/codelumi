import React from 'react'
import NameInput from './components/name-input'
import CreateButton from './components/create-button'
import useStyles from 'isomorphic-style-loader/useStyles'
import styles from './styles/styles.scss'

interface RecordCreatorProps {
  recordKeys: string[],
  recordKey: string,
  changeKey(key: string): void,
  create(): void,
  edit(imageKey: string): void,
}

const RecordCreator = (props: RecordCreatorProps) => {
  useStyles(styles)

  const { recordKeys, recordKey, changeKey, create, edit } = props 
  const nameInputProps = { recordKey, changeKey }
  const createbuttonProps = { create }

  return (
    <div className='record-creator'>
      <NameInput {...nameInputProps} />
      <ul className='record-keys'>
        {recordKeys.map(key => {
          const newNameRegex = recordKey

          if (key.match(newNameRegex)) {
            return (
              <li key={key} onClick={() => edit(key)}>
                {key}
              </li>
            )
          }

          return null
        })}
      </ul>
      <CreateButton {...createbuttonProps} />
    </div>
  )
}

export default RecordCreator
