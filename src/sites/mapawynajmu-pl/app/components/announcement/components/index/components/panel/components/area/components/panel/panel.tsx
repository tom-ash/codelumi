import React from 'react'
import { useStore } from '../../../../../../../../../../../../shared/app/functions/store/useStore'
import { categories } from '../../../../../../../../constants/categories'
import { SVG } from '../../../../../../../../../../../../shared/app/components/support/svg/svg'
import { FloatClear } from '../../../../../../../../../../../../shared/app/components/support/float-clear/float-clear'
import { changeUrl } from '../../../../../../../../../../../../shared/app/functions/routes/changers/change-url'

export const Panel = () => {
  const { state, dispatch } = useStore()
  const { texts, control, links } = state
  const { areaFilterPanel } = control
  const setControl = (value: any) => dispatch({ type: 'control', value })

  // const setInputs = (value: any) => dispatch({ type: 'inputs', value })

  return (
    <>
      {areaFilterPanel && (
        <div
          className='area-panel-container'
          onClick={e => {
            setControl({ areaFilterPanel: false })
          }}
        />
      )}
      {
        <div
          className={`area-panel ${areaFilterPanel ? 'opened' : 'closed'}`}
          onClick={e => e.stopPropagation()}
        >
          
        </div>
      }
    </>
  )
}
