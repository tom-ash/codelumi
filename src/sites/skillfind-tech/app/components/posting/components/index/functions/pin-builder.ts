// @ts-ignore
export const pinBuilder = props => {
  const { id, lat: latitude, lng: longitude } = props

  //   const htmlContent = `
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       viewBox="${svg && svg.viewBox}"
  //     >
  //       <path
  //         style="fill:#4D5656;"
  //         d="${svg && svg.pathData}"
  //       />
  //     </svg>`

  const htmlContent = 'ABC'
  const className = 'todo'
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
