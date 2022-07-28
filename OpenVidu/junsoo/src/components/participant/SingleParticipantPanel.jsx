import React from "react";

import Mic from "@material-ui/icons/Mic";
import MicOff from "@material-ui/icons/MicOff";
import Videocam from "@material-ui/icons/Videocam";
import VideocamOff from "@material-ui/icons/VideocamOff";

import "./SingleParticipantPanel.css";

// SingleParticipantPanel: 한 명의 패널을 담당하는 컴포넌트

const SingleParticipantPanel = (props) => {
  const { myinfo, isVideoOn, isAudioOn } = props;
  return (
    <div id="oneParticipant">
      <div className="right_side">{myinfo}</div>
      <div className="left_side">
        {isVideoOn ? <Videocam /> : <VideocamOff color="secondary" />}
        {isAudioOn ? <Mic /> : <MicOff color="secondary" />}
      </div>
    </div>
  );
};

export default SingleParticipantPanel;
