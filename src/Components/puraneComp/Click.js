
import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

export class Click extends Component {
    // click = () => {
    //     this.setState(this.state.count=2)
    // }
    


    render() {
        const {count, click}=this.props;
        return (
            <div>
                <button onClick={click}>Clicked {count} times {this.props.name}</button>
            </div>
        )
    }
}

export default Click
