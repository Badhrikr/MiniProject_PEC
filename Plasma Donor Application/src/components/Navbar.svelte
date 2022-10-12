<section id="home-section" class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h7"
          /></svg
        >
      </label>
      <ul
        tabindex="0"
        class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li><a href="#home-section">Homepage</a></li>
        <li><a href="#about-us-section">About Us</a></li>
        <li><a href="#gallery__card">Gallery</a></li>
        <li><a href="#faq-section">FAQs</a></li>
      </ul>
    </div>
  </div>
  <div class="navbar-center">
    <a href="/" class="btn btn-ghost normal-case text-xl">
      <svg
        class="h-5 w-5"
        width="512"
        height="512"
        viewBox="0 0 512 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Mask group">
          <g id="blood-drop-svgrepo-com 1">
            <path
              id="Vector"
              d="M450.207 317.793C450.207 425.05 363.256 512 256 512C148.743 512 61.793 425.05 61.793 317.793C61.793 176.552 256 0 256 0C256 0 450.207 176.552 450.207 317.793Z"
              fill="#FAE100"
            />
            <path
              id="Vector_2"
              d="M450.207 317.793C450.207 425.05 363.256 512 256 512C256 300.138 256 0 256 0C256 0 450.207 176.552 450.207 317.793Z"
              fill="#FFB81C"
            />
            <path
              id="Vector_3"
              d="M336.92 285.425H288.368V236.873H223.632V285.425H175.08V350.161H223.632V398.712H288.368V350.161H336.92V285.425Z"
              fill="white"
            />
          </g>
        </g>
      </svg>

      Plasma Bank</a
    >
  </div>
  <div class="navbar-end">
    <label
      for="login-modal"
      class="btn btn-outline mr-4 cursor-pointer modal-button login-btn"
      >Login</label
    >
    <label
      for="register-modal"
      class="btn btn-outline mr-4 cursor-pointer modal-button login-btn"
      >Register</label
    >
  </div>
</section>

<style>
  .navbar,
  .menu {
    background-color: var(--clr-primary-400);
  }

  .login-btn {
    border-radius: 100vmax;
    padding: 0.5em 2em;
  }

  .menu li {
    font-weight: 700;
  }

  @media (max-width: 50em) {
    .navbar {
      justify-content: space-between;
    }
    .navbar-end {
      display: none;
    }
  }
</style>
