import React, { useEffect, useMemo } from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { useInputs } from '../../../../../../../../shared/app/functions/store/use-inputs'
import { Select } from 'semanticize'
import Skill from '../../../shared/components/skill/skill'
import { SkillProps, SkillView } from '../../../shared/components/skill/skill.types'
import { FloatClear } from '../../../../../../../../shared/app/components/support/float-clear/float-clear'
import { SVG } from '../../../../../../../../shared/app/components/support/svg/svg'
import { useTexts } from '../../../../../../../../shared/app/functions/store/use-texts'
import { useDispatch } from 'react-redux'
import { querySkills } from './helpers/query-skills'

interface PanelInterface {
  (params: {}): React.ReactElement
}

export const Panel: PanelInterface = () => {
  useStyles(styles)

  const { skillSelectPlaceholder } = useTexts()
  const { selectableSkills, selectedSkills } = useInputs()
  const dispatch = useDispatch()
  const setInputs = (value: any) => dispatch({ type: 'inputs', value })

  const enrichedSelectableSkills = useMemo(() => {
    // @ts-ignore
    return selectableSkills.map(option => {
      const { value, display, queryParam } = option

      return {
        ...option,
        jsx: (
          <Skill
            key={value}
            value={value}
            display={display}
            queryParam={queryParam}
            level={0}
            view={SkillView.INDEX_PANEL}
            onLevelClicked={({ value, level }) => {
              const newSelectedSkills = [...selectedSkills]
              const newSelectedSkill = selectableSkills.find((selectableSkill: SkillProps) => {
                return selectableSkill.value === value
              })

              newSelectedSkills.push({ ...newSelectedSkill, level })

              setInputs({ selectedSkills: newSelectedSkills })
              querySkills(newSelectedSkills)
            }}
          />
        ),
      }
    })
  }, [selectableSkills])

  return (
    <div className='panel'>
      <div className='selects'>
        <Select
          className='select'
          options={enrichedSelectableSkills}
          value={''}
          placeholder={skillSelectPlaceholder}
          searchable={true}
          id='visitor-postings-index-skill-select'
          onSelect={value => {
            const newSelectedSkills = [...selectedSkills]
            const newSelectedSkill = selectableSkills.find((selectableSkill: SkillProps) => {
              return selectableSkill.value === value
            })

            newSelectedSkills.push({ ...newSelectedSkill, level: 0 })

            setInputs({ selectedSkills: newSelectedSkills })
            querySkills(newSelectedSkills)
          }}
        >
          <SVG name='magnifyingGlass' />
        </Select>
      </div>
      <section className='selected-skills'>
        {selectedSkills.map((selectedSkill: any) => {
          const { value, display, queryParam, level } = selectedSkill

          return (
            <Skill
              key={value}
              value={value}
              display={display}
              queryParam={queryParam}
              level={level}
              view={SkillView.INDEX_PANEL}
              onLevelClicked={({ value, level }) => {
                const newSelectedSkills: SkillProps[] = selectedSkills.map((selectedSkill: SkillProps) => {
                  if (selectedSkill.value === value) {
                    return {
                      ...selectedSkill,
                      level,
                    }
                  }

                  return selectedSkill
                })

                setInputs({ selectedSkills: newSelectedSkills })
                querySkills(newSelectedSkills)
              }}

            >
              <div
                className='delete'
                onClick={() => {
                  const unselectedSkillIndex = selectedSkills.findIndex(
                    (selectedSkill: any) => selectedSkill.value === value
                  )

                  const newSelectedSkills = [...selectedSkills]
                  newSelectedSkills.splice(unselectedSkillIndex, 1)

                  setInputs({ selectedSkills: newSelectedSkills })
                  querySkills(newSelectedSkills)
                }}
              >
                <SVG name='close' />
              </div>
            </Skill>
          )
        })}
        <FloatClear />
      </section>
    </div>
  )
}
