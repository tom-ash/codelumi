import React from "react"
import { categories } from '../../../constants/categories'
import SVG from '../../../../../../../shared/app/components/support/svg/svg'
import Info from '../../../../../../../shared/app/components/support/info'
import Heading from '../../../../support/components/heading'

const HEADING = {
  pl: 'Kategoria (wymagana)',
  en: 'Category (required)'
}

type CategoryProps = {
  currentCategory: number
  changeInputs(params: { category: number }): void
  langHandler: LangHandler
}

export function Category(props: CategoryProps) {
  const {
    currentCategory,
    changeInputs,
    langHandler
  } = props

  const infoProps = {
    // @ts-ignore
    message: langHandler({
      pl: 'Kliknij w odpowiednią ikonę, aby wybrać kategorię.',
      en: 'Click the respective icon to select the category.'
    })
  }

  return (
    <div className='category'>
      {/* @ts-ignore */}
      <Heading tier={2} text={langHandler(HEADING)} />
      <Info {...infoProps} />
      <div className='categories'>
        {categories.map(category => {
          const { label: labelLangObj, pin: { svg: name }, value } = category
          // @ts-ignore
          const label = langHandler(labelLangObj)
          const classNames = ['tile']
          if (currentCategory === value) { 
            classNames.push('selected')
          }

          return (
            <div
              key={label}
              className={classNames.join(' ')}
              onClick={() => {
                changeInputs({ category: value })
              }}
            >
              <div className='icon'>
                {/* @ts-ignore */}
                <SVG name={name} />
              </div>
              <div className='label'>
                {label}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Category
