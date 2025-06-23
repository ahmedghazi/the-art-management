import React from "react";
import clsx from "clsx";
import { VideoUI } from "@/app/types/schema";

interface Props {
  input: VideoUI;
}

const ModuleVideoUI = ({ input }: Props) => {
  const { video, title } = input;

  return (
    <section className={clsx("module module--video")}>
      <div className='video-container'>
        {/* {video && (
          <>
            <video src={video.url} controls>
              Your browser does not support the video tag.
            </video>
            {title && <h3>{title}</h3>}
          </>
        )} */}
      </div>
    </section>
  );
};

export default ModuleVideoUI;
