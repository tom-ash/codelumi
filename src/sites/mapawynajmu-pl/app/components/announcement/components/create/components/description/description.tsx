import React, { useContext } from 'react'
import { Checkbox } from './components/checkbox'
import { Textarea } from './components/textarea'

interface DescriptionProps {
  showPolish: boolean
  showEnglish: boolean
  polish: string
  english: string
  setInputs: ChangeInputs
}

const Description = (props: DescriptionProps) => {
  const { showPolish, showEnglish, polish, english, setInputs } = props

  const showPolishProps = {
    checked: showPolish,
    checkedKey: 'showPolishDescription' as const,
    label: 'Dodaj Opis w języku polskim',
    setInputs,
  }

  const polishDescriptionProps = {
    value: polish,
    valueKey: 'polishDescription' as const,
    setInputs,
  }

  const showEnglishProps = {
    checked: showEnglish,
    checkedKey: 'showEnglishDescription' as const,
    label: 'Dodaj Opis w języku angielskim',
    setInputs,
  }

  const englishDescriptionProps = {
    value: english,
    valueKey: 'englishDescription' as const,
    setInputs,
  }

  return (
    <div
      id='listing-create-description'
      className='section'
    >
      <Checkbox {...showPolishProps} />
      {showPolish && <Textarea {...polishDescriptionProps} />}
      <Checkbox {...showEnglishProps} />
      {showEnglish && <Textarea {...englishDescriptionProps} />}
    </div>
  )
}

export default Description
