import React, { useEffect } from 'react'
import { useStore } from '../../../../../../../../shared/app/functions/store/useStore'
import { HeadingTwo } from '../../../../../../../../shared/app/components/support/headings/heading-two'
import { Instructions } from '../../../../../../../../shared/app/components/support/instructions/instructions'
import { SVG } from '../../../../../../../../shared/app/components/support/svg/svg'
import { categories } from '../../../../constants/categories'

export const Category = () => {
  const { state, dispatch } = useStore()
  const { app, texts, inputs } = state
  const lang = app.lang as Lang
  const { device, screenWidth } = app
  const { categoryHeading, categoryInstructions } = texts
  const { category: currentCategory } = inputs

  const setInputs = (value: any) => dispatch({ type: 'inputs', value })

  let iconWidth: number | undefined

  useEffect(() => {
    if (device !== 'smallPhone') {
      iconWidth = undefined
    } else {
      iconWidth = (screenWidth - 0.16 * (screenWidth - 64) - 64) / 3
    }

  }, [device, screenWidth])

  return (
    <div className='category'>
      <HeadingTwo text={categoryHeading} />
      <Instructions text={categoryInstructions} />
      <div className='categories'>
        {categories.map(category => {
          const {
            label: labelLangObj,
            pin: { svg: name },
            value,
          } = category
          const label = labelLangObj[lang]
          const classNames = ['tile']
          if (currentCategory === value) {
            classNames.push('selected')
          }

          return (
            <div
              key={label}
              className={classNames.join(' ')}
              onClick={() => setInputs({ category: value })}
            >
              <div
                className='icon'
                style={{
                  width: iconWidth,
                  height: iconWidth,
                }}
              >
                <SVG name={name} />
              </div>
              <div className='label'>{label}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
