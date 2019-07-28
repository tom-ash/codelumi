export function getDerivedStateFromProps(props, state) {
  if (props.item === 'businessName') {
    return {
      item: 'businessName',
      currentValue: props.businessNameCurrentValue,
      stage: props.businessNameStage
    }
  }
  if (props.item === 'taxIdentification') {
    return {
      item: 'taxIdentification',
      currentValue: props.taxIdentificationCurrentValue,
      stage: props.taxIdentificationStage
    }
  }
  if (props.item === 'phone') {
    return {
      item: 'phone',
      countryCode: props.phoneCountryCodeCurrentValue,
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
    return {
      item: 'destroy',
      currentValue: 'Account deletion is irreversible.',
      stage: props.destroyStage
    }
  }
  return {}
}

export function componentDidUpdate() {
  if (this.state.stage === 'success') {
    this.setState({ inputClass: 'input hidden' })
    this.props.changeControl({ [`${this.props.item}Stage`]: 'closed-after-open' })
    setTimeout(() => {
      this.setState({ inputClass: 'input hidden' })
      this.props.changeControl({ [`${this.props.item}Stage`]: null })
    }, 960);
  }
}