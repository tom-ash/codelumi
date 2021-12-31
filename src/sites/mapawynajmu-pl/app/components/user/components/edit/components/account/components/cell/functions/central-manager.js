import React from 'react'
import UserEditAttribute from '../../attribute/attribute'
import UserEditAccountTaxNumber from '../../tax-number/tax-number'
import UserEditAccountPhoneNumber from '../../phone-number/phone-number'
import UserEditAccountEmail from '../../email-address/email-address'
import UserEditAccountPassword from '../../password/password'
import UserDestroy from '../../../../../../destroy/destroy'
import { inputs } from '../../../../../../../constants/inputs'
import SVG from '../../../../../../../../support/components/svg/svg.js'

export function centralManager(element) {
  switch (element) {
    case 'title': return announcementTitleProvider.call(this)
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

function announcementTitleProvider() {
  const { item } = this.state

  switch (item) {
    case 'firstName': return this.langHandler({ pl: 'Imię', en: 'First Name' })
    case 'lastName': return this.langHandler({ pl: 'Nazwisko', en: 'Last Name' })
    case 'businessName': return this.langHandler({ pl: 'Nazwa przedsiębiorcy', en: 'Business name' })
    case 'taxNumber': return this.langHandler({ pl: 'Numer identyfikacji podatkowej', en: 'Tax ID' })
    case 'phone': return this.langHandler({ pl: 'Numer telefonu', en: 'Phone Number' })
    case 'email': return this.langHandler({ pl: 'Adres email', en: 'Email Address' })
    case 'password': return this.langHandler({ pl: 'Hasło', en: 'Password' })
    case 'destroy': return this.langHandler({ pl: 'Usuwanie konta', en: 'Account Deletion' })
    default: break;
  }
}

function iconProvider() {
  const { item } = this.state

  switch (item) {
    case 'firstName': return 'user'
    case 'phone': return 'phone'
    case 'email': return 'envelope'
    case 'password': return 'lock'
    case 'destroy': return 'userTimes'
    default: break;
  }

  return null
}

function currentValueProvider() {
  const { item, currentValue, countryCode, body } = this.state

  if (item === 'phone') return countryCode + ' ' + body
  if (item === 'password') return <SVG name='eyeSlash' />
  return currentValue
}

function triggerClassProvider() {
  const { item, stage } = this.state

  if (item === 'destroy') {
    switch (stage) {
      case null: return 'trigger destroy closed'
      case 'closed-after-open': return 'trigger destroy closed-after-open'
      default: return 'trigger destroy opened'
    }
  }
  switch (stage) {
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
  return null
}

function triggerTextProvider() {
  let triggerText = this.langHandler({ pl: 'Zmień', en: 'Change' })
  if (this.state.item === 'destroy') {
    triggerText = this.langHandler({ pl: 'Usuń konto', en: 'Delete Account' })
  }
  if (this.state.stage !== null && this.state.stage !== 'closed-after-open') {
    triggerText = this.langHandler({ pl: 'Anuluj', en: 'Cancel' })
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

  const {
    changeData,
    changeErrors,
    changeControl,
    lang,
    firstNameConnecting,
    lastNameConnecting,
    businessNameConnecting,
    firstNameCurrentValue,
    lastNameCurrentValue,
    businessNameCurrentValue,
    firstNameError,
    lastNameError,
    businessNameError
  } = this.props

  switch (this.state.item) {
    case 'firstName':
      component = <UserEditAttribute
        lang={lang}
        inputName='firstName'
        id='user-edit-account-first-name-text'
        api_suffix={'first_name'}
        label={this.langHandler({ pl: 'Imię', en: 'First Name' })}
        icon={inputs.firstName.icon}
        currentValue={firstNameCurrentValue}
        connecting={firstNameConnecting}
        errorText={{ pl: 'Imię nie może być puste.', en: 'First Name can\'t be blank.' }}
        error={firstNameError}
        changeErrors={changeErrors}
        changeControl={changeControl}
        changeData={changeData}
      />
      break
    case 'lastName':
      component = <UserEditAttribute
        lang={lang}
        inputName='lastName'
        id='user-edit-account-last-name-text'
        api_suffix={'last_name'}
        label={this.langHandler({ pl: 'Nazwisko', en: 'Last Name' })}
        icon={inputs.lastName.icon}
        currentValue={lastNameCurrentValue}
        connecting={lastNameConnecting}
        errorText={{ pl: 'Nazwisko nie może być puste.', en: 'Last Name can\'t be blank.' }}
        error={lastNameError}
        changeErrors={changeErrors}
        changeControl={changeControl}
        changeData={changeData}
      />
      break
    case 'businessName':
      component = <UserEditAttribute
        lang={lang}
        inputName='businessName'
        id='user-edit-account-business-name-text'
        api_suffix={'business_name'}
        label={this.langHandler({ pl: 'Nazwa przedsiębiorcy', en: 'Business Name' })}
        icon={inputs.businessName.icon}
        currentValue={businessNameCurrentValue}
        connecting={businessNameConnecting}
        errorText={{ pl: 'Nazwa przedsiębiorcy nie może być puste.', en: 'Business Name can\'t be blank.' }}
        error={businessNameError}
        changeErrors={changeErrors}
        changeControl={changeControl}
        changeData={changeData}
      />
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
      component =  <UserEditAccountPassword editAccount={true}/>
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
