import React, { Component } from 'react'

class Charts extends Component {
    render() {

        const cards= [
            {
                key:0,
                name:"At Home"
            },
            {
                key:1,
                name:"Pop"
            },
            {
                key:2,
                name:"Bollywood"
            },
            {
                key:3,
                name:"Romance"
            },
            {
                key:4,
                name:"Punjabi"
            },
            {
                key:5,
                name:"Party"
            },
            {
                key:6,
                name:"Tamil"
            },
            {
                key:7,
                name:"Electronic"
            }
           
        ]

        return (
            <div>
                <h2>Featured Charts</h2>
                   
                <div className="container">
                    <div className="row">

                        {cards.map(card => {
                            return <div className="col-3 my-3" key={card.key}>

                                <div className="card text-white bg-secondary">                           
                                    <div className="card-body my-5 mx-auto">
                                        <h5 className="card-title">{card.name}</h5>
                                    </div>
                                </div>

                            </div>

                        })}
                    </div>

                    
                </div>
                
            </div>
        )
    }
}

export default Charts
