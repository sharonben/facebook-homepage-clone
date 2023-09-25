import { Avatar } from "@mui/material";
import React from "react";
import "./Posting.css";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';

const Posting = () => {




  return (
    <div className="posting">
      <div className="posting-top">
        <Avatar />
        <input  className="posting-box" type="text" placeholder="what's on your mind?" />
      </div>

      <div className="posting-bottom">
        <div className="live-video">
          <LiveTvIcon style={{ color: "red" }} />
          <p>Live Video</p>
        </div>

        <div className="live-video">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <p>Photo/Video</p>
        </div>

        <div className="live-video">
          <EmojiEmotionsOutlinedIcon style={{ color: "orange" }} />
          <p>Feeling/Activity</p>
        </div>



      </div>
    </div>
  );
};

export default Posting;
