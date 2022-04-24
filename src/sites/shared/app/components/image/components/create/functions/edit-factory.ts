interface EditFactoryProps {
  changeRoute(props: { href: string }): void,
  buildUrl(props: { path: string}): string
}

const editFactory = (props: EditFactoryProps) => {
  const { changeRoute, buildUrl } = props

  return (
    (imageKey: string) => {
      const href = buildUrl({ path: `edit-image/${imageKey}` })
      changeRoute({ href })
    }
  )
}

export default editFactory