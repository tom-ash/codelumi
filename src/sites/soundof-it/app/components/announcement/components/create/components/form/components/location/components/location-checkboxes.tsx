import React from 'react'
import { ManagedMultipleCheckbox } from 'managed-inputs'

interface LocationCheckboxesInterface {
  setStore(newStore: object): void,
  remote: boolean,
  hybrid: boolean,
  office: boolean,
}

export function LocationCheckboxes(props: LocationCheckboxesInterface) {
  const {
    setStore,
    remote,
    hybrid,
    office
  } = props

  const checkboxes = [
    {
      ref: 'remote',
      checked: remote,
      label: 'Remote'
    },
    {
      ref: 'hybrid',
      checked: hybrid,
      label: 'Hybrid'
    },
    {
      ref: 'office',
      checked: office,
      label: 'Office'
    }
  ]

  const managedMultipleCheckboxProps = {
    classNames: { container: 'form-input checkbox'},
    checkboxes,
    onClick: (value: boolean, ref: string) => {
      setStore({ [ref]: value })
    }  
  }

  return <ManagedMultipleCheckbox {...managedMultipleCheckboxProps} />
}

export default LocationCheckboxes
