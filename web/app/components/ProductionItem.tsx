import React from "react";
import { ProductionItem } from "../types/schema";
import Figure from "./ui/Figure";
import { _localizeField } from "../sanity-api/utils";
import MuxVideoPlayer from "./ui/MuxVideoPlayer";

type Props = {
  input: ProductionItem;
  className?: string;
};

const ProductionItemComponent = ({ input, className }: Props) => {
  const { video, image, title, subtitle } = input;
  return (
    <article className={className || ""}>
      {!video && image && (
        <Figure asset={image?.asset} alt={_localizeField(title)} />
      )}
      {video && (
        <MuxVideoPlayer
          playbackId={video.videoDesktop.asset.playbackId}
          title={_localizeField(title)}
          withAudio={true}
          placeholder={video.placeholder?.asset?.url}
        />
      )}
      <div className='header'>
        <h2>{_localizeField(title)}</h2>
        <span className='subtitle sans'>{_localizeField(subtitle)}</span>
      </div>
    </article>
  );
};

export default ProductionItemComponent;
