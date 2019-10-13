const config = {
  passwordHashing: {
    keySize: 32,
    iterations: 128
  },
  emailRegex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  passwordRegex: /^\S{6,}$/,
  verificationCodeRegex: /^[a-zA-Z0-9]{8}$/,

}

export default config