import { Link } from "next-view-transitions";
import React from "react";
import { _linkResolver } from "../sanity-api/utils";
import { Artist } from "../types/schema";
import Figure from "./ui/Figure";
import LinkTransition from "./ui/LinkTransition";
import MuxVideoPlayer from "./ui/MuxVideoPlayer";

type Props = {
  input: Artist;
};

const CardArtist = ({ input }: Props) => {
  console.log(input);
  const { name, imageCover, videoCover } = input;
  return (
    <div className='card--artist'>
      <LinkTransition href={_linkResolver(input)}>
        <div className='image'>
          {!videoCover && imageCover && imageCover.asset && (
            <Figure asset={imageCover.asset} />
          )}
          {videoCover && (
            <MuxVideoPlayer
              playbackId={videoCover.videoDesktop.asset.playbackId}
              title={videoCover.title}
              withAudio={false}
              placeholder={videoCover.placeholder?.asset?.url}
            />
          )}
        </div>
        <h3 className='sans text-sm-alt--mobile md:text-md'>{name}</h3>
      </LinkTransition>
    </div>
  );
};

export default CardArtist;
