function localitiesPresenter(props) {
  const { locality, sublocality } = props

  if (locality && sublocality) return `${locality} - ${sublocality}`

  return locality
}

export default localitiesPresenter
