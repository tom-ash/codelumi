import { combineReducers } from 'redux'
import { changeAnnouncement, changeAnnouncements } from './change-announcements'
import * as states from '../constants/state'

const miniControlReducer = (state = states.miniControl, action) => {
  switch (action.type) {
    case 'announcement/index/control/mini': return { ...state, ...action.value }
    default: return { ...state }
  }
}

const mapControlReducer = (state = states.mapControl, action) => {
  switch (action.type) {
    case 'announcement/index/control/map': return { ...state, ...action.value }
    case 'announcement/index/control/map/reset': return { ...states.mapControl }
    default: return { ...state }
  }
}

const fullControlReducer = (state = states.fullControl, action) => {
  switch (action.type) {
    case 'announcement/index/control/full': return { ...state, ...action.value }
    default: return { ...state }
  }
}

const listControlReducer = (state = states.listControl, action) => {
  switch (action.type) {
    case 'announcement/index/control/list': return { ...state, ...action.value }
    default: return { ...state }
  }
}

const controlReducer = combineReducers({ mini: miniControlReducer, map: mapControlReducer,
                                         full: fullControlReducer, list: listControlReducer })

const miniInputsReducer = (state = states.miniInputs, action) => {
  switch (action.type) {
    case 'announcement/index/inputs/mini': return { ...state, ...action.value }
    default: return { ...state }
  }
}

const mapInputsReducer = (state = states.mapInputs, action) => {
  switch (action.type) {
    case 'announcement/index/inputs/map': return { ...state, ...action.value }
    case 'announcement/index/inputs/map/reset': return { ...states.mapInputs }
    default: return { ...state }
  }
}

const fullInputsReducer = (state = states.mapInputs, action) => {
  switch (action.type) {
    case 'announcement/index/inputs/full': return { ...state, ...action.value }
    default: return { ...state }
  }
}

const listInputsReducer = (state = states.listInputs, action) => {
  switch (action.type) {
    case 'announcement/index/inputs/list': return { ...state, ...action.value }
    default: return { ...state }
  }
}

const inputsReducer = combineReducers({ mini: miniInputsReducer, map: mapInputsReducer,
                                        full: fullInputsReducer, list: listInputsReducer })

const miniDataReducer = (state = states.miniData, action) => {
  switch (action.type) {
    case 'announcement/index/data/mini': return { ...state, ...action.value }
    default: return { ...state }
  }
}

const mapDataReducer = (state = states.mapData, action) => {
  switch (action.type) {
    case 'announcement/index/data/map': return { ...state, ...action.value }
    case 'announcement/index/data/map/reset': return { ...states.mapData }
    case 'announcement/index/data/map/announcement':  return changeAnnouncement(state, action.value)
    default: return { ...state }
  }
}

const fullDataReducer = (state = states.fullData, action) => {
  switch (action.type) {
    case 'announcement/index/data/full': return { ...state, ...action.value }
    case 'announcement/index/data/full/announcement':  return changeAnnouncements(state, action.value)
    default: return { ...state }
  }
}

const listDataReducer = (state = states.listData, action) => {
  switch (action.type) {
    case 'announcement/index/data/list': return { ...state, ...action.value }
    case 'announcement/index/data/list/announcement':  return changeAnnouncements(state, action.value)
    default: return { ...state }
  }
}

const dataReducer = combineReducers({ mini: miniDataReducer, map: mapDataReducer, full: fullDataReducer,
                                      list: listDataReducer })

export const indexReducer = combineReducers({ control: controlReducer, inputs: inputsReducer, data: dataReducer })
