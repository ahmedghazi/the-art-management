import React from "react";
import useMuxVideo from "./MuxVideoContext";
import MuxPlayerReact from "@mux/mux-player-react";
import clsx from "clsx";

type Props = {
  placeholder?: string;
  playbackId: string;
  title: string;
};

const MuxPlayer = ({ playbackId, title, placeholder }: Props) => {
  const { settings } = useMuxVideo();
  console.log(settings);
  return (
    <>
      <MuxPlayerReact
        // className={clsx("mux-player", {
        //   "mux-player--muted": settings.muted,
        //   "mux-player--loop": settings.loop,
        // })}
        playbackId={playbackId}
        metadata={title ? { video_title: title } : undefined}
        streamType='on-demand'
        muted={settings.muted}
        loop={settings.loop}
        autoPlay={false}
        // autoPlay={settings.play}
        paused={!settings.play}
        disableCookies={true}
        minResolution='720p'
        thumbnailTime={0}
        primaryColor='#fffcf2'
        accentColor='#d8cbb7'
        placeholder={placeholder}
        style={
          {
            // backgroundColor: "transparent",
            // "--media-background-color": "transparent",
            // "--media-background": "transparent",
            "--controls": settings.muted ? "none" : "",
          } as React.CSSProperties
        }
      />
      {/* <pre>{JSON.stringify(settings, null, 2)}</pre> */}
    </>
  );
};

export default MuxPlayer;
