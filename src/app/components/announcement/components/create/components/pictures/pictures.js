import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { languageHandler, languageObjectHandler } from '../../../../../../functions/language-handler'
import * as lifecycle from './functions/lifecycle'
import { addFiles } from './functions/add-files'
import { addPicture } from './functions/add-picture'
import { deletePicture } from './functions/delete-picture'
import { movePicture } from './functions/move-picture'
import { requiredInputs } from '../../constants/required-inputs'
import { sectionHeaderProvider } from '../../../../../../functions/providers/headers'
import { pictureClassProvider } from './functions/picture-class-provider'

class AnnouncementCreatePictures extends React.Component {
  constructor(props) {
    super(props)
    this.languageHandler = languageHandler.bind(this)
    this.languageObjectHandler = languageObjectHandler.bind(this)
    this.componentDidUpdate = lifecycle.componentDidUpdate
    this.addFiles = addFiles.bind(this)
    this.addPicture = addPicture.bind(this)
    this.deletePicture = deletePicture.bind(this)
    this.movePicture = movePicture.bind(this)
    this.sectionHeaderProvider = sectionHeaderProvider.bind(this)
  }
  render() {
    return (
      <div id='announcement-create-pictures' className='section'>
        <div className={`drag-and-drop${this.props.error.pl ? ' error-drag-and-drop' : ''}`}>
          <div>
            {this.languageHandler('Przeciągnij i upuść zdjęcia tutaj', 'Drag and drop pictures here')}
          </div>
          <div>
            {this.languageHandler('lub kliknij, aby przeglądać', 'or click to browse')}
          </div>
          <input
          id={requiredInputs.pictures.id}
          className='input'
          type='file'
          multiple
          onChange={this.addFiles}>
          </input>
        </div>
        <div className='error'>
          {this.languageObjectHandler(this.props.error)}
        </div>
        <div>
          {
          this.props.blobs.map((picture, index) => {
            if (!picture) return undefined
            return (
              <div
              key={`${picture.blob}`}
              style = {{ backgroundImage: `url('${picture.blob}')` }}
              className={pictureClassProvider(index)}>
                <div
                onClick={() => this.deletePicture(index)}
                className='button delete'>
                  <i className='far fa-minus-square'></i>
                </div>
                {
                this.props.blobs && (index !== 0) &&
                <div
                onClick={() => this.movePicture('up', index)}
                className='button up'>
                  <i className='far fa-caret-square-up'></i>
                </div>
                }
                {
                this.props.blobs && (this.props.blobs.length !== index + 1) &&
                <div
                onClick={() => this.movePicture('down', index)}
                className='button down'>
                  <i className='far fa-caret-square-down'></i>
                </div>
                }
                {
                false &&
                <div className='button comment'>
                  <i className="far fa-comment-alt"></i>
                </div>
                }
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