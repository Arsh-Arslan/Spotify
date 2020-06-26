import React, { Component } from 'react'

class SimplySupportedBeam extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             length:0
        }
    }
    


    render() {
        
        return (
            <div >
                <form>
                    <input type="number" id="lengthOfBeam" placeholder="please enter in m" value="this.state.length" />
                    <label for="lengthOfBeam">Length Of Beam ?</label>
                    <br/>
                    <input type="number" id="intensityOfPointLoad" placeholder="please enter in KN"/>
                    <label for="intensityOfPointLoad">Intensity of Point Load ?</label>
                    <br/>
                    <input type="number" id="positionOfPointLoad" placeholder="please enter in m"/>
                    <label for="positionOfPointLoad">Position Of Point Load ?</label>
                    <br/>
                    <button type="submit" onClick={() => this.calculate}>Submit</button>
                </form>


            </div>
        )
    }
}

export default SimplySupportedBeam
