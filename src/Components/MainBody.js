import React, { Component } from 'react'
import Browse from "./Browse"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class MainBody extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            genres:[] 
        }
    }
    

   
   
    render() {
        
        return (
            <div>
                <div className="">
                    <nav className="navbar container browse-gradient">
                    
                            
                        <a href="#"><span className="material-icons">
                            keyboard_arrow_left
                        </span></a>

                        <a href="#"><span className="material-icons">
                            keyboard_arrow_right
                        </span></a>

    
                        <form class="form-inline inline-elements mx-auto">
                            <input class="form-control " type="search" placeholder="Search" aria-label="Search"/>
                            <button class="btn btn-outline-success " type="submit">Search</button>
                        </form>
                        
                        
                        <span>Arsh</span>

                        <a href="#"><span class="material-icons">
                        account_circle
                        </span></a>

                        <div class="dropdown">
                            <button  class="dropbtn"><span class="material-icons">
                            keyboard_arrow_down
                            </span></button>
                            <div id="myDropdown" class="dropdown-content">
                                <a href="#home">Home</a>
                                <a href="#about">About</a>
                                <a href="#contact">Contact</a>
                            </div>
                            </div>
                                            
                    </nav>
                    <hr/>
                    <hr/>
                    
                    <Switch>
                        <Route path="/browse">
                            <Browse/>
                        </Route>

                    </Switch>
                </div>
            </div>
        )
    }
}

export default MainBody
