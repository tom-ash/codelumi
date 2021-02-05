export function getDerivedStateFromProps(props, state) {
  if (props.item === 'firstName') {
    return {
      item: 'firstName',
      currentValue: props.firstNameCurrentValue,
      stage: props.firstNameStage
    }
  }
  if (props.item === 'lastName') {
    return {
      item: 'lastName',
      currentValue: props.lastNameCurrentValue,
      stage: props.lastNameStage
    }
  }
  if (props.item === 'businessName') {
    return {
      item: 'businessName',
      currentValue: props.businessNameCurrentValue,
      stage: props.businessNameStage
    }
  }
  if (props.item === 'taxNumber') {
    return {
      item: 'taxNumber',
      currentValue: props.taxNumberCurrentValue,
      stage: props.taxNumberStage
    }
  }
  if (props.item === 'phone') {
    return {
      item: 'phone',
      phoneCode: props.phonephoneCodeCurrentValue,
      body: props.phoneBodyCurrentValue,
      stage: props.phoneStage
    }
  }
  if (props.item === 'email') {
    return {
      item: 'email',
      currentValue: props.emailCurrentValue,
      stage: props.emailStage
    }
  }
  if (props.item === 'password') {
    return {
      item: 'password',
      currentValue: 'hidden',
      stage: props.passwordStage
    }
  }
  if (props.item === 'destroy') {
    const { lang } = props

    return {
      item: 'destroy',
      currentValue: lang === 'pl' ? 'Usunięcie konta jest nieodwracalne.' : 'Account deletion is irreversible.',
      stage: props.destroyStage
    }
  }
  return {}
}

export function componentDidUpdate() {
  if (this.state.stage === 'success') {
    this.setState({ inputClass: 'inputs-container hidden' })
    this.props.changeControl({ [`${this.props.item}Stage`]: 'closed-after-open' })
    setTimeout(() => {
      this.setState({ inputClass: 'inputs-container hidden' })
      this.props.changeControl({ [`${this.props.item}Stage`]: null })
    }, 960);
  }
}