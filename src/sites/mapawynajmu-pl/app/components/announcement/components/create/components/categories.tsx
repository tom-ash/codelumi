import React from "react"
import { categories } from '../../../constants/categories'
import SVG from '../../../../../../../shared/app/components/support/svg/svg'

type CategoriesProps = {
  langHandler: LangHandler
}

export function Categories(props: CategoriesProps) {


  console.log(categories)
  const {
    langHandler
  } = props


  return (
    <div className='categories'>
      {categories.map(category => {
        const { label, pin: { svg: name } } = category

        return (
          <div className='category'>
            <div className='icon'>
              {/* @ts-ignore */}
              <SVG name={name} />
            </div>
            <div className='label'>
              {/* @ts-ignore */}
              {langHandler(label)}
            </div>
          </div>
        )
      })}
      <div className='float-clear' />
    </div>
  )
}

export default Categories
