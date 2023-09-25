import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FlagIcon from '@mui/icons-material/Flag';
import EventIcon from '@mui/icons-material/Event';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import StarIcon from '@mui/icons-material/Star';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarRow title="sharon" Icon={AccountCircleIcon} />
      <SidebarRow Icon={PeopleAltIcon} title="Find friends" />
      <SidebarRow Icon={GroupsRoundedIcon} title="Groups" />
      <SidebarRow Icon={StoreMallDirectoryIcon} title="Market place" />
      <SidebarRow Icon={VideoLibraryIcon} title="Watch" />
      <SidebarRow Icon={AccessTimeIcon} title="Memories" />
      <SidebarRow Icon={BookmarkIcon} title="Saved" />
      <SidebarRow Icon={FlagIcon} title="Pages" />
      <SidebarRow Icon={EventIcon} title="Events" />
      <SidebarRow Icon={RecentActorsIcon} title="Recent" />
      <SidebarRow Icon={StarIcon} title="Favorites" />
      <SidebarRow Icon={ExpandMoreIcon} title="See More" />



    </div>




  );
};

export default Sidebar;
