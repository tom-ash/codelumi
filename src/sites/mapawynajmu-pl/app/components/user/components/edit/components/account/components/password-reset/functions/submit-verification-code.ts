// export function submitVerificationCode() {
//     const { connecting, setControl, setErrors } = this.props
//     const verificationToken = getCookieValue('verificationToken')
//     const verificationCode = document.getElementById('user-edit-password-verification').value
  
//     if (connecting || !this.verificationManager('validate', verificationCode)) return
  
//     setControl({ passwordConnecting: true })
//     fetch(API_URL + '/user/update/password/verify', {
//       method: 'PUT',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ verificationToken, verificationCode }),
//     })
//       .then(response => {
//         if (response.status == 200) {
//           setControl({ passwordStep: 'password' })
//           return setErrors({ password: noError })
//         }
//         throw new Error('ServerError')
//       })
//       .catch(() => {
//         setErrors({
//           password: { pl: 'Nieprawidłowy kod weryfikacyjny', en: 'Invalid verification code' },
//         })
//       })
//       .finally(() => setControl({ passwordConnecting: false }))
//   }