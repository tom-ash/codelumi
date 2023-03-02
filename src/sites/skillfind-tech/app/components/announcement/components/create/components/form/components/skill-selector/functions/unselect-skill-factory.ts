import { SkillProps } from "../../../../../../shared/components/skill/skill.types"

type UnselectSkillFactory = (props: {
  unselectedSkill: SkillProps
  selectedSkills: SkillProps[]
  selectableSkills: SkillProps[]
  setInputs(props: object): void
}) => void

export const unselectSkillFactory: UnselectSkillFactory = (props) => {
  const {
    unselectedSkill,
    selectedSkills,
    selectableSkills,
    setInputs,
  } = props

  const newSelectedSkills = [...selectedSkills].filter(skill => skill.name !== unselectedSkill.name)
  const newSelectableSkills = [...selectableSkills].concat([unselectedSkill])

  setInputs({
    selectableSkills: newSelectableSkills,
    selectedSkills: newSelectedSkills
  })
}
