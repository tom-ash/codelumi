import { changeUrl } from '../../../../../functions/routes/changers/change-url'

interface EditFactoryProps {
  buildUrl(props: { path: string }): string
}

const editFactory = (props: EditFactoryProps) => {
  const { buildUrl } = props

  return (imageKey: string) => {
    const href = buildUrl({ path: `images/${imageKey}` })

    changeUrl({ href })
  }
}

export default editFactory
