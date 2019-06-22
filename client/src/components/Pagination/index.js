import React from "react";

//ADDED sample pagination for the profile page's liked items, once the items exceed a certain number.
const Pagination = props => (
  <nav class="pagination is-centered" role="navigation" aria-label="pagination">
    <a class="pagination-previous">Previous</a>
    <a class="pagination-next">Next page</a>
    <ul class="pagination-list">
      <li>
        <a class="pagination-link" aria-label="Goto page 1">
          1
        </a>
      </li>
      <li>
        <span class="pagination-ellipsis">&hellip;</span>
      </li>
      <li>
        <a class="pagination-link" aria-label="Goto page 45">
          45
        </a>
      </li>
      <li>
        <a
          class="pagination-link is-current"
          aria-label="Page 46"
          aria-current="page"
        >
          46
        </a>
      </li>
      <li>
        <a class="pagination-link" aria-label="Goto page 47">
          47
        </a>
      </li>
      <li>
        <span class="pagination-ellipsis">&hellip;</span>
      </li>
      <li>
        <a class="pagination-link" aria-label="Goto page 86">
          86
        </a>
      </li>
    </ul>
  </nav>
);

export default Pagination;
