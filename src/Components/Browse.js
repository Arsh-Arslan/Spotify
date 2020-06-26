import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Genres from "./Genres"
import Podcasts from "./Podcasts"
import Charts from "./Charts"
import Newrelease from "./Newrelease"
import Discover from "./Discover"
import Concerts from "./Concerts"

class Browse extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             style1:{
                
             }
        }
    }
    
    render() {

        return (
<Router>
            <div>
                
                        <h1 className="ml-4"><b>Browse</b></h1>
                        <ul className="list-of-items-in-browse">
                            <li className="item-in-browse">
                                <Link to="/genres" className="Link-in-browse" style={this.state.style1}>GENRES</Link>
                            </li>
                            <li className="item-in-browse">
                                <Link to="/podcasts" className="Link-in-browse">PODCASTS</Link>
                            </li>
                            <li className="item-in-browse">
                                <Link to="/charts" className="Link-in-browse">CHARTS</Link>
                            </li>
                            <li className="item-in-browse">
                                <Link to="/newrelease" className="Link-in-browse">NEW RELEASE</Link>
                            </li>
                            <li className="item-in-browse">
                                <Link to="/discover" className="Link-in-browse">DISCOVER</Link>
                            </li>
                            <li className="item-in-browse">
                                <Link to="/concerts" className="Link-in-browse">CONCERTS</Link>
                            </li>
                        </ul>
                

          <Switch>
              <Route path="/genres">
                <Genres/>
              </Route>
              <Route path="/podcasts">
                  <Podcasts/>
              </Route>
              <Route path="/charts">
                  <Charts/>
              </Route>
              <Route path="/newrelease">
                  <Newrelease/>
              </Route>
              <Route path="/discover">
                  <Discover/>
              </Route>
              <Route path="/concerts">
                  <Concerts/>
              </Route>
          </Switch>
            </div>
</Router>
        )
    }
}

export default Browse
