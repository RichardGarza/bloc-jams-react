import React, { Component } from 'react';
import albumData from './../data/albums';
import PlayerBar from './PlayerBar';

class Album extends Component {
  constructor(props) {
    super(props);

    const album = albumData.find( album => {
      return album.slug === this.props.match.params.slug
    });

    this.state = {
      album: album,
      currentSong: album.songs[-1],
      isPlaying: false,
      hovering: false,
      currentTime: 0,
      duration: album.songs[0].duration,
      currentVolume: .8,
    };

    this.audioElement = document.createElement('audio');
    this.audioElement.src = album.songs[0].audioSrc;
  }

  play() {
     this.audioElement.play();
     this.setState({ isPlaying: true });
   }

   pause() {
      this.audioElement.pause();
      this.setState({ isPlaying: false });
    }

    componentDidMount() {
      this.eventListeners = {
       timeupdate: e => {
         this.audioElement.currentTime === this.audioElement.duration ?
         this.handleNextClick()
         :
         this.setState({ currentTime: this.audioElement.currentTime });
       },
       durationchange: e => {
         this.setState({ duration: this.audioElement.duration });
       }
     };
     this.audioElement.addEventListener('timeupdate', this.eventListeners.timeupdate);
     this.audioElement.addEventListener('durationchange', this.eventListeners.durationchange);
       }

       componentWillUnmount() {
     this.audioElement.src = null;
     this.audioElement.removeEventListener('timeupdate', this.eventListeners.timeupdate);
     this.audioElement.removeEventListener('durationchange', this.eventListeners.durationchange);
   }

    setSong(song,index) {
      this.audioElement.src = song.audioSrc;
      this.setState({ currentSong: this.state.album.songs[index] });
    }

    handleSongClick(song,index) {
     const isSameSong = this.state.currentSong === song;
     if (this.state.isPlaying && isSameSong) {
       this.pause();
     } else {
        if (!isSameSong) { this.setSong(song,index); }
       this.play();
     }
}

    handlePrevClick() {
    const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
    const newIndex = Math.max(0, currentIndex - 1);
    const newSong = this.state.album.songs[newIndex];
    this.setSong(newSong,newIndex);
    this.play();
    }

    handleNextClick() {
    const albumSongs = this.state.album.songs
    const currentIndex = albumSongs.findIndex(song => this.state.currentSong === song);
    const newIndex = Math.min(albumSongs.length - 1, currentIndex + 1);
    const newSong = this.state.album.songs[newIndex];
    this.setSong(newSong,newIndex);
    this.play();
    }

   handleTimeChange(e) {
     const newTime = this.audioElement.duration * e.target.value;
     this.audioElement.currentTime = newTime;
     this.setState({currentTime: newTime});
   }

  handleVolumeChange(e) {
    const Volume = e.target.value;
     this.audioElement.volume = Volume;
     this.setState({currentVolume: Volume})
  }

   formatTime(duration){

     const FormattedTime =

     <span className="current-time">
        <span>
            { parseInt(duration / 60)    >  0  ?
                  <span> {parseInt(duration / 60)} : </span>
                :
                <span> 0 :</span>
              }
        </span>
        <span>
            { parseInt(duration % 60)    <  10  ?
                  <span> 0{parseInt(duration % 60)}</span>
                :
                <span> {parseInt(duration % 60)}</span>
              }
        </span>
     </span>

     if (isNaN(duration)){
       return <span> -:-- </span>
     }
     return FormattedTime

    }



  render() {
    return (
      <section  className="album">
       <section id="album-info">
        <img id="album-cover-art" src={this.state.album.albumCover} alt={this.state.album.title}/>
        <div className="album-details">

         <h1 id="album-title">{this.state.album.title}</h1>

         <h2 className="artist">{this.state.album.artist}</h2>
         <div id="release-info">This album was released in {this.state.album.releaseInfo}.</div>
        </div>
       </section>
       <table id="song-list">
           <colgroup>
             <col id="song-number-column" />
             <col id="song-title-column" />
             <col id="song-duration-column" />
           </colgroup>
           <tbody>
           {
             this.state.album.songs.map( (song, index) =>
                 <tr className= "song-index"  key={index} onClick={() => this.handleSongClick(song,index)} onMouseEnter={() =>  this.setState({ hovering:index + 1} )} onMouseLeave={() =>  this.setState({ hovering:false })}>

                 <td className= "song-button">
                  <button className= "song-button-chooser">
                  {   (song === this.state.currentSong) ?
                    <span className={(this.state.isPlaying) ? "icon ion-md-pause":"icon ion-md-play"}></span>
                    :
                     (index + 1 === this.state.hovering) ?
                    <span className="icon ion-md-play"> </span>
                    :
                    <span> {index + 1} </span>}
                  </button>
                 </td>
                 <td id="song-title"> {song.title}    </td>
                 <td id="song-duration"> {this.formatTime(song.duration)} </td>
                 </tr>
                 )
               }
           </tbody>
         </table>
         <PlayerBar

           isPlaying={this.state.isPlaying}
           currentSong={this.state.currentSong}
           handleSongClick={() => this.handleSongClick(this.state.currentSong,this.state.currentSong)}
           handlePrevClick={() => this.handlePrevClick()}
           handleNextClick={() => this.handleNextClick()}
           currentTime={this.audioElement.currentTime}
          duration={this.audioElement.duration}
          handleTimeChange={(e) => this.handleTimeChange(e)}
          formatTime={(e) => this.formatTime(e)}
          handleVolumeChange={(e) => this.handleVolumeChange(e)}
          currentVolume={this.state.currentVolume}
         />
      </section>
    );
  }
}

export default Album;
