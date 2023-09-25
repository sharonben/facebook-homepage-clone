import React from 'react'
import Story from './Story'
import "./StoryBox.css"
import dp1 from "./dummy-profile.png"
import dp2 from "./dp2.jfif"
import dp3 from "./dp3.jfif"
import dp4 from "./dp4.jfif"
import dp5 from "./dp5.jpg"
import s1 from "./s1.jpg"
import s2 from "./s2.jpg"
import s3 from "./s3.jpg"
import s4 from "./s4.jpg"
import s5 from "./s5.jpg"



const StoryBox = () => {
  return (
    <div className='storybox'>
          
          <Story  image={s1} profileSrc={dp1} title="David" />
          <Story  image={s2} profileSrc={dp2} title="George" />
          <Story  image={s3} profileSrc={dp3} title="Alex" />
          <Story  image={s4} profileSrc={dp4} title="Nick" />
          <Story  image={s5} profileSrc={dp5} title="Jonas" />


        </div>
  )
}

export default StoryBox