import React, { useContext } from 'react'
import { Checkbox } from './components/checkbox'
import { Textarea } from './components/textarea'
import { SHOW_POLISH_DESCRIPTION_LANG_OBJECT, SHOW_ENGLISH_DESCRIPTION_LANG_OBJECT } from './texts/texts'
import AppContext from '../../../../../../constants/context'

interface DescriptionProps {
  showPolish: boolean
  showEnglish: boolean
  polish: string
  english: string
  setInputs: ChangeInputs
}

const Description = (props: DescriptionProps) => {
  const { langHandler } = useContext(AppContext)
  const { showPolish, showEnglish, polish, english, setInputs } = props

  const showPolishProps = {
    checked: showPolish,
    checkedKey: 'showPolishDescription' as const,
    label: langHandler(SHOW_POLISH_DESCRIPTION_LANG_OBJECT),
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
    label: langHandler(SHOW_ENGLISH_DESCRIPTION_LANG_OBJECT),
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
