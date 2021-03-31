import { errors } from '../constants/errors'

function errorSetter(field) {
  const { dispatch } = this.props

  dispatch({ type: 'user/create/errors', value: { [field]: errors[field] }})
}

export default errorSetter
