import { changeUrl } from '../../../../../../../../../shared/app/functions/routes/changers/change-url'
import { SelectedSkill } from '../panel'

interface QuerySkills {
  (selectedSkills: SelectedSkill[]): void
}

export const querySkills: QuerySkills = selectedSkills => {
  if (selectedSkills.length > 0) {
    let queryParameters: string[] = []

    selectedSkills.map(selectedSkill => {
      const { url, level } = selectedSkill

      queryParameters.push(`${url}=${level}`)
    })

    changeUrl({ href: `?${queryParameters.join('&')}` })
  } else {
    changeUrl({ href: '/' })
  }
}
