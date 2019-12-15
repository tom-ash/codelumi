import React from 'react'
import UserEditAccountBusinessName from '../../business-name/business-name'
import UserEditAccountTaxNumber from '../../tax-number/tax-number'
import UserEditAccountPhoneNumber from '../../phone-number/phone-number'
import UserEditAccountEmail from '../../email-address/email-address'
import UserEditAccountPassword from '../../password/password'
import UserDestroy from '../../../../../../destroy/destroy'
import WindmillSpinner from '../../../../../../../../support/components/spinner/components/windmill/windmill.js'

export function centralManager(element) {
  switch (element) {
    case 'title': return titleProvider.call(this)
    case 'icon': return iconProvider.call(this)
    case 'currentValue': return currentValueProvider.call(this)
    case 'triggerClass': return triggerClassProvider.call(this)
    case 'triggerOnClick': return triggerOnClickHandler.bind(this)
    case 'triggerIcon': return triggerIconProvider.call(this)
    case 'triggerText': return triggerTextProvider.call(this)
    case 'editClass': return editClassProvider.call(this)
    case 'inputClass': return inputClassProvider.call(this)
    case 'editInput': return editInputProvider.call(this)
    default: break;
  }
}

function titleProvider() {
  switch (this.state.item) {
    case 'businessName': return 'BUSINESS NAME'
    case 'taxNumber': return 'TAX IDENTIFICATION NUMBER'
    case 'phone': return 'PHONE NUMBER'
    case 'email': return 'EMAIL ADDRESS'
    case 'password': return 'PASSWORD'
    case 'destroy': return 'DELETE ACCOUNT'
    default: break;
  }
}

function iconProvider() {
  switch (this.state.item) {
    case 'businessName': return <i className="fas fa-user-edit"></i>
    case 'taxNumber': return <i className="fas fa-file-alt"></i>
    case 'phone': return <i className="fas fa-mobile"></i>
    case 'email': return <i className="fas fa-envelope"></i>
    case 'password': return <i className="fas fa-key"></i>
    case 'destroy': return <i className="fas fa-user-times"></i>
    default: break;
  }
}

function currentValueProvider() {
  if (this.state.item === 'phone') return this.state.phoneCode + ' ' + this.state.body
  if (this.state.item === 'password') return <i className="far fa-eye-slash"></i>
  return this.state.currentValue
}

function triggerClassProvider() {
  if (this.state.item === 'destroy') {
    switch (this.state.stage) {
      case null: return 'trigger destroy closed'
      case 'closed-after-open': return 'trigger destroy closed-after-open'
      default: return 'trigger destroy opened'
    }
  }
  switch (this.state.stage) {
    case null: return 'trigger closed'
    case 'closed-after-open': return 'trigger closed-after-open'
    default: return 'trigger opened'
  }
}

function triggerOnClickHandler() {
  let controlChanger = this.props.changeControl
  let stateKey = `${this.props.item}Stage`
  if (this.state.item == 'destroy') {
    controlChanger = this.props.changeDestroyControl
    stateKey = 'stage'
  }
  if (this.state.stage !== 'opened') {
    controlChanger({ [stateKey]: 'opened' })
    setTimeout(() => this.setState({ inputClass: 'inputs-container shown' }), 480);
  } else {
    controlChanger({ [stateKey]: 'closed-after-open' })
    this.setState({ inputClass: 'inputs-container hiding' })
    setTimeout(() => this.setState({ inputClass: 'inputs-container hidden' }), 960);
    setTimeout(() => controlChanger({ [stateKey]: null }), 960);
  }
}

function triggerIconProvider() {
  let triggerIcon = <i className='far fa-edit fa-1x'></i>
  if (this.state.stage !== null && this.state.stage !== 'closed-after-open') {
    triggerIcon = <i className='fas fa-times'></i>
  }
  return triggerIcon
}

function triggerTextProvider() {
  let triggerText = 'CHANGE'
  if (this.state.item === 'destroy') {
    triggerText = 'DELETE ACCOUNT'
  }
  if (this.state.stage !== null && this.state.stage !== 'closed-after-open') {
    triggerText = 'CANCEL'
  }
  return triggerText
}

function editClassProvider() {
  let editClass = 'edit'
  if (this.state.stage === null) {
    editClass += ' ' + 'closed'
  } else if (this.state.stage === 'closed-after-open') {
    editClass += ' ' + 'closed-after-open'
  } else {
    editClass += ' ' + 'opened'
  }
  return editClass
}

function inputClassProvider() {
  let inputClass = 'inputs-container'
  if (this.state.stage === null) {
    inputClass += ' ' + 'closed'
  } else if (this.state.stage === 'closed-after-open'){
    inputClass += ' ' + 'closed-after-open'
  } else {
    inputClass += ' ' + 'opened'
  }
  return inputClass
}

function editInputProvider() {
  let component
  switch (this.state.item) {
    case 'businessName':
      component = <UserEditAccountBusinessName />
      break
    case 'taxNumber':
      component =  <UserEditAccountTaxNumber />  
      break
    case 'phone':
      component =  <UserEditAccountPhoneNumber />
      break
    case 'email':
      component =  <UserEditAccountEmail />
      break
    case 'password':
      component =  <UserEditAccountPassword />
      break
    case 'destroy':
      component =  <UserDestroy />
      break
    default:
      break;
  }
  return (
    <div>
      <div>
        {component}
      </div>
    </div>
  )
}
