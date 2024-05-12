// @ts-ignore
export const pinBuilder = props => {
  const { id, lat: latitude, lng: longitude, industryIcon, svgs, currentListingId } = props

  console.log('props', props)

  const classNames = ['pin']

  if (+currentListingId === id) {
    classNames.push('current')
  }

  const svg = svgs[industryIcon]

  const htmlContent = `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="${svg && svg.viewBox}"
    >
      <path
        style="fill:#4D5656;"
        d="${svg && svg.pathData}"
      />
    </svg>`

  const className = classNames.join(' ')
  const href = 'todo'

  return {
    id,
    latitude,
    longitude,
    htmlContent,
    className,
    href,
  }
}
