import sendGaEvent from '../../../../../../../functions/google-analytics/send-ga-event'
import analyticEvents from '../constants/analytics/events'

const {
  POLISH_DESCRIPTION_SHOWN_EVENT,
  POLISH_DESCRIPTION_INPUTTED_EVENT,
  ENGLISH_DESCRIPTION_SHOWN_EVENT,
  ENGLISH_DESCRIPTION_INPUTTED_EVENT
} = analyticEvents

export function addPolishDescriptionManager() {
  const {
    addPolishDescription: checked,
    changeInputs
  } = this.props

  return {
    classNames: { container: 'form-input checkbox add-switcher pl' },
    checked,
    label: this.langHandler({
      pl: 'Dodaj Opis w języku polskim',
      en: 'Add Description in Polish Language'
    }),
    onClick: value => {
      changeInputs({ addPolishDescription: value })
      sendGaEvent(POLISH_DESCRIPTION_SHOWN_EVENT)
    }
  }
}

export function polishManager() {
  return {
    classNames: { container: 'form-input textarea pl'},
    value: this.props.pl,
    counterLimit: 3000,
    onChange: value => this.props.changeInputs({ polishDescription: value }),
    onBlur: () => sendGaEvent(POLISH_DESCRIPTION_INPUTTED_EVENT)
  }
}

export function addEnglishDescriptionManager() {
  const {
    addEnglishDescription: checked,
    changeInputs
  } = this.props

  return {
    classNames: { container: 'form-input checkbox add-switcher en' },
    checked,
    label: this.langHandler({
      pl: 'Dodaj Opis w języku angielskim',
      en: 'Add Description in English Language'
    }),
    onClick: value => {
      changeInputs({ addEnglishDescription: value })
      sendGaEvent(ENGLISH_DESCRIPTION_SHOWN_EVENT)
    }
  }
}

export function englishManager() {
  return {
    classNames: { container: 'form-input textarea'},
    value: this.props.en,
    counterLimit: 3000,
    onChange: value => this.props.changeInputs({ englishDescription: value }),
    onBlur: () => sendGaEvent(ENGLISH_DESCRIPTION_INPUTTED_EVENT)
  }
}
