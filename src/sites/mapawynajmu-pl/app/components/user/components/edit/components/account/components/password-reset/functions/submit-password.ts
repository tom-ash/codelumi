

// export function submitPassword() {
//     const { connecting, setControl } = this.props
//     const verificationToken = getCookieValue('verificationToken')
//     const verificationCode = document.getElementById('user-edit-password-verification').value
//     const password = document.getElementById('user-edit-password').value
//     const email = document.getElementById('user-edit-password-email').value
//     const hashedPassword = hashPassword(password, email)
  
//     if (connecting || !this.passwordManager('validate', password)) return
  
//     setControl({ passwordConnecting: true })
//     fetch(API_URL + '/user/update/password', {
//       method: 'PUT',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ verificationToken, verificationCode, password: hashedPassword }),
//     })
//       .then(response => {
//         if (response.status == 200) {
//           setControl({ passwordStep: 'success' })
//           setErrors({ password: noError })
//           setTimeout(() => {
//             setControl({ passwordStage: 'success' })
//           }, 1000)
//           return
//         }
//         throw new Error('ServerError')
//       })
//       .catch(e => console.dir(e))
//       .finally(() => setControl({ passwordConnecting: false }))
//   }
  