import { Link } from "next-view-transitions";
import React, { Fragment } from "react";
import { _linkResolver, _localizeField } from "../sanity-api/utils";
import { Project } from "../types/schema";
import Figure from "./ui/Figure";
import AOS from "./ui/AOS";
import clsx from "clsx";
import LinkTransition from "./ui/LinkTransition";
import MuxVideoPlayer from "./ui/MuxVideoPlayer";

type Props = {
  input: Project;
};

const CardsProject = ({ input }: Props) => {
  return (
    <div className='cards--project mb-lg'>
      <LinkTransition href={_linkResolver(input)}>
        <h2>{_localizeField(input.title)}</h2>
        <div
          className={clsx(
            "md:grid md:grid-cols-8",
            `len-${input.media?.length}`
          )}>
          <div
            className={clsx(
              "md:col-start-2 md:col-end-8 flex flex-wrap justify-center gap-sm"
            )}>
            {input.media?.map((item, i) => (
              <Fragment key={item._key}>
                {item._type === "figure" && (
                  <div className='project-media w-col-1-8'>
                    <Figure
                      asset={item.image?.asset}
                      width={600}
                      alt={_localizeField(input.title) || ""}
                    />
                  </div>
                )}
                {item._type === "videoMux" && (
                  <div className='project-media w-col-1-8'>
                    {item.videoDesktop && item.videoDesktop.asset && (
                      <MuxVideoPlayer
                        playbackId={item.videoDesktop.asset.playbackId}
                        title={item.videoDesktop.title}
                        withAudio={false}
                        placeholder={item.placeholder?.asset?.url}
                      />
                    )}
                  </div>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </LinkTransition>
    </div>
  );
};

export default CardsProject;
