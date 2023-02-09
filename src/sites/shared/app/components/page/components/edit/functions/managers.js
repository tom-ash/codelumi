export function urlManager() {
  const { url, setInputs } = this.props

  return {
    classNames: { container: 'form-input text' },
    label: 'URL',
    value: url,
    onChange: value => setInputs({ url: value }),
  }
}

export function bodyManager() {
  const { body, setInputs, setData } = this.props

  return {
    classNames: { container: 'form-input textarea body' },
    // label: 'Body',
    value: body,
    counterLimit: 100000,
    onChange: value => {
      setInputs({ body: value })
      setData({ updated: null })
    },
  }
}

export function titleManager() {
  const { title, setInputs } = this.props

  return {
    classNames: { container: 'form-input text' },
    label: 'Title',
    value: title,
    onChange: value => setInputs({ title: value }),
  }
}

export function descriptionManager() {
  const { description, setInputs } = this.props

  return {
    classNames: { container: 'form-input textarea slim' },
    label: 'Description',
    value: description,
    counterLimit: 10000,
    onChange: value => setInputs({ description: value }),
  }
}

export function keywordsManager() {
  const { keywords, setInputs } = this.props

  return {
    classNames: { container: 'form-input textarea slim' },
    label: 'Keywords',
    value: keywords,
    counterLimit: 10000,
    onChange: value => setInputs({ keywords: value }),
  }
}

export function canonicalUrlManager() {
  const { canonicalUrl, setInputs } = this.props

  return {
    classNames: { container: 'form-input text' },
    label: 'Canonical URL',
    value: canonicalUrl,
    onChange: value => setInputs({ canonicalUrl: value }),
  }
}

export function pictureManager() {
  const { coverImage, setInputs } = this.props

  return {
    classNames: { container: 'form-input text' },
    label: 'Cover Image',
    value: coverImage || '',
    onChange: value => setInputs({ coverImage: value }),
  }
}

export function saveManager() {
  const { fetching } = this.props

  return {
    classNames: { container: 'form-input button save' },
    label: 'Save',
    disabled: fetching,
    onClick: () => this.save({ withRouteChange: false }),
  }
}

export function saveAndShowManager() {
  const { fetching } = this.props

  return {
    classNames: { container: 'form-input button save-and-show' },
    label: 'Save & Exit',
    disabled: fetching,
    onClick: () => this.save({ withRouteChange: true }),
  }
}
