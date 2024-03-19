import React from "react";
import Navigation from "./blocks/Navigation";
import UserInfo from "./blocks/UserInfo";
import MemberPoll from "./blocks/MemberPoll";
import './css/LeftColumn.css'

const LeftColumn = () => {
  return(
    <div className="left-column-content">
      <div className="blocks-container left-block">
        <Navigation/>
        <UserInfo/>
        <MemberPoll/>
      </div>
    </div>
  );
}

export default LeftColumn;