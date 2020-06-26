import React, { Component } from 'react'

const UpdatedComponent = (OriginalComponent, incrementNumber) => {
    class NewComponent extends Component {

        constructor(props) {
            super(props)
        
            this.state = {
                 count:0
            }
        }

        click=()=>{
            this.setState(prevState=>{
               return{ count:prevState.count+incrementNumber}
            })
        }
    
        render() {
            return (
                <OriginalComponent 
                count={this.state.count}
                click={this.click}
                {...this.props}
                />
            )
        }
    }
    return NewComponent
}

export default UpdatedComponent
