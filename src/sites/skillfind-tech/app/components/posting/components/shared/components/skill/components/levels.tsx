import React from 'react'
import { SkillView } from '../skill.types'
import { SkillLevel } from '../skill.types'

interface SkillLevelsProps {
  view: SkillView
  name: string
  level: number
  levelNames: string[]
  levelName: SkillLevel
  levelHovered: number
  setLevelHovered(levelHovered: number): void
  onLevelClicked?(params: { name: string; level: number }): void
  setErrors?(params: { skills: null }): void
}

export const SkillLevels = (props: SkillLevelsProps) => {
  const { view, name, level, levelNames, levelName, levelHovered, onLevelClicked, setLevelHovered, setErrors } = props

  return (
    <div className='levelNames'>
      {levelNames.map((availableLevel, index) => {
        const fillClass = levelHovered
          ? levelHovered > index
            ? levelNames[levelHovered - 1].toLowerCase()
            : ''
          : level > index || levelHovered > index
          ? levelName.toLowerCase()
          : ''
        const classNames = ['level', fillClass]
        const sharedLevelProps = { className: classNames.join(' '), key: availableLevel }

        return (
          <div
            {...sharedLevelProps}
            {...((view === SkillView.formSelectable || view === SkillView.formSelected) && {
              onMouseOver: () => setLevelHovered(index + 1),
              onMouseLeave: () => setLevelHovered(0),
              onClick: e => {
                e.stopPropagation()

                setErrors && setErrors({ skills: null })
                onLevelClicked && onLevelClicked({ name, level: levelHovered })
              },
            })}
            {...(view === SkillView.INDEX_PANEL && {
              onMouseOver: () => setLevelHovered(index + 1),
              onMouseLeave: () => setLevelHovered(0),
              onClick: e => {
                e.stopPropagation()

                const select = document.getElementById('visitor-postings-index-skill-select')
                select!.blur()

                onLevelClicked && onLevelClicked({ name, level: levelHovered })
              },
            })}
          />
        )
      })}
      <div className='float-clear' />
    </div>
  )
}
