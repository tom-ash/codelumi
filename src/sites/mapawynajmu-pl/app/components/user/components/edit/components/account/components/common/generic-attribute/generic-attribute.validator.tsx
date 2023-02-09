import { Dispatch } from 'redux'

interface GenericAttributeValidator {
  (props: { value: string; match: RegExp; errorToSet: LangObject | string; dispatch: Dispatch }): boolean
}

export const genericAttributeValidator: GenericAttributeValidator = props => {
  const { value, match, errorToSet, dispatch } = props

  if (!value.match(match)) {
    dispatch({ type: 'errors', value: { businessName: errorToSet } })
    return false
  }

  return true
}
