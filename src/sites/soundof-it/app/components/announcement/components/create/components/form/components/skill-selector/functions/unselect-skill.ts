import { SkillInterface } from "../../../../../../shared/components/skill/skill.types"

type UnselectSkill = (props: {
  unselectedSkill: SkillInterface
  selectedSkills: SkillInterface[]
  selectableSkills: SkillInterface[]
  setInputs(props: object): void
}) => void

export const unselectSkill: UnselectSkill = (props) => {
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
