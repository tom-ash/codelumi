import React, { useCallback, useMemo } from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import Skill from '../../../../../shared/components/skill/skill'
import { useDispatch } from 'react-redux'
import { SkillProps } from '../../../../../shared/components/skill/skill.types'
import { SkillView } from '../../../../../shared/components/skill/skill.types'
import { useTexts } from '../../../../../../../../../../shared/app/functions/store/use-texts'
import { useInputs } from '../../../../../../../../../../shared/app/functions/store/use-inputs'
import { useErrors } from '../../../../../../../../../../shared/app/functions/store/use-errors'
import { Instructions } from '../../../../../../../../../../shared/app/components/support/instructions/instructions'
import { TextInput } from '../../../../../../../../../../shared/app/components/support/text-input-semanticize/text-input'
import { SVG } from '../../../../../../../../../../shared/app/components/support/svg/svg'
import escapeRegExp from "lodash/escapeRegExp";

function Skills() {
  useStyles(styles)

  const {
    skillSelectorHeading,
    skillSelectionInstructions,
    selectableSkillsHeading,
    selectedSkillsHeading,
  } = useTexts()
  const { selectableSkills, selectedSkills, skillSearch } = useInputs()
  const dispatch = useDispatch()
  const setInputs = (value: any) => dispatch({ type: 'inputs', value })

  const { skills: isError } = useErrors()

  const classNames = []
  if (isError) {
    classNames.push('error')
  }

  const searchedSkills = useMemo(() => {
    // TODO: any
    return selectableSkills.filter((selectableSkill: any) => {
      const regexp = new RegExp(escapeRegExp(skillSearch?.toLowerCase()));

      return !selectableSkill.isSelected && selectableSkill.name.toLowerCase().match(regexp)
    })

  }, [skillSearch, selectableSkills])

  const setErrors = (value: any) => dispatch({ type: 'errors', value })

  const moveUp = useCallback((index: number) => {
    if (index <= 0) {
      return
    }

    const destination = index - 1
    const newSelectedSkills = [...selectedSkills]
    const movedSelectedSkill= newSelectedSkills.splice(index, 1)[0]
  
    newSelectedSkills.splice(destination, 0, movedSelectedSkill)

    setInputs({ selectedSkills: newSelectedSkills })
  }, [selectedSkills])

  const moveDown = useCallback((index: number) => {
    if (index >= selectedSkills - 1) {
      return
    }

    const destination = index + 1
    const newSelectedSkills = [...selectedSkills]
    const movedSelectedSkill= newSelectedSkills.splice(index, 1)[0]
  
    newSelectedSkills.splice(destination, 0, movedSelectedSkill)

    setInputs({ selectedSkills: newSelectedSkills })
  }, [selectedSkills])

  // @ts-ignore
  const onSelectableSkillLevelClicked = useCallback((params) => {
    const {
      name,
      level,
    } = params

    const selectedSkillIndex = selectableSkills.findIndex((selectableSkill: any) => selectableSkill.name === name);
    const selectedSkill = selectableSkills[selectedSkillIndex]

    const newSelectableSkills = [...selectableSkills]
    newSelectableSkills[selectedSkillIndex] = {
      name: selectedSkill.name,
      isSelected: true,
    }

    const newSelectedSkills = [...selectedSkills].concat([{
      name: name,
      level: level,
    }])

    setErrors({ skills: null })
    setInputs({
      selectableSkills: newSelectableSkills,
      selectedSkills: newSelectedSkills,
    })
  }, [selectableSkills, selectedSkills])

  // @ts-ignore
  const onSelectedSkillLevelClicked = useCallback((params) => {
    const {
      name,
      level,
    } = params

    console.log(params)

    const changedSelectedSkillIndex = selectedSkills.findIndex((selectedSkill: any) => selectedSkill.name === name);
    const newSelectedSkills = [...selectedSkills]
    newSelectedSkills[changedSelectedSkillIndex] = {
      name,
      level,
    }

    setInputs({
      selectedSkills: newSelectedSkills,
    })
  }, [selectedSkills])

  // @ts-ignore
  const unselectSkill = useCallback((params) => {
    const {
      name,
    } = params

    const selectedSkillIndex = selectableSkills.findIndex((selectableSkill: any) => selectableSkill.name === name);
    const selectedSkill = selectableSkills[selectedSkillIndex]

    const newSelectableSkills = [...selectableSkills]
    newSelectableSkills[selectedSkillIndex] = {
      name: selectedSkill.name,
      isSelected: false,
    }

    const unselectedSkillIndex = selectedSkills.findIndex((selectedSkill: any) => selectedSkill.name === name);
    const newSelectedSkills = [...selectedSkills]
    newSelectedSkills.splice(unselectedSkillIndex, 1);

    setInputs({
      selectableSkills: newSelectableSkills,
      selectedSkills: newSelectedSkills,
    })
  }, [selectableSkills, selectedSkills])


  return (
    <section
      id='skills'
      className={classNames.join(' ')}
    >
      <h2>{skillSelectorHeading}</h2>
      <Instructions
        text={skillSelectionInstructions}
        isError={isError}
      />
      <div id='skill-selector'>
        <div id='selectable-skills-container'>
          <label>
            {selectableSkillsHeading}
          </label>
          <div id='selectable-skills'>
            <TextInput
              inputKey='skillSearch'
            >
              <SVG name='magnifyingGlass' />
            </ TextInput>
            <div className='skill-list'>
              {searchedSkills.map((skill: SkillProps) => (
                <Skill
                  {...{
                    ...skill,
                    view: SkillView.formSelectable,
                    setErrors,
                    onLevelClicked: (params) => onSelectableSkillLevelClicked(params)
                  }}
                  key={skill.name}
                />
              ))}
            </div>
          </div>
        </div>
        <div id='selected-skills-container'>
          <label>
            {selectedSkillsHeading}
          </label>
          <div id='selected-skills'>
            {selectedSkills.map((skill: SkillProps, index: number) => (
              <Skill
                {...{
                  ...skill,
                  unselectSkill,
                  view: SkillView.formSelected,
                  onLevelClicked: (params) => onSelectedSkillLevelClicked(params),
                }}
                key={skill.name}
              >
                <div
                  className='delete'
                  onClick={() => unselectSkill({ name: skill.name })}
                >
                  <SVG name='close' />
                </div>
                <div
                  className='up'
                  onClick={() => moveUp(index)}
                >
                  <SVG name='arrowRight' />
                </div>
                <div
                  className='down'
                  onClick={() => moveDown(index)}
                >
                  <SVG name='arrowRight' />
                </div>
              </Skill>
            ))}
          </div>
        </div>
        <div className='float-clear' />
      </div>
    </section>
  )
}

export default Skills
