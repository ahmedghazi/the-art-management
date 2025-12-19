import React, { useEffect, useRef } from "react";
import { Project, ProjectFeatured, SanityKeyed } from "../types/schema";
import { _linkResolver, _localizeField, _slugify } from "../sanity-api/utils";
import Figure from "./ui/Figure";
import clsx from "clsx";
import useOnScreen from "../hooks/useOnScreen";
import { publish } from "pubsub-js";
import LinkTransition from "./ui/LinkTransition";
import MuxVideoPlayer from "./ui/MuxVideoPlayer";
import useDeviceDetect from "../hooks/useDeviceDetect";

type Props = {
  input: SanityKeyed<ProjectFeatured>;
};

const CardProjectFeatured = ({ input }: Props) => {
  const ref = useRef<HTMLElement>(null);
  const isOnScreen = useOnScreen(ref);
  const { isMobile } = useDeviceDetect();

  useEffect(() => {
    if (isOnScreen) {
      publish("ARTIST_ON_SCREEN", input._key);
      document.body.classList.toggle("header-dark", input.headerDark);
    } else {
      document.body.classList.remove("header-dark");
    }
  }, [isOnScreen, input._key]);

  return (
    <article
      className='card card--project_featured snap-start'
      ref={ref}
      id={`article-${input._key}`}>
      <LinkTransition href={_linkResolver(input.project)}>
        <div className={clsx("grid gap-0", `grid-cols-${input.media?.length}`)}>
          {input.media?.map((item, i) => (
            <div key={i}>
              {item._type === "figure" && (
                <Figure
                  asset={
                    isMobile && item.imageMobile
                      ? item.imageMobile.asset
                      : item.image?.asset
                  }
                  width={isMobile ? 1000 : 2000}
                  alt={_localizeField(input.title) || ""}
                />
              )}
              {item._type === "videoMux" && (
                <MuxVideoPlayer
                  playbackId={item.videoDesktop.asset.playbackId}
                  title={item.videoDesktop.title}
                  withAudio={false}
                  placeholder={item.placeholder?.asset?.url}
                />
              )}
            </div>
          ))}
        </div>
      </LinkTransition>
    </article>
  );
};

export default CardProjectFeatured;
