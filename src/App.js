import React, { Component } from 'react'
import Friends from "./Components/Friends"
import MainBody from "./Components/MainBody"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Browse from "./Components/Browse"


class App extends Component {
  render() {
    return (
<Router>
      <div className="outer-most-div">
        <div className="left-div block-elements">
          <Link to="/browse">Browse</Link> 
            <hr/>
            <h5><b>YOUR LIBRARY</b></h5>
            <ul className="left-div-list">
          
              <li><a href="#">Recently Played</a></li>
              <li><a href="#">Songs</a></li>
              <li><a href="#">Album</a></li>
              <li><a href="#">Artists</a></li>
              <li><a href="#">Local Files</a></li>
              <li><a href="#">Podcasts</a></li>
            </ul>
              <h5><b>PLAYLISTS</b></h5>
            <ul className="left-div-list">
              <li><a href="#">Recently Played</a></li>
              <li><a href="#">Songs</a></li>
              <li><a href="#">Album</a></li>
              <li><a href="#">Artists</a></li>
              <li><a href="#">Local Files</a></li>
              <li><a href="#">Podcasts</a></li>
            </ul>
        </div>

        <div className="mainbody">
        
          <MainBody/>
        </div>

        <div className="right-div">
            <h6>FRIEND ACTIVITY</h6>
            <br/>
            <Friends/>
        </div>
        <audio controls id="audioContainer">
        <source src="horse.ogg" type="audio/ogg"/>
        <source src="horse.mp3" type="audio/mpeg"/>
    
      </audio>

      </div>



</Router>
    );
  }
}

export default App
