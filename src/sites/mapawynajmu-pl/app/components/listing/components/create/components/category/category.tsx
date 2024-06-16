import React, { useEffect } from 'react'
import { HeadingTwo } from '../../../../../../../../shared/app/components/support/headings/heading-two'
import { InstructionsDeprecated } from '../../../../../../../../shared/app/components/support/instructions_deprecated/instructions_deprecated'
import { SVG } from '../../../../../../../../shared/app/components/support/svg/svg'
import { categories } from '../../../../constants/categories'
import { useApp } from '../../../../../../../../shared/app/functions/store/use-app'
import { useTexts } from '../../../../../../../../shared/app/functions/store/use-texts'
import { useInputs } from '../../../../../../../../shared/app/functions/store/use-inputs'
import { useDispatch } from 'react-redux'
import { useErrors } from '../../../../../../../../shared/app/functions/store/use-errors'

export const CATEGORY_ID = 'category'

export const Category = () => {
  const { lang, device, screenWidth } = useApp()
  const { categoryHeading, categoryInstructions } = useTexts()
  const { category: currentCategory } = useInputs()
  const dispatch = useDispatch()
  const setInputs = (value: any) => dispatch({ type: 'inputs', value })
  const setErrors = (value: any) => dispatch({ type: 'errors', value })
  const { isCategoryError: isError } = useErrors()

  let iconWidth: number | undefined

  useEffect(() => {
    if (device !== 'smallPhone') {
      iconWidth = undefined
    } else {
      iconWidth = (screenWidth - 0.16 * (screenWidth - 64) - 64) / 3
    }
  }, [device, screenWidth])

  const classNames = ['category']
  if (isError) {
    classNames.push('error')
  }

  return (
    <div
      id={CATEGORY_ID}
      className={classNames.join(' ')}
    >
      <HeadingTwo text={categoryHeading} />
      <InstructionsDeprecated text={categoryInstructions} />
      <div className='categories'>
        {categories.map(category => {
          const {
            label: labelLangObj,
            pin: { svg: name },
            value,
          } = category
          // @ts-ignore
          const label = labelLangObj[lang]
          const classNames = ['tile']
          if (currentCategory === value) {
            classNames.push('selected')
          }

          return (
            <div
              key={label}
              className={classNames.join(' ')}
              onClick={() => {
                setInputs({ category: value })
                setErrors({ isCategoryError: false })
              }}
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
