import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';

class App extends Component {
  render() {
    return (
      <div className="App">
       <div className="container">

           <a href="/" className="my-tunes-logo">
             <img src="/assets/images/my-tunes-logo.png" className="my-tunes-logo" alt="Place Logo Here"  />
           </a>

           <span className="link-bar-home">
              <Link className="link-bar" to='/'>Home</Link>
           </span>

           <span className="link-bar-library">
             <Link className="link-bar" to='/library'>Library</Link>
           </span>

          

          <Route className="content" exact path="/" component={Landing} />

          <Route className="content" path="/library" component={Library} />

          <Route className="album" path="/album/:slug" component={Album} />


         </div>
      </div>
    );
  }
}

export default App;
