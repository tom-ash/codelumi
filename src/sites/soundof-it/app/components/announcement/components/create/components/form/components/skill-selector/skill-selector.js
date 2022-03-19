import React from 'react'
import useStyles from 'isomorphic-style-loader/useStyles'
import styles from './styles/styles.scss'
import Skill from '../../../../../shared/components/skill/skill.js'

function SkillSelector(props) {
  useStyles(styles)

  const { selectableSkills, selectedSkills, changeState } = props

  function selectSkill(selectedSkill) {
    const newSelectedSkills = [ ...selectedSkills ].concat([selectedSkill])
    const newSelectableSkills = [ ...selectableSkills ].filter(skill => skill.name !== selectedSkill.name)
    
    changeState({ selectableSkills: newSelectableSkills, selectedSkills: newSelectedSkills })
  }

  function unselectSkill(unselectedSkill) {
    const newSelectedSkills = [ ...selectedSkills ].filter(skill => skill.name !== unselectedSkill.name)
    const newSelectableSkills = [ ...selectableSkills ].concat([unselectedSkill])
    
    changeState({ selectableSkills: newSelectableSkills, selectedSkills: newSelectedSkills })
  }

  return (
    <>
      <h2>
        Select Skills
      </h2>
      <div id='skill-selector'>
        <div id='selectable-skills'>
          {selectableSkills.map(skill => (
            <Skill {...{ ...skill, selectSkill }} key={skill.name}/>
          ))}
        </div>
        <div id='selected-skills'>
          {selectedSkills.map(skill => (
            <Skill {...{ ...skill, unselectSkill }} key={skill.name}/>
          ))}
        </div>
        <div className='float-clear' />
      </div>
    </>
  )
  
}

export default SkillSelector
