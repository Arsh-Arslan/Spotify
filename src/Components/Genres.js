import React, { Component } from 'react'

class Genres extends Component {

    constructor(props) {
        super(props)
    
        // const userAccessToken="BQDqOmDX0Db9q-nnh54EMCZ1nv_62VJX-wV7VtexFm6fIQVjAguCUD9s_0qbY0z1JCXUW_i5B9pJOted60F0zXDGB_F5WGoC501rD7MkLK4y5cr7u6I9K7zh84I5UOhAJcVYQCgN66bGvvc31NuzQhrI8F6lXgQFRqJ7n5lszIRk"

        // fetch("https://api.spotify.com/v1/recommendations/available-genre-seeds", {
        //     method: "GET",
        //     headers: {
        //         Accept: "application/json",
        //       Authorization: `Bearer ${userAccessToken}`     
        //     }
        //   })
        //   .then(response => response.json())
          
        //   .then((res) => {
        //     this.setState({genres:res.genres})
        //     console.log(this.state.genres)

        //   })

        // this.state = {
        //      genres:[]
        // }
    }
    
    // componentDidMount() {
    //     const userAccessToken="BQA3OrzlWlB-edBM5HJY1TjcQGDMwOzxDk7aTBWTF2Z4RM-D4-Ex5yfy9ac9ZNVX51jYnyPszKsG200louFNg5O4_NGjvdwlWWYA4zsGAq4rwlLKk3KpF6LOVT-QEFGKrEd1SUn7STdkrXViePicgH8Mi1qYwgmsO91RyudUvuW8"

    //     fetch("https://api.spotify.com/v1/recommendations/available-genre-seeds", {
    //         method: "GET",
    //         headers: {
    //             Accept: "application/json",
    //           Authorization: `Bearer ${userAccessToken}`     
    //         }
    //       })
    //       .then(response => response.json())
          
    //       .then((res) => {
    //         this.setState({genres:res.genres})
    //         console.log(this.state.genres)

    //       })

    //     }
    
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
                <h2>Genres and moods</h2>

                <div className="container" >
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

export default Genres
