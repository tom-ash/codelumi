import React, { useContext } from 'react'
import { Dispatch } from 'redux'
import { GenericAttribute } from '../components/common/generic-attribute/generic-attribute'
import AppContext from '../../../../../../../constants/context'

const TITLE_LANG_OBJECT = {
  pl: 'Nazwa firmy',
  en: 'Business Name'
}

const LABEL_LANG_OBJECT = {
  pl: 'Nowa nazwa firmy',
  en: 'New Business Name'
}

const SUBMIT_LABEL_LANG_OBJECT = {
  pl: 'Zmień',
  en: 'Change'
}

interface GenericAttributeProps {
  currentValue: string
  dispatch: Dispatch
  // error: LangObject
}

export const BusinessName = (props: GenericAttributeProps) => {
  const { currentValue, dispatch } = props
  const { langHandler } = useContext(AppContext)

  const businessNameProps = {
    attrName: 'businessName',
    title: langHandler(TITLE_LANG_OBJECT),
    label: langHandler(LABEL_LANG_OBJECT),
    currentValue,
    error: '',
    submitLabel: langHandler(SUBMIT_LABEL_LANG_OBJECT),
    dispatch,
  }

  return <GenericAttribute {...businessNameProps} />

}
