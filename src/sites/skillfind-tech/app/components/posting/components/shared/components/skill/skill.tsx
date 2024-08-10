import React, { useState } from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { SkillProps, SkillLevel } from './skill.types'
import { SkillLevels } from './components/levels'

const levels = Object.values(SkillLevel)

function Skill(props: SkillProps) {
  useStyles(styles)

  const { value, display, view, level = 0, children, onLevelClicked } = props
  const [levelHovered, setLevelHovered] = useState(0)
  const levelName = levelHovered ? levels[levelHovered - 1] : undefined

  return (
    <div className='skill'>
      <div className='name'>{display}</div>
      <SkillLevels
        view={view}
        value={value}
        level={level}
        levels={levels}
        levelName={levelName}
        levelHovered={levelHovered}
        setLevelHovered={setLevelHovered}
        onLevelClicked={onLevelClicked}
      />
      {children}
    </div>
  )
}

export default Skill
