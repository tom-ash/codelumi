import { managerAgent } from 'managed-inputs'

export function polishManager(action, value) {
  return managerAgent(action, {
    classNames: { container: 'form-input textarea'},
    value: this.props.polish,
    label: this.languageHandler('W języku polskim', 'In Polish'),
    counterLimit: 3000,
    onChange: () => this.props.changeInputs({ descriptionPolish: value })
  })
}

export function englishManager(action, value) {
  return managerAgent(action, {
    classNames: { container: 'form-input textarea'},
    value: this.props.english,
    label: this.languageHandler('W języku angielskim', 'In English'),
    counterLimit: 3000,
    onChange: () => this.props.changeInputs({ descriptionEnglish: value })
  })
}
