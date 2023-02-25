import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import Skill from '../../../../../shared/components/skill/skill'
import { useDispatch } from 'react-redux'
import { selectSkillFactory } from './functions/select-skill-factory'
import { unselectSkillFactory } from './functions/unselect-skill-factory'
import { SkillInterface } from '../../../../../shared/components/skill/skill.types'

interface SkillSelectorProps {
  selectableSkills: SkillInterface[]
  selectedSkills: SkillInterface[]
}

function SkillSelector(props: SkillSelectorProps) {
  useStyles(styles)

  const { selectableSkills, selectedSkills } = props
  const dispatch = useDispatch()
  const setInputs = (value: any) => dispatch({ type: 'inputs', value })
  const selectSkill = (selectedSkill: SkillInterface) => selectSkillFactory({
    selectedSkill,
    selectedSkills,
    selectableSkills,
    setInputs,
  })
  const unselectSkill = (unselectedSkill: SkillInterface) => unselectSkillFactory({
    unselectedSkill,
    selectedSkills,
    selectableSkills,
    setInputs,
  })

  return (
    <>
      <h2>Select Skills</h2>
      <div id='skill-selector'>
        <div id='selectable-skills'>
          {selectableSkills.map(skill => (
            <Skill
              {
                ...{
                  ...skill,
                  selectSkill,
                }
              }
              key={skill.name}
            />
          ))}
        </div>
        <div id='selected-skills'>
          {selectedSkills.map(skill => (
            <Skill
              {
                ...{
                  ...skill,
                  selectSkill,
                  unselectSkill,
                }
              }
              key={skill.name}
            />
          ))}
        </div>
        <div className='float-clear' />
      </div>
    </>
  )
}

export default SkillSelector
