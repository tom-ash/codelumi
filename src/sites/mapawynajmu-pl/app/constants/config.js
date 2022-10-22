const config = {
  passwordHashing: {
    keySize: 32,
    iterations: 128,
  },
  emailRegex:
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  passwordRegex: /^\S{6,}$/,
  verificationCodeRegex: /^[0-9]{4}$/,
}

export default config
