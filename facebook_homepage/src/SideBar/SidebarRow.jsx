import { Avatar } from '@mui/material'
import React from 'react'
import "./SidebarRow.css"

const SidebarRow = ({Icon, src, title}) => {
  return (
    <div className='sidebar-row'>
        {src&&<Avatar src={src}/>}
       {Icon && <Icon/>}
       
    <h5>{title}</h5>
    </div>
  )
}

export default SidebarRow