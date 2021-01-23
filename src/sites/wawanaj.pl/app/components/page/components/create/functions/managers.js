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
    lang,
    changeInputs
  } = this.props

  const localizedInputs = this.langObjHandler(inputs)

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
      const newLocalizedInputs = { ...this.langObjHandler(inputs) }
      newLocalizedInputs.url = value
      changeInputs({ [lang]: newLocalizedInputs })
    }
  }
}

export function bodyManager() {
  const {
    lang,
    inputs,
    changeInputs
  } = this.props

  const localizedInputs = this.langObjHandler(inputs)

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
      const newLocalizedInputs = { ...this.langObjHandler(inputs) }
      newLocalizedInputs.body = value
      changeInputs({ [lang]: newLocalizedInputs })
    }
  }
}

export function titleManager() {
  const {
    inputs,
    lang,
    changeInputs
  } = this.props

  const localizedInputs = this.langObjHandler(inputs)

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
      const newLocalizedInputs = { ...this.langObjHandler(inputs) }
      newLocalizedInputs.title = value
      changeInputs({ [lang]: newLocalizedInputs })
    }
  }
}

export function descriptionManager() {
  const {
    lang,
    inputs,
    changeInputs
  } = this.props

  const {
    description
  } = this.langObjHandler(inputs) || {}

  return {
    classNames: { container: 'form-input textarea slim' },
    label: 'Description',
    value: description || '',
    counterLimit: 10000,
    onChange: value => {
      const newLocalizedInputs = { ...this.langObjHandler(inputs) }
      newLocalizedInputs.description = value
      changeInputs({ [lang]: newLocalizedInputs })
    }
  }
}

export function keywordsManager() {
  const {
    lang,
    inputs,
    changeInputs
  } = this.props

  const {
    keywords
  } = this.langObjHandler(inputs) || {}

  return {
    classNames: { container: 'form-input textarea slim' },
    label: 'Keywords',
    value: keywords || '',
    counterLimit: 10000,
    onChange: value => {
      const newLocalizedInputs = { ...this.langObjHandler(inputs) }
      newLocalizedInputs.keywords = value
      changeInputs({ [lang]: newLocalizedInputs })
    }
  }
}

export function canonicalUrlManager() {
  const {
    inputs,
    lang,
    changeInputs
  } = this.props

  const {
    canonical_url
  } = this.langObjHandler(inputs) || {}

  return {
    classNames: { container: 'form-input text' },
    label: 'Canonical URL',
    value: canonical_url || '',
    onChange: value => {
      const newLocalizedInputs = { ...this.langObjHandler(inputs) }
      newLocalizedInputs.canonical_url = value
      changeInputs({ [lang]: newLocalizedInputs })
    }
  }
}

export function pictureManager() {
  const {
    inputs,
    lang,
    changeInputs
  } = this.props

  const {
    picture
  } = this.langObjHandler(inputs) || {}

  return {
    classNames: { container: 'form-input text' },
    label: 'Picture',
    value: picture || '',
    onChange: value => {
      const newLocalizedInputs = { ...this.langObjHandler(inputs) }
      newLocalizedInputs.picture = value
      changeInputs({ [lang]: newLocalizedInputs })
    }
  }
}

export function metaManager() {
  const {
    lang,
    inputs,
    changeInputs
  } = this.props

  const localizedInputs = this.langObjHandler(inputs)

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
      const newLocalizedInputs = { ...this.langObjHandler(inputs) }
      newLocalizedInputs.meta = value
      changeInputs({ [lang]: newLocalizedInputs })
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
