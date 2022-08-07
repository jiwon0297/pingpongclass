import React, { useState } from "react";
import SetupComponent from "./components/SetupComponent";
import VideoRoomComponent from "./components/VideoRoomComponent";

const App = () => {
  const [tap, setTap] = useState("setup");
  // 배열 형태로 전달
  const [videos, setVideos] = useState([]);
  const [audios, setAudios] = useState([]);
  const [speakers, setSpeakers] = useState([]);
  // id값으로 전달
  const [selectedVideo, setSelectedVideo] = useState();
  const [selectedAudio, setSelectedAudio] = useState();
  const [selectedSpeaker, setSelectedSpeaker] = useState();
  // 트랙으로 전달
  const [selectedVideoTrack, setSelectedVideoTrack] = useState();
  const [selectedAudioTrack, setSelectedAudioTrack] = useState();

  const setDevices = {
    videos,
    setVideos,
    audios,
    setAudios,
    speakers,
    setSpeakers,
    selectedVideo,
    setSelectedVideo,
    selectedAudio,
    setSelectedAudio,
    selectedSpeaker,
    setSelectedSpeaker,
    selectedVideoTrack,
    setSelectedVideoTrack,
    selectedAudioTrack,
    setSelectedAudioTrack,
  };

  return (
    <>
      {tap === "setup" && (
        <SetupComponent setTap={setTap} setDevices={setDevices} />
      )}
      {tap === "class" && <VideoRoomComponent setDevices={setDevices} />}
    </>
  );
};

export default App;
