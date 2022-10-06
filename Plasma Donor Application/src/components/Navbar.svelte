<script>
  let clicked = false

  function dropDown() {
    clicked ? (clicked = false) : (clicked = true)
  }
</script>

<header>
  <div class="wrapper">
    <h1 class="title">Donate</h1>
    <i class="fa-solid fa-bars nav__btn" on:click={dropDown} />
  </div>
  <nav class:show__nav={clicked}>
    <ul class="nav__lists">
      <li class="nav__items"><a href="#/" class="nav__links">Home</a></li>
      <li class="nav__items"><a href="#/" class="nav__links">Contact</a></li>
      <li class="nav__items"><a href="#/" class="nav__links">About</a></li>
    </ul>
  </nav>
  <div class="account__button">
    <label for="my-modal-3" class="cursor-pointer modal-button">Login</label>
    <label for="my-modal-3" class="cursor-pointer modal-button">Register</label>
  </div>
</header>

<style>
  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    padding: 1.2em;
    background-color: var(--clr-primary-400);
  }

  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .wrapper .title {
    font-size: 1.8rem;
  }

  .wrapper .nav__btn {
    display: block;
    font-size: 1.5rem;
    cursor: pointer;
  }

  nav {
    position: absolute;
    top: 100%;
    width: 100%;
    height: 0;
    overflow: hidden;
    transition: height 450ms ease-in-out;
    background-color: var(--clr-primary-400);
  }

  .show__nav {
    height: 130px;
  }

  nav .nav__lists {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    list-style: none;
    text-align: center;
  }

  nav .nav__items {
    margin-block: 0.5em;
  }

  nav .nav__links {
    position: relative;
    color: var(--clr-primary-200);
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
  }

  nav .nav__links::before {
    content: '';
    display: inline-block;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: var(--clr-primary-200);
    transform: scaleX(0);
    transition: all 450ms ease-in-out;
  }

  nav .nav__links:hover::before {
    transform: scaleX(1);
  }

  .account__button {
    display: none;
  }

  @media (min-width: 50em) {
    header {
      flex-direction: row;
      padding-inline: 3em;
    }

    .wrapper .nav__btn {
      display: none;
    }

    nav {
      position: relative;
      height: auto;
      overflow: visible;
      width: 50%;
    }

    .show__nav {
      height: auto;
    }

    nav .nav__lists {
      flex-direction: row;
      justify-content: flex-end;
    }

    nav .nav__items {
      padding-left: 3em;
    }

    .account__button {
      display: flex;
    }

    .account__button > * {
      text-transform: uppercase;
      margin-left: 2em;
      padding: 0.5em 2em;
      border: 1px solid currentColor;
      border-radius: 100vmax;
    }
  }
</style>
