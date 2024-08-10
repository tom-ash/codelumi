import { changeUrl } from '../../../../../../../../../shared/app/functions/routes/changers/change-url'
import { SkillProps } from '../../../../shared/components/skill/skill.types'

interface QuerySkills {
  (selectedSkills: SkillProps[]): void
}

export const querySkills: QuerySkills = selectedSkills => {
  if (selectedSkills.length > 0) {
    let queryParameters: string[] = []

    selectedSkills.map(selectedSkill => {
      const { queryParam, level } = selectedSkill

      queryParameters.push(`${queryParam}=${level}`)
    })

    changeUrl({ href: `${window.location.pathname}?${queryParameters.join('&')}` })
  } else {
    changeUrl({ href: window.location.pathname })
  }
}
