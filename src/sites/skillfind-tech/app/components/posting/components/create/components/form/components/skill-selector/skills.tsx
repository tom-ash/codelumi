import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import Skill from '../../../../../shared/components/skill/skill'
import { useDispatch } from 'react-redux'
import { selectSkillFactory } from './functions/select-skill-factory'
import { unselectSkillFactory } from './functions/unselect-skill-factory'
import { SkillProps } from '../../../../../shared/components/skill/skill.types'
import { SkillView } from '../../../../../shared/components/skill/skill.types'
import { useTexts } from '../../../../../../../../../../shared/app/functions/store/use-texts'
import { useInputs } from '../../../../../../../../../../shared/app/functions/store/use-inputs'

function Skills() {
  useStyles(styles)

  const { skills } = useTexts()
  const { selectableSkills, selectedSkills } = useInputs()
  const dispatch = useDispatch()
  const setInputs = (value: any) => dispatch({ type: 'inputs', value })
  const selectSkill = (selectedSkill: SkillProps) =>
    selectSkillFactory({
      selectedSkill,
      selectedSkills,
      selectableSkills,
      setInputs,
    })
  const unselectSkill = (unselectedSkill: SkillProps) =>
    unselectSkillFactory({
      unselectedSkill,
      selectedSkills,
      selectableSkills,
      setInputs,
    })

  return (
    <>
      <h2>{skills}</h2>
      <div id='skill-selector'>
        <div id='selectable-skills'>
          <div className='selectable-skill-input' />
          <div className='skill-list'>
            {selectableSkills.map((skill: SkillProps) => (
              <Skill
                {...{
                  ...skill,
                  selectSkill,
                  view: SkillView.formSelectable,
                }}
                key={skill.name}
              />
            ))}
          </div>
        </div>
        <div id='selected-skills'>
          {selectedSkills.map((skill: SkillProps) => (
            <Skill
              {...{
                ...skill,
                selectSkill,
                unselectSkill,
                view: SkillView.formSelected,
              }}
              key={skill.name}
            />
          ))}
        </div>
        <div className='float-clear' />
      </div>
    </>
  )
}

export default Skills
