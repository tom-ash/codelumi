import React from 'react'
import SVG from '../../../../../../../../../../shared/app/components/support/svg/svg.js'
import AreaMin from './inputs/area-min.js'

const AreaPanel = ({
  langHandler,
  changeControl
}) => {

  return (
    <>
      <div className='area-panel'>
        <AreaMin langHandler={langHandler} />
      </div>
      <div className='area-panel-cover' onClick={() => changeControl({ showArea: false })}/>
    </>
  )
}

const Area = ({
  langHandler,
  changeControl,
  showArea
}) => {
  
  return (
    <div className='area'>
      <div>
        Powierzchnia
      </div>
      <div onClick={() => changeControl({ showArea: !showArea })}>
        Dowolna <SVG name='caretDown' />
      </div>
      {true && <AreaPanel langHandler={langHandler} changeControl={changeControl} />}
    </div>
  )
}

export default Area
