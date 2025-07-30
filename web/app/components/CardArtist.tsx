import { Link } from "next-view-transitions";
import React, { useEffect } from "react";
import { _linkResolver } from "../sanity-api/utils";
import { Artist, ArtistsCard } from "../types/schema";
import Figure from "./ui/Figure";
import LinkTransition from "./ui/LinkTransition";
import MuxVideoPlayer from "./ui/MuxVideoPlayer";

type Props = {
  input: ArtistsCard;
};

const CardArtist = ({ input }: Props) => {
  // console.log(input);
  const [isHovered, setIsHovered] = React.useState(false);
  const artist = input.artist;
  const media = input.media;
  // const { artist, media } = input;

  useEffect(() => {
    const siblings = Array.from(document.querySelectorAll(".card--artist"));
    const notThis = siblings.filter(
      (sibling) => sibling.id !== artist?.slug?.current
    );
    notThis.forEach((el) => {
      const _el = el as HTMLElement;
      _el.style.opacity = isHovered ? "0.4" : "1";
    });
  }, [isHovered, input.slug]);

  return (
    <div
      id={artist?.slug?.current}
      className='card--artist transition-opacity'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <LinkTransition href={_linkResolver(artist)}>
        {media && (
          <div className='image'>
            {media[0]._type === "figure" && media[0].image && (
              <Figure asset={media[0].image.asset} />
            )}
            {media[0]._type === "videoMux" && media[0].videoDesktop && (
              <MuxVideoPlayer
                playbackId={media[0].videoDesktop.asset.playbackId}
                title={media[0].videoDesktop.title}
                withAudio={false}
                placeholder={media[0].placeholder?.asset?.url}
              />
            )}
            {/* {!videoCover && imageCover && imageCover.asset && (
            <Figure asset={imageCover.asset} />
          )}
          {videoCover && (
            <MuxVideoPlayer
              playbackId={videoCover.videoDesktop.asset.playbackId}
              title={videoCover.title}
              withAudio={false}
              placeholder={videoCover.placeholder?.asset?.url}
            />
          )} */}
          </div>
        )}
        <h3 className='sans text-sm-alt--mobile md:text-md'>{artist?.name}</h3>
      </LinkTransition>
    </div>
  );
};

export default CardArtist;
