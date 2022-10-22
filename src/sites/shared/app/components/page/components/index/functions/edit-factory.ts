interface EditFactoryProps {
  buildUrl(props: { path: string }): string
  changeRoute(props: { href: string }): void
}

const editFactory = (props: EditFactoryProps) => {
  const { changeRoute, buildUrl } = props

  return (pageKey: string) => {
    const href = buildUrl({ path: `pages/${pageKey}` })

    changeRoute({ href })
  }
}

export default editFactory
