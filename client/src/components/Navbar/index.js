import React from "react";

//Sample NAVBAR UPDATED FROM BULMA WEBSITE
const Navbar = props => (
  <nav class="level">
    <p class="level-item has-text-centered">
      <a class="link is-info" href="/titles" alt="titles">Titles</a>
    </p>
    <p class="level-item has-text-centered">
      <a class="link is-info" href="/" alt="home">Home</a>
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
      <a class="link is-info" href="/" alt="settings">Settings</a>
    </p>
  </nav>
);

export default Navbar;
