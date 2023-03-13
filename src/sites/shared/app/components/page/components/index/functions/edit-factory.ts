import { changeUrl } from "../../../../../functions/routes/changers/change-url"

interface EditFactoryProps {
  buildUrl(props: { path: string }): string
}

const editFactory = (props: EditFactoryProps) => {
  const { buildUrl } = props

  return (pageKey: string) => {
    const href = buildUrl({ path: `pages/${pageKey}` })

    changeUrl({ href })
  }
}

export default editFactory
