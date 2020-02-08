import { combineReducers } from 'redux'
import { changeAnnouncement, changeAnnouncements } from './change-announcements'
import {
  control,
  inputs,
  data
} from '../constants/state'

const controlReducer = (state = control, action) => {
  switch (action.type) {
    case 'announcement/index/control': return { ...state, ...action.value }
    case 'announcement/index/control/reset': return { ...control }
    default: return { ...state }
  }
}

const inputsReducer = (state = inputs, action) => {
  switch (action.type) {
    case 'announcement/index/inputs': return { ...state, ...action.value }
    case 'announcement/index/inputs/reset': return { ...inputs }
    default: return { ...state }
  }
}

const dataReducerProvider = announcementsList => (state = { ...data, ...announcementsList }, action) => {
  switch (action.type) {
    case 'announcement/index/data': return { ...state, ...action.value }
    case 'announcement/index/data/announcements':  return changeAnnouncements(state, action.value)
    case 'announcement/index/data/announcement':  return changeAnnouncement(state, action.value)
    case 'announcement/index/data/reset': return { ...data }
    default: return { ...state }
  }
}

export const indexReducerProvider = announcementsList => combineReducers({
  control: controlReducer,
  inputs: inputsReducer,
  data: dataReducerProvider(announcementsList || {})
})
