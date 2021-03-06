import React from 'react';

const FeedComment = props => (
    <article class="media">
  <figure class="media-left">
    <p class="image is-64x64">
      <img src="https://bulma.io/images/placeholders/128x128.png" alt=""/>
    </p>
  </figure>
  <div class="media-content">
    <div class="field">
      <p class="control">
        <textarea class="textarea" placeholder="Add a comment..."></textarea>
      </p>
    </div>
    <nav class="level">
      <div class="level-left">
        <div class="level-item">
          <a class="button is-info" href="/">Submit</a>
        </div>
      </div>
      <div class="level-right">
        <div class="level-item">
          <label class="checkbox">
            <input type="checkbox" /> Press enter to submit
          </label>
        </div>
      </div>
    </nav>
  </div>
</article>
);

export default FeedComment;