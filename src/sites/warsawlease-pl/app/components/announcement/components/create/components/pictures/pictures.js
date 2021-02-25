import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { langHandler, langObjHandler } from '../../../../../../functions/lang-handler'
import * as lifecycle from './functions/lifecycle'
import { addFiles } from './functions/add-files'
import { addPicture } from './functions/add-picture'
import { deletePicture } from './functions/delete-picture'
import { movePicture } from './functions/move-picture'
import { requiredInputs } from '../../constants/required-inputs'
import { sectionHeaderProvider } from '../../../../../../functions/providers/headers'
import { pictureClassProvider } from './functions/picture-class-provider'
import { rotatePicture } from './functions/rotate-picture'
import SVG from '../../../../../support/components/svg/svg'
import { HeaderSection } from '../shared/headers/section/section.js'
import { HEADER, ADDING_REQUIRED, NOT_ADDED } from './constants/texts'

class AnnouncementCreatePictures extends React.Component {
  constructor(props) {
    super(props)
    this.langHandler = langHandler.bind(this)
    this.langObjHandler = langObjHandler.bind(this)
    this.componentDidUpdate = lifecycle.componentDidUpdate
    this.addFiles = addFiles.bind(this)
    this.addPicture = addPicture.bind(this)
    this.deletePicture = deletePicture.bind(this)
    this.movePicture = movePicture.bind(this)
    this.sectionHeaderProvider = sectionHeaderProvider.bind(this)
    this.rotatePicture = rotatePicture.bind(this)
  }
  render() {
    const {
      showAnnouncementEdit,
      svgs
    } = this.props

    return (
      <div id='announcement-create-pictures' className='section'>
                {/* {this.props.blobs && this.props.blobs.length === 0 &&
        <div className='not-added'>
          {this.langObjHandler(NOT_ADDED)}
        </div>} */}
        <div className='drag-and-drop-container'>
          <div className={`drag-and-drop${this.props.error.pl ? ' error-drag-and-drop' : ''}`}>
            <SVG name='camera' />
            <input
              id={requiredInputs.pictures.id}
              className='input'
              type='file'
              multiple
              onChange={this.addFiles}>
            </input>
          </div>
          <p>
            {this.langObjHandler({
              pl: 'Kliknij w ikonę aparatu, aby wybrać zdjęcia.',
              en: 'Click the camera to select pictures.'
            })}
          </p>
        </div>
        <div className='error'>
          {this.langObjHandler(this.props.error)}
        </div>

        <div>

        </div>
        <div>
          {
          this.props.blobs.map((picture, index) => {
            if (!picture) return undefined
            return (
              <div
                key={`${picture.blob}`}
                style = {{ backgroundImage: `url('${picture.blob}')` }}
                className={pictureClassProvider(index)}
              >
                <div className='buttons'>
                  <div
                    onClick={() => this.deletePicture(index)}
                    className='button delete'
                  >
                    <SVG name='close' />
                  </div>
                  {
                  this.props.blobs && (index !== 0) &&
                  <div
                    onClick={() => this.movePicture('up', index)}
                    className='button up'
                  >
                    <SVG name='chevron' />
                  </div>
                  }
                  {
                  this.props.blobs && (this.props.blobs.length !== index + 1) &&
                  <div
                    onClick={() => this.movePicture('down', index)}
                    className='button down'
                  >
                    <SVG name='chevron' />
                  </div>
                  }
                  {
                  !showAnnouncementEdit &&
                  <div
                    onClick={() => this.rotatePicture(index)}
                    className='button rotate'
                  >
                    <SVG name='rotate' />
                  </div>
                  }
                </div>
              </div>
            )
          })
          }
          <div className='float-clear' />
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementCreatePictures)