import React from 'react'
import SVG from '../../../../../../../../../../shared/app/components/support/svg/svg.js'
import AreaMin from './inputs/area-min.js'

const AreaPanel = ({
  langHandler,
  changeControl,
  changeInputs,
  areaMin,
  areaMax
}) => {

  return (
    <>
      <div className='area-panel'>
        <AreaMin langHandler={langHandler} changeInputs={changeInputs} areaMin={areaMin} />
      </div>
      <div className='area-panel-cover' onClick={() => changeControl({ showArea: false, rebuildQueryParams: true })}/>
    </>
  )
}

const Area = ({
  langHandler,
  changeControl,
  changeInputs,
  showArea,
  areaMin,
  areaMax
}) => {
  
  return (
    <div className='area'>
      <div>
        Powierzchnia
      </div>
      <div onClick={() => changeControl({ showArea: !showArea })}>
        Dowolna <SVG name='caretDown' />
      </div>
      {showArea && <AreaPanel langHandler={langHandler} changeControl={changeControl} changeInputs={changeInputs} areaMin={areaMin} areaMax={areaMax} />}
    </div>
  )
}

export default Area
