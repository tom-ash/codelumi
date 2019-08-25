import React from 'react'

export const monits = {
  reason: {
    polish: (
      <div className='monit'>
        <div>
          Dodanie ogłoszenia wymaga <b>jednorazowej</b> weryfikacji numeru telefonu.
        </div>
        <div>
          Kod weryfikacyjny został wysłany na podany numer telefonu. Wklaj go ponizej i naciśnij przycisk 'Dalej', aby kontynuować.
        </div>
      </div>
    ),
    english: (
      <div className='monit'>
        <div>
          To add the Announcement the phone number has&nbsp;to be verified (only <b>once</b>).
        </div>
        <div>
          The verification code has been sent to&nbsp;the&nbsp;provided phone number. Paste it below and&nbsp;press 'Next' to continue.
        </div>
      </div>
    )
  },
  success: {
    polish: 'Numer telefonu został zweryfikowany.',
    english: 'The phone number has been verified.'
  },
  already: {
    polish: 'Numer telefonu jest już zweryfiowany.',
    english: 'The phone number is already verified.'
  }
}
