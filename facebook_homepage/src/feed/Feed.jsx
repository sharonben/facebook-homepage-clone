import React from 'react'
import Posting from '../posting/Posting'
import Posts from '../posts/Posts'
import StoryBox from '../Story/StoryBox'
import "./Feed.css"
import dp2 from "../Story/dp2.jfif"
import dp3 from "../Story/dp3.jfif"
import dp4 from "../Story/dp4.jfif"
import dp5 from "../Story/dp5.jpg"


const Feed = () => {
  return (
    <div className='feed'>
      <StoryBox />
      <Posting />
      <Posts
        profilePic={dp2}
        message="hello guysss"
        timestamp="12:00 pm"
        username="David"
        image="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2Fyc3xlbnwwfHwwfHw%3D&w=1000&q=80"
      />


      <Posts
        profilePic={dp3}
        message="hiii iam here"
        timestamp="2:00 pm"
        username="John"
        image="https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325466/man-walking-dog.jpg"
      />

      <Posts
        profilePic={dp4}
        message="nature love"
        timestamp="10:00 am"
        username="Alex"
        image="https://images.unsplash.com/photo-1531923981709-9fd5eb67572c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwc2t5fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
      />

<Posts
        profilePic={dp5}
        message="good morning"
        timestamp="7:00 am"
        username="Nick"
        image="https://c.tenor.com/mVtMLHu0makAAAAC/coffee-morning.gif"
      />


    </div>
  )
}

export default Feed
