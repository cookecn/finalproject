import React from "react";



//ADDED sample tabs component from Bulma for possible profile page tab section for liked items, comments, etc.
const Tabs = props => (
  <div class="tabs is-toggle is-fullwidth">
    <ul>
      <li class="is-active">
        <a>
          <span class="icon is-small">
            <i class="fas fa-image" aria-hidden="true" />
          </span>
          <span>Pictures</span>
        </a>
      </li>
      <li>
        <a>
          <span class="icon is-small">
            <i class="fas fa-music" aria-hidden="true" />
          </span>
          <span>Music</span>
        </a>
      </li>
      <li>
        <a>
          <span class="icon is-small">
            <i class="fas fa-film" aria-hidden="true" />
          </span>
          <span>Videos</span>
        </a>
      </li>
      <li>
        <a>
          <span class="icon is-small">
            <i class="far fa-file-alt" aria-hidden="true" />
          </span>
          <span>Documents</span>
        </a>
      </li>
    </ul>
  </div>
);

export default Tabs;
