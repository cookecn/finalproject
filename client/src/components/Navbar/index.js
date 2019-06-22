import React from "react";

//Sample NAVBAR UPDATED FROM BULMA WEBSITE, added Dropdown for titles
const Navbar = props => (
  <nav class="level">
    <p class="level-item has-text-centered">
      <div class="dropdown is-active">
        <div class="dropdown-trigger">
          <button
            class="button"
            aria-haspopup="true"
            aria-controls="dropdown-menu"
          >
            <span>Dropdown button</span>
            <span class="icon is-small">
              <i class="fas fa-angle-down" aria-hidden="true" />
            </span>
          </button>
        </div>
        <div class="dropdown-menu" id="dropdown-menu" role="menu">
          <div class="dropdown-content">
            <a href="/" class="dropdown-item">
                Title #1
            </a>
            <hr class="dropdown-divider" />
            <a class="dropdown-item" href="/">
                Title #2
            </a>
            <hr class="dropdown-divider" />
            <a href="/" class="dropdown-item is-active">
                Title #3
            </a>
            <hr class="dropdown-divider" />
            <a href="/" class="dropdown-item">
                Title #4
            </a>
            <hr class="dropdown-divider" />
            <a href="/" class="dropdown-item">
                Title #5
            </a>
          </div>
        </div>
      </div>
    </p>
    <p class="level-item has-text-centered">
      <a class="link is-info" href="/" alt="home">
        Home
      </a>
    </p>
    <p class="level-item has-text-centered">
      <a class="link is-info" href="/" alt="finalproject">
        <strong>Final Project</strong>
      </a>
    </p>
    <p class="level-item has-text-centered">
      <figure class="image is-128x128">
        <img
          class="is-rounded link is-info"
          src="https://bulma.io/images/placeholders/128x128.png"
          alt="profile"
          href="/profile"
        />
      </figure>
    </p>
    <p class="level-item has-text-centered">
      <a class="link is-info" href="/" alt="settings">
        Settings
      </a>
    </p>
  </nav>
);

export default Navbar;
