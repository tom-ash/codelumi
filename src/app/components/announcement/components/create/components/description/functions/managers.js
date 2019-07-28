import { managerAgent } from 'managed-inputs'

export function polishManager(action, value) {
  return managerAgent(action, {
    classNames: { container: 'primary-input textarea'},
    value: this.props.polish,
    label: this.languageHandler('opis w języku polskim', 'description in Polish'),
    counterLimit: 3000,
    onChange: () => this.props.changeInputs({ descriptionPolish: value })
  })
}

export function englishManager(action, value) {
  return managerAgent(action, {
    classNames: { container: 'primary-input textarea'},
    value: this.props.english,
    label: this.languageHandler('opis w języku angielskim', 'description in English'),
    counterLimit: 3000,
    onChange: () => this.props.changeInputs({ descriptionEnglish: value })
  })
}
