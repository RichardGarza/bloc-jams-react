import React, { Component } from 'react';
import '../index.css';


class PlayerBar extends Component {
  render() {
    return (
      <section className="player-bar">

        <span className="player-bar-grid">
          <div className="current-time">
            <span>{this.props.formatTime(this.props.currentTime)} </span>
          </div>
          <div className="time-control-bar">
          <section id="time-control-bar">
            <input
              type="range"
              className="seek-bar"
              value={(this.props.currentTime / this.props.duration) || 0}
              max="1"
              min="0"
              step="0.01"
              onChange={this.props.handleTimeChange}
            />
            </section>
            </div>
            <div className="song-duration">
              <span>{this.props.formatTime(this.props.duration)} </span>
            </div>
          </span>

       <section id="buttons">
         <button id="previous" onClick={this.props.handlePrevClick}>
           <span className="icon ion-md-skip-backward"></span>
         </button>
          <button id="play-pause" onClick={this.props.handleSongClick} >
           <span className={this.props.isPlaying ? 'icon ion-md-pause' : 'icon ion-md-play'}></span>
         </button>
         <button id="next" onClick={this.props.handleNextClick}>
           <span className="icon ion-md-skip-forward"></span>
         </button>
       </section>




       <section id="volume-control" className="volume">
         <span className="volume-control-grid">
           <span className='volume-down'>
              <div className="icon ion-md-volume-low"></div>
           </span>
           <span className='volume-bar'>
               <input
                type="range"
                className="seek-bar"
                value={this.props.currentVolume}
                max="1"
                min="0"
                step="0.05"
                onChange={this.props.handleVolumeChange}
                />
            </span>
            <span className='volume-up'>
             <div className="icon ion-md-volume-high"></div>
           </span>
         </span>
       </section>
      </section>
    );
  }
}

export default PlayerBar;
