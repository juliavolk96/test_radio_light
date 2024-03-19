import React from "react";
import './css/UserInfo.css'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const UserInfo = () => {

  return(
    <div className="user-info-container">
      <h2> 
        <span>U</span>
        <span>s</span>
        <span>e</span>
        <span>r</span>
        &nbsp;
        <span>I</span>
        <span>n</span>
        <span>f</span>
        <span>o</span>
      </h2>
      <div className="user-info">
        <img className="avatar" alt="User Name" src='./images/pet-love.png' /> 
        <a href="/"><PersonOutlineOutlinedIcon/>Dein Profil</a>
        <a href="/"><AutoFixHighOutlinedIcon/>Edit Profil</a>
        <a href="/"><EmailOutlinedIcon/> Messages</a>
        <a href="/"><LogoutOutlinedIcon/>Logout</a>
      </div>
    </div>
  );
}

export default UserInfo;