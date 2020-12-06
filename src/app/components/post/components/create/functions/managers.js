export function nameManager() {
  const {
    language,
    changeInputs,
    name
  } = this.props

  return {
    classNames: { container: 'form-input text' },
    label: 'Name',
    disabled: true,
    value: name,
    onChange: value => changeInputs({ name })
  }
}

export function metaManager() {
  const {
    language,
    changeInputs,
    meta
  } = this.props

  return {
    classNames: { container: 'form-input textarea' },
    label: 'Meta',
    value: this.languageObjectHandler(meta),
    counterLimit: 10000,
    onChange: value => changeInputs({ meta: { ...meta, [language]: value } })
  }
}

export function urlManager() {
  const {
    language,
    changeInputs,
    url
  } = this.props

  return {
    classNames: { container: 'form-input text' },
    label: 'Url',
    value: this.languageObjectHandler(url),
    onChange: value => changeInputs({ url: { ...url, [language]: value } })
  }
}

export function titleManager() {
    const {
      language,
      changeInputs,
      title
    } = this.props
  
    return {
      classNames: { container: 'form-input text' },
      label: 'Title',
      value: this.languageObjectHandler(title),
      onChange: value => changeInputs({ title: { ...title, [language]: value } })
    }
  }

export function bodyManager() {
  const {
    language,
    changeInputs,
    body
  } = this.props

  return {
    id: 'abc',
    classNames: { container: 'form-input textarea' },
    label: 'Body',
    value: this.languageObjectHandler(body),
    counterLimit: 10000,
    onChange: value => {
      const newBody = { ...body, [language]: value }
      changeInputs({ body: newBody })
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
