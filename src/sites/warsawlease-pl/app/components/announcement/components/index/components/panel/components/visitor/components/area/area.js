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
        <div className='sqm'>
          {langHandler({ pl: <>m<span className='superscript'>2</span></>, en: 'sqm' })}
        </div>
        <div className='float-clear' />
      </div>
      <div className='area-panel-cover' onClick={() => changeControl({ showArea: false, rebuildQueryParams: true })}/>
    </>
  )
}

function presentArea(areaMin, areaMax) {
  const m2 = <>m<span className='superscript'>2</span></>
  if (areaMin === '' && areaMax === '') return 'Dowolna'
  if (areaMin !== '' && areaMax !== '') return <>od {areaMin} do {areaMax} {m2}</>
  if (areaMin !== '') return <>od {areaMin} {m2}</>
  if (areaMax !== '') return <>do {areaMax} {m2}</>
}

const Area = props => {
  const { showArea, areaMin, areaMinInput, areaMax, areaMaxInput, langHandler, changeControl, changeInputs } = props
  
  return (
    <div className='area'>
      <div className='label'>
        Powierzchnia
      </div>
      <div className='presentation' onClick={() => changeControl({ showArea: !showArea })}>
        {presentArea(areaMin, areaMax)}
        <SVG name='caretDown' />
      </div>
      {showArea && <AreaPanel langHandler={langHandler} changeControl={changeControl} changeInputs={changeInputs} areaMin={areaMinInput} areaMax={areaMaxInput} />}
    </div>
  )
}

export default Area
