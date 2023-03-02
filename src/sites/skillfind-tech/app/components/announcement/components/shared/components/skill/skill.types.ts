export enum SkillView {
  formSelectable = 'formSelectable',
  formSelected = 'formSelected',
  indexVisitor = 'indexVisitor',
}

export interface SkillProps {
  name: string
  level: number
  selectSkill?: any // TODO!
  unselectSkill?: any // TODO!
  view: SkillView
}
