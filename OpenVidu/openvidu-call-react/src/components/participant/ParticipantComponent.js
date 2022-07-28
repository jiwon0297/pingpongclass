import React, { Component } from "react";
import CloseBtn from "../../assets/images/closeBtn.png";
import "./ParticipantComponent.css";

// ChatComponent: 채팅 관련 컴포넌트
export default class ParticipantComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      participantList: [],
    };

    this.close = this.close.bind(this);
  }

  componentDidMount() {
    console.log(this.props.myinfo, "내정보");
    console.log(this.props.subscribers, "참가자정보");
    this.props.subscribers.forEach((elem) => {
      console.log(elem, "남정보");
    });
  }

  // close: 무언가를 닫는 함수
  close() {
    this.props.close(undefined);
  }

  // render: 렌더링을 담당하는 함수
  render() {
    const styleChat = { display: this.props.chatDisplay };
    return (
      <div id="participantContainer">
        <div id="participantComponent" style={styleChat}>
          {/* 툴바 */}
          <div id="participantToolbar">
            <span>참여자 목록</span>
            <img
              src={CloseBtn}
              id="closeButton"
              alt="참여자 목록 닫기"
              onClick={this.close}
            />
          </div>
          {/* 참여자 */}
          <div id="participants">
            <div>
              {this.props.myinfo.nickname + " " + this.props.myinfo.videoActive}
            </div>
            {this.props.subscribers.map((sub, i) => (
              <div>
                {sub.nickname} {sub.videoActive}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
