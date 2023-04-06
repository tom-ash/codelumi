import React from 'react'
import { SVG } from '../../../../../../../../../../shared/app/components/support/svg/svg'
import { TextInput } from '../../../../../../../../../../shared/app/components/support/text-input/text-input'
import { Tiles } from './components/tiles/tiles'
import { useStore } from '../../../../../../../../../../shared/app/functions/store/useStore'

export const Category = () => {
  const { state, dispatch } = useStore()
  const { control } = state
  const { showCategoryTiles } = control
  const setControl = (value: any) => dispatch({ type: 'control', value })
  const onClickCallback = () => setControl({ showCategoryTiles: true })

  const children = <SVG name='list' />

  const textInputProps = {
    inputKey: 'category',
    containerClassNames: 'text-input filter',
    children,
    disabled: true,
    onClickCallback,
  }

  return (
    <div className='category-filter'>
      <TextInput {...textInputProps} />
      {showCategoryTiles && <Tiles />}
    </div>
  )
}
