import { Link } from "next-view-transitions";
import React from "react";
import { _linkResolver } from "../sanity-api/utils";
import { Artist } from "../types/schema";
import Figure from "./ui/Figure";
import LinkTransition from "./ui/LinkTransition";

type Props = {
  input: Artist;
};

const CardArtist = ({ input }: Props) => {
  return (
    <div className='card--artist'>
      <LinkTransition href={_linkResolver(input)}>
        <div className='image'>
          {input.imageCover && input.imageCover.asset && (
            <Figure asset={input.imageCover.asset} />
          )}
        </div>
        <h3 className='sans '>{input.name}</h3>
      </LinkTransition>
    </div>
  );
};

export default CardArtist;
