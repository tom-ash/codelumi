import { ReactNode } from "react"

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
  name: string
  level: number
  view: SkillView
  unselectSkill?: any // TODO!  
  children?: ReactNode;

  onLevelClicked?(params: { name: string, level: number }): void;
}
