import React from 'react';

const Landing = () => (
  <section className="landing">
   <h1 className="hero-title">Turn the music up!</h1>
   <br />
   <section className="selling-points">
    <div className="point">
     <h2 className="point-title">Choose your music</h2>
     <p className="point-description">My discography is full of music; why should I be the only one who gets to enjoy it?</p>
    </div>
    <br/>
    <div className="point">
     <h2 className="point-title">Unlimited streaming, ad-free</h2>
     <p className="point-description">No limits. No distractions.</p>
    </div>
    <br/>
    <div className="point">
     <h2 className="point-title">Mobile enabled</h2>
     <p className="point-description">Listen to my music on the go. This streaming service is available on all mobile platforms.</p>
    </div>
   </section>
  </section>
);

export default Landing;
