import { ReactNode } from 'react'

export enum SkillView {
  FORM_SELECTABLE = 'form_selectable',
  FORM_SELECTED = 'form_selected',
  PREVIEW = 'preview',
  INDEX_PANEL = 'index_panel',
  INDEX_LIST = 'index_list',
}

export enum SkillLevel {
  JUNIOR = 'Junior',
  MID = 'Mid',
  SENIOR = 'Senior',
  EXPERT = 'Expert',
}

export interface SkillProps {
  value: string
  display: string
  queryParam: string
  level?: number
  view?: SkillView
  children?: ReactNode
  onLevelClicked?(params: { value: string; level: number }): void
}
