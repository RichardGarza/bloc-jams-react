import React, { Component } from 'react';
import albumData from './../data/albums';

class Album extends Component {
  constructor(props) {
    super(props);

    const album = albumData.find( album => {
      return album.slug === this.props.match.params.slug
    });

    this.state = {
      album: album,
      currentSong: album.songs[0],
      isPlaying: false,
      hovering: false,
      hoveringOver: 0
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

    setSong(song) {
      this.audioElement.src = song.audioSrc;
      this.setState({ currentSong: song });
    }
    handleSongClick(song) {
     const isSameSong = this.state.currentSong === song;
     if (this.state.isPlaying && isSameSong) {
       this.pause();
     } else {
        if (!isSameSong) { this.setSong(song); }
       this.play();
     }
   }

   handleHover(index){
     this.setState({ hovering: true });
     this.setState({hoveringOver: index })
   }

   endHover(){
     this.setState({ hovering:false });
   }

   playButton(index){
    var Button = {}
    var ButtonNumber = this.state.hoveringOver


     if (this.state.hovering){
       Button = <td className="icon ion-md-play"></td> }
       else{
       Button = <td>  {index + 1}  </td>}

       return Button
     }



  render() {
    return (
      <section className="album">
       <section id="album-info">
        <img id="album-cover-art" src={this.state.album.albumCover} alt={this.state.album.title}/>
        <div className="album-details">

         <h1 id="album-title">{this.state.album.title}</h1>

         <h2 className="artist">{this.state.album.artist}</h2>
         <div id="release-info">{this.state.album.releaseInfo}</div>
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
                 <tr className= "song-index"  key={index} onClick={() => this.handleSongClick(song)} onMouseEnter={() => this.handleHover(index)} onMouseLeave={() => this.endHover()}>

                 <td id= {index}  > {this.playButton(index)} </td>

                 <td id="song-title"> {song.title} </td>
                 <td id="song-duration"> {song.duration} seconds.</td>
                 </tr>
                 )

               }


           </tbody>
         </table>
      </section>
    );
  }
}

export default Album;
