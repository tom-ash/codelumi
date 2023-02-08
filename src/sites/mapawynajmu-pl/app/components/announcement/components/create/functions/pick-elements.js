export function pickElementsForCategory(elements, elementsName) {
  const { category, setInputs } = this.props

  let pickedElements = elements.map(element => {
    if (element.onlyShow) return null

    if (category !== '' && element.cat.indexOf(category) === -1 && !element.onlyShow) {
      if (this.props[elementsName][element.ref])
        setInputs({ [elementsName]: { ...this.props[elements], [element.ref]: false } })
      return null
    }

    return {
      ref: element.ref,
      checked: this.props[elementsName][element.ref],
      label: this.langHandler({ pl: element.pl, en: element.en }),
    }
  })

  return (pickedElements = pickedElements.filter(element => element))
}
