export function addPolishDescriptionManager() {
  const {
    addPolishDescription: checked,
    changeInputs
  } = this.props

  return {
    classNames: { container: 'form-input checkbox add-switcher pl' },
    checked,
    label: this.languageObjectHandler({
      pl: 'Dodaj Opis w języku polskim',
      en: 'Add Description in Polish Language'
    }),
    onClick: value => {
      changeInputs({ addPolishDescription: value })
    }
  }
}

export function polishManager() {
  return {
    classNames: { container: 'form-input textarea pl'},
    value: this.props.pl,
    counterLimit: 3000,
    onChange: value => this.props.changeInputs({ polishDescription: value })
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
    label: this.languageObjectHandler({
      pl: 'Dodaj Opis w języku angielskim',
      en: 'Add Description in English Language'
    }),
    onClick: value => {
      changeInputs({ addEnglishDescription: value })
    }
  }
}

export function englishManager() {
  return {
    classNames: { container: 'form-input textarea'},
    value: this.props.en,
    counterLimit: 3000,
    onChange: value => this.props.changeInputs({ englishDescription: value })
  }
}
