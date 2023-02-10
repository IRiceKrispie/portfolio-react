import React from 'react';
import '../styles/Projects.css';



export default function Projects() {
  return (
    <div class="cards-list">
      <div class="card 1">
        <div class="card_image">
          <img src="https://media.giphy.com/media/nNUUhTml69NLV3ksaR/giphy.gif" alt="Card 1" />
        </div>
        <div class="card_title title-black">
          <p>Moive DB</p>
        </div>
      </div>

      <div class="card 2">
        <div class="card_image">
          <img src="https://media.giphy.com/media/ekY8JdlX7FqQTbteE7/giphy.gif" alt="Card 2"/>
        </div>
        <div class="card_title title-black">
          <p>Event Handler</p>
        </div>
      </div>
    </div>
    
  );
}
