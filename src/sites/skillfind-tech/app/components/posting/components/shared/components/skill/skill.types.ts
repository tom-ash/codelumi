export enum SkillView {
  formSelectable = 'formSelectable',
  formSelected = 'formSelected',
  indexVisitor = 'indexVisitor',
  INDEX_PANEL = 'INDEX_PANEL',
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
