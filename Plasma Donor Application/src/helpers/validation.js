export function isEmpty(val) {
  return val.trim.length() === 0
}

export function isValidEmail(val) {
  return new RegExp(
    "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
  ).test(val)
}

export function isValidPassword(val) {
  return new RegExp(
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
  ).test(val)
}

// export function isValidConfirmPassword(val) {
//   if (val === userPassword) {
//     return true
//   } else {
//     return false
//   }
// }
