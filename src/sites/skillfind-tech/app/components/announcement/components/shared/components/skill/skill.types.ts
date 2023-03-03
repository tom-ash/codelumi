export enum SkillViews {
  formSelectable = 'formSelectable',
  formSelected = 'formSelected',
  indexVisitor = 'indexVisitor',
}

export enum SkillLevelsEnum {
  NOVICE = 'Novice',
  JUNIOR = 'Junior',
  MID = 'Mid',
  SENIOR = 'Senior',
  EXPERT = 'Expert',
}

export interface SkillProps {
  name: string
  level: number
  selectSkill?: any // TODO!
  unselectSkill?: any // TODO!
  view: SkillViews
}
