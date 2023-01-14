import API_URL from '../../../../../../../../../../shared/constants/urls/api'
import { Dispatch } from 'redux'
import { genericAttributeValidator } from './generic-attribute.validator'
// import { CellContext } from '../../common/cell/cell'
// import { useContext } from 'react'

const UPDATE_GENERIC_ATTRIBUTE_URL = `${API_URL}/user/update/generic-attr`

export interface GenericAttributeUpdater {
  (props: {
    connecting: boolean
    attrName: string
    value: string
    match?: RegExp
    errorToSet: LangObject
    getAccessToken(): string | null
    setConnecting(newConnecting: boolean): void
    dispatch: Dispatch
    closeCell(): void
  }): void
}

export const genericAttributeUpdater: GenericAttributeUpdater = props => {
  const { connecting, attrName, value, match, errorToSet, setConnecting, dispatch, closeCell, getAccessToken } = props

  if (
    match &&
    !genericAttributeValidator({
      value,
      match,
      errorToSet,
      dispatch,
    })
  ) {
    return
  }

  if (connecting) return

  setConnecting(true)

  const accessToken = getAccessToken()

  const body = JSON.stringify({
    value,
  })

  fetch(`${UPDATE_GENERIC_ATTRIBUTE_URL}/${attrName}`, {
    method: 'PUT',
    // @ts-ignore
    headers: {
      'Content-Type': 'application/json',
      'Access-Token': accessToken,
    },
    body,
  }).then(response => {
    if (response.ok) {
      dispatch({ type: 'user/edit/data', value: { [attrName]: value } })
      setConnecting(false)
      closeCell()
    } else {
      throw new Error('ServerError')
    }
  })
}
