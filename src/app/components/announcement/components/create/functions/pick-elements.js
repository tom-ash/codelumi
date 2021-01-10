export function pickElementsForCategory(elements, elementsName) {
  const { category, changeInputs } = this.props

  let pickedElements = elements.map(element => {
    if (element.onlyShow) return null
    
    if (category !== '' && element.cat.indexOf(category) === -1 && !element.onlyShow) {
      if (this.props[elementsName][element.ref]) changeInputs({ [elementsName]: { ...this.props[elements], [element.ref]: false}})
      return null
    }

    return {
      ref: element.ref,
      checked: this.props[elementsName][element.ref],
      label: this.langHandler(element.pl, element.en)
    }
  })

  return pickedElements = pickedElements.filter(element => element)
}