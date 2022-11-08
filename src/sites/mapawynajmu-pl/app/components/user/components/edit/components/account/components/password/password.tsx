import React, { useContext } from 'react'
import { UserEditCell as Cell } from '../cell/cell'
import SVG from '../../../../../../../support/components/svg/svg'
import AppContext from '../../../../../../../../constants/context'

const Edit = () => {
  return (
    <>
      EDIT
    </>
  )
}

const titleLangObject = { pl: 'Hasło', en: 'Password' }

export const UserEditPassword = () => {
  const { langHandler } = useContext(AppContext)

  return (
    <Cell
      title={langHandler(titleLangObject)}
      // @ts-ignore
      value={<SVG name='eyeSlash' />}
      edit={<Edit />}
    />
  )
}
