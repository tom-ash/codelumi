import React from 'react'
import SVG from '../../../../../../../../../../../../shared/app/components/support/svg/svg.js'
import AreaMin from './inputs/area-min.js'
import AreaMax from './inputs/area-max.js'

const AreaPanel = ({
  areaMin, areaMax,
  langHandler, changeControl, changeInputs
}) => {

  return (
    <>
      <div className='area-panel'>
        <AreaMin langHandler={langHandler} changeInputs={changeInputs} areaMin={areaMin} />
        <AreaMax langHandler={langHandler} changeInputs={changeInputs} areaMax={areaMax} />
        <div className='float-clear' />
      </div>
      <div className='area-panel-cover' onClick={() => changeControl({ showArea: false, rebuildQueryParams: true })}/>
    </>
  )
}

const Area = ({
  showArea, areaMin, areaMax,
  langHandler, changeControl, changeInputs
}) => {
  
  return (
    <div className='area'>
      <div>
        Powierzchnia
      </div>
      <div onClick={() => changeControl({ showArea: !showArea })}>
        {areaMin === '' && areaMax === '' && 'Dowolna'}
        {areaMin !== '' && areaMax !== '' && `od ${areaMin} do ${areaMax} m2`
        
        }
        <SVG name='caretDown' />
      </div>
      {showArea && <AreaPanel langHandler={langHandler} changeControl={changeControl} changeInputs={changeInputs} areaMin={areaMin} areaMax={areaMax} />}
    </div>
  )
}

export default Area
