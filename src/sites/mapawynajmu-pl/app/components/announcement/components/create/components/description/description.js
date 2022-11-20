import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { Checkbox } from './components/checkbox'
import { Textarea } from './components/textarea'
import { SHOW_POLISH_DESCRIPTION_LANG_OBJECT, SHOW_ENGLISH_DESCRIPTION_LANG_OBJECT } from './texts/texts'

class AnnouncementCreateDescription extends React.Component {
  render() {
    const {
      showPolish,
      showEnglish,
      polish,
      english,
      changeInputs,
    } = this.props

    const showPolishProps = {
      checked: showPolish,
      checkedKey: 'showPolish',
      label: 'ABC',
      changeInputs
    }

    const polishDescriptionProps = {
      value: polish,
      valueKey: 'polishDescription',
      changeInputs
    }

    const showEnglishProps = {
      checked: showEnglish,
      checkedKey: 'showEnglish',
      label: 'bbbb',
      changeInputs
    }

    const englishDescriptionProps = {
      value: english,
      valueKey: 'englishDescription',
      changeInputs
    }

    return (
      <div id='listing-create-description' className='section'>
        <Checkbox {...showPolishProps} />
        {showPolish && <Textarea {...polishDescriptionProps} />}
        <Checkbox {...showEnglishProps} />
        {showEnglish && <Textarea {...englishDescriptionProps} />}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementCreateDescription)
