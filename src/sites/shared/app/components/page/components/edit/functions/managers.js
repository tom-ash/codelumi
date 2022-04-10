export function nameManager() {
  const { name, changeInputs } = this.props

  return {
    classNames: { container: 'form-input text' },
    label: 'Name',
    value: name,
    onChange: value => changeInputs({ name: value })
  }
}

export function urlManager() {
  const { url, changeInputs } = this.props

  return {
    classNames: { container: 'form-input text' },
    label: 'Url',
    value: url,
    onChange: value => changeInputs({ url: value })
  }
}

export function bodyManager() {
  const { body, changeInputs, changeData } = this.props

  return {
    classNames: { container: 'form-input textarea body' },
    label: 'Body',
    value: body,
    counterLimit: 100000,
    onChange: value => {
      changeInputs({ body: value })
      changeData({ updated: null })
    }
  }
}

export function titleManager() {
  const { title, changeInputs } = this.props

  return {
    classNames: { container: 'form-input text' },
    label: 'Title',
    value: title,
    onChange: value => changeInputs({ title: value })
  }
}

export function descriptionManager() {
  const { description, changeInputs } = this.props

  return {
    classNames: { container: 'form-input textarea slim' },
    label: 'Description',
    value: description,
    counterLimit: 10000,
    onChange: value => changeInputs({ description: value })
  }
}

export function keywordsManager() {
  const { keywords, changeInputs } = this.props

  return {
    classNames: { container: 'form-input textarea slim' },
    label: 'Keywords',
    value: keywords,
    counterLimit: 10000,
    onChange: value => changeInputs({ keywords: value })
  }
}

export function canonicalUrlManager() {
  const { canonicalUrl, changeInputs } = this.props

  return {
    classNames: { container: 'form-input text' },
    label: 'Canonical URL',
    value: canonicalUrl,
    onChange: value => changeInputs({ canonicalUrl: value })
  }
}

export function pictureManager() {
  const { picture, changeInputs } = this.props

  return {
    classNames: { container: 'form-input text' },
    label: 'Picture',
    value: picture || '',
    onChange: value => changeInputs({ picture: value })
  }
}

export function metaManager() {
  const { meta, changeInputs } = this.props

  return {
    classNames: { container: 'form-input textarea' },
    label: 'Meta',
    value: meta || '{}',
    counterLimit: 10000,
    onChange: value => changeInputs({ meta: value })
  }
}

export function saveManager() {
  const { fetching } = this.props

  return {
    classNames: { container: 'form-input button save' },
    label: 'Save',
    disabled: fetching,
    onClick: () => this.save({ withRouteChange: false })
  }
}

export function saveAndShowManager() {
  const { fetching } = this.props

  return {
    classNames: { container: 'form-input button save-and-show' },
    label: 'Save & Exit',
    disabled: fetching,
    onClick: () => this.save({ withRouteChange: true })
  }
}
