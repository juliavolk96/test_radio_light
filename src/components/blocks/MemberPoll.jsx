import React from "react";
import NoMemberPoll from "./NoMemberPoll";
import './css/MemberPoll.css'

const MemberPoll = () => {
  return (
    <div className="member-poll">
      <h2>
        <span>M</span>
        <span>e</span>
        <span>m</span>
        <span>b</span>
        <span>e</span>
        <span>r</span>
        &nbsp;
        <span>p</span>
        <span>o</span>
        <span>l</span>
        <span>l</span>
      </h2>
      <NoMemberPoll/>
    </div>
  );
}

export default MemberPoll;