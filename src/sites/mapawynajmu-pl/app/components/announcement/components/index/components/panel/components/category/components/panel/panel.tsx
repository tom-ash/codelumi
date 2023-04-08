import React from 'react'
import { useStore } from '../../../../../../../../../../../../shared/app/functions/store/useStore'
import { categories } from '../../../../../../../../constants/categories'
import { SVG } from '../../../../../../../../../../../../shared/app/components/support/svg/svg'
import { FloatClear } from '../../../../../../../../../../../../shared/app/components/support/float-clear/float-clear'
import { changeUrl } from '../../../../../../../../../../../../shared/app/functions/routes/changers/change-url'

export const Panel = () => {
  const { state, dispatch } = useStore()
  const { texts, control, links } = state
  const { categoryFilterPanel } = control
  const setControl = (value: any) => dispatch({ type: 'control', value })

  // const setInputs = (value: any) => dispatch({ type: 'inputs', value })

  return (
    <>
      {categoryFilterPanel && <div
        className='category-tiles-container'
        onClick={(e) => {
          setControl({ categoryFilterPanel: false })}
        }
        
      />}
      {<div
        className={`tiles ${categoryFilterPanel ? 'opened' : 'closed'}`}
        onClick={(e) => e.stopPropagation()}
      >
        {categories.map((category: any) => {
          const categoryName = category.name
          const label = texts[`${categoryName}CategoryLabel`]
          const href = links[category.linkTrack].href

          return (
            <div className='tile' key={label} onClick={() => changeUrl({ href })}>
              <div className='icon'>
                <SVG name={category.pin.svg} />
              </div>
              <div className='label'>
                {label}
              </div>
              <FloatClear />
            </div>
          )
        })}
      </div>}
    </>
  )
}
