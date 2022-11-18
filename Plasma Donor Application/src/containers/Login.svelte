<script>
  import TextInput from '../components/TextInput.svelte'

  let userName = ''
  let userPassword = ''

  $: validUserName = isEmpty(userName)
  $: validUserPassword = isEmpty(userPassword)

  function isEmpty(val) {
    if (val.trim().length === 0) {
      return 'invalid'
    } else {
      return 'valid'
    }
  }
</script>

<form action="|" class="container relative modal-box" on:submit|preventDefault>
  <h1 class="mb-4 mr-auto text-3xl uppercase md:mb-8">Login</h1>
  <label for="login-modal" class="absolute btn btn-sm btn-circle right-2 top-2"
    >✕
  </label>
  <TextInput
    type="text"
    label="User Name:"
    id="username"
    name="username"
    placeholder="username/email"
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
    name="password"
    placeholder="password"
    inputIcon="fa-solid fa-lock"
    valid={validUserPassword}
    value={userPassword}
    on:input={(event) => {
      userPassword = event.target.value
    }}
  />
  <p>
    Don't have an account? <label for="accessform-modal" class="register-modal"
      >Register Here</label
    >
  </p>
  <button type="submit">Submit</button>
</form>

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
    border: 2px solid var(--clr-primary-400);
  }

  button {
    width: 100%;
    padding: 0.5em 1em;
    color: var(--clr-primary);
    font-size: 1.175rem;
    font-weight: 600;
    background-color: var(--clr-primary-400);
    border-radius: 100vmax;
    text-transform: uppercase;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
  }

  p {
    margin-bottom: 1em;
  }

  .register-modal {
    color: blue;
    border-bottom: 1px solid blue;
    cursor: pointer;
  }
</style>
