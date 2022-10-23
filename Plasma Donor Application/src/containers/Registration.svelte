<script>
  import TextInput from '../components/TextInput.svelte'
  // import { isEmpty } from '../helpers/validation.js'
  // import { isValidEmail } from '../helpers/validation.js'
  // import { isValidAge } from '../helpers/validation.js'
  // import { isValidPassword } from '../helpers/validation.js'
  // import { isValidConfirmPassword } from '../helpers/validation.js'

  let userName = ''
  let userEmail = ''
  let userDob = ''
  let userGender
  let phoneNumber = ''
  let userAge = ''
  let userPassword = ''
  let userConfirmPassword = ''

  $: validUserName = !isEmpty(userName)
  $: validUserEmail = isValidEmail(userEmail)
  $: validUserDob = !isEmpty(userDob)
  $: validPhoneNumber = !isEmpty(phoneNumber)
  $: validUserAge = isValidAge(userAge)
  $: validUserPassword = isValidPassword(userPassword)
  $: validUserConfirmPassword = isValidConfirmPassword(userConfirmPassword)

  function isEmpty(val) {
    return val.trim().length === 0
  }

  function isValidEmail(val) {
    return new RegExp(
      "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
    ).test(val)
  }

  function isValidPassword(val) {
    return new RegExp(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
    ).test(val)
  }

  function isValidConfirmPassword(val) {
    if (val === userPassword) {
      return true
    } else {
      return false
    }
  }

  function isValidAge(val) {
    if (val < 18) {
      // validUserAge = "Age is below 18,Not Eligible"
      return false
    } else if (val > 50) {
      // validUserAge = "Age is above 50,Not Eligible"
      return false
    }
    return true
  }
</script>

<form action="|" class="container relative modal-box" on:submit|preventDefault>
  <h1 class="mb-4 mr-auto mt-16 text-3xl uppercase md:mt-0 md:mb-8">
    Register
  </h1>
  <label
    for="register-modal"
    class="absolute btn btn-sm btn-circle right-2 top-2"
    >✕
  </label>
  <TextInput
    type="text"
    label="Name:"
    id="name"
    name="username"
    placeholder="UserName"
    inputIcon="fa-solid fa-user"
    valid={validUserName}
    validityMessage="Please Fill in Your Name"
    value={userName}
    on:input={(event) => {
      userName = event.target.value
    }}
  />
  <TextInput
    type="email"
    label="Email ID:"
    id="email"
    name="email"
    placeholder="example@123.com"
    inputIcon="fa-solid fa-envelope"
    valid={validUserEmail}
    validityMessage="Please Fill in Your Email ID"
    value={userEmail}
    on:input={(event) => {
      userEmail = event.target.value
    }}
  />
  <TextInput
    type="date"
    label="DOB:"
    id="dateOfBirth"
    name="dob"
    inputIcon="fa-solid fa-calendar-days"
    valid={validUserDob}
    validityMessage="DOB is required"
    value={userDob}
    on:input={(event) => {
      userDob = event.target.value
    }}
  />
  <TextInput
    contentType="radioType"
    type="radio"
    label="Gender:"
    id="gender"
    name="gender"
    inputIcon="fa-solid fa-person-half-dress"
    valid={true}
    validityMessage="Gender is required"
    value={userGender}
    on:change={(event) => {
      userGender = event.target.value
    }}
  />
  <TextInput
    type="number"
    label="Mobile:"
    id="mobile no"
    name="mobile"
    maxlength="10"
    placeholder="Phone number"
    inputIcon="fa-solid fa-phone"
    valid={validPhoneNumber}
    validityMessage="Please Fill in Your Mobile number"
    value={phoneNumber}
    on:input={(event) => {
      phoneNumber = event.target.value
    }}
  />
  <TextInput
    contentType="ageType"
    type="number"
    label="Age:"
    id="age"
    name="age"
    placeholder="Age 18 - 50"
    inputIcon="null"
    valid={validUserAge}
    validityMessage="Please Fill in Your Age"
    value={userAge}
    on:input={(event) => {
      userAge = event.target.value
    }}
  />
  <TextInput
    type="password"
    label="Create Password:"
    id="createPassword"
    name="password"
    placeholder="Password@123"
    inputIcon="fa-solid fa-lock"
    valid={validUserPassword}
    validityMessage="Use a strong password"
    value={userPassword}
    on:input={(event) => {
      userPassword = event.target.value
    }}
  />
  <TextInput
    type="password"
    label="Confirm Password:"
    id="confirmPassword"
    name="confirmPassword"
    placeholder="Password@123"
    inputIcon="fa-solid fa-lock"
    valid={validUserConfirmPassword}
    validityMessage="Password do not match"
    value={userConfirmPassword}
    on:input={(event) => {
      userConfirmPassword = event.target.value
    }}
  />
  <div class="buttons">
    <button type="submit">Submit</button>
    <button type="reset">Reset</button>
  </div>
</form>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    max-width: 700px;
    padding: 3em 1.5em 1.5em;
    font-size: 1.25rem;
    border-radius: 1rem;
    border: 2px solid var(--clr-primary-400);
  }

  .buttons {
    display: flex;
    justify-content: space-between;
    width: 75%;
    max-width: 400px;
  }

  .buttons * {
    padding: 0.3em 1.2em;
    color: var(--clr-primary);
    font-size: 1.175rem;
    font-weight: 600;
    background-color: var(--clr-primary-400);
    border-radius: 100vmax;
    text-transform: uppercase;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 50em) {
    .modal-box {
      max-height: none;
      padding: 1em;
    }

    .modal-box h1 {
      margin: 0 auto 0.5em 0;
    }
    .buttons {
      width: 100%;
    }
  }
</style>
