"use client";
import React, { createContext, useContext, ReactNode, useEffect } from "react";
import { useState } from "react";

// const MuxVideoContext = createContext({});

interface MuxVideoContextProps {
  children: ReactNode;
  withAudio?: boolean;
}

type VideoSettingsProps = {
  loop: boolean;
  muted: boolean;
  play: boolean;
};

type ContextProps = {
  settings: VideoSettingsProps;
  setSettings: Function;
};

const initialVideoSettings = {
  loop: false,
  muted: false,
  play: false,
};
const initialVideoSettingsAutoplay = {
  loop: true,
  muted: true,
  play: true,
};

const MuxVideoContext = createContext<ContextProps>({} as ContextProps);
// const MuxVideoContext = createContext({});

export const MuxVideoContextProvider = ({
  children,
  withAudio = false,
}: MuxVideoContextProps) => {
  const [settings, setSettings] =
    useState<VideoSettingsProps>(initialVideoSettings);

  useEffect(() => {
    if (withAudio) {
      setSettings(initialVideoSettings);
    } else {
      setSettings(initialVideoSettingsAutoplay);
    }
  }, [withAudio]);
  // console.log(settings);

  return (
    <MuxVideoContext.Provider value={{ settings, setSettings }}>
      {children}
    </MuxVideoContext.Provider>
  );
};

export default function useMuxVideo() {
  return useContext(MuxVideoContext);
}
