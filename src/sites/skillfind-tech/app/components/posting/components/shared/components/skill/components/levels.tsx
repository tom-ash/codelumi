import React from 'react'
import { SkillView } from '../skill.types'
import { SkillLevel } from '../skill.types'

interface SkillLevelsProps {
  view: SkillView
  name: string
  level: number
  levels: string[]
  levelName: SkillLevel
  levelHovered: number
  setLevelHovered(levelHovered: number): void
  onLevelClicked?(params: { name: string; level: number }): void
  setErrors?(params: { skills: null }): void
}

export const SkillLevels = (props: SkillLevelsProps) => {
  const { view, name, level, levels, levelName, levelHovered, onLevelClicked, setLevelHovered, setErrors } = props

  return (
    <div className='levels'>
      {levels.map((availableLevel, index) => {
        const fillClass = levelHovered
          ? levelHovered > index
            ? levels[levelHovered - 1].toLowerCase()
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
          >
            {(index + 1) === levelHovered && (
              <div className='level-name'>{levelName}</div>
            )}
          </div>
        )
      })}
      <div className='float-clear' />
    </div>
  )
}
