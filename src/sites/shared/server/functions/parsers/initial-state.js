function initialStateParserV2(state) {
  let parsedState = {}

  Object.keys(state).map(stateKey => {
    if (!stateKey.match('/')) return

    const nestedKeys = stateKey.split('/')
    const mainKey = nestedKeys[nestedKeys.length - 3]
    const middleKey = nestedKeys[nestedKeys.length - 2]
    const detailKey = nestedKeys[nestedKeys.length - 1]
    const mainObject = parsedState[mainKey]

    // TODO: ABSTRACT
    if (stateKey == 'assets/svgs') return parsedState = { ...parsedState, [middleKey]: { [detailKey]: state[stateKey]}}

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
  })

  return parsedState
}

export default initialStateParserV2