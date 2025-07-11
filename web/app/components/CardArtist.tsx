import { Link } from "next-view-transitions";
import React, { useEffect } from "react";
import { _linkResolver } from "../sanity-api/utils";
import { Artist } from "../types/schema";
import Figure from "./ui/Figure";
import LinkTransition from "./ui/LinkTransition";
import MuxVideoPlayer from "./ui/MuxVideoPlayer";

type Props = {
  input: Artist;
};

const CardArtist = ({ input }: Props) => {
  // console.log(input);
  const [isHovered, setIsHovered] = React.useState(false);
  const { name, imageCover, videoCover } = input;

  useEffect(() => {
    const siblings = Array.from(document.querySelectorAll(".card--artist"));
    const notThis = siblings.filter(
      (sibling) => sibling.id !== input.slug?.current
    );
    notThis.forEach((el) => {
      const _el = el as HTMLElement;
      _el.style.opacity = isHovered ? "0.4" : "1";
    });
  }, [isHovered, input.slug]);

  return (
    <div
      id={input.slug?.current}
      className='card--artist transition-opacity'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
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
