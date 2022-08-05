import React, { useState, useEffect } from "react";
import "./Setting.css";

const Setting = (props) => {
  const {
    display,
    toggleSetting,
    header,
    getVideos,
    setVideos,
    getAudios,
    setAudios,
  } = props;
  const [myVideos, setMyVideos] = useState([]);
  const [myAudios, setMyAudios] = useState([]);

  useEffect(() => {
    const getMyVideos = async () => {
      const data = await getVideos();
      setMyVideos(data);
    };
    if (display) getMyVideos();
  }, [display]);

  useEffect(() => {
    const getMyAudios = async () => {
      const data = await getAudios();
      setMyAudios(data);
    };
    if (display) getMyAudios();
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
                <select>
                  {myVideos.map((video, i) => (
                    <option value={video.deviceId}>{video.label}</option>
                  ))}
                </select>
              </div>
              <div className="settingAudio">
                <select>
                  {myAudios.map((audio, i) => (
                    <option value={audio.deviceId}>{audio.label}</option>
                  ))}
                </select>
              </div>
            </div>
            <button onClick={getVideos}>캬캬</button>
          </main>
        </section>
      ) : null}
    </div>
  );
};

export default Setting;
