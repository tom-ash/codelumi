interface GetPinContentProps {
  viewBox: string
  pathData: string
}

export const getPinContent = (props: GetPinContentProps) => {
  const { viewBox, pathData } = props

  return `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="${viewBox}"
    >
      <path
        style="fill:#4D5656;"
        d="${pathData}"
      />
    </svg>`
}
