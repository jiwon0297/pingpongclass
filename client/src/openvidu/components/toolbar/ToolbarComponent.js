import React, { Component } from 'react';
import './ToolbarComponent.css';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import Mic from '@mui/icons-material/Mic';
import MicOff from '@mui/icons-material/MicOff';
import Videocam from '@mui/icons-material/Videocam';
import VideocamOff from '@mui/icons-material/VideocamOff';
import Fullscreen from '@mui/icons-material/Fullscreen';
import FullscreenExit from '@mui/icons-material/FullscreenExit';
import SwitchVideoIcon from '@mui/icons-material/SwitchVideo';
import SettingsIcon from '@mui/icons-material/Settings';
import PictureInPicture from '@mui/icons-material/PictureInPicture';
import ScreenShare from '@mui/icons-material/ScreenShare';
import StopScreenShare from '@mui/icons-material/StopScreenShare';
import PowerSettingsNew from '@mui/icons-material/PowerSettingsNew';
import QuestionAnswer from '@mui/icons-material/QuestionAnswer';
import PeopleIcon from '@mui/icons-material/People';
import Shuffle from '@mui/icons-material/Shuffle';
import Quiz from '@mui/icons-material/HelpOutline';
import AccessTime from '@mui/icons-material/AccessTime';
import IconButton from '@mui/material/IconButton';

