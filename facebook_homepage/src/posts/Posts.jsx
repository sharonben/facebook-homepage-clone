import { Avatar } from '@mui/material'
import React from 'react'
import "./Posts.css"
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';

const Posts = ({ profilePic, image, username, timestamp, message }) => {
    return (
        <div className='posts'>

            <div className="post-top">
                <Avatar src={profilePic} className="post-avatar" />

                <div className="posttop-info">
                    <h3>{username}</h3>
                    <p>{timestamp}</p>
                </div>
            </div>

            <div className="post-bottom">
                <p>{message}</p>
            </div>

            <div className="post-image">
                <img src={image} alt="" />
            </div>

<div className="post-options">

<div className="like">
<ThumbUpOutlinedIcon fontSize='small' />
<p>Like</p>
    </div>

    <div className="like">
<ChatBubbleOutlineOutlinedIcon fontSize='small'  />
<p>Comment</p>
    </div>

    <div className="like">
<ReplyOutlinedIcon fontSize='small' />
<p>share</p>
    </div>



    
    </div>





        </div>
    )
}

export default Posts