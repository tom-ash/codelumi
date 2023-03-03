import React from 'react'
import { SkillViews } from '../skill.types'
import { SkillLevelsEnum } from '../skill.types'

interface SkillLevelsProps {
  view: SkillViews
  name: string
  level: number
  skillLevels: string[]
  levelName: SkillLevelsEnum
  levelHovered: number
  setLevelHovered(levelHovered: number): void
  selectSkill(props: object): void
}

export const SkillLevels = (props: SkillLevelsProps) => {
  const {
    view,
    name,
    level,
    skillLevels,
    levelName,
    levelHovered,
    setLevelHovered,
    selectSkill,
  } = props

  return (
    <div className='skillLevels'>
      {skillLevels.map((availableLevel, index) => {
        const fillClass = levelHovered ? (levelHovered > index ? skillLevels[levelHovered - 1].toLowerCase() : '') : (level > index || levelHovered > index ? levelName.toLowerCase() : '')
        const classNames = ['level', fillClass]
        const sharedLevelProps = { className: classNames.join(' '), key: availableLevel }
        const formProps = {
          onMouseOver: () => setLevelHovered(index + 1),
          onMouseLeave: () => setLevelHovered(0),
          onClick: () => selectSkill({ name, level: levelHovered }),
        }

        return (
          <div
            {...sharedLevelProps}
            {...(view === SkillViews.formSelectable || view === SkillViews.formSelected) && formProps}
          />
        )
      })}
      <div className='float-clear' />
    </div>
  )
}
