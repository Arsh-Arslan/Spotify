import React, { Component } from 'react'

export class Podcasts extends Component {
    render() {
        const cards= [
            {
                key:0,
                name:"Top Podcast"
            },
            {
                key:1,
                name:"True Crime"
            },
            {
                key:2,
                name:"Sports and Recreation"
            },
            {
                key:3,
                name:"Stories"
            },
            {
                key:4,
                name:"Educational"
            },
            {
                key:5,
                name:"Music"
            },
            {
                key:6,
                name:"Lifestyle and Health"
            },
            {
                key:7,
                name:"Games"
            }
           
        ]

        return (
            <div>
                <h2>Categories</h2>
                
                <div className="container">
                    <div className="row my-2">

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

export default Podcasts
