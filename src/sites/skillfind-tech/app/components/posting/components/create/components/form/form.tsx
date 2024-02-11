import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import Skills from './components/skill-selector/skills'
import SubmitButton from './components/submit-button'
import { Contracts } from './components/contracts/contracts'
import { useTexts } from '../../../../../../../../shared/app/functions/store/use-texts'
// import { TypedTextInput } from '../../../../../../../../shared/app/components/support/typed-text-input/typed-text-input'

const AnnouncementCreateForm = () => {
  useStyles(styles)

  const { title } = useTexts()

  return (
    <div
      id='listing-create-form'
      className='form'
    >
      <h1>{title}</h1>

      <section>
        <h2>COMPANY DATA</h2>

        {/* <TypedTextInput
          inputKey='businessName'
          onBlur={() => {
            console.log("1234132131231")
          }}
          error='asdasd'
        /> */}
      </section>

      <h2>SKILLS</h2>
      <Skills />
      <Contracts />
      <SubmitButton />
    </div>
  )
}

export default AnnouncementCreateForm
