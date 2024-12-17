import React from 'react';
import ManagedInput from '../input/input';
import * as handlers from './handlers/handlers';

export default class ManagedTextarea extends ManagedInput {
  // @ts-ignore
  constructor(props) {
    super(props);
    // @ts-ignore
    this.containerClass = this.classNames.container || 'managed-input textarea';
    // @ts-ignore
    this.counterClass = this.classNames.counter || 'counter';
    this.onChangeHandler = handlers.onChangeHandler.bind(this);
    this.state = {
      ...this.state,
      // @ts-ignore
      counter: 0,
    };
  }

  render() {
    const {
      classNames,
      display,
      value,
      disabled,
      label,
      counterLimit,
      children,
      error,
    } = this.props;
    // @ts-ignore
    const { decorator, counter } = this.state;
    // const {
    //   container,
    //   label,
    //   input,
    //   error,
    // } = classNames

    return (
      <div
        style={{ display }}
        className={classNames?.container}
        onMouseOver={this.onMouseOverHandler}
        onMouseLeave={this.onMouseLeaveHandler}
        onClick={this.onClickHandler}
      >
        <div className={classNames?.label}>{label}</div>
        <textarea
          ref={this.input}
          disabled={disabled}
          id={this.id}
          className={classNames?.input}
          value={value}
          onFocus={this.onFocusHandler}
          onBlur={this.onBlurHandler}
          onChange={this.onChangeHandler}
        />
        {/* <div className={this.counterClass + decorator}>
          {counter} / {counterLimit}
        </div> */}
        {children}
        <div className={classNames?.error}>{error}</div>
      </div>
    );
  }
}
