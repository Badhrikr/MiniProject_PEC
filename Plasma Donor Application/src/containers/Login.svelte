<script>
  import Modal from '../components/Modal.svelte'
  import TextInput from '../components/TextInput.svelte'

  let userName = ''
  let userPassword = ''

  $: validUserName = !isEmpty(userName)
  $: validUserPassword = !isEmpty(userPassword)

  function isEmpty(val) {
    return val.trim().length === 0
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
      label="User Name:"
      id="username"
      inputIcon="fa-solid fa-user"
      valid={validUserName}
      value={userName}
      on:input={(event) => {
        userName = event.target.value
      }}
    />

    <TextInput
      type="password"
      label="Password:"
      id="password"
      inputIcon="fa-solid fa-lock"
      valid={validUserPassword}
      value={userPassword}
      on:input={(event) => {
        userPassword = event.target.value
      }}
    />
    <button type="submit">Submit</button>
  </form>
</Modal>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    max-width: 500px;
    padding: 3em 1.5em 1.5em;
    font-size: 1.25rem;
    border-radius: 1rem;
    border: 1px solid black;
  }

  button {
    padding: 0.5em 1em;
    font-size: 1.175rem;
    border: 1px solid black;
    border-radius: 100vmax;
    width: 100%;
  }
</style>
