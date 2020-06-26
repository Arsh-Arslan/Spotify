import React, { Component } from 'react'

class Friends extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {

        const friends = [
            {
                id:0,
                name: "Ashutosh Kumar",
                photoLink: "https://scontent.fnag1-3.fna.fbcdn.net/v/t1.0-1/p960x960/66838158_2285005811585927_8476799565670907904_o.jpg?_nc_cat=108&_nc_sid=dbb9e7&_nc_ohc=kZ0RRv5iL8wAX8Ur_fO&_nc_ht=scontent.fnag1-3.fna&_nc_tp=6&oh=7e2e3b769e230b1641d9dbfad6ca6218&oe=5EAAF997",
                songBeingPlayed: "Haaye Garmi",
                facebookLink: "https://www.facebook.com/ashutoshkmr40"
            },

            {
                id:1,
                name: "Naman Kumar",
                photoLink: "https://scontent.fdel3-2.fna.fbcdn.net/v/t31.0-8/s960x960/13735645_1503536083005500_2050117937839545474_o.jpg?_nc_cat=110&_nc_sid=7aed08&_nc_ohc=JibJC8qoSRsAX9nstg9&_nc_ht=scontent.fdel3-2.fna&_nc_tp=7&oh=8d7d3ccee7bad6a9d2544a1f76c3efdd&oe=5EAC6A8D",
                songBeingPlayed: "Jiya Jale Jaan Jale",
                facebookLink: "https://www.facebook.com/NkvrBlackHawk"
            },

            {
                id:2,
                name: "Rajat Sahu",
                photoLink: "https://scontent.fdel3-1.fna.fbcdn.net/v/t1.0-9/59596761_2235671959809366_8075124264119828480_n.jpg?_nc_cat=100&_nc_sid=13bebb&_nc_ohc=ih_Bq2UTrdkAX9hQvOL&_nc_ht=scontent.fdel3-1.fna&oh=bfd6f3d4624413b690071b08cef460a4&oe=5EAF1ABE",
                songBeingPlayed: "Yaad Piya",
                facebookLink: "https://www.facebook.com/rajat.sahu.902"
            },

            {
                id:3,
                name: "Ashish Rastogi",
                photoLink: "https://scontent.fdel3-2.fna.fbcdn.net/v/t31.0-8/p960x960/29871530_984602021680490_1546141462246167852_o.jpg?_nc_cat=107&_nc_sid=7aed08&_nc_ohc=QiSWE1i-kSkAX8kdhqr&_nc_ht=scontent.fdel3-2.fna&_nc_tp=6&oh=96eeb1b9d3288a81d73f5b3c5301b095&oe=5EADA7BE",
                songBeingPlayed: "Chota Bheem",
                facebookLink: "https://www.facebook.com/ashish.rastogi.967"
            }
        ]

        return (
            <div >
                <ul className="list-of-friends">
                    {friends.map(friend => {
                       return <li key={friend.id} className="list-of-friend" >
                                <p className="list-of-friend-para-tag">
                                    <img src={friend.photoLink} className="image-of-friend" align="left" width="50" height="50" />
                                    <span className="friend-name-song">{friend.name}</span>
                                    <br/>
                                    <span className="friend-name-song">{friend.songBeingPlayed}</span>
                                    <br/>
                                    <a className="friend-name-song" href={friend.facebookLink}>Facebook Link</a>
                                </p>
                        </li>
                    })}
                    
                </ul>
            </div>
        )
    }
}

export default Friends
