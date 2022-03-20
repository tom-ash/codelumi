//@ts-ignore
import React from 'react'
//@ts-ignore
import useStyles from 'isomorphic-style-loader/useStyles'
//@ts-ignore
import styles from './styles/styles.scss'
import SkillSelector from './components/skill-selector/skill-selector.js'
//@ts-ignore
import SubmitButton from './components/submit-button.tsx'

//@ts-ignore
const AnnouncementCreateForm = props => {
  useStyles(styles)

  const { selectableSkills, selectedSkills, changeState } = props
  const skillSelectorProps = { selectableSkills, selectedSkills, changeState }
  const submitButtonProps = { selectedSkills }
  
  return (
    <div id='announcement-create'>
      <h1>
        Post a Job
      </h1>
      <SkillSelector {...skillSelectorProps} />
      <SubmitButton {...submitButtonProps} />
    </div>
  )
}

export default AnnouncementCreateForm
