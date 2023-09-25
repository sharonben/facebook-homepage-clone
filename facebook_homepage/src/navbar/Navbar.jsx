import React from "react";
import fbicon from "./icons8-facebook-480.png";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import StoreMallDirectoryOutlinedIcon from '@mui/icons-material/StoreMallDirectoryOutlined';
import SupervisedUserCircleOutlinedIcon from '@mui/icons-material/SupervisedUserCircleOutlined';
import { Avatar, IconButton } from "@mui/material";
import AppsIcon from '@mui/icons-material/Apps';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav-wrapper">

        <div className="nav-left">
          <div classname="fbicon">
            <img src={fbicon} alt="" />
          </div>
          <div className="search-container">
            <SearchIcon
              classname="search-icon"
              style={{ color: "rgb(101, 103, 107)" }}
            />
            <input
              type="text"
              className="search-box"
              placeholder="Search Facebook"
            />
          </div>
        </div>  {/* nav-left close */}


        <div className="nav-middle">

          <div className="header-icons header-icons-active">
            <HomeOutlinedIcon  fontSize="large" />
          </div>

          <div className="header-icons">
            <PeopleAltOutlinedIcon fontSize="large" />
          </div>

          <div className="header-icons">
            <VideoLibraryOutlinedIcon fontSize="large" />
          </div>

          <div className="header-icons">
            <StoreMallDirectoryOutlinedIcon fontSize="large" />
          </div>

          <div className="header-icons">
            <SupervisedUserCircleOutlinedIcon fontSize="large" />
          </div>

        </div>


        <div className="nav-right">
            <div className="nav-info">
              <Avatar />
              <h4>sharon</h4>
              </div>

              <IconButton>
                <AppsIcon />
              </IconButton>

              <IconButton>
                <MessageIcon />
              </IconButton>

              <IconButton >
                <NotificationsIcon />
              </IconButton>

              <IconButton>
                <ExpandMoreIcon />
              </IconButton>

          
          </div>








      </div> 
    </div>
  );
};

export default Navbar;
