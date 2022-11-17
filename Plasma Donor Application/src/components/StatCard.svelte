<div class="card">
  <div class="stats shadow">
    <div class="stat place-items-center">
      <div class="stat-title text-3xl">No of Donations</div>
      <div class="stat-value">31K</div>
      <!-- <div class="stat-desc">From January 1st to February 1st</div> -->
    </div>

    <div class="stat place-items-center">
      <div class="stat-title text-3xl">Donors</div>
      <div class="stat-value text-warning">4,200</div>
      <!-- <div class="stat-desc text-secondary">↗︎ 40 (2%)</div> -->
    </div>

    <div class="stat place-items-center">
      <div class="stat-title text-3xl">New Registers</div>
      <div class="stat-value">1,200</div>
      <!-- <div class="stat-desc">↘︎ 90 (14%)</div> -->
    </div>
  </div>
  <div class="button flex justify-between items-center gap-8">
    <label
      for="login-modal"
      class="btn btn-outline btn-warning  cursor-pointer modal-button login-btn"
      >Login
    </label>
    <label
      for="register-modal"
      class="btn btn-outline btn-warning  cursor-pointer modal-button login-btn"
      >Register
    </label>
  </div>
  <!-- <div class="button flex justify-between items-center gap-8">
    <a
      href="https://badhrikr.github.io/MiniProject_PEC/Login/index.html"
      for="login-modal"
      class="btn btn-outline mr-4 cursor-pointer modal-button login-btn"
      target="_blank">Login</a
    >
    <a
      href="https://badhrikr.github.io/MiniProject_PEC/Registration/index.html"
      for="register-modal"
      class="btn btn-outline mr-4 cursor-pointer modal-button login-btn"
      target="_blank">Register</a
    >
  </div> -->
</div>

<style>
  .card {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5em;
    width: 90%;
    max-width: 1200px;
    padding: 1.5em;
    margin: 2em 0;
    background-color: var(--clr-white);
    box-shadow: 0 0 5px var(--clr-accent);
  }
  .stats {
    width: 100%;
    background-color: none;
    box-shadow: none;
  }
  .stat-title {
    font-size: clamp(1rem, 10vw, 2rem);
  }

  .stat-value {
    font-size: clamp(1rem, 10vw, 2rem);
  }

  @media (max-width: 50em) {
    .stats {
      display: flex;
      flex-direction: column;
    }

    :where(.stats) > :not([hidden]) ~ :not([hidden]) {
      border: none;
    }
  }
</style>
