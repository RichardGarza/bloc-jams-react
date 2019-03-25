import React from 'react';


const Landing = () => (

  <section className="landing">
   <h1 className="hero-title">Welcome to MyTunes! </h1>
   <br />
   <section className="selling-points">
    <div className="point">
     <h2 className="point-title">The Official Hub to Find RchyRch's Music.</h2>
     <p className="point-description"></p>
     <p> Head over to the library above to browse albums!</p>
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
