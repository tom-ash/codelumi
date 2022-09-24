import React from "react"
import { ManageText } from 'managed-inputs'

type AreaInputProps = {
  langHandler: LangHandler
}

export function AreaInput(props: AreaInputProps) {
  const {
    langHandler
  } = props

    // const {
    //   create: text
    // } = inputs.area
  
    // return {
    //   classNames: { container: 'form-input with-icon text' },
    //   value: this.props.area,
    //   label: this.langHandler(text),
    //   type: 'number',
    //   children: (
    //     <>
    //       <div className='sqm'>
    //         {this.langHandler({
    //           pl: <span>m<span className='sq'>2</span></span>,
    //           en: 'sqm'
    //         })}
    //       </div>
    //       <SVG name='area' />
    //     </>
    //   ),
    //   onFocus: () => this.props.changeErrors({ area: noError }),
    //   onChange: value => this.props.changeInputs({ area: value }),
    //   validate: () => this.handleErrorOnValidate('area', this.props.area),
    //   error: this.langHandler(this.props.errors.area)
    // }

  return 'AREA INPUT'
}

export default AreaInput
