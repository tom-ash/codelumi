import React from 'react'
import useStyles from 'isomorphic-style-loader/useStyles'
import styles from './styles/styles.scss'
import SkillSelector from './components/skill-selector/skill-selector.js'
import SubmitButton from './components/submit-button.tsx'

const AnnouncementCreateForm = props => {
  useStyles(styles)

  const { selectableSkills, selectedSkills, changeState } = props
  const skillSelectorProps = { selectableSkills, selectedSkills, changeState }

  return (
    <div id='announcement-create'>
      <h1>
        Post a Job
      </h1>
      <SkillSelector {...skillSelectorProps} />
      <SubmitButton />
    </div>
  )
}

export default AnnouncementCreateForm
