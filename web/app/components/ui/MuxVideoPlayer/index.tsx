"use client";
import React, { useEffect, useState } from "react";
import MuxControls from "./MuxControls";
import useMuxVideo, { MuxVideoContextProvider } from "./MuxVideoContext";
import "./MuxVideoPlayer.scss";
import MuxPlayer from "./MuxPlayer";

type Props = {
  playbackId: string;
  title?: string;
  withAudio?: boolean;
  placeholder?: string;
};

const initialVideoSettings = {
  loop: true,
  muted: true,
};

const MuxVideoPlayer = ({
  playbackId,
  title,
  withAudio,
  placeholder,
}: Props) => {
  const [ready, setReady] = useState<boolean>(false);
  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <div className={`mux-video-player  ${ready ? "is-ready" : ""}`}>
      {ready && (
        <MuxVideoContextProvider>
          <MuxPlayer
            playbackId={playbackId}
            title={title || ""}
            placeholder={placeholder}
          />
          {withAudio && <MuxControls withAudio={withAudio} />}
        </MuxVideoContextProvider>
      )}
    </div>
  );
};

export default MuxVideoPlayer;
