<script>
  import Modal from '../components/Modal.svelte'
  import TextInput from '../components/TextInput.svelte'
  // import { isEmpty } from '../helpers/validation.js'

  let userName = ''
  let userEmail = ''
  let userDob = ''
  let userAge = ''
  let userPassword = ''
  let userConfirmPassword = ''

  $: validUserName = !isEmpty(userName)
  $: validUserEmail = isValidEmail(userEmail)
  $: validUserDob = !isEmpty(userDob)
  $: validUserAge = !isEmpty(userAge)
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
</script>

<Modal>
  <form
    action="|"
    class="container relative modal-box"
    on:submit|preventDefault
  >
    <label for="my-modal-3" class="absolute btn btn-sm btn-circle right-2 top-2"
      >✕
    </label>
    <TextInput
      type="text"
      label="Name:"
      id="name"
      inputIcon="fa-solid fa-user"
      valid={validUserName}
      validityMessage="error"
      value={userName}
      on:input={(event) => {
        userName = event.target.value
      }}
    />
    <TextInput
      type="email"
      label="Email ID:"
      id="email"
      inputIcon="fa-solid fa-envelope"
      valid={validUserEmail}
      validityMessage="error"
      value={userEmail}
      on:input={(event) => {
        userEmail = event.target.value
      }}
    />
    <TextInput
      type="date"
      label="DOB:"
      id="dateOfBirth"
      inputIcon="fa-solid fa-calendar-days"
      valid={validUserDob}
      validityMessage="error"
      value={userDob}
      on:input={(event) => {
        userDob = event.target.value
      }}
    />
    <TextInput
      type="number"
      label="Age:"
      id="age"
      inputIcon="null"
      valid={validUserAge}
      validityMessage="error"
      value={userAge}
      on:input={(event) => {
        userAge = event.target.value
      }}
    />
    <TextInput
      type="password"
      label="Create Password:"
      id="createPassword"
      inputIcon="fa-solid fa-lock"
      valid={validUserPassword}
      validityMessage="error"
      value={userPassword}
      on:input={(event) => {
        userPassword = event.target.value
      }}
    />
    <TextInput
      type="password"
      label="Confirm Password:"
      id="confirmPassword"
      inputIcon="fa-solid fa-lock"
      valid={validUserConfirmPassword}
      validityMessage="error"
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
</Modal>

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
    border: 1px solid black;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
    width: 75%;
    max-width: 400px;
  }

  .buttons * {
    padding: 0.2em 1em;
    border: 1px solid black;
    border-radius: 100vmax;
  }
</style>
