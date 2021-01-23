import React from 'react'
import ScalableVectorGraphic from '../../../../../../../support/components/scalable-vector-graphic/scalable-vector-graphic'
import { categories } from '../../../../../../constants/categories'


const AnnouncementIndexPanelCategories = ({
  scalableVectorGraphics,
  langObjHandler,
  changeInputs,
  changeControl,
  currentCategory
}) => {
  return (
    <div className='categories'>
      {categories.map(category => {
        const active = category.value === currentCategory || currentCategory === ''
        return (
          <React.Fragment key={category.url.en}>
            <div
              className={`category${active ? ' active' : ''}`}
              onClick={() => {
                changeInputs({ category: category.value, offset: 0 })
                changeControl({ fetch: true })
              }}
            >
              <ScalableVectorGraphic
                pathData={scalableVectorGraphics && scalableVectorGraphics[category.pin.svg]}
                {...active ? { fill: category.pin.color } : { fill: '#909497' }}
              />
              {langObjHandler(category.label)}
            </div>
          </React.Fragment>
        )
      })}
    </div>
  )


}

export default AnnouncementIndexPanelCategories
