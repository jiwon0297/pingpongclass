import React, { useState, useEffect } from "react";
import { getVideos, getAudios, getSpeakers } from "../utils/customUseDevice";
import "./Setting.css";

const Setting = (props) => {
  const {
    display,
    toggleSetting,
    header,
    setVideos,
    setAudios,
    currentVideoDevice,
    currentAudioDevice,
    currentSpeakerDevice,
  } = props;
  const [myVideos, setMyVideos] = useState([]);
  const [myAudios, setMyAudios] = useState([]);
  const [mySpeakers, setMySpeakers] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState();
  const [selectedAudio, setSelectedAudio] = useState();
  const [selectedSpeaker, setSelectedSpeaker] = useState();

  const changeVideo = () => {};

  const changeAudio = () => {};

  const setUp = () => {};

  useEffect(() => {
    const getMyDevices = async () => {
      const videos = await getVideos();
      const audios = await getAudios();
      const speakers = await getSpeakers();
      setMyVideos(videos);
      setMyAudios(audios);
      setMySpeakers(speakers);
    };
    if (display) {
      getMyDevices();
    }
  }, [display]);

  return (
    <div className={display ? "openModal modal" : "modal"}>
      {display ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={toggleSetting}>
              &times;
            </button>
          </header>
          <main>
            <div className="settingSection">
              <div className="settingVideo">
                <select onChange={changeVideo} value={currentVideoDevice}>
                  {myVideos.map((video, i) => (
                    <option value={video.deviceId}>{video.label}</option>
                  ))}
                </select>
              </div>
              <div className="settingAudio" value={currentAudioDevice}>
                <select>
                  {myAudios.map((audio, i) => (
                    <option value={audio.deviceId}>{audio.label}</option>
                  ))}
                </select>
              </div>
              <div className="settingSpeaker" value={currentSpeakerDevice}>
                <select>
                  {mySpeakers.map((speaker, i) => (
                    <option value={speaker.deviceId}>{speaker.label}</option>
                  ))}
                </select>
              </div>
            </div>
            <button onClick={setUp}>적용</button>
          </main>
        </section>
      ) : null}
    </div>
  );
};

export default Setting;
