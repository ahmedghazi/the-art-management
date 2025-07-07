import React, { useEffect, useState } from "react";
import useMuxVideo from "./MuxVideoContext";

type Props = {
  withAudio?: boolean;
};

const MuxControls = ({ withAudio }: Props) => {
  const { settings, setSettings } = useMuxVideo();
  const [muted, setMuted] = useState<boolean>(true);
  const [play, setPlay] = useState<boolean>(false);

  // useEffect(() => {
  //   // setSettings({
  //   //   ...settings,
  //   //   muted: !withAudio,
  //   //   loop: !withAudio,
  //   // });
  //   // console.log(settings);
  // }, [settings]);

  useEffect(() => {
    setSettings({
      ...settings,
      play: play,
    });
  }, [play]);

  useEffect(() => {
    setSettings({
      ...settings,
      muted: muted,
    });
  }, [muted]);

  return (
    <div className='controls sans'>
      <button
        className='btn btn--play'
        onClick={() => setPlay(!play)}
        // onClick={() => setSettings({ ...settings, play: !play })}
      >
        <span>{play ? "Pause" : "Play"}</span>
      </button>
      <button
        className='btn btn--mute'
        onClick={() => setMuted(!muted)}
        // onClick={() => setSettings({ ...settings, muted: !muted })}
      >
        <span>{muted ? "Sound on" : "Sound off"}</span>
      </button>
    </div>
  );
};

export default MuxControls;
