import { compareParameters } from '../../../../../../../functions/compare-update-parameters'
import { getAmount } from './get-amount'
import { updateParameters } from '../constants/paramters'

export function componentDidMount() {
  getAmount.call(this)
}

export function shouldComponentUpdate(nextProps) {
  return compareParameters(this.props, nextProps, updateParameters)
}

export function componentDidUpdate(prevProps) {
  if (!prevProps.fetchAmount && this.props.fetchAmount) getAmount.call(this)
}

export function componentWillUnmount() {
  this.props.changeInputs({ category: '', district: '' })
}