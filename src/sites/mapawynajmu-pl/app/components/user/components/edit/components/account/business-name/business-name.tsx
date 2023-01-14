import React, { useContext } from 'react'
import { Dispatch } from 'redux'
import { GenericAttribute } from '../components/common/generic-attribute/generic-attribute'
import AppContext from '../../../../../../../constants/context'

const TITLE_LANG_OBJECT = {
  pl: 'Nazwa firmy',
  en: 'Business Name',
}

const LABEL_LANG_OBJECT = {
  pl: 'Nowa nazwa firmy',
  en: 'New Business Name',
}

const SUBMIT_LABEL_LANG_OBJECT = {
  pl: 'Zmień',
  en: 'Change',
}

const BUSINESS_NAME_ERROR_LANG_OBJECT = {
  pl: 'Nieprawidłowa nazwa firmy.',
  en: 'Invalid business name.',
}

interface GenericAttributeProps {
  currentValue: string
  error: LangObject
  dispatch: Dispatch
}

export const BusinessName = (props: GenericAttributeProps) => {
  const { currentValue, error, dispatch } = props
  const { langHandler } = useContext(AppContext)

  const businessNameProps = {
    attrName: 'businessName',
    title: langHandler(TITLE_LANG_OBJECT),
    label: langHandler(LABEL_LANG_OBJECT),
    currentValue,
    error: langHandler(error),
    errorToSet: BUSINESS_NAME_ERROR_LANG_OBJECT,
    match: /^.+$/,
    submitLabel: langHandler(SUBMIT_LABEL_LANG_OBJECT),
    dispatch,
  }

  return <GenericAttribute {...businessNameProps} />
}
