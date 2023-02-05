import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { langHandler } from '../../../../../../functions/lang-handler'
import * as lifecycle from './functions/lifecycle'
import { addFiles } from './functions/add-files'
import { addPicture } from './functions/add-picture'
import { deletePicture } from './functions/delete-picture'
import { movePicture } from './functions/move-picture'
import { requiredInputs } from '../../constants/required-inputs'
import { pictureClassProvider } from './functions/picture-class-provider'
import { rotatePicture } from './functions/rotate-picture'
import SVG from '../../../../../support/components/svg/svg'
import { Heading } from '../../../../../support/components/heading'
import Info from '../../../../../../../../shared/app/components/support/info'

const HEADING = {
  pl: 'Zdjęcia (wymagane)',
  en: 'Pictures (required)',
}

const INFO = {
  pl: 'Kliknij w ikonę aparatu fotograficznego, aby dodać zdjęcia.',
  en: 'Click the photo camera to add pictures.',
}

class AnnouncementCreatePictures extends React.Component {
  constructor(props) {
    super(props)
    this.langHandler = langHandler.bind(this)
    this.componentDidUpdate = lifecycle.componentDidUpdate
    this.addFiles = addFiles.bind(this)
    this.addPicture = addPicture.bind(this)
    this.deletePicture = deletePicture.bind(this)
    this.movePicture = movePicture.bind(this)
    this.rotatePicture = rotatePicture.bind(this)
  }
  render() {
    const headingProps = {
      tier: 2,
      text: this.langHandler(HEADING),
    }
    const infoProps = {
      message: this.langHandler(INFO),
    }

    return (
      <div
        id='listing-create-pictures'
        className='section'
      >
        <Heading {...headingProps} />
        <Info {...infoProps} />
        <div className='drag-and-drop-container'>
          <div className={`drag-and-drop${this.props.error.pl ? ' error-drag-and-drop' : ''}`}>
            <SVG name='camera' />
            <input
              id={requiredInputs.pictures.id}
              className='input'
              type='file'
              multiple
              onChange={this.addFiles}
            ></input>
          </div>
          <p>
            {this.langHandler({
              pl: 'Kliknij w ikonę aparatu, aby wybrać zdjęcia.',
              en: 'Click the camera to select pictures.',
            })}
          </p>
        </div>
        <div className='error'>{this.langHandler(this.props.error)}</div>

        <div></div>
        <div>
          {this.props.blobs.map((picture, index) => {
            if (!picture) return undefined
            return (
              <div
                key={`${picture.blob}`}
                style={{ backgroundImage: `url('${picture.blob}')` }}
                className={pictureClassProvider(index)}
              >
                <div className='buttons'>
                  <div
                    onClick={() => this.deletePicture(index)}
                    className='button delete'
                  >
                    <SVG name='close' />
                  </div>
                  {this.props.blobs && index !== 0 && (
                    <div
                      onClick={() => this.movePicture('up', index)}
                      className='button up'
                    >
                      <SVG name='chevron' />
                    </div>
                  )}
                  {this.props.blobs && this.props.blobs.length !== index + 1 && (
                    <div
                      onClick={() => this.movePicture('down', index)}
                      className='button down'
                    >
                      <SVG name='chevron' />
                    </div>
                  )}
                  {!picture.database && (
                    <div
                      onClick={() => this.rotatePicture(index)}
                      className='button rotate'
                    >
                      <SVG name='rotate' />
                    </div>
                  )}
                </div>
              </div>
            )
          })}
          <div className='float-clear' />
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementCreatePictures)
