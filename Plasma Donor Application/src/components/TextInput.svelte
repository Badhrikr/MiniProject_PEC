<script>
  export let type
  export let value
  export let id
  export let label
  export let inputIcon
  export let valid = true
  export let validityMessage = ''

  let touched = false
</script>

<div class=" container ">
  <label for={id}>{label}</label>
  <div class="wrapper" class:invalid={!valid && touched} class:valid>
    <input
      {type}
      {id}
      {value}
      required
      on:input
      on:blur={() => (touched = true)}
    />
    <i class={inputIcon} />
  </div>

  {#if validityMessage && !valid && touched}
    <p class="error-message">{validityMessage}</p>
  {/if}
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 1em;
  }

  .container:last-child {
    margin-bottom: 0;
  }

  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5em;
    width: 100%;
    padding: 0 0.5em 0 0;
    background-color: #ddd;
    border-bottom: 2px solid black;
    border-radius: 3px;
    overflow: hidden;
  }

  input {
    width: 100%;
    outline: none;
    background-color: transparent;
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  input[type='date']::-webkit-inner-spin-button,
  input[type='date']::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
  }

  /* style for validation */

  .invalid {
    border-bottom: 2px solid red;
    background-color: #fde3e3;
  }

  .valid {
    background-color: #ccffcc;
    border-bottom: 2px solid #7dce13;
  }

  .error-message {
    color: red;
    margin: 0.25em 0;
  }

  @media (min-width: 50em) {
    .container {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5em;
    }

    .container > * {
      width: 100%;
    }
  }
</style>
