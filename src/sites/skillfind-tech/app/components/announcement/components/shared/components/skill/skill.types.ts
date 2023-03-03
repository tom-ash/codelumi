export enum SkillView {
  formSelectable = 'formSelectable',
  formSelected = 'formSelected',
  indexVisitor = 'indexVisitor',
}

export enum SkillLevel {
  NOVICE = 'Novice',
  JUNIOR = 'Junior',
  MID = 'Mid',
  SENIOR = 'Senior',
  EXPERT = 'Expert',
}

export interface SkillProps {
  view: SkillView
  name: string
  level: number
  selectSkill?: any // TODO!
  unselectSkill?: any // TODO!
}
