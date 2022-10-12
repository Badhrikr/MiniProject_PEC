<script>
  export let contentType = null
  export let type
  export let value
  export let name
  export let maxlength = 30
  export let id
  export let label
  export let placeholder = null
  export let inputIcon
  export let valid = true
  export let validityMessage = ''

  let touched = false
</script>

<div class=" container ">
  <label for={id}>{label}</label>
  <div class="wrapper" class:invalid={!valid && touched} class:valid>
    {#if contentType === 'radioType'}
      <label for="male">Male</label>
      <input
        {type}
        id="male"
        value="male"
        {name}
        required
        on:change
        on:blur={() => (touched = true)}
      />
      <label for="female">Female</label>
      <input
        {type}
        id="female"
        value="female"
        {name}
        required
        on:change
        on:blur={() => (touched = true)}
      />
    {:else if contentType === 'ageType'}
      <input
        {type}
        {id}
        {value}
        {placeholder}
        {name}
        min="18"
        max="50"
        maxlength="2"
        required
        on:input
        on:blur={() => (touched = true)}
      />
    {:else}
      <input
        {type}
        {id}
        {value}
        {placeholder}
        {name}
        {maxlength}
        required
        on:input
        on:blur={() => (touched = true)}
      />
    {/if}
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
    padding: 0 0.5em 0;
    background-color: rgb(255, 242, 122);
    border-bottom: 2px solid var(--clr-primary-400);
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
    font-size: 1rem;
  }

  @media (min-width: 50em) {
    /* .container {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5em;
    } */

    .container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      margin-bottom: 1.5em;
    }

    .container > * {
      width: 100%;
    }

    .error-message {
      grid-column: 1/3;
    }
  }
</style>
