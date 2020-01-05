export function polishManager(action, value) {
  return {
    classNames: { container: 'form-input textarea'},
    value: this.props.pl,
    label: this.languageHandler('W języku polskim (opcjonalny)', 'In Polish (optional)'),
    counterLimit: 3000,
    onChange: (value) => this.props.changeInputs({ descriptionPolish: value })
  }
}

export function englishManager(action, value) {
  return {
    classNames: { container: 'form-input textarea'},
    value: this.props.en,
    label: this.languageHandler('W języku angielskim (opcjonalny)', 'In English (optional)'),
    counterLimit: 3000,
    onChange: (value) => this.props.changeInputs({ descriptionEnglish: value })
  }
}
