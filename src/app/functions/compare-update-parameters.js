import { differentObjects } from './deep-compare'

export function compareParameters(currentProps, nextProps, parameters) {
  let result = false
  parameters.map(parameter => {
    if (differentObjects(currentProps[parameter], nextProps[parameter])) {
      result = true
    }
  })
  return result
}