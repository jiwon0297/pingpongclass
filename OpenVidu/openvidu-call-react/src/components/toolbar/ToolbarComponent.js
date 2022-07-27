import React, { Component } from "react";
import "./ToolbarComponent.css";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import Mic from "@material-ui/icons/Mic";
import MicOff from "@material-ui/icons/MicOff";
import Videocam from "@material-ui/icons/Videocam";
import VideocamOff from "@material-ui/icons/VideocamOff";
import Fullscreen from "@material-ui/icons/Fullscreen";
import FullscreenExit from "@material-ui/icons/FullscreenExit";
import SwitchVideoIcon from "@material-ui/icons/SwitchVideo";
import PictureInPicture from "@material-ui/icons/PictureInPicture";
import ScreenShare from "@material-ui/icons/ScreenShare";
import StopScreenShare from "@material-ui/icons/StopScreenShare";
import Tooltip from "@material-ui/core/Tooltip";
import PowerSettingsNew from "@material-ui/icons/PowerSettingsNew";
import QuestionAnswer from "@material-ui/icons/QuestionAnswer";
import Shuffle from "@material-ui/icons/Shuffle";

import IconButton from "@material-ui/core/IconButton";

const logo = require("../../assets/images/openvidu_logo.png");

export default class ToolbarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { fullscreen: false };
    this.camStatusChanged = this.camStatusChanged.bind(this);
    this.micStatusChanged = this.micStatusChanged.bind(this);
    this.screenShare = this.screenShare.bind(this);
    this.stopScreenShare = this.stopScreenShare.bind(this);
    this.toggleFullscreen = this.toggleFullscreen.bind(this);
    this.switchCamera = this.switchCamera.bind(this);
    this.leaveSession = this.leaveSession.bind(this);
    this.toggleChat = this.toggleChat.bind(this);
    this.pickRandomStudent = this.pickRandomStudent.bind(this);
  }

  // micStatusChanged: 마이크 상태변화 토글 함수
  micStatusChanged() {
    this.props.micStatusChanged();
  }

  // camStatusChanged: 캠 상태변화 토글 함수
  camStatusChanged() {
    this.props.camStatusChanged();
  }

  // name: 한준수
  // date: 2022/07/25
  // desc: 선생님이 랜덤한 학생을 지목하는 기능
  // hack: 더블 클릭 방지, 거부권 사용 여부, 다른 유저들에게 결과 송신
  pickRandomStudent() {
    this.lockOut(1.5);
    this.props.pickRandomStudent();
  }

  // screenShare: 스크린쉐어 시작 함수
  screenShare() {
    this.props.screenShare();
  }

  // screenShare: 스크린쉐어 중지 함수
  stopScreenShare() {
    this.props.stopScreenShare();
  }

  // toggleFullscreen: 전체화면 토글 버튼
  toggleFullscreen() {
    this.setState({ fullscreen: !this.state.fullscreen });
    this.props.toggleFullscreen();
  }

  // switchCamera: 카메라 변경 함수
  switchCamera() {
    this.props.switchCamera();
  }

  // leaveSession: 세션 이탈 함수
  leaveSession() {
    this.props.leaveSession();
  }

  // toggleChat: 채팅 토글 함수
  toggleChat() {
    this.props.toggleChat();
  }

  // name: 한준수
  // date: 2022/07/27
  // desc: 랜덤 지목 버튼을 일정 시간동안 비활성화 시켜주는 함수
  // Todo: 호출 시 해당 버튼을 지정된 시간동안 disabled 해주는 함수
  lockOut(lockOutTime) {
    let localUser = this.props.user;
    alert(localUser);
    this.setState({ randAvailable: true });
    setTimeout(() => {
      this.setState({ randAvailable: false });
    }, lockOutTime * 1000);
  }

  // render: 렌더링 함수
  render() {
    const mySessionId = this.props.sessionId;
    const localUser = this.props.user;
    return (
      <AppBar className="toolbar" id="header">
        <Toolbar className="toolbar">
          <div id="navSessionInfo">
            <img id="header_img" alt="OpenVidu Logo" src={logo} />

            {this.props.sessionId && (
              <div id="titleContent">
                <span id="session-title">{mySessionId}</span>
              </div>
            )}
          </div>

          <div className="buttonsContent">
            <IconButton
              color="inherit"
              className="navButton"
              id="navMicButton"
              onClick={this.micStatusChanged}
            >
              {localUser !== undefined && localUser.isAudioActive() ? (
                <Mic />
              ) : (
                <MicOff color="secondary" />
              )}
            </IconButton>

            <IconButton
              color="inherit"
              className="navButton"
              id="navRandButton"
              onClick={this.pickRandomStudent}
              disabled={this.state.randAvailable}
            >
              {this.state.randAvailable ? (
                <Shuffle />
              ) : (
                <Shuffle color="secondary" />
              )}
            </IconButton>

            <IconButton
              color="inherit"
              className="navButton"
              id="navCamButton"
              onClick={this.camStatusChanged}
            >
              {localUser !== undefined && localUser.isVideoActive() ? (
                <Videocam />
              ) : (
                <VideocamOff color="secondary" />
              )}
            </IconButton>

            <IconButton
              color="inherit"
              className="navButton"
              onClick={this.screenShare}
            >
              {localUser !== undefined && localUser.isScreenShareActive() ? (
                <PictureInPicture />
              ) : (
                <ScreenShare />
              )}
            </IconButton>

            {localUser !== undefined && localUser.isScreenShareActive() && (
              <IconButton onClick={this.stopScreenShare} id="navScreenButton">
                <StopScreenShare color="secondary" />
              </IconButton>
            )}

            <IconButton
              color="inherit"
              className="navButton"
              onClick={this.switchCamera}
            >
              <SwitchVideoIcon />
            </IconButton>
            <IconButton
              color="inherit"
              className="navButton"
              onClick={this.toggleFullscreen}
            >
              {localUser !== undefined && this.state.fullscreen ? (
                <FullscreenExit />
              ) : (
                <Fullscreen />
              )}
            </IconButton>
            <IconButton
              color="secondary"
              className="navButton"
              onClick={this.leaveSession}
              id="navLeaveButton"
            >
              <PowerSettingsNew />
            </IconButton>
            <IconButton
              color="inherit"
              onClick={this.toggleChat}
              id="navChatButton"
            >
              {this.props.showNotification && <div id="point" className="" />}
              <Tooltip title="Chat">
                <QuestionAnswer />
              </Tooltip>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}
