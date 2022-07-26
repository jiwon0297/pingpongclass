import React, { Component } from "react";
import * as faceApi from "face-api.js";
import LoadingBar from "./components/LoadingBar";

export default class FaceDetection extends Component {
  video = React.createRef();
  state = { expressions: 0, face: 0, smile: 0, normal: 0 };

  componentDidMount() {
    this.run();
  }

  log = (...args) => {
    console.log(...args);
  };

  run = async () => {
    this.log("run started");
    try {
      await faceApi.nets.tinyFaceDetector.load("/models/");
      await faceApi.loadFaceExpressionModel(`/models/`);
      this.mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user" },
      });

      this.video.current.srcObject = this.mediaStream;
    } catch (e) {
      this.log(e.name, e.message, e.stack);
    }
  };

  onPlay = async () => {
    if (
      this.video.current.paused ||
      this.video.current.ended ||
      !faceApi.nets.tinyFaceDetector.params
    ) {
      setTimeout(() => this.onPlay());
      return;
    }

    const options = new faceApi.TinyFaceDetectorOptions({
      inputSize: 512,
      scoreThreshold: 0.5,
    });

    const result = await faceApi
      .detectSingleFace(this.video.current, options)
      .withFaceExpressions();

    if (result) {
      const happy = result.expressions.happy;
			let normal = this.state.normal
      let smile = this.state.smile;
      this.setState(() => ({ expressions: happy, face: 0 }));

      if (happy > 0.9) {
				normal = 0
        smile += 1;
        if (smile === 3) {
          this.props.smile(true);
        }
      } else {
        smile = 0;
				normal += 1;
				if (normal === 3) {
          this.props.smile(false);
        }
      }
      this.setState(() => ({ smile: smile, normal: normal }));
    } else {
      const lv = this.state.face + 1;
      this.setState(() => ({ expressions: 0, face: lv }));
    }
    setTimeout(() => this.onPlay(), 1000);
  };

  render() {
    return (
      <div
        className="FaceDetection"
        style={{ position: "relative", height: "100%" }}
      >
        <h3
          style={{
            position: "absolute",
            margin: "0px",
            padding: "4px 10px",
            backgroundColor: "white",
            opacity: "90%",
            borderRadius: "6px 0px 0px 0px",
            fontSize: "14px",
            fontWeight: "bold",
            color: "#585858",
            bottom: "0px",
            right: "0px",
          }}
        >
          {this.state.face < 3
            ? "정상적으로 수업에 참여중입니다"
            : "화면 이탈이 감지되었습니다"}
        </h3>
        <h1
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
						fontSize: "100px",
          }}
        >
          {!this.state.smile ? null : (this.state.smile > 3 ? '😁' : <LoadingBar />)}
        </h1>
        <h1
          style={{
            position: "absolute",
            top: "80px",
            left: "300px",
            fontSize: "100px",
          }}
        >
          {this.state.face < 3 ? null : "🚫"}
        </h1>
        <div style={{ width: "0px", height: "0px" }}>
          <video ref={this.video} autoPlay muted onPlay={this.onPlay} />
        </div>
      </div>
    );
  }
}