export default class ToolbarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullscreen: false,
      randAvailable: true,
      stickerAvailable: true,
    };
    this.camStatusChanged = this.camStatusChanged.bind(this);
    this.micStatusChanged = this.micStatusChanged.bind(this);
    this.screenShare = this.screenShare.bind(this);
    this.stopScreenShare = this.stopScreenShare.bind(this);
    this.toggleFullscreen = this.toggleFullscreen.bind(this);
    this.switchCamera = this.switchCamera.bind(this);
    this.leaveSession = this.leaveSession.bind(this);
    this.toggleChat = this.toggleChat.bind(this);
    this.toggleParticipant = this.toggleParticipant.bind(this);
    this.toggleQuiz = this.toggleQuiz.bind(this);
    this.pickRandomStudent = this.pickRandomStudent.bind(this);
    this.startStickerEvent = this.startStickerEvent.bind(this);
    this.toggleSetting = this.toggleSetting.bind(this);
    this.selfLeaveSession = this.selfLeaveSession.bind(this);
  }

  // micStatusChanged: 마이크 상태변화 토글 함수
  micStatusChanged() {
    this.props.micStatusChanged();
  }

  // camStatusChanged: 캠 상태변화 토글 함수
  camStatusChanged() {
    this.props.camStatusChanged();
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

  // selfLeaveSession: 혼자 세션 이탈 함수
  selfLeaveSession() {
    this.props.selfLeaveSession();
  }

  // toggleChat: 채팅 토글 함수
  toggleChat() {
    this.props.toggleChat();
  }

  toggleSetting() {
    this.props.toggleSetting();
  }

  toggleParticipant() {
    this.props.toggleParticipant();
  }

  // name: 한준수
  // date: 2022/07/25
  // desc: 선생님이 랜덤한 학생을 지목하는 기능
  // todo: 내 Subscribers 중 랜덤한 1명을 선택해 지목하고, 지목받은 학생의 테두리를 1.5초동안 빨간색으로 변경 시키고, 3초 동안 지목 버튼을 비활성화 시킨다.
  pickRandomStudent() {
    this.lockOut(5);
    this.props.pickRandomStudent(this.props.subscribers, false);
  }

  // name: 한준수
  // date: 2022/07/27
  // desc: 랜덤 지목 버튼을 일정 시간동안 비활성화 시켜주는 함수
  // Todo: 호출 시 해당 버튼을 지정된 시간동안 disabled 해주는 함수
  lockOut(lockOutTime) {
    this.setState({ randAvailable: false });
    setTimeout(() => {
      this.setState({ randAvailable: true });
    }, lockOutTime * 1000);
  }

  toggleQuiz() {
    this.props.toggleQuiz();
  }

  // lockOutSticker: 호출 시 칭찬스티커 버튼을 지정된 시간 (30초) 동안 disabled 해주는 함수
  lockOutSticker(lockOutTime) {
    this.setState({ stickerAvailable: false });
    setTimeout(() => {
      this.setState({ stickerAvailable: true });
    }, lockOutTime * 1000);
  }

  startStickerEvent() {
    this.props.startStickerEvent();
    this.lockOutSticker(30);
  }

  // render: 렌더링 함수
  render() {
    // const mySessionId = this.props.sessionId;
    const localUser = this.props.user;
    return (
      <AppBar className="toolbar" id="header">
        <Toolbar className="toolbar">
          {this.props.sessionId && (
            <div id="titleContent">
              {/* <span id="session-title">{mySessionId}</span> */}
              <span id="session-title">2-3 수요일 6교시 국어</span>
            </div>
          )}

          <div className="buttonsContent">
            <IconButton
              color="inherit"
              className="navButton"
              id="navMicButton"
              onClick={this.micStatusChanged}
            >
              {localUser !== undefined && localUser.isAudioActive() ? (
                <div className="buttonStyle">
                  <Mic />
                  <p>음소거</p>
                </div>
              ) : (
                <div className="buttonStyle">
                  <MicOff color="secondary" />
                  <p>음소거 해제</p>
                </div>
              )}
            </IconButton>

            <IconButton
              color="inherit"
              className="navButton"
              id="navCamButton"
              onClick={this.camStatusChanged}
            >
              {localUser !== undefined && localUser.isVideoActive() ? (
                <div className="buttonStyle">
                  <Videocam />
                  <p>비디오 중지</p>
                </div>
              ) : (
                <div className="buttonStyle">
                  <VideocamOff color="secondary" />
                  <p>비디오 시작</p>
                </div>
              )}
            </IconButton>

            {this.props.whoami === 'teacher' && (
              <>
                <IconButton
                  color="inherit"
                  className="navButton"
                  id="navRandButton"
                  onClick={this.pickRandomStudent}
                  disabled={!this.state.randAvailable}
                >
                  <div className="buttonStyle">
                    {this.state.randAvailable ? (
                      <Shuffle />
                    ) : (
                      <Shuffle
                        color="secondary"
                        style={{ animation: 'cooldown 5s linear 1' }}
                      />
                    )}
                    <p>랜덤 학생 뽑기</p>
                  </div>
                </IconButton>
              </>
            )}

            {this.props.whoami === 'teacher' && (
              <>
                <IconButton
                  color="inherit"
                  className="navButton"
                  id="navRandButton"
                  onClick={this.startStickerEvent}
                  disabled={!this.state.stickerAvailable}
                >
                  <div className="buttonStyle">
                    {this.state.stickerAvailable ? (
                      <AccessTime />
                    ) : (
                      <AccessTime
                        color="secondary"
                        style={{ animation: 'cooldown 30s linear 1' }}
                      />
                    )}
                    <p>집중 스티커</p>
                  </div>
                </IconButton>
              </>
            )}

            {this.props.whoami === 'teacher' && (
              <>
                <IconButton
                  color="inherit"
                  className="navButton"
                  id="navRandButton"
                  onClick={this.toggleQuiz}
                >
                  <div className="buttonStyle">
                    <Quiz />
                    <p>퀴즈 열기</p>
                  </div>
                </IconButton>
              </>
            )}

            <IconButton
              color="inherit"
              className="navButton"
              onClick={this.screenShare}
            >
              {localUser !== undefined && localUser.isScreenShareActive() ? (
                <div className="buttonStyle">
                  <PictureInPicture />
                  <p>화면공유 전환</p>
                </div>
              ) : (
                <div className="buttonStyle">
                  <ScreenShare />
                  <p>화면공유</p>
                </div>
              )}
            </IconButton>

            {localUser !== undefined && localUser.isScreenShareActive() && (
              <IconButton onClick={this.stopScreenShare} id="navScreenButton">
                <div className="buttonStyle">
                  <StopScreenShare color="secondary" />
                  <p>화면공유 중지</p>
                </div>
              </IconButton>
            )}

            <IconButton
              color="inherit"
              className="navButton"
              onClick={this.toggleSetting}
            >
              <div className="buttonStyle">
                <SettingsIcon />
                <p>설정</p>
              </div>
            </IconButton>

            <IconButton
              color="inherit"
              className="navButton"
              onClick={this.toggleFullscreen}
            >
              {localUser !== undefined && this.state.fullscreen ? (
                <div className="buttonStyle">
                  <FullscreenExit />
                  <p>전체화면 취소</p>
                </div>
              ) : (
                <div className="buttonStyle">
                  <Fullscreen />
                  <p>전체화면</p>
                </div>
              )}
            </IconButton>

            <IconButton
              color="inherit"
              onClick={this.toggleParticipant}
              className="navButton"
              id="navParticipantButton"
            >
              <div className="buttonStyle">
                <PeopleIcon />
                <p>참여자 목록</p>
              </div>
            </IconButton>

            {this.props.whoami !== 'teacher' ? (
              <IconButton
                color="secondary"
                className="navButton"
                onClick={this.selfLeaveSession}
                id="navLeaveButton"
              >
                <div className="buttonStyle">
                  <PowerSettingsNew />
                  <p>수업 나가기</p>
                </div>
              </IconButton>
            ) : (
              <IconButton
                color="secondary"
                className="navButton"
                onClick={this.leaveSession}
                id="navLeaveButton"
              >
                <div className="buttonStyle">
                  <PowerSettingsNew />
                  <p>수업 나가기</p>
                </div>
              </IconButton>
            )}

            <IconButton
              color="inherit"
              onClick={this.toggleChat}
              className="navButton"
              id="navChatButton"
            >
              <div className="buttonStyle">
                {this.props.showNotification && <div id="point" className="" />}
                <QuestionAnswer />
                <p>채팅</p>
              </div>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}
