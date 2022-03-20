function initialStateParserV2(state) {
  let parsedState = {}

  Object.keys(state).map(stateKey => {
    if (!stateKey.match('/')) return

    let mainKey
    let middleKey
    let detailKey
    const nestedKeys = stateKey.split('/')

    if (nestedKeys.length === 3) {
      mainKey = nestedKeys[nestedKeys.length - 3]
      middleKey = nestedKeys[nestedKeys.length - 2]
      detailKey = nestedKeys[nestedKeys.length - 1]

      const mainObject = parsedState[mainKey]
      if (!mainObject) {
        return parsedState = { ...parsedState, [mainKey]: { [middleKey]: { [detailKey]: state[stateKey] }}}
      }
  
      const middleObj = parsedState[mainKey][middleKey]
      if (!middleObj) {
        return parsedState = {
          ...parsedState,
          [mainKey]: { ...mainObject, [middleKey]: { [detailKey]: state[stateKey] }}
        }
      }
  
      const detailObj = parsedState[mainKey][middleKey][detailKey]
      if (!detailObj) {
        return parsedState = {
          ...parsedState,
          [mainKey]: {
            ...mainObject, [middleKey]: {
              ...middleObj,
              [detailKey]: state[stateKey]
            }
          }
        }
      }
    } else if (nestedKeys.length === 2) {
      mainKey = nestedKeys[nestedKeys.length - 2]
      middleKey = nestedKeys[nestedKeys.length - 1]

      const mainObject = parsedState[mainKey]
      if (!mainObject) {
        return parsedState = { ...parsedState, [mainKey]: { [middleKey]: state[stateKey]}}
      }
  
      const middleObj = parsedState[mainKey][middleKey]
      if (!middleObj) {
        return parsedState = {
          ...parsedState,
          [mainKey]: { ...mainObject, [middleKey]: state[stateKey]}
        }
      }
    }
  })

  return parsedState
}

export default initialStateParserV2