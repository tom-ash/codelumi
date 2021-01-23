import { getAccountData } from './adapter'
 
export function componentDidMount() {
  getAccountData.call(this)
}

export function componentWillUnmount() {
  this.props.resetControl()
  this.props.resetInputs()
  this.props.resetErrors()
  this.props.resetData()
}