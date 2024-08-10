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
import { InstructionsDeprecated } from '../../../../../../../../../../shared/app/components/support/instructions_deprecated/instructions_deprecated'
import { TextInput } from '../../../../../../../../../../shared/app/components/support/text-input-semanticize/text-input'
import { SVG } from '../../../../../../../../../../shared/app/components/support/svg/svg'
import escapeRegExp from 'lodash/escapeRegExp'
import { FloatClear } from '../../../../../../../../../../shared/app/components/support/float-clear/float-clear'
import { SectionHeading } from '../../../../../../../../../../shared/app/components/support/headings/section-heading'

type ExtendedSkillProps = SkillProps & { isSelected: boolean }

function Skills() {
  useStyles(styles)

  const { required, skillSelectionInstructions, selectableSkillsHeading, selectedSkillsHeading } =
    useTexts()
  const { selectableSkills, selectedSkills, skillSearch } = useInputs()
  const dispatch = useDispatch()
  const setInputs = (value: any) => dispatch({ type: 'inputs', value })

  const { skills: isError } = useErrors()

  const classNames = []
  if (isError) {
    classNames.push('error')
  }

  const searchedSkills = useMemo(() => {
    return selectableSkills.filter((selectableSkill: ExtendedSkillProps) => {
      const regexp = new RegExp(escapeRegExp(skillSearch?.toLowerCase()))

      return !selectableSkill.isSelected && selectableSkill.display.match(regexp)
    })
  }, [skillSearch, selectableSkills])

  const setErrors = (value: any) => dispatch({ type: 'errors', value })

  const moveUp = useCallback(
    (index: number) => {
      if (index <= 0) {
        return
      }

      const destination = index - 1
      const newSelectedSkills = [...selectedSkills]
      const movedSelectedSkill = newSelectedSkills.splice(index, 1)[0]

      newSelectedSkills.splice(destination, 0, movedSelectedSkill)

      setInputs({ selectedSkills: newSelectedSkills })
    },
    [selectedSkills]
  )

  const moveDown = useCallback(
    (index: number) => {
      if (index >= selectedSkills - 1) {
        return
      }

      const destination = index + 1
      const newSelectedSkills = [...selectedSkills]
      const movedSelectedSkill = newSelectedSkills.splice(index, 1)[0]

      newSelectedSkills.splice(destination, 0, movedSelectedSkill)

      setInputs({ selectedSkills: newSelectedSkills })
    },
    [selectedSkills]
  )

  // @ts-ignore
  const onSelectableSkillLevelClicked = useCallback(
    (params: Pick<SkillProps, 'value' | 'level'>) => {
      const { value, level } = params

      const selectedableSkillIndex = selectableSkills.findIndex((selectableSkill: ExtendedSkillProps) => selectableSkill.value === value)
      const newSelectableSkills = [...selectableSkills]
      const selectedSkill = newSelectableSkills[selectedableSkillIndex]

      newSelectableSkills[selectedableSkillIndex] = {
        ...selectedSkill,
        isSelected: true,
      }

      const newSelectedSkills = [...selectedSkills].concat([
        { ...selectedSkill, level }
      ])

      setErrors({ skills: null })
      setInputs({
        selectableSkills: newSelectableSkills,
        selectedSkills: newSelectedSkills,
      })
    },
    [selectableSkills, selectedSkills]
  )

  const onSelectedSkillLevelClicked = useCallback(
    (params: Pick<SkillProps, 'value' | 'level'>) => {
      const { value, level } = params

      const changedSelectedSkillIndex = selectedSkills.findIndex((selectedSkill: ExtendedSkillProps) => selectedSkill.value === value)
      const selectedSkill = selectedSkills[changedSelectedSkillIndex]
      const newSelectedSkills = [...selectedSkills]
      newSelectedSkills[changedSelectedSkillIndex] = {
        ...selectedSkill,
        level,
      }

      setInputs({
        selectedSkills: newSelectedSkills,
      })
    },
    [selectedSkills]
  )

  const unselectSkill = useCallback(
    (params: Pick<SkillProps, 'value' | 'level'>) => {
      const { value } = params

      const selectedSkillIndex = selectableSkills.findIndex((selectableSkill: ExtendedSkillProps) => selectableSkill.value === value)
      const selectedSkill = selectableSkills[selectedSkillIndex]

      const newSelectableSkills = [...selectableSkills]
      newSelectableSkills[selectedSkillIndex].isSelected = false

      const unselectedSkillIndex = selectedSkills.findIndex((selectedSkill: ExtendedSkillProps) => selectedSkill.value === value)
      const newSelectedSkills = [...selectedSkills]
      newSelectedSkills.splice(unselectedSkillIndex, 1)

      setInputs({
        selectableSkills: newSelectableSkills,
        selectedSkills: newSelectedSkills,
      })
    },
    [selectableSkills, selectedSkills]
  )

  return (
    <section
      id='skills'
      className={classNames.join(' ')}
    >
      <SectionHeading
        name='skills'
        suffix={<span className='suffix required'>{required}</span>}
      />
      <InstructionsDeprecated
        text={skillSelectionInstructions}
        isError={isError}
      />
      <div id='skill-selector'>
        <div id='selectable-skills-container'>
          <label>{selectableSkillsHeading}</label>
          <div id='selectable-skills'>
            <TextInput inputKey='skillSearch'>
              <SVG name='magnifyingGlass' />
            </TextInput>
            <div className='skill-list'>
              {searchedSkills.map((skill: SkillProps) => (
                <Skill
                  key={`${SkillView.FORM_SELECTABLE}_${skill.value}`}
                  value={skill.value}
                  display={skill.display}
                  queryParam={skill.queryParam}
                  view={SkillView.FORM_SELECTABLE}
                  onLevelClicked={params => onSelectableSkillLevelClicked(params)}
                />
              ))}
            </div>
          </div>
        </div>
        <div id='selected-skills-container'>
          <label>{selectedSkillsHeading}</label>
          <div id='selected-skills'>
            {selectedSkills.map((skill: SkillProps, index: number) => (
              <Skill
                key={`${SkillView.FORM_SELECTED}_${skill.value}`}
                value={skill.value}
                display={skill.display}
                queryParam={skill.queryParam}
                level={skill.level}
                view={SkillView.FORM_SELECTED}
                onLevelClicked={params => onSelectedSkillLevelClicked(params)}
              >
                <div
                  className='delete'
                  onClick={() => unselectSkill({ value: skill.value })}
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
        <FloatClear />
      </div>
    </section>
  )
}

export default Skills
