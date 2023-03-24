import React from 'react'
import { categories } from '../../../constants/categories'
import SVG from '../../../../../../../shared/app/components/support/svg/svg'
import Info from '../../../../../../../shared/app/components/support/info'
import { Heading } from '../../../../support/components/heading'

const HEADING = {
  pl: 'Kategoria (wymagana)',
  en: 'Category (required)',
}

const INFO = {
  pl: 'Kliknij w odpowiednią ikonę, aby wybrać kategorię.',
  en: 'Click the respective icon to select the category.',
}

type CategoryProps = {
  currentCategory: number
  setInputs(params: { category: number }): void
}

export function Category(props: CategoryProps) {
  const { currentCategory, setInputs } = props

  const infoProps = {
    // @ts-ignore
    message: INFO['pl'],
  }

  return (
    <div className='category'>
      {/* @ts-ignore */}
      <Heading
        tier={2}
        // @ts-ignore
        text={HEADING['pl']}
      />
      <Info {...infoProps} />
      <div className='categories'>
        {categories.map(category => {
          const {
            label: labelLangObj,
            pin: { svg: name },
            value,
          } = category
          // @ts-ignore
          const label = labelLangObj['pl']
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
              }}
            >
              <div className='icon'>
                {/* @ts-ignore */}
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

export default Category
