export function nameManager() {
  const {
    renderShow,
    changeInputs,
    name
  } = this.props

  return {
    classNames: { container: 'form-input text' },
    label: 'Name',
    disabled: renderShow,
    value: name || '',
    onChange: value => changeInputs({ name: value })
  }
}

export function urlManager() {
  const {
    inputs,
    language,
    changeInputs
  } = this.props

  const localizedInputs = this.languageObjectHandler(inputs)

  let url
  if (localizedInputs === null) {
    url = ''
  } else {
    url = localizedInputs.url
  }

  return {
    classNames: { container: 'form-input text' },
    label: 'Url',
    value: url || '',
    onChange: value => {
      const newLocalizedInputs = { ...this.languageObjectHandler(inputs) }
      newLocalizedInputs.url = value
      changeInputs({ [language]: newLocalizedInputs })
    }
  }
}

export function titleManager() {
  const {
    inputs,
    language,
    changeInputs
  } = this.props

  const localizedInputs = this.languageObjectHandler(inputs)

  let title
  if (localizedInputs === null) {
    title = ''
  } else {
    title = localizedInputs.title
  }

  return {
    classNames: { container: 'form-input text' },
    label: 'Title',
    value: title,
    onChange: value => {
      const newLocalizedInputs = { ...this.languageObjectHandler(inputs) }
      newLocalizedInputs.title = value
      changeInputs({ [language]: newLocalizedInputs })
    }
  }
}

export function bodyManager() {
  const {
    language,
    inputs,
    changeInputs
  } = this.props

  const localizedInputs = this.languageObjectHandler(inputs)

  let body
  if (localizedInputs === null) {
    body = {}
  } else {
    body = localizedInputs.body
  }

  return {
    classNames: { container: 'form-input textarea' },
    label: 'Body',
    value: body || '',
    counterLimit: 10000,
    onChange: value => {
      const newLocalizedInputs = { ...this.languageObjectHandler(inputs) }
      newLocalizedInputs.body = value
      changeInputs({ [language]: newLocalizedInputs })
    }
  }
}

export function metaManager() {
  const {
    language,
    inputs,
    changeInputs
  } = this.props

  const localizedInputs = this.languageObjectHandler(inputs)

  let meta
  if (localizedInputs === null) {
    meta = {}
  } else {
    meta = localizedInputs.meta
  }

  return {
    classNames: { container: 'form-input textarea' },
    label: 'Meta',
    value: meta || '',
    counterLimit: 10000,
    onChange: value => {
      const newLocalizedInputs = { ...this.languageObjectHandler(inputs) }
      newLocalizedInputs.meta = value
      changeInputs({ [language]: newLocalizedInputs })
    }
  }
}



export function saveManager() {
  return {
    classNames: { container: 'form-input button' },
    label: 'Save',
    onClick: () => this.save()
  }
}
