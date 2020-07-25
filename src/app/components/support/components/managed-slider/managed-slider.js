import React from 'react'
import * as lifecycle from './functions/lifecycle'
import { onArrowClickHandler } from './functions/on-arrow-click-handler'
import { onDragHandler } from './functions/on-drag-handler'
import { onTouchStartHandler } from './functions/on-touch-start-handler'
import { onTouchEndHandler } from './functions/on-touch-end-handler'
import { onMouseDownHandler } from './functions/on-mouse-down-handler'
import { onMouseUpHandler } from './functions/on-mouse-up-handler'
import { onTouchMoveHandler } from './functions/on-touch-move-handler'
import { onMouseMoveHandler } from './functions/on-mouse-move-handler'

class ManagedSlider extends React.Component {
  constructor(props) {
    super(props)
    this.container = React.createRef()
    this.slider = React.createRef()
    this.componentDidMount = lifecycle.componentDidMount.bind(this)
    this.componentDidUpdate = lifecycle.componentDidUpdate
    this.onArrowClickHandler = onArrowClickHandler.bind(this)
    this.onMouseDownHandler = onMouseDownHandler.bind(this)
    this.onMouseMoveHandler = onMouseMoveHandler.bind(this)
    this.onMouseUpHandler = onMouseUpHandler.bind(this)
    this.onDragHandler = onDragHandler.bind(this)
    this.onTouchStartHandler = onTouchStartHandler.bind(this)
    this.onTouchMoveHandler = onTouchMoveHandler.bind(this)
    this.onTouchEndHandler = onTouchEndHandler.bind(this)
    this.state = {
      currentPicture: 0,
      statePictures: [],
      width: null,
      currentLeft: 0,
      transition: 'all .32s ease-out',
      afterDrag: false,
      clientX: null
    }
  }

  static getDerivedStateFromProps = lifecycle.getDerivedStateFromProps

  render() {
    const {
      disableSLides
    } = this.props
    
    const {
      statePictures,
      width,
      transition
    } = this.state

    if (statePictures.length === 0) return null

    return (
      <div
        ref={this.container}
        className='managed-pictures-container'
        style={{
          overflow: 'hidden',
          position: 'relative'
        }}
        onMouseLeave={() => {
          if (disableSLides) return

          this.slider.current.removeEventListener('mousemove', this.onMouseMoveHandler)
        }}
      >
        <div
          ref={this.slider}
          className='managed-pictures-slider'
          style={{
            height: '100%',
            transform: `translate3d(${this.state.currentLeft}px, 0px, 0px)`,
            width: statePictures.length * width,
            transition
          }}
        >
          {statePictures.map((picture, index) => (
            <div
              key={index}
              style={{
                width,
                height: '100%',
                display: 'inline-block'
              }}
            >
              <img
                src={picture.database}
                className='managed-pictures-picture'
                draggable={false}
                style={{
                  width: '100%',
                  height: '100%',
                }}
                onTouchStart={this.onTouchStartHandler}
                onTouchEnd={this.onTouchEndHandler}
                onMouseDown={this.onMouseDownHandler}
                onMouseUp={this.onMouseUpHandler}
              />
            </div>
          ))}
        </div>
        {!disableSLides && this.state.currentPicture !== statePictures.length - 1 &&
        <div
          className='arrow right'
          onClick={e => this.onArrowClickHandler(e, '>')}
          style={{
            position: 'absolute',
            top: 0,
            right: 12,
            bottom: 0,
            margin: 'auto',
            color: 'white',
            height: 12,
            fontSize: 24,
            cursor: 'pointer'
          }}
        >
          <i className='fas fa-chevron-right' />
        </div>}
        {!disableSLides && this.state.currentPicture !== 0 && <div
          className='arrow left'
          onClick={e => this.onArrowClickHandler(e, '<')}
          style={{
            position: 'absolute',
            top: 0,
            left: 12,
            bottom: 0,
            margin: 'auto',
            color: 'white',
            height: 12,
            fontSize: 24,
            cursor: 'pointer'
          }}
        >
          <i className='fas fa-chevron-left' />
        </div>}
      </div>
    )
  }
}

export default ManagedSlider
