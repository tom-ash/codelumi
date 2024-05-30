import React, { useEffect } from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { useInputs } from '../../../../../../../../shared/app/functions/store/use-inputs'
import { Select } from 'semanticize'
import Skill from '../../../shared/components/skill/skill'
import { SkillView } from '../../../shared/components/skill/skill.types'
import { FloatClear } from '../../../../../../../../shared/app/components/support/float-clear/float-clear'
import { changeUrl } from '../../../../../../../../shared/app/functions/routes/changers/change-url'
import { SVG } from '../../../../../../../../shared/app/components/support/svg/svg'
import { useTexts } from '../../../../../../../../shared/app/functions/store/use-texts'
import { useDispatch } from 'react-redux'
import { querySkills } from './helpers/query-skills'

interface PanelInterface {
  (params: {}): React.ReactElement
}

export interface SelectableSkill {
  value: string
  text: string
  url: string
}

export type SelectedSkill = SelectableSkill & { level: string }

export const Panel: PanelInterface = () => {
  useStyles(styles)

  const { skillSelectPlaceholder } = useTexts()
  const { selectableSkills, selectedSkills } = useInputs()
  const dispatch = useDispatch()
  const setInputs = (value: any) => dispatch({ type: 'inputs', value })

  return (
    <div className='panel'>
      <Select
        className='select'
        options={selectableSkills}
        value={''}
        placeholder={skillSelectPlaceholder}
        searchable={true}
        onSelect={value => {
          const newSelectedSkills = [...selectedSkills]
          const newSelectedSkill = selectableSkills.find((selectableSkill: SelectableSkill) => {
            return selectableSkill.value === value
          })

          newSelectedSkills.push({ ...newSelectedSkill, level: 0 })

          setInputs({ selectedSkills: newSelectedSkills })
          querySkills(newSelectedSkills)
        }}
      >
        <SVG name='magnifyingGlass' />
      </Select>
      <section className='selected-skills'>
        {selectedSkills.map((selectedSkill: any) => {
          const { value, level } = selectedSkill

          return (
            <Skill
              onLevelClicked={skill => {
                const newSelectedSkills: SelectedSkill[] = selectedSkills.map((selectedSkill: SelectedSkill) => {
                  if (skill.name === selectedSkill.value) {
                    return {
                      ...selectedSkill,
                      level: skill.level,
                    }
                  }

                  return selectedSkill
                })

                setInputs({ selectedSkills: newSelectedSkills })
                querySkills(newSelectedSkills)
              }}
              key={value}
              name={value}
              level={level}
              view={SkillView.INDEX_PANEL}
            />
          )
        })}
        <FloatClear />
      </section>
    </div>
  )
}
