import React from 'react'
import { useStore } from '../../../../../../../../../shared/app/functions/store/useStore'
import { SubmitWithBoostingButton } from './submit-with-boosting.button'
import { SVG } from '../../../../../../../../../shared/app/components/support/svg/svg'
import { Line } from '../../../../../../support/components/line/line'

interface SubmitWithBoostingInterface {
  (props: { publish: (addPromotion?: boolean) => Promise<void> }): React.ReactElement
}

export const SubmitWithBoosting: SubmitWithBoostingInterface = ({ publish }) => {
  const { state } = useStore()
  const { texts } = state

  return (
    <div className='with-boosting'>
      <SubmitWithBoostingButton publish={publish} />
      <div className='benefits'>
        <ul>
          <li><SVG name='star' /> Pierwszeństwo na liście</li>
          <li><SVG name='star' /> Pierwszeństwo na mapie</li>
          <li><SVG name='star' /> Podświetlenie</li>
          <Line />
          <li className='people'><SVG name='people' /> Większa widoczność i zasięgi</li>
        </ul>
      </div>
    </div>
  )
}
